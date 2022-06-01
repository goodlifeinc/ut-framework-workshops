const unPrefix = id => id.split('-').slice(1).join('-');

module.exports = {
    params: {
        schema: {
            properties: {
                id: {
                    type: 'string',
                    title: 'Application identifier'
                },
                title: {
                    type: 'string',
                    title: 'Application title'
                },
                userName: {
                    type: 'string',
                    title: 'User name'
                }
            },
            required: ['id', 'title', 'userName']
        },
        uiSchema: {

        }
    },
    rename: ({id, title, userName}) => [{
        files: '{server,browser,test}/**/*.js',
        replace: [[
            /implementation: 'application'/g,
            `implementation: '${unPrefix(id)}'`
        ], [
            /application.k8s.softwaregroup.com/g,
            `${unPrefix(id)}.k8s.softwaregroup.com`
        ], [
            /impl-application@softwaregroup.com/g,
            `${id}@softwaregroup.com`
        ]]
    }, {
        files: '{server,browser,test}/**/*.json',
        replace: [[
            /"implementation": "application"/g,
            `"implementation": "${unPrefix(id)}"`
        ], [
            /"namespace": "application"/g,
            `"namespace": "${unPrefix(id)}"`
        ], [
            /"logger": "impl-application"/g,
            `"logger": "${id}"`
        ], [
            /application.k8s.softwaregroup.com/g,
            `${unPrefix(id)}.k8s.softwaregroup.com`
        ]]
    }, {
        files: '.vscode/launch.json',
        replace: [[
            /"ut_application_test/g,
            `"ut_${unPrefix(id)}_test"`
        ]]
    }, {
        files: 'package.json',
        replace: [[
            /"name": "impl-application"/g,
            `"name": "${id}"`
        ], [
            /"description": "UnderTree standard application"/g,
            `"description": ${JSON.stringify(title)}`
        ], [
            /"url": "git@git.softwaregroup.com:ut5impl\/impl-application.git"/g,
            `"url": "git@git.softwaregroup.com:ut5impl/${id}.git"`
        ]]
    }, {
        files: 'ut_*_rc',
        replace: [[
            /database: impl-firstName-lastName/g,
            `database: ${id}-${userName.split('.').join('-')}`
        ],[
            /user: firstName\.lastName/g,
            `user: ${userName}`
        ]]
    }, {
        files: 'README.md',
        replace: [[
            '# UnderTree standard application',
            `# ${title}`
        ], [
            /^## Creating projects based on this template[^#]+^## /ms,
            '## '
        ], [
            '/impl-application/',
            `/${id}/`
        ], [
            '?id=impl-application',
            `?id=${id}`
        ], [
            '/env-application',
            `/env-${unPrefix(id)}`
        ], [
            'admin.application.k8s.softwaregroup.com',
            `admin.${unPrefix(id)}.k8s.softwaregroup.com`
        ], [
            '/sentry/application/',
            `/sentry/${unPrefix(id)}/`
        ], [
            'var-Implementation=application',
            `var-Implementation=${unPrefix(id)}/`
        ], [
            '?namespaces=application',
            `?namespaces=${unPrefix(id)}`
        ], [
            /\.ut_application_devrc/g,
            `.ut_${unPrefix(id).replace('-', '_')}_devrc`
        ], [
            /\.ut_application_testrc/g,
            `.ut_${unPrefix(id).replace('-', '_')}_testrc`
        ], [
            /database: impl-application-firstname-lastname/g,
            `database: ${id}-firstname-lastname`
        ]]
    }]
};
