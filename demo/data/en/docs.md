# Getting Started

Welcome! This guide walks you through installing the app, running it for the
first time, and finding your way around the interface.

## Installation

Download the latest release and unpack it anywhere on your machine. From that
directory, run:

```bash
./install.sh --profile default
```

The installer creates a configuration file in your home directory and adds the
command to your shell path. Open a new terminal window before continuing, so
the updated path takes effect.

## Your first project

Projects are folders. Point the app at one and it will index the contents on
first launch, which can take a minute for large folders.

1. Choose **File → Open Project** and pick a folder.
2. Wait for the indexing indicator in the status bar to finish.
3. Start typing in the search box to jump to any file.

> Indexing runs in the background. You can keep working while it finishes, but
> search results stay incomplete until it does.

## Features

- **Instant search** across every file in the current project.
- **Version history** for the last thirty days, restorable per file.
- **Shared links** that expire after a period you choose.
- **Offline mode**, which queues your changes and syncs when you reconnect.

## Configuration

Settings live in `config.toml` next to your project folder. The two you are
most likely to change are the theme and the autosave interval:

```toml
theme = "dark"
autosave_seconds = 30
```

Restart the app after editing this file. Invalid values are ignored and the
previous setting is kept, so a typo will not lock you out.

## Getting help

Press <kbd>?</kbd> anywhere in the app to open the keyboard shortcut reference.
If something looks wrong, check the [troubleshooting guide](https://example.com/help)
before filing a report — most problems come from a stale index, which you can
rebuild from the project menu.
