export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-black to-gray-900 text-gray-100 text-center px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        Sobre mim
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 leading-relaxed text-lg text-gray-300">
        <p className="text-xl">
          Olá! Meu nome é{" "}
          <span className="font-semibold text-white">Guilherme Neves</span> e
          sou{" "}
          <span className="font-semibold text-white">
            desenvolvedor FullStack
          </span>
          , atualmente focado em{" "}
          <span className="text-sky-400 font-semibold">Front-end</span> e{" "}
          <span className="text-sky-400 font-semibold">Aplicações Mobile</span>.
        </p>

        <p>
          Tenho experiência com{" "}
          <span className="text-sky-400 font-semibold">PHP</span>,{" "}
          <span className="text-sky-400 font-semibold">React</span>,{" "}
          <span className="text-sky-400 font-semibold">NestJS</span> e{" "}
          <span className="text-sky-400 font-semibold">React Native</span>, além
          de domínio em testes unitários e de integração (
          <span className="font-semibold">Jest</span>,{" "}
          <span className="font-semibold">React Testing Library</span>,{" "}
          <span className="font-semibold">Vitest</span>).
        </p>

        <p className="text-2xl font-medium text-sky-300 pt-4">
          Sempre em busca de novos desafios para criar novas soluções e <br />
          <span>impactar pessoas através da tecnologia!</span>
        </p>
      </div>
    </section>
  );
}
