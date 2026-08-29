import { createRootRoute } from '@tanstack/react-router'
import { RootRouteLayout } from './RootRouteLayout'

export const rootRoute = createRootRoute({
  component: RootRouteLayout,
})
