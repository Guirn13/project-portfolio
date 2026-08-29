import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@core/router/rootRoute'
import { ProjectPage } from './pages/ProjectPage'

export const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/project',
  component: ProjectPage,
})
