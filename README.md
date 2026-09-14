# Portfólio — Guilherme Neves

Portfólio pessoal de Guilherme Neves, desenvolvedor Front-End. Reúne minha apresentação profissional, projetos e artigos sobre desenvolvimento web.

**Site:** [project-portfolio-hazel.vercel.app](https://project-portfolio-hazel.vercel.app/)
**Contato:** [LinkedIn](https://www.linkedin.com/in/dev-guilhermeneves/)

## Páginas

- **Início (`/`):** apresentação e contato.
- **Sobre (`/about`):** trajetória e habilidades.
- **Projetos (`/project`):** seleção de projetos com links para o GitHub.
- **Blog (`/blog`):** artigos técnicos escritos em Markdown.
- **Artigo (`/blog/arquitetura-baseada-em-features`):** conteúdo sobre arquitetura baseada em funcionalidades no React.

## Tecnologias

React 19, TypeScript, Vite 8, Chakra UI 3 e TanStack Router. ESLint para análise estática e Vercel para hospedagem.

## Executar localmente

Use Node.js 24 LTS e npm.

```bash
git clone https://github.com/Guirn13/project-portfolio.git
cd project-portfolio
npm ci
npm run dev
```

Abra o endereço informado pelo Vite no terminal, normalmente http://localhost:5173.

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Verifica o TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente a versão compilada. |
| `npm run lint` | Executa o ESLint. |
| `npm run lint:fix` | Aplica as correções automáticas disponíveis. |

## Organização

O código é organizado por funcionalidade:

```text
src/
├── core/               # Layouts, providers, assets e configuração do roteador
├── features/
│   ├── home/           # Apresentação e contato
│   ├── About/          # Trajetória e habilidades
│   ├── project/        # Cards e dados dos projetos
│   └── blog/           # Artigos Markdown, dados e renderização
├── shared/             # Componentes reutilizáveis
├── App.tsx
└── main.tsx
```

Os aliases `@/`, `@core/`, `@features/` e `@shared/` estão configurados no Vite e no TypeScript.

## Atualizar o conteúdo

- **Apresentação e contato:** `src/features/home/components/CardProfile.tsx`.
- **Sobre:** `src/features/About/components/AboutPageContent.tsx`.
- **Projetos:** `src/features/project/data/githubProjects.ts`.
- **Blog:** crie o arquivo Markdown em `src/features/blog/content/`, importe-o com `?raw` e cadastre título, descrição, data e slug em `src/features/blog/data/articles.ts`.

O renderizador do blog oferece suporte a títulos, parágrafos, listas, blocos de código, código inline, negrito, itálico e links HTTP/HTTPS.

## Deploy na Vercel

Conecte o repositório `Guirn13/project-portfolio` ao projeto da Vercel com a branch de produção `main`.

- **Framework:** Vite.
- **Diretório raiz:** raiz do repositório.
- **Instalação:** `npm ci`.
- **Build:** `npm run build`.
- **Saída:** `dist`.
- **Node.js:** 24.x.

O arquivo `vercel.json` configura o build e o fallback para `index.html`, permitindo abrir ou atualizar diretamente rotas como `/blog/arquitetura-baseada-em-features`. A aplicação atual não exige variáveis de ambiente.

Com a integração Git ativa, novos commits na `main` disparam o deploy de produção.

## Referência de arquitetura

A organização por funcionalidades foi inspirada no artigo [Scalable React Projects with Feature-Based Architecture, de Naser Rasouli](https://dev.to/naserrasouli/scalable-react-projects-with-feature-based-architecture-117c).