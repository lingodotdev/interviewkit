import tailwindCss from '~/index.css?url';
import spaceGroteskWoff2 from '@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2?url';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppShell } from '~/components/app-shell';

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>404 - Not Found</div>,
});

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppShell>
        <Outlet />
        <TanStackRouterDevtools />
      </AppShell>
    </QueryClientProvider>
  );
}
