export default function Service() {
    return (
        <section id="services" className="py-20 bg-gray-900 text-white text-center">
            <h2 className="text-4xl font-bold mb-6 text-sky-600">Competências</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5">
                <div className="p-6 bg-gray-700 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Front-End</h3>
                    <img 
                        src="/assets/react.svg" 
                        alt="React" 
                        className="mx-auto mb-4 h-16 w-16" 
                    />
                    <p>Trabalho com React para criar interfaces modernas e responsivas, garantindo uma experiência de usuário fluida e dinâmica.</p>
                </div>
                <div className="p-6 bg-gray-700 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Back-End</h3>
                    <div className="flex justify-center mb-4">
                        <img 
                            src="/assets/php.svg" 
                            alt="PHP" 
                            className="h-16 w-16 mx-2" 
                        />
                        <img 
                            src="/assets/nestjs.svg" 
                            alt="NestJS" 
                            className="h-16 w-16 mx-2" 
                        />
                    </div>
                    <p>Utilizo PHP e NestJS para desenvolver APIs robustas e escaláveis, garantindo performance e segurança no processamento de dados.</p>
                </div>
                <div className="p-6 bg-gray-700 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Banco de Dados</h3>
                    <div className="flex justify-center mb-4">
                        <img 
                            src="/assets/mysql.svg" 
                            alt="MySQL" 
                            className="h-16 w-16 mx-2" 
                        />
                        <img 
                            src="/assets/postgresql-icon.svg" 
                            alt="PostgreSQL" 
                            className="h-16 w-16 mx-2" 
                        />
                    </div>
                    <p>Tenho experiência com MySQL e PostgreSQL, garantindo armazenamento eficiente e consultas rápidas para aplicações de alto desempenho.</p>
                </div>
            </div>
        </section>
    )
}
