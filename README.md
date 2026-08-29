# Feature-Based React Test

Projeto React + Vite + TypeScript organizado com Feature-Based Architecture,
inspirado no artigo:
https://naserrasouli.ir/en/blog/feature-based-react

UI com Chakra UI e roteamento com TanStack Router.

## Estrutura

```txt
src/
|-- core/
|   |-- assets/      # Assets globais da aplicacao
|   |-- layouts/     # Layouts globais
|   |-- providers/   # Providers globais, como ChakraProvider
|   `-- router/      # Rota raiz e agregacao das rotas
|-- features/
|   `-- home/
|       |-- components/
|       |-- pages/
|       |-- routes.tsx
|       `-- index.ts # API publica da feature
|-- shared/
|   |-- components/  # UI reutilizavel entre features
|   |-- hooks/
|   |-- services/
|   |-- types/
|   `-- utils/
|-- App.tsx
`-- main.tsx
```

## Regras

- `features/*` concentra tudo que pertence a um dominio ou funcionalidade.
- `core/*` fica com infraestrutura global: assets, layout base, providers,
  configs e rotas de aplicacao.
- `shared/*` recebe codigo realmente reutilizavel por mais de uma feature.
- Features podem importar de `core` e `shared`.
- Uma feature nao deve importar detalhes internos de outra feature.
- Exponha o que for publico por `features/<nome>/index.ts`.
- Prefira Chakra UI para estilos e componentes visuais.
- Cada feature pode expor suas rotas em `features/<nome>/routes.tsx`.

## Aliases

```ts
import { AppLayout } from '@core/layouts/AppLayout'
import { HomePage } from '@features/home'
```

Aliases configurados:

- `@/*` -> `src/*`
- `@core/*` -> `src/core/*`
- `@features/*` -> `src/features/*`
- `@shared/*` -> `src/shared/*`

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
