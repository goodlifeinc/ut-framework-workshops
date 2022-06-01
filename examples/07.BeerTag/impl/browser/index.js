module.exports = () => () => ({
    adminBrowser: () => [
        require('./ui'),
        require('./ui/admin').mainUI
    ],
    serviceBrowser: () => [
        require('./ui'),
        require('./ui/service').mainUI
    ],
    solutionBrowser: () => [
        require('./ui'),
        require('./ui/solution').mainUI
    ]
});
