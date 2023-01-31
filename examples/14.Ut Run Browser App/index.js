const run = module.exports = params => require('ut-run').run({
    version: require('./package.json').version,
    root: __dirname,
    resolve: require.resolve,
    params
});

if (require.main === module) run();
