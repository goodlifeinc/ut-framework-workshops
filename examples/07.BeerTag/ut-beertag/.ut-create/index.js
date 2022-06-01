const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
const camelCase = id => id.split('-').slice(1).map((string, index) => index ? capitalize(string) : string).join('');
const pascalCase = id => id.split('-').slice(1).map(capitalize).join('');

module.exports = {
    params: {
        schema: {
            properties: {
                id: {
                    type: 'string',
                    title: 'Beertag namespace'
                },
                title: {
                    type: 'string',
                    title: 'Beertag title'
                }
          },
            required: ['id', 'title']
        },
        uiSchema: {

        }
    },
    move: ({id}) => [
        ['api/beertag/beertag.*', fn => fn.replace('beertag', camelCase(id))],
        ['api/beertag', () => `${camelCase(id)}`],
        ['portal/**/beertag.*', fn => fn.replace('beertag', camelCase(id))],
        ['validations/beertag.*', fn => fn.replace('beertag', camelCase(id))],
        ['api/sql/schema/*-beertag.*', fn => fn.replace('beertag', camelCase(id))]
    ],
    rename: ({id, title}) => [{
        files: `{${[
            'api/**/*.js',
            'portal/**/*.js',
            'portal/**/*.js',
            'model/**/*.js',
            'server/**/*.js',
            'test/**/*.js',
            'api/**/*.sql',
            'api/**/*.yaml',
            'ui/react/**/*.js',
            'validations/*.js',
            'browser.js',
            'config.js',
            'build.js',
            'errors.json',
            'index.js',
            'package.json',
            'test/manual/*.http',
            'README.md'
        ].join(',')}}`,
        replace: [[
            /(ut|"|'|-|\[|\/|db\$)beertag/g,
            `$1${camelCase(id)}`
        ], [
            /beertag(\.|Tree|Color|Dispatch|Foo|Dropdown|<)/g,
            `${camelCase(id)}$1`
        ], [
            /(ut|"|'|fk|pk|error)Beertag/g,
            `$1${pascalCase(id)}`
        ], [
            'UnderTree standard beertag',
            `${title}`
        ]]
    }, {
        files: 'README.md',
        replace: [[
            /^## Creating beertags based on this template[^#]+^## /ms,
            '## '
        ]]
    }]
};
