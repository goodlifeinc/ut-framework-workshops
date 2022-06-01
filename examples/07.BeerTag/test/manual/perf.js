/* eslint-disable no-console */
const autocannon = require('autocannon');

autocannon({
    url: 'http://localhost:8090/rpc/customer/customer/add',
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer eyJraWQiOiJrTWZYMVdvRGM5ZFdWUnVnd0doOXNTTDk1NkpTN3lCOGpFMXlsbzcxWi1NIiwiYWxnIjoiRWREU0EifQ.eyJ0eXAiOiJCZWFyZXIiLCJzZXMiOiI0MkQ0NjBCMy1EQzIyLTQ0MTAtODQ3RS0wMTQ5MEYxMEZDQ0IiLCJwZXIiOiJBUUFBQ0FCUUFRQUFBQUFBQUFBQUFBQUFBQUFBQkFBQUFCQUFBQUNBQVFDQUFBd0FBUUFBQUFBSUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE9Iiwic3ViIjoiMTAwMCIsImF1ZCI6InV0LWJ1cyIsImlzcyI6InV0LWxvZ2luIiwiaWF0IjoxNTk0NDY5NDc5LCJleHAiOjE5MDk4Mjk0Nzl9.9rpbHdX_sLqvYuq9YWykTbmNETUM86MY49yVUgEQj0GE7FioLdGwDqgYxSWKpmIJVNz2VT44hk47dvWgG1pZAw'

    },
    body: `{
    "id":12,
    "jsonrpc":"2.0",
    "method":"customer.customer.add",
    "params":{
        "customer": {
            "customerTypeId": "individual",
            "organizationId": 1172
        },
        "person": {
            "isEnabled": true,
            "isDeleted": false,
            "firstName": "អរុណសួស្តី",
            "lastName": "ខ្ញុំស្រឡាញ់អ្នក",
            "nationalId": "20200228",
            "dateOfBirth": "2020-02-25"
        }
    }
}`,
    connections: 50,
    pipelining: 1,
    duration: 30
}, console.log);
