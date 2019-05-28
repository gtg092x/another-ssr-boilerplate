import React from 'react'

const Html = (props) => {
  const { app, store } = props
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*
          If you take this to the next level,
          use a real style sheet built with something like less
        */}
        <style type="text/css" dangerouslySetInnerHTML={{ __html: `
          nav > a {
            display: inline-block;
            padding: 4px;
          }
        ` }} />
      </head>
      <body>
        <div
          id="react-container"
          dangerouslySetInnerHTML={{ __html: app }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.__REDUX_STATE__=${JSON.stringify(store.getState())};`,
          }}
        />
        <script src="/dist/app.js" type="text/javascript" />
      </body>
    </html>
  )
}

export default Html
