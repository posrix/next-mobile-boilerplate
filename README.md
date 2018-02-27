# next-mobile-boilerplate

A next mobile boilerplate using `ant-design-mobile` with full support from development to deployment.

## Features

  - `ant-design-mobile` as Mobile UI.
  - `express` server customization.
  -  Combines `prettier` and `ESlint` in pre-commit hook using `lint-staged`. Stop worrying about shit code slip into your code base.
  - `pm2` as the production process manager.
  - `http-proxy-middleware` for remote server api proxy to avoid CORS error.
  - assets hash for production static resources version control.

## Getting started

```bash
git clone https://github.com/posrix/next-mobile-boilerplate my-project
cd my-project
npm install
npm run dev
```

## Deployment

First, `git clone` your project to production server. Then simply type `sh deploy.sh`. By default, production server will listen at port `3100`. Modify `config/env.js` for customization.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
