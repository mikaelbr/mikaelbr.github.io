({
    appDir: "./",
    baseUrl: "js/",
    dir: "./build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    // optimize: "none",

    name: 'main',

    paths: {
        'jquery': 'vendor/jquery/jquery',
        'modernizr': 'vendor/modernizr/modernizr',
        'socialfeed': 'vendor/socialfeed/socialfeed',
        'moment': 'vendor/moment/moment',
        'handlebars': 'vendor/handlebars/handlebars',
        'text': 'vendor/text/text',
        'tmpl': 'socialfeed_extend/templates/',
        'modules': 'socialfeed_extend/modules/'
    },

    'shim': {
        'handlebars': {
            exports: 'Handlebars'
        }
    }

})
