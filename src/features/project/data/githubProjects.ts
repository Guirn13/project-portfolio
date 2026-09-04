export type GithubProject = {
  name: string
  description: string
  language: string
  href: string
}

export const githubProjects: GithubProject[] = [
  {
    name: 'Bot Financeiro para WhatsApp',
    description:
      'Bot para WhatsApp com foco em automações financeiras e integração de fluxos usando JavaScript.',
    language: 'JavaScript',
    href: 'https://github.com/Guirn13/bot-wpp-finance',
  },
  {
    name: 'Portfolio Pessoal',
    description:
      'Portfolio pessoal para apresentar perfil, projetos e conteúdos técnicos em uma interface React.',
    language: 'JavaScript',
    href: 'https://github.com/Guirn13/project-portfolio',
  },
  {
    name: 'Calculadora de IMC',
    description:
      'Calculadora de IMC desenvolvida em TypeScript para praticar componentes, estados e regras de interface.',
    language: 'TypeScript',
    href: 'https://github.com/Guirn13/calculadora-imc',
  },
  {
    name: 'Lista de Tarefas',
    description:
      'Lista de tarefas com interação de arrastar e soltar, focada em organização visual e experiência de uso.',
    language: 'TypeScript',
    href: 'https://github.com/Guirn13/Lista-de-tarefas',
  },
  {
    name: 'API Buscar CEP',
    description:
      'Projeto em PHP para consulta de CEP, trabalhando consumo de dados externos e retorno de informações de endereço.',
    language: 'PHP',
    href: 'https://github.com/Guirn13/BuscarCEP',
  },
  {
    name: 'Cronometro React',
    description:
      'Cronometro criado com React para praticar controle de tempo, estado e atualização dinâmica da tela.',
    language: 'JavaScript',
    href: 'https://github.com/Guirn13/Cronometro-React',
  },
]
