export default function Homes() {
  return (
    <section id="contact" className="py-32 bg-black text-gray-100">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        Entre em contato comigo
      </h2>
      <p className="mb-12 text-xl text-gray-300">Vamos trabalhar juntos?</p>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/dev-guilhermeneves/"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-4 bg-transparent border-2 border-sky-400 text-sky-400 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-sky-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-sky-400/50"
        >
          LinkedIn
        </a>
        <a
          href="mailto:guinevesr13@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-4 bg-transparent border-2 border-sky-400 text-sky-400 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-sky-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-sky-400/50"
        >
          Email
        </a>
        <a
          href="https://github.com/Guirn13"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-4 bg-transparent border-2 border-sky-400 text-sky-400 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-sky-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-sky-400/50"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
