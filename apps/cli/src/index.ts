#!/usr/bin/env node
import { Command } from 'commander';
import { consola } from 'consola';
import health from './commands/health.ts';

const program = new Command()
  .name('lng')
  .description('Manage localization files')
  .version('0.0.0')
  .showHelpAfterError()
  .addCommand(health);

program.action(() => program.outputHelp());

try {
  await program.parseAsync();
} catch (error) {
  consola.error(error);
  process.exit(1);
}
