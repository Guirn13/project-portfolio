import { Outlet } from '@tanstack/react-router'
import { AppLayout } from '@core/layouts/AppLayout'

export function RootRouteLayout() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}
