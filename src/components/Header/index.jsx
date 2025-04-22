import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <header className=" flex items-center justify-between p-4 bg-neutral-950 text-white w-full max-w-none top-0 left-0 fixed">
                <div className="mx-15 text-2xl font-bold text-sky-600">GUIRN</div>
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`${menuOpen ? "block" : "hidden"} md:flex space-x-5 mx-15`}>
                    <a href="#home" className="hover:text-gray-400 text-sky-100">
                        Menu
                    </a>
                    <a href="#about" className="hover:text-gray-400 text-sky-600">
                        Sobre
                    </a>
                    <a href="#services" className="hover:text-gray-400 text-sky-600">
                        Serviços
                    </a>
                    <a href="#contact" className="hover:text-gray-400 text-sky-600">
                        Contato
                    </a>
                </nav>
            </header>
        </div>
    );
}
