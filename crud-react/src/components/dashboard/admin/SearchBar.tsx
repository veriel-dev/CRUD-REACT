import { ChevronDown, Search } from 'lucide-react'
import React from 'react'

interface Props {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}
export const SearchBar = ({searchTerm, setSearchTerm}: Props) => {
    return (
        <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
                type="text"
                placeholder="Buscar por nombre, email o rol..."
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <button className="px-4 py-2 inline-flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200">
            Filtros
            <ChevronDown className="h-4 w-4" />
        </button>
    </div>
    )
}
