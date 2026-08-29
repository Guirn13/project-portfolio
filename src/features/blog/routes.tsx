import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@core/router/rootRoute'
import { BlogPage } from './pages/BlogPage'

export const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
})
