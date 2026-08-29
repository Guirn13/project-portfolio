import { createRouter } from '@tanstack/react-router'
import { homeRoute } from '@features/home/routes'
import { rootRoute } from './rootRoute'

const routeTree = rootRoute.addChildren([homeRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
