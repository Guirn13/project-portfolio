import framework from "../../assets/framework.png";
import jestIcon from "../../assets/jest.webp";
import mysqlLogo from "../../assets/mysql.svg";
import nestLogo from "../../assets/nestjs.svg";
import phpLogo from "../../assets/php.svg";
import postgresLogo from "../../assets/postgresql-icon.svg";
import reactLogo from "../../assets/react.svg";

export default function Service() {
  return (
    <section id="services" className="py-10 bg-gray-900 text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        Competências
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 max-w-7xl mx-auto">
        <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-6 text-sky-400">Front-End</h3>
          <img src={reactLogo} alt="React" className="mx-auto mb-6 h-20 w-20 group-hover:scale-110 transition-transform duration-300" />
          <p className="text-gray-300 leading-relaxed">
            Trabalho com React para criar interfaces modernas e responsivas,
            garantindo uma experiência de usuário fluida e dinâmica.
          </p>
        </div>
        <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-6 text-sky-400">Back-End</h3>
          <div className="flex justify-center mb-6 gap-4">
            <img src={phpLogo} alt="PHP" className="h-20 w-20 group-hover:scale-110 transition-transform duration-300" />
            <img src={nestLogo} alt="NestJS" className="h-20 w-20 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Utilizo PHP e NestJS para desenvolver APIs robustas e escaláveis,
            garantindo performance e segurança no processamento de dados.
          </p>
        </div>
        <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-6 text-sky-400">Banco de Dados</h3>
          <div className="flex justify-center mb-6 gap-4">
            <img src={mysqlLogo} alt="MySQL" className="h-20 w-20 group-hover:scale-110 transition-transform duration-300" />
            <img
              src={postgresLogo}
              alt="PostgreSQL"
              className="h-20 w-20 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Tenho experiência com MySQL e PostgreSQL, garantindo armazenamento
            eficiente e consultas rápidas para aplicações de alto desempenho.
          </p>
        </div>

        <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-6 text-sky-400">Testes e Qualidade</h3>
          <div className="flex justify-center mb-6">
            <img src={jestIcon} alt="Jest" className="h-20 w-20 rounded-lg group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Experiência com testes unitários e de integração utilizando Jest,
            React Testing Library e Vitest. Práticas de TDD quando possível,
            criação de mocks e garantia de cobertura para componentes e
            serviços.
          </p>
        </div>

        <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-6 text-sky-400">Framework</h3>
          <div className="flex justify-center mb-6">
            <img src={framework} alt="Framework" className="h-20 w-20 rounded-lg group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Uso de TanStack (Query/Table) para gerenciamento de dados e tabelas
            complexas, além do dnd-kit para experiências de drag-and-drop
            acessíveis e performáticas no front-end.
          </p>
        </div>

        <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-6 text-sky-400">Mobile</h3>
          <div className="flex justify-center mb-6">
            <img src={reactLogo} alt="React Native" className="h-20 w-20 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Desenvolvimento de aplicativos com React Native, integração com
            APIs, navegação e componentes reutilizáveis, mantendo consistência
            entre web e mobile.
          </p>
        </div>
      </div>
    </section>
  );
}
