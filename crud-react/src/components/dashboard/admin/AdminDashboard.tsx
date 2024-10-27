import { StatsContent } from "./StatsContent"
import { TableUser } from "./TableUser"

export const AdminDashboard = () => {

    return (
        <div className='space-y-6'>
            <h2 className="text-xl font-semibold text-white mt-4">Panel Administrativos</h2>
            <StatsContent />
            <TableUser />
        </div>
    )
}
