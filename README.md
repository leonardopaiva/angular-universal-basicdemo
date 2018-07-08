# Angular Universal

Basic demonstration of angular universal, wich will allow your webapp to be a SEO Friend.

At this moment the users page source code showing will work only on local node server, this is because from firebase hosting/functions the users data needs to be get from firebase database, firebase will not accept external call from free plan (i will update soon).

### livedemo

[https://angular-universal-basicdemo.firebaseapp.com/](https://angular-universal-basicdemo.firebaseapp.com/)


# COMANDS

1. `npm install`

2. For client, use just `ng serve` (the source page will NOT work).

3. For node server (the source page will work):

- `ng build --prod`
- `ng run angular-universal:server`
- `npm run webpack:serve`  (you need to add `webpack:server": "webpack --config webpack.server.config.js --progress --colors` to scripts on package.json, just check this rep package.json)

- Now Run `node functions/dist/server.js` will start node server

Or just use: 
- `ng build --prod && ng run angular-universal:server && npm run webpack:server && node functions/dist/server.js`

- angular universal doc: `https://github.com/angular/angular-cli/wiki/stories-universal-rendering` 

# Deploy to firebase guide

Aaron Te article can help deploying to firebase:
[https://hackernoon.com/deploying-angular-universal-v6-with-firebase-c86381ddd445](https://hackernoon.com/deploying-angular-universal-v6-with-firebase-c86381ddd445)

**But you need to becareful with two things, use functions/package.json and functions/index.js from this rep, dont use from the article.** this is the source of this rep functions/index.js and functions/package.json, check helix46 comment from here [https://github.com/aaronte/angular-universal-firebase/issues/3](https://github.com/aaronte/angular-universal-firebase/issues/3)


firebase deploying, you need to follow the article above first, these are just a few commands to help you remember...

- `npm --prefix functions install`
Install the node_modules from firebase functions:
- `cp -a functions/dist/browser/. public/`
Copy the dist/browser to public
- `mv public/index.html public/index2.html`
Rename index to index2
- `firebase deploy`
Will deploy

- `cp -a functions/dist/browser/. public/ && mv public/index.html public/index2.html && firebase deploy`


# OBS

If you get this error trying to use `ng g c componentname`:

`More than one module matches. Use skip-import option to skip importing the component into the closest module.`

thats because you have more than one main modules on your app, app.module and app.server.module, so you need to use `ng g c home app.module` to generate a component/etc. 


# Commons Erros

### This one happens because you need to fix your functions/index.js, you can try using this rep functions/index.js :

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


### This error happens because you cant make external request on firebase free plan:

ERROR HttpErrorResponse {
  headers: HttpHeaders { normalizedNames: Map {}, lazyUpdate: null, headers: Map {} },
  status: 0,
  statusText: 'Unknown Error',
  url: null,
  ok: false,
  name: 'HttpErrorResponse',
  message: 'Http failure response for (unknown url): 0 Unknown Error',
  error: 
   ProgressEvent {
     type: 'error',
     target: 
      XMLHttpRequest {
        onloadstart: null,
        onprogress: null,
        onabort: null,
        onerror: null,
        onload: null,
        ontimeout: null,
        onloadend: null,
        _listeners: [Object],
        onreadystatechange: null,
        _anonymous: undefined,
        readyState: 4,
        response: null,
        responseText: '',
        responseType: 'text',
        responseURL: '',
        status: 0,
        statusText: '',
        timeout: 0,
        upload: [Object],
        _method: 'GET',
        _url: [Object],
        _sync: false,
        _headers: [Object],
        _loweredHeaders: [Object],
        _mimeOverride: null,
        _request: null,
        _response: null,
        _responseParts: null,
        _responseHeaders: null,
        _aborting: null,
        _error: null,
        _loadedBytes: 0,
        _totalBytes: 0,
        _lengthComputable: false },
     currentTarget: 
      XMLHttpRequest {
        onloadstart: null,
        onprogress: null,
        onabort: null,
        onerror: null,
        onload: null,
        ontimeout: null,
        onloadend: null,
        _listeners: [Object],
        onreadystatechange: null,
        _anonymous: undefined,
        readyState: 4,
        response: null,
        responseText: '',
        responseType: 'text',
        responseURL: '',
        status: 0,
        statusText: '',
        timeout: 0,
        upload: [Object],
        _method: 'GET',
        _url: [Object],
        _sync: false,
        _headers: [Object],
        _loweredHeaders: [Object],
        _mimeOverride: null,
        _request: null,
        _response: null,
        _responseParts: null,
        _responseHeaders: null,
        _aborting: null,
        _error: null,
        _loadedBytes: 0,
        _totalBytes: 0,
        _lengthComputable: false },
     lengthComputable: false,
     loaded: 0,
     total: 0 } }


# Thanks to

- Max for (https://www.udemy.com/the-complete-guide-to-angular-2/?start=0)
- @aaronte for https://hackernoon.com/deploying-angular-universal-v6-with-firebase-c86381ddd445
- @helix46 for (https://github.com/aaronte/angular-universal-firebase/issues/3) the functions/index.js helped alot.


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
