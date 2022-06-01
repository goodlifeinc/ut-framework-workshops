import React from 'react';
import Explorer from 'ut-front-devextreme/core/Explorer';
import Navigator from 'ut-front-devextreme/core/Navigator';

/** @type { import("../../handlers").pageFactory } */
export default ({
    import: {
        beertagFooFetch,
        beertagFooDelete,
        handleTabShow,
        component$beertagFooOpen,
        component$beertagFooNew,
        customerOrganizationGraphFetch
    },
    utMeta
}) => ({
    'beertag.foo.browse': () => ({
        title: 'Foo list',
        permission: 'beertag.foo.browse',
        component: async() => {
            const properties = {
                color: {
                    title: 'Foo color',
                    action: ({id}) => handleTabShow([component$beertagFooOpen, {id}], utMeta())
                }
            };
            const columns = ['color'];
            const details = {color: 'Foo color'};
            const explorerFetch = params => beertagFooFetch(params, utMeta());
            const navigatorFetch = params => customerOrganizationGraphFetch(params, utMeta());
            return function FooBrowse() {
                const [tenant, setTenant] = React.useState(null);
                return (
                    <Explorer
                        fetch={tenant != null && explorerFetch}
                        keyField='fooId'
                        schema={{properties}}
                        columns={columns}
                        details={details}
                        filter={{tenant}}
                        actions={[{
                            title: 'Create',
                            permission: 'beertag.foo.add',
                            action: () => handleTabShow(component$beertagFooNew, utMeta())
                        }, {
                            title: 'Edit',
                            permission: 'beertag.foo.edit',
                            enabled: 'current',
                            action: ({id}) => handleTabShow([component$beertagFooOpen, {id}], utMeta())
                        }, {
                            title: 'Delete',
                            enabled: 'selected',
                            action: ({selected}) => beertagFooDelete(selected, utMeta())
                        }]}
                    >
                        <Navigator
                            fetch={navigatorFetch}
                            onSelect={setTenant}
                            keyField='id'
                            field='title'
                            title='Tenant'
                            resultSet='organization'
                        />
                    </Explorer>
                );
            };
        }
    })
});
