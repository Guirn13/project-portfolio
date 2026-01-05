import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex items-center justify-between px-6 py-4 backdrop-blur-md text-white w-full fixed top-0 left-0 z-50 border-b border-gray-800/50 shadow-lg">
        <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
          GUIRN
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "transparent",
              color: "white",
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
                        absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md text-center py-4 border-b border-gray-800/50
                        md:static md:flex md:space-x-8 md:py-0 md:bg-transparent md:w-auto md:block md:border-b-0
                    `}
        >
          <a
            href="#home"
            className="block px-4 py-2 hover:text-sky-400 text-gray-100 transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:text-sky-400 text-gray-300 transition-colors duration-300"
          >
            Sobre
          </a>
          <a
            href="#services"
            className="block px-4 py-2 hover:text-sky-400 text-gray-300 transition-colors duration-300"
          >
            Serviços
          </a>
          <a
            href="#project"
            className="block px-4 py-2 hover:text-sky-400 text-gray-300 transition-colors duration-300"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:text-sky-400 text-gray-300 transition-colors duration-300"
          >
            Contato
          </a>
        </nav>
      </header>
    </div>
  );
}
