import fetch from 'isomorphic-unfetch'

let host = ''
if (!process.browser) {
  host = `http://localhost:${require('../config/env').port}`
}

export default {
  getDogBreedsList: () => fetch(`${host}/api/breeds/list`)
}
