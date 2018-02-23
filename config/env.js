exports.isProd = process.env.NODE_ENV === 'production'
exports.port = exports.isProd ? 8102 : 3000
