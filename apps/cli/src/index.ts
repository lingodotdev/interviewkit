import { Command } from 'commander';
import healthCmd from './commands/health.js';

export default new Command()
  .name('cli')
  .description('CLI application built with Commander.js')
  .version('0.0.0')
  .addCommand(healthCmd)
  .parse();
