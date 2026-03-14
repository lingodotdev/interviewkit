export interface Plugin {
  extension: string;
  serialize: (data: Record<string, string>) => string;
  deserialize: (raw: string) => Record<string, string>;
}

export function definePlugin(plugin: Plugin): Plugin {
  return plugin;
}
