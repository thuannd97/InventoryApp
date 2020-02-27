# AngularDI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

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

## Way to DI in angular
1. Dependency Injection use ReflectiveInjector (Constructor Injection)
2. Inject Singleton dependency use key providers in NgModule (command ng g m <module's name>)
    + using class: providers: [{provide: UserService, useClass: UserService}]. Key provider is token to idenitfy the injection, 
    key userClass is how and what to inject
    + using value: providers: [{provide: "API_URL", useValue: "http://abc.xyz"}]
    To use that inject, in Component we can write:
    constructor(@Inject("API_URL") api_url: string){

    }
