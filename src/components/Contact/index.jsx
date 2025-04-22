export default function Homes() {
    return (
        <section id="contact" className="py-20 bg-neutral-950 text-sky-50">
            <h2 className="text-4xl font-bold mb-6 text-sky-500">Entre em contato comigo</h2>
            <p className="mb-6">Vamos trabalhar juntos?</p>
            <div className="flex justify-center space-x-4">
                <a
                    href="https://www.linkedin.com/in/dev-guilhermeneves/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border-2 border-sky-50 text-sky-50 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-sky-600 hover:scale-105"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:guinevesr13@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border-2 border-sky-50 text-sky-50 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-sky-600 hover:scale-105"
                >
                    Email
                </a>
                <a
                    href="https://github.com/Guirn13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border-2 border-sky-50 text-sky-50 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-sky-600 hover:scale-105"
                >
                    GitHub
                </a>
            </div>
        </section>
    )
}
