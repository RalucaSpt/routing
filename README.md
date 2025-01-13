# Routing & Building Multi-Page Single Page Applications

This project focuses on implementing routing in Angular to create feature-rich, multi-page Single Page Applications (SPAs). The goal is to build dynamic and responsive applications where navigation between different pages happens seamlessly without reloading the entire page.

### Key Features:

- **Dynamic Routing**: The project demonstrates how to define and manage multiple routes, including static and dynamic routes. It enables navigation based on route parameters and provides flexible options for handling complex route hierarchies.

- **Nested Routes**: It incorporates nested routing to allow for more structured and organized page components, making it easier to manage parent-child relationships in navigation.

- **Route Parameters and Observables**: The project explores handling dynamic route parameters using `@Input`, `ActivatedRoute`, and Observables to pass and retrieve data efficiently between pages.

- **Error Handling and User Guidance**: It includes features like a "Not Found" route and redirection logic to ensure users are guided properly when navigating invalid or unavailable pages.

- **Query Parameters and Data Manipulation**: The application makes use of query parameters to pass data between routes and perform operations like filtering or sorting.

- **Route Guards**: It integrates route guards to secure certain routes and ensure only authorized or valid navigation.

- **Resolvers and Static Data**: The project demonstrates loading static or dynamic data for routes using resolvers, ensuring the required data is ready before a route is activated.

- **Advanced Navigation**: Features like programmatic navigation, route link shortcuts, and relative links are implemented for smoother user experiences.

By the end of this project, the application is a well-structured SPA with dynamic routing, error handling, and data-driven navigation, showcasing the full potential of Angular’s routing capabilities.

## Deployment

The project is deployed and accessible online. You can view it at the following link:

**[Deployed Site](https://ralucaspt.github.io/routing/)**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
