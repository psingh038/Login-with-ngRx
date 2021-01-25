# Login App

This project was generated with Angular version 9.1.3. For Login user can register and then log in to application with User mail ID: psingh038@ibm.com and PASSWORD: India@2021.

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build

Path: /src/environments/environment.prod.ts
The production environment config contains variables required to run the application in production. This enables you to build the application with a different configuration for each different environment (e.g. production & development) without updating the app code.
When you build the application for production with the command ng build --prod, the output environment.ts is replaced with environment.prod.ts.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# What to improve

The account and users features are organized into self-contained feature modules that manage their own layout, routes and components, and are hooked into the main app inside the app routing module with lazy loading. Here lot of things to improve on the UI side as well as NgRx state as the state that we are going to manage is the collection of customers.
We can change the collection of the customer's state using the actions. For this case, we have one action that can change the state:
We are not generating failure action, So just select 'N'.
The application uses a fake backend by default so it can run in the browser without a real api, to switch to a real backend api you just must remove or comment out the line below the comment // provider used to create fake backend located in the /src/app/app.module.ts file.

We can build our own backend api or start with one of the below options:
•	For an API built with NodeJS and MySQL follow the instructions at Node.js + MySQL - Simple API for Authentication, Registration and User Management
•	For a real backend API built with NodeJS and MongoDB follow the instructions at NodeJS + MongoDB - Simple API for Authentication, Registration and User Management

