import { authLogin } from '../src/controllers/auth.controller.js';
import User from '../src/models/user.model.js';
import { createAccessToken } from '../src/libs/jwt.js';
import bcrypt from 'bcryptjs';
import { jest } from '@jest/globals';


export const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnThis();
    res.json = jest.fn().mockReturnThis();
    return res;
};

export const mockRequest = () => {
    const req = {};
    req.body = jest.fn().mockReturnThis();
    return req;
};

const mockUser = {
    username: "Programmer",
    email: "programmer@gmail.com",
    role: "admin",
    status: "active",
    createdAt: "2024-10-28T20:12:24.422Z",
    updatedAt: "2024-10-28T20:12:24.422Z",
    uid: "671feff994d55761d51fb87f",
    password: "12345678"
};


jest.mock('../src/models/user.model.js', () => ({
    __esModule: true,
    default: {
        findOne: jest.fn(),
    }
}));

// Mock para bcrypt
jest.mock('bcryptjs', () => ({
    compare: jest.fn(),
    genSalt: jest.fn(),
    hash: jest.fn()
    })
);

// Mock para jwt
jest.mock('../src/libs/jwt.js', () => ({
    createAccessToken: jest.fn()
}));


describe('Auth Controller', () => {
    let req;
    let res;
    beforeEach(() => {
        req = mockRequest();
        res = mockResponse();
    });
    describe('authLogin', () => {
        it('should successfully login a user', async () => {
            req.body = {
                email: "programmer@gmail.com",
                password: "12345678"
            }
            User.findOne = jest.fn().mockResolvedValue(mockUser);
            bcrypt.compare = jest.fn().mockResolvedValue(true);
            await authLogin(req, res);
            expect(User.findOne).toHaveBeenCalledWith({ email: 'programmer@gmail.com' });
            expect(bcrypt.compare).toHaveBeenCalledWith(req.body.password, mockUser.password)
            expect(res.status).toHaveBeenCalledWith(200);
        })
        it("Should fail if password is incorrect", async () => {
            req.body = {
                email: 'programmer@gmail.com',
                password: 'contraseñaIncorrecta'
            }
            User.findOne.mockResolvedValue(mockUser)
            bcrypt.compare.mockResolvedValue(false)
            await authLogin(req, res)
            expect(res.status).toHaveBeenCalledWith(400)
            expect(res.json).toHaveBeenCalledWith({
                ok: false,
                msg: 'El password es incorrecto'
            })
        })
        it("Should fail if email is incorrect", async () => {
            req.body = {
                email: 'programmer2@gmail.com',
                password: '12345678'
            }
            User.findOne.mockResolvedValue(null)
            bcrypt.compare.mockResolvedValue(true)
            await authLogin(req, res)
            expect(res.status).toHaveBeenCalledWith(400)
            expect(res.json).toHaveBeenCalledWith({
                ok: false,
                msg: 'El usuario no existe'
            })
        })
        it('should fail if email and password are empty', async () => {
            // 1. Simular una petición con campos vacíos
            const req = {
                body: {}  // Sin email ni password
            }
            
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            }
    
            // 2. Ejecutar la función
            await authLogin(req, res)
    
            // 3. Verificar que las validaciones funcionan
            expect(res.status).toHaveBeenCalledWith(400)
            expect(res.json).toHaveBeenCalledWith({
                "ok": false,
                "msg": [
                    {
                        "errorValidation": "Email",
                        "msg": "El correo electrónico no es válido o no lo ha informado"
                    },
                    {
                        "errorValidation": "Password",
                        "masg": "La contraseña debe tener al menos 6 caracteres y no puede estar vacía"
                    }
                ]
            })
        })
    })
})