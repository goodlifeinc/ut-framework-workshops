/** @type { import('ut-model').model<'beertag', 'tree'> } */
module.exports = ({joi}) => ({
    subject: 'beertag',
    object: 'tree',
    browser: {
        navigator: true
    },
    schema: {
    },
    cards: {
        browse: {
            label: 'Trees',
            widgets: ['tree.treeName', 'tree.treeDescription']
        },
        edit: {
            label: 'Edit tree',
            widgets: ['tree.treeName', 'tree.treeDescription']
        }
    },
    reports: {
        list: {
            validation: joi?.object(),
            params: ['tree.treeName'],
            columns: ['tree.treeName'],
            fetch: 'beertag.tree.report'
        }
    }
});
