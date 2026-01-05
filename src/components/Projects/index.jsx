import "./index.css";
import Imagecep from "../../assets/cep.webp";
import Financas from "../../assets/financas.webp";
import Tarefas from "../../assets/tarefas.webp";

const projectsInfo = [
  {
    title: "Controle de Gastos",
    image: Financas,
    description:
      "Um bot desenvolvido em JavaScript utilizando a biblioteca whatsapp-web.js. Este bot permite automatizar interações com o WhatsApp Web, facilitando o envio de mensagens e outras funcionalidades.",
    link: "https://github.com/Guirn13/bot-wpp-finance",
  },
  {
    title: "Lista de Tarefas",
    image: Tarefas,
    description:
      "Este projeto é uma aplicação de Lista de Tarefas interativa que permite reorganizar as tarefas usando a funcionalidade de Drag and Drop.",
    link: "https://github.com/Guirn13/Lista-de-tarefas",
  },
  {
    title: "Buscar CEP",
    image: Imagecep,
    description:
      "Aplicativo para busca de informações de endereço a partir do CEP informado pelo usuário. Este é um projeto simples em PHP que utiliza HTML, CSS e Bootstrap para buscar informações de CEP através da API ViaCEP.",
    link: "https://github.com/Guirn13/BuscarCEP",
  },
];

export default function Projects() {
  return (
    <section
      id="project"
      className="py-25 bg-gradient-to-b from-gray-900 to-black text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        Projetos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 max-w-7xl mx-auto">
        {projectsInfo.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flip-card w-full h-72"
          >
            <div className="flip-card-inner">
              <div
                className="flip-card-front relative bg-cover bg-center rounded-2xl border border-gray-700/50"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <h3 className="text-3xl font-bold text-white px-4 py-2 drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="flip-card-back p-8 text-white bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-sky-500/30 shadow-lg shadow-sky-500/10">
                <h3 className="text-2xl font-semibold mb-4 text-sky-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
