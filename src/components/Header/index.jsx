import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <header className="flex items-center justify-between p-4 bg-black text-white w-full fixed top-0 left-0 z-50">
                <div className="text-2xl font-bold text-sky-600">GUIRN</div>

                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "0.5rem",
                            borderRadius: "0.375rem",
                            border: "none",
                            boxShadow: "none",
                        }}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>



                <nav
                    className={`
                        ${menuOpen ? "block" : "hidden"}
                        absolute top-16 left-0 w-full bg-black text-center py-4
                        md:static md:flex md:space-x-5 md:py-0 md:bg-black md:w-auto md:block
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
                    <a href="#project" className="block px-4 py-2 hover:text-gray-400 text-sky-600">
                        Projetos
                    </a>
                    <a href="#contact" className="block px-4 py-2 hover:text-gray-400 text-sky-600">
                        Contato
                    </a>
                </nav>
            </header>
        </div>
    )
}
