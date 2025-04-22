import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <header className="flex items-center justify-between p-4 bg-neutral-950 text-white w-full fixed top-0 left-0 z-50">
                <div className="text-2xl font-bold text-sky-600">GUIRN</div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav
                    className={`
                        ${menuOpen ? "block" : "hidden"}
                        absolute top-16 left-0 w-full bg-neutral-900 text-center py-4
                        md:static md:flex md:space-x-5 md:py-0 md:bg-transparent md:w-auto md:block
                    `}
                >
                    <a href="#home" className="block px-4 py-2 hover:text-gray-400 text-sky-100">
                        Menu
                    </a>
                    <a href="#about" className="block px-4 py-2 hover:text-gray-400 text-sky-600">
                        Sobre
                    </a>
                    <a href="#services" className="block px-4 py-2 hover:text-gray-400 text-sky-600">
                        Serviços
                    </a>
                    <a href="#contact" className="block px-4 py-2 hover:text-gray-400 text-sky-600">
                        Contato
                    </a>
                </nav>
            </header>
        </div>
    )
}
