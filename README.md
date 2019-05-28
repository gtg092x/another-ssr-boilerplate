# Another SSR Boilerplate

From the Riot Tech blog article "Better Apps with React Server-Side Rendering".

## Setup

```bash
# installs dependencies and sets up a local .env file
yarn
```

## Development

```bash
yarn dev
```

## Build

```bash
yarn build
```

## App Architecture

This boilerplate contains some server code that can serve a React Application and an API that provides data for it.

The general rule of thumb is that anything inside `src/app` is client and server code while all code outside of `src/app` but inside of `src` is node server code.

### src

Code for the entire application. It's bundled into lib when app is built.

### src/api

A [koa-router](https://github.com/ZijianHe/koa-router) powered middleware that is our app's json api.

### src/assets

Middleware that serves either static assets or proxies [webpack-dev-server](https://github.com/webpack/webpack-dev-server) depending on the environment variable WEBPACK_PORT.

### src/render

The React server renderer middleware. This takes the App from `src/app` and renders it on the server for us.

### src/render/Html

Our broader layout file. This content is the "container" for the app. If you want to manage metadata, take a look at the NYT fork of [React Helmet](https://github.com/staylor/react-helmet-async).

### src/render/index

The actual middleware. This does three things:

- Asynchronously Loads Redux Data
- Synchronously Renders the App
- Synchronously Renders an HTML Layout file that includes page title, etc.

This is analogous to the file `src/app/main.js`. This only runs on the server.

### src/app

The React app. Most of the code in this folder will end up in a web browser, so don't do something crazy like import postgres.

### src/app/services

Here we define all of our standalone services that get injected into the app. This includes our [redux](https://redux.js.org/) store and our [axios](https://github.com/axios/axios) client.

These services should not rely on React components at all. They will be referenced before our server-side render when we asynchronously load our state. 

### src/app/main

The browser entry point. This is the one place you can stuff all the webpack magic in the world, the server won't see this file.

This is analogous to the file `src/render/index.js`. This only runs in the browser.

### src/app/App

The main App, here we set global contexts and treat the main Router as our only child.

### src/app/Routes

A react router Switch that contains references to all of our scenes.

Because we want to define all of our routes in one place, Our data loading is done here as well.

### src/app/Scenes

Our different React views as pages. These are your app!

If they need remote data, you'll want to load that in our Routes file before you use a redux selector to access that data here. 

## Thanks

You! You're giving React SSR a shot, that makes you awesome.

## License

MIT
 
