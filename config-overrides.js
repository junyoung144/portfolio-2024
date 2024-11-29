module.exports = function override(config, env) {
    if (env === 'production') {
        config.output.filename = 'static/js/bundle.js';
        config.output.chunkFilename = 'static/js/[name].chunk.js';
    }
    return config;
};
