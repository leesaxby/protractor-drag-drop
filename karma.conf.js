const karmaSingleRun = process.env.KARMA_RUN_TYPE === 'single';
const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({

        files: [
            'test/unit/**/*.spec.js'
        ],

        preprocessors: {
            'test/unit/**/*.spec.js': ['webpack', 'sourcemap']
        },

        singleRun: karmaSingleRun,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true,
            stats: {
                chunks: false
            }
        },

        plugins: [
            'karma-jasmine',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-phantomjs-launcher',
            'karma-story-reporter',
            'karma-junit-reporter'
        ]

    });
};
