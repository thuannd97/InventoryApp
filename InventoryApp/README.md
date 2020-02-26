# InventoryApp

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

## Learning
@Input() you pass data into child component
@Output() you send data out of component
Ex: [product] = "myProduct"
-> component con -> component cha
    (select) = "isSelected()"
-> component con -> component cha

## step to build app
1. Break your app to components like component parent to component child
2. Config component parent to component child, Using @Input() and @Output() to pass and send data from component
parent to component child
3. Deploy your app using "now". npm install -g now -> run command now 

