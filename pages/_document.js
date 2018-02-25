import Document, { Head, Main, NextScript } from 'next/document'
import { global, am } from '../styles/reset'
import helper from '../styles/helper'

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Title</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/images/favicon.ico"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
          />
          <style jsx="jsx" global="global">
            {global}
          </style>
          <style jsx="jsx" global="global">
            {am}
          </style>
          <style jsx="jsx" global="global">
            {helper}
          </style>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/antd-mobile.min.css"
          />
        </Head>
        <body
          style={{
            margin: 0
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
