import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@core/router/rootRoute'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { BlogPage } from './pages/BlogPage'

export const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
})

export const blogArticleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$slug',
  component: BlogArticlePage,
})
