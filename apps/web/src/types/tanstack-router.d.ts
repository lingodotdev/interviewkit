import type { AnyRouter } from '@tanstack/react-router'

declare module '@tanstack/router-core/ssr/server' {
  function transformReadableStreamWithRouter(
    router: AnyRouter,
    routerStream: ReadableStream,
  ): ReadableStream
}

declare module '@tanstack/react-router/ssr/server' {
  function transformReadableStreamWithRouter(
    router: AnyRouter,
    routerStream: ReadableStream,
  ): ReadableStream
}
