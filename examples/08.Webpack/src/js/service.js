var fetch = require('node-fetch');

var getAll = function () {
    return fetch('api/AvailableCountries')
        .then(res => res.json());
};


var getSingle = function (id) {
    const response = {};

    return fetch(`api/PublicHolidays/2019/${id}`)
        .then(res => res.json())
        .then(holidays => {
            response.holidays = holidays;

            return fetch(`api/CountryInfo?countryCode=${id}`)
                .then(res => res.json());
        })
        .then(countryInfo => {
            response.countryInfo = countryInfo;

            return response;
        });
};

module.exports = {
    getAll,
    getSingle
};