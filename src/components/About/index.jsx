export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-900 text-gray-100 text-center px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-sky-500">
        Sobre mim
      </h2>

      <div className="max-w-3xl mx-auto leading-relaxed text-lg">
        <p>
          Olá! Meu nome é <span className="font-semibold text-white">Guilherme Neves</span> e sou{" "}
          <span className="font-semibold text-white">desenvolvedor FullStack</span>, atualmente focado em{" "}
          <span className="text-sky-400 font-semibold">frontend</span> e{" "}
          <span className="text-sky-400 font-semibold">aplicações mobile</span>.
        </p>

        <p>
          Sou apaixonado por transformar ideias em experiências digitais criativas e eficientes.
        </p>

        <p>
          Tenho experiência com <span className="text-sky-400 font-semibold">PHP</span>,{" "}
          <span className="text-sky-400 font-semibold">React</span>,{" "}
          <span className="text-sky-400 font-semibold">NestJS</span> e{" "}
          <span className="text-sky-400 font-semibold">React Native</span>, além de domínio
          em testes unitários e de integração (
          <span className="font-semibold">Jest</span>,{" "}
          <span className="font-semibold">React Testing Library</span>,{" "}
          <span className="font-semibold">Vitest</span>).
        </p>

        <p>
          Também utilizo bibliotecas como{" "}
          <span className="font-semibold">TanStack Query/Table</span> e{" "}
          <span className="font-semibold">dnd-kit</span> para criar interfaces dinâmicas e de alta performance.
        </p>

        <p className="text-xl font-medium text-sky-300">
          Sempre em busca de novos desafios para criar produtos de qualidade e impactar pessoas através da tecnologia! 🚀
        </p>
      </div>
    </section>
  );
}
