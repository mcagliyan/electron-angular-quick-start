# electron-angular-quick-start

**This is a Electron-Angular-Quick-Start repo for creating Desktop and Web applications.**

Currently versions:

- Angular 8.2.9
- Electron 6.0.11
- Node: 10.16.3
- Chrome: 76.0.3809.146
- Typescript 3.5.3


## Getting Started

To clone and run this repository you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [AngularCLI](https://cli.angular.io/) on your computer.

```bash
# Clone this repository
git clone https://github.com/mcagliyan/electron-angular-quick-start.git
# Go into the repository
cd electron-angular-quick-start
# Install dependencies
npm install
# Run the Web app
npm run start:open:dev
# Run the Electron app
npm run electron:start:dev
```

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Electron

## Build Dev

Run `npm run electron:build:dev` to build the electron project for test.

## Build Prod

Run `npm run electron:build:prod` to build electron project for production.

## Start Electron Dev
Run `npm run electron:start:dev` to start electron for test and open developer tools.

## Start Electron Prod

Run `npm run electron:start:prod` to start electron for production.

## Build on Windows System

Run `npm run electron:windows` to build the electron project for Windows system.

## Build on Linux System

Run `npm run electron:linux` to build the electron project for Linux system.

## Build on Mac System

Run `npm run electron:mac` to build the electron project for Mac system.
