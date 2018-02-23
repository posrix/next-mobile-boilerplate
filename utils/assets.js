import assetsManifest from './assets.manifest'

const assets = {}

assetsManifest.forEach((asset, index) => {
  assets[asset[index][0]] = asset[index][1]
})

export default assets
