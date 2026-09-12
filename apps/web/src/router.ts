import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createAppRouter>;
  }
}

export function createAppRouter() {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
  });
}
