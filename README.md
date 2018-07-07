# Angular Universal

Basic demonstration of angular universal, wich will allow your webapp to be a SEO Friend.

Check users page source code(on browser), and you will see that all the users from github api are there.

livedemo soon

# COMANDS

1. `npm install`

2. For client use just `ng serve` (in client source page will not work).

3. For node server (needs to run the node server to see the source code page working):

- `ng build --prod`
- `ng run angular-universal:server`
- `npm run webpack:serve`

- Now Run `node functions/dist/server.js` will start node server

Or just use: 
- `ng build --prod && ng run angular-universal:server && npm run webpack:server && node functions/dist/server.js`

- angular universal doc: `https://github.com/angular/angular-cli/wiki/stories-universal-rendering` 

# Deploy to firebase guide
This can help deploying the app, but at this moment I still have not been able to make it work
`https://hackernoon.com/deploying-angular-universal-v6-with-firebase-c86381ddd445`

At this moment i am getting the following error on firebase functions console:

Error: StaticInjectorError(AppServerModule)[NgModuleFactoryLoader -> InjectionToken MODULE_MAP]: 
  StaticInjectorError(Platform: core)[NgModuleFactoryLoader -> InjectionToken MODULE_MAP]: 
    NullInjectorError: No provider for InjectionToken MODULE_MAP!
    at NullInjector.get (/user_code/node_modules/@angular/core/bundles/core.umd.js:1118:19)
    at resolveToken (/user_code/node_modules/@angular/core/bundles/core.umd.js:1357:24)
    at tryResolveToken (/user_code/node_modules/@angular/core/bundles/core.umd.js:1302:16)
    at StaticInjector.get (/user_code/node_modules/@angular/core/bundles/core.umd.js:1197:20)
    at resolveToken (/user_code/node_modules/@angular/core/bundles/core.umd.js:1357:24)
    at tryResolveToken (/user_code/node_modules/@angular/core/bundles/core.umd.js:1302:16)
    at StaticInjector.get (/user_code/node_modules/@angular/core/bundles/core.umd.js:1197:20)
    at resolveNgModuleDep (/user_code/node_modules/@angular/core/bundles/core.umd.js:8252:29)
    at _createClass (/user_code/node_modules/@angular/core/bundles/core.umd.js:8299:68)
    at _createProviderInstance$1 (/user_code/node_modules/@angular/core/bundles/core.umd.js:8269:26)

# OBS

- use `"ng g c home app.module"` to generate a component, needs to pass app.module.


------------------------------------------------------------------------------------------------

# AngularUniversal

This project was generate with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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
