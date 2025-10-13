import reactLogo from "../../assets/react.svg";
import phpLogo from "../../assets/php.svg";
import nestLogo from "../../assets/nestjs.svg";
import mysqlLogo from "../../assets/mysql.svg";
import postgresLogo from "../../assets/postgresql-icon.svg";
import jestIcon from "../../assets/jest.webp";
import framework from "../../assets/framework.png";

export default function Service() {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-sky-600">Competências</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5">
        <div className="p-6 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Front-End</h3>
          <img src={reactLogo} alt="React" className="mx-auto mb-4 h-16 w-16" />
          <p>
            Trabalho com React para criar interfaces modernas e responsivas,
            garantindo uma experiência de usuário fluida e dinâmica.
          </p>
        </div>
        <div className="p-6 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Back-End</h3>
          <div className="flex justify-center mb-4">
            <img src={phpLogo} alt="PHP" className="h-16 w-16 mx-2" />
            <img src={nestLogo} alt="NestJS" className="h-16 w-16 mx-2" />
          </div>
          <p>
            Utilizo PHP e NestJS para desenvolver APIs robustas e escaláveis,
            garantindo performance e segurança no processamento de dados.
          </p>
        </div>
        <div className="p-6 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Banco de Dados</h3>
          <div className="flex justify-center mb-4">
            <img src={mysqlLogo} alt="MySQL" className="h-16 w-16 mx-2" />
            <img
              src={postgresLogo}
              alt="PostgreSQL"
              className="h-16 w-16 mx-2"
            />
          </div>
          <p>
            Tenho experiência com MySQL e PostgreSQL, garantindo armazenamento
            eficiente e consultas rápidas para aplicações de alto desempenho.
          </p>
        </div>

        <div className="p-6 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Testes e Qualidade</h3>
          <div className="flex justify-center mb-4">
            <img src={jestIcon} alt="Jest" className="h-16 w-16 mx-2" />
          </div>
          <p>
            Experiência com testes unitários e de integração utilizando Jest,
            React Testing Library e Vitest. Práticas de TDD quando possível,
            criação de mocks e garantia de cobertura para componentes e
            serviços.
          </p>
        </div>

        <div className="p-6 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Framework</h3>
          <div className="flex justify-center mb-4">
            <img src={framework} alt="Framework" className="h-16 w-16 mx-2" />
           
          </div>
          <p>
            Uso de TanStack (Query/Table) para gerenciamento de dados e tabelas
            complexas, além do dnd-kit para experiências de drag-and-drop
            acessíveis e performáticas no front-end.
          </p>
        </div>

        <div className="p-6 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Mobile</h3>
          <div className="flex justify-center mb-4">
            <img src={reactLogo} alt="React Native" className="h-16 w-16 mx-2" />
          </div>
          <p>
            Desenvolvimento de aplicativos com React Native, integração com
            APIs, navegação e componentes reutilizáveis, mantendo consistência
            entre web e mobile.
          </p>
        </div>
      </div>
    </section>
  );
}
