exports.isProd = process.env.NODE_ENV === 'production'
exports.port = exports.isProd ? 3100 : 3000
