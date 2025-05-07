import "./index.css";
import Imagecep from '../../assets/cep.webp';
import Financas from '../../assets/financas.webp';
import Tarefas from '../../assets/tarefas.webp';

const projectsInfo = [
    {
        title: "Controle de Gastos",
        image: Financas,
        description: "Um bot desenvolvido em JavaScript utilizando a biblioteca whatsapp-web.js. Este bot permite automatizar interações com o WhatsApp Web, facilitando o envio de mensagens e outras funcionalidades.",
        link: "https://github.com/Guirn13/bot-wpp-finance",
    },
    {
        title: "Lista de Tarefas",
        image: Tarefas,
        description: "Este projeto é uma aplicação de Lista de Tarefas interativa que permite reorganizar as tarefas usando a funcionalidade de Drag and Drop.",
        link: "https://github.com/Guirn13/Lista-de-tarefas",
    },
    {
        title: "Buscar CEP",
        image: Imagecep,
        description: "Aplicativo para busca de informações de endereço a partir do CEP informado pelo usuário. Este é um projeto simples em PHP que utiliza HTML, CSS e Bootstrap para buscar informações de CEP através da API ViaCEP.",
        link: "https://github.com/Guirn13/BuscarCEP",
    },
];

export default function Projects() {
    return (
        <section id="project" className="py-15 bg-gray-900 text-white text-center">
            <h2 className="text-4xl font-bold mb-6 text-sky-600">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5">
                {projectsInfo.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flip-card w-full h-60"
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front relative bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${project.image})` }}>
                                <div className="absolute inset-0 bg-black/30 bg-opacity-40 rounded-lg"></div>
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <h3 className="text-3xl font-bold text-white px-4 py-2">{project.title}</h3>
                                </div>
                            </div>

                            <div className="flip-card-back p-6 bg-gray-700 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
