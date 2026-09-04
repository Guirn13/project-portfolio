import { createRouter } from '@tanstack/react-router'
import { aboutRoute } from '@features/About/routes'
import { blogArticleRoute, blogRoute } from '@features/blog/routes'
import { homeRoute } from '@features/home/routes'
import { projectRoute } from '@features/project/routes'
import { rootRoute } from './rootRoute'

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  projectRoute,
  blogRoute,
  blogArticleRoute,
])

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
