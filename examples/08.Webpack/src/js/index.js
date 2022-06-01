var Navigo = require('navigo');

const service = require('./service');
var homeTemplate = require('../templates/home/index.mustache.html');
var singleCountryTemplate = require('../templates/country/single.mustache.html');

require('../scss/style.scss');

window.onload = function () {
    var root = null;
    var useHash = true; // Defaults to: false
    var hash = '#!'; // Defaults to: '#'
    var router = new Navigo(root, useHash, hash);

    router
        .on({
            'country/:id': function (params, query) {
                setContent('countrySingle', params, query);
            },
            '*': function () {
                setContent('Home');
            }
        })
        .resolve();

    function setContent(name, params, query) {
        var root = document.getElementById('root');

        switch (name) {
            case 'countrySingle':
                renderCountrySingle(root, params);
                break;
            case 'Home':
                renderHome(root);
                break;
        }
    }

    function renderCountrySingle(root, params) {
        service
            .getSingle(params.id)
            .then(data => {
                var output = singleCountryTemplate(data);
        
                replaceElementContent(root, output);
            });
       
    }


    function renderHome(root) {
        service
            .getAll()
            .then(data => {
                var output = homeTemplate({countries: data});

                replaceElementContent(root, output);
            });
    }

    function replaceElementContent(root, output) {
        root.innerHTML = output;
        router.updatePageLinks();
    }
};