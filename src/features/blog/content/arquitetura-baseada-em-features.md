# Arquitetura Baseada em Funcionalidades

## Introdução

Nos últimos dias, venho estudando diferentes formas de estruturar aplicações React. Durante meus estudos, encontrei um artigo de Naser Rasouli no qual ele apresenta uma abordagem simples chamada *Arquitetura Baseada em Funcionalidades* (Feature-Based Architecture).

A principal ideia dessa arquitetura é agrupar o código de acordo com as funcionalidades da aplicação, mantendo cada uma delas o mais isolada possível. Dessa forma, componentes, hooks, serviços, tipos e páginas relacionados a uma mesma funcionalidade permanecem próximos.

Essa organização facilita a localização do código e torna a manutenção mais simples à medida que a aplicação cresce.

## Diferença entre as estruturas

### Estrutura tradicional

Na estrutura tradicional, os arquivos são agrupados de acordo com seu tipo técnico:

```text
src/
├── components/
├── hooks/
├── services/
├── pages/
├── types/
└── utils/
```

Essa organização pode funcionar bem em aplicações pequenas. Entretanto, conforme o projeto cresce, os arquivos relacionados a uma mesma funcionalidade acabam espalhados por diferentes pastas.

Por exemplo, para alterar o módulo de produtos, pode ser necessário procurar arquivos em `components`, `hooks`, `services`, `pages` e `types`.

### Estrutura baseada em funcionalidades

Na arquitetura baseada em funcionalidades, os arquivos são agrupados pelo recurso ou domínio ao qual pertencem:

```text
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── pages/
│   │
│   ├── products/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── pages/
│   │
│   └── reports/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── pages/
│
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── utils/
│
├── routes/
└── App.tsx
```

Nesse modelo, tudo o que pertence à funcionalidade de produtos, por exemplo, fica concentrado em `features/products`.

A pasta `shared` pode armazenar elementos genéricos e reutilizáveis por diferentes partes da aplicação, como botões, modais, hooks utilitários e funções de formatação.

## Principais vantagens

- **Isolamento das funcionalidades:** cada funcionalidade concentra seus próprios componentes, hooks, serviços, tipos e páginas. Assim, alterações em um módulo tendem a afetar menos o restante do sistema.

- **Escalabilidade:** a estrutura é adequada para aplicações de médio e grande porte, pois evita o crescimento excessivo de pastas globais, como `components`, `hooks` e `services`.

- **Previsibilidade:** as funcionalidades podem seguir uma estrutura semelhante, facilitando a localização dos arquivos e a compreensão do projeto.

- **Facilidade no onboarding:** novos desenvolvedores conseguem entender mais rapidamente onde estão os arquivos e as regras relacionadas a cada parte do sistema.

- **Melhor organização por domínio:** o código passa a ser dividido de acordo com as responsabilidades e funcionalidades do negócio, e não apenas pelo tipo técnico de cada arquivo.

- **Refatorações mais seguras:** alterar ou até mesmo remover uma funcionalidade tende a causar menos impacto no restante da aplicação.

- **Possibilidade de evolução arquitetural:** essa organização pode servir como base para projetos que adotem conceitos mais avançados, como Domain-Driven Design (DDD) e microfrontends.

## Conclusão

Vejo a arquitetura baseada em funcionalidades como uma ótima solução para estruturar aplicações React escaláveis e sustentáveis.

Ao reunir os arquivos relacionados em um mesmo módulo, essa abordagem facilita a manutenção, melhora a compreensão do projeto e traz mais segurança para a implementação de novas funcionalidades e para a realização de refatorações.

Apesar das vantagens, é importante considerar o tamanho e a complexidade do projeto. Aplicações pequenas podem não precisar dessa separação desde o início. Entretanto, para projetos médios ou grandes, a arquitetura baseada em funcionalidades oferece um bom equilíbrio entre organização, simplicidade e escalabilidade.

## Referência

RASOULI, Naser. [Scalable React Projects with Feature-Based Architecture](https://dev.to/naserrasouli/scalable-react-projects-with-feature-based-architecture-117c). DEV Community, 18 maio 2025.
