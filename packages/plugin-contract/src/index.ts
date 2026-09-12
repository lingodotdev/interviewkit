export type Messages = Record<string, string>;

export interface Plugin {
  extension: string;
  serialize: (data: Messages) => string;
  deserialize: (raw: string) => Messages;
}

export function definePlugin<const T extends Plugin>(plugin: T): T {
  return plugin;
}
