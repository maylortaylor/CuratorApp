# Curator.Web


# Angular (Frontend)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Angular CLI - Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Angular Development server

Navigate to the `CuratorApp/Curator.Web/ClientApp` folder and
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Angular Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## CompoDoc Auto Generated Documentation

Client-side / Angular 5+ Auto generated documentation possible by [CompuDoc](https://compodoc.app/guides/getting-started.html)
* Run `ng docs:build` to build the documentation.
* Run `ng docs:serve` to serve the documentation local server.
* Run `ng docs:buildandserve` to build and then serve the local documentation.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# C# / Servers (Backend)

## 1) Curator.Api project

Navigate to `CuratorApp/Curator.Api` to get started.

1. Run `dotnet build` to builds the project and all of its dependencies.
2. Run `dotnet run` to run the project.
* Run `dotnet clean` to clean the output of the project.
* Run `dotnet restore` to restore the dependencies and tools of the project.

## 2) Curator.Web project

Built on NETCore 2.0
If you havent set your Environment Varibles, go here to find out: [Setting Environment Varibles.](https://andrewlock.net/how-to-set-the-hosting-environment-in-asp-net-core/)

* On OSX use `ASPNETCORE_ENVIRONMENT=Development dotnet run` to run project in Developement mode.
* On Windows you will need to set the variable using `set ASPNETCORE_ENVIRONMENT=Development` the use `dotnet run`

More help with [Environment Varibales.](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-2.0)

## Front-end Stack
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/card/)
* [Angular 6+](https://angular.io/guide/displaying-data)
* [Material Design Components](https://material.angular.io/components/categories)
* [Material Icons](https://material.io/tools/icons/?style=baseline)


Navigate to `CuratorApp/Curator.Web` to get started.

* Run `dotnet build` to builds the project and all of its dependencies.
1. Run `dotnet run` to run the project.
2. Run `dotnet clean` to clean the output of the project.
* Run `dotnet restore` to restore the dependencies and tools of the project.