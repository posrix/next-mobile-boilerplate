module.exports = {
  apps: [
    {
      name: 'next-mobile',
      script: 'server.js',
      env_release: {
        NODE_ENV: 'production'
      }
    }
  ]
}
