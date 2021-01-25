# Installations

Set up an environment file and copy all variables from .env.example over.

Run `yarn` to install all dependencies and use `yarn start` to boot up the
project.

## Commit Message Types - "{type}: {message}"

Commit message types must be one of the following:

- build: Changes that affect the build system or external dependencies (example
  scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis,
  Circle, BrowserStack, SauceLabs)
- chore: Updating grunt tasks etc; no production code change
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests
