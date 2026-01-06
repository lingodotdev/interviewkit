import { z } from "zod";

export const pluginEntitySchema = z.record(
  z.string(), // locale code
  z.string(), // value
);

export type PluginEntity = z.infer<typeof pluginEntitySchema>;

export const pluginConfigSchema = z.object({
  extension: z.string(),
  serialize: z.custom<(data: Record<string, PluginEntity>) => string>(),
  deserialize: z.custom<(data: string) => Record<string, PluginEntity>>(),
});

export type Plugin = z.infer<typeof pluginConfigSchema>;
export type PluginConfig = Plugin;

export function definePlugin(plugin: PluginConfig): Plugin {
  return pluginConfigSchema.parse(plugin);
}
