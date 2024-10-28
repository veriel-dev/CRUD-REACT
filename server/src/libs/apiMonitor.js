class ApiMonitor {
    constructor() {
        this.endpointCounts = {};
        this.count = 0
        this.ipRequests = new Map();
        this.MAX_REQUESTS_PER_SECOND = 10;
    }

    // Incrementa el contador para un endpoint específico
    incrementEndpointCount(endpoint) {
        this.count += 1
        this.endpointCounts[endpoint] = (this.endpointCounts[endpoint] || 0) + 1;
    }
    // Obtiene el contador para un endpoint específico
    getEndpointCount(endpoint) {
        return this.endpointCounts[endpoint] || 0;
    } 
    // Obtiene todos los contadores
    getAllEndpointCounts() {
        return { ...this.endpointCounts };
    }
    // Verifica si una IP debe ser limitada
    isIpAllowed(ip) {
        const now = Date.now();
        const requestInfo = this.ipRequests.get(ip);
        
        if (!requestInfo) {
        // Primera petición de esta IP
        this.ipRequests.set(ip, {
            count: 1,
            firstRequest: now
        });
        return true;
        }
        
        // Verifica si ha pasado más de 1 segundo desde la primera petición
        if (now - requestInfo.firstRequest >= 1000) {
        // Reinicia el contador
        this.ipRequests.set(ip, {
            count: 1,
            firstRequest: now
        });
        return true;
        }
        
        // Incrementa el contador
        requestInfo.count++;
        this.ipRequests.set(ip, requestInfo);
        
        // Verifica si excede el límite
        return requestInfo.count <= this.MAX_REQUESTS_PER_SECOND;
    }
    cleanup() {
        const now = Date.now();
        this.ipRequests.forEach((value, key) => {
            if (now - value.firstRequest >= 1000) {
                this.ipRequests.delete(key);
            }
        });
    }
}

const apiMonitor = new ApiMonitor()

const apiMonitorMiddleware = (req, res, next) => {
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
    const endpoint = `${req.method} ${req.path}`;

    // Verifica el rate limit
    if (!apiMonitor.isIpAllowed(clientIp)) {
        return res.status(429).json({
        error: 'Too Many Requests',
        message: 'Please try again later'
        });
    }
    apiMonitor.incrementEndpointCount(endpoint);
    
    next();
}
const getApiStats = (_req, res) => {
    res.json({
        endpointCounts: apiMonitor.getAllEndpointCounts(),
        total: apiMonitor.count
    });
};

export {
    apiMonitorMiddleware,
    getApiStats,
    ApiMonitor
};
