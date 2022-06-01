import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import implementationStyle from './assets/react/index.css';
import {getDocsUrl} from './config/docs.config';
import {getLink, registerRoute} from 'ut-front-react/routerHelper';

registerRoute('ut-impl:dashboard').path('/');

export default class Provider extends Component {
    getChildContext() {
        return {
            portalName: 'Solution',
            implementationStyle: implementationStyle,
            mainUrl: getLink('ut-impl:dashboard'),
            getDocsUrl: getDocsUrl,
            mainTabset: [{
                routeName: 'ut-impl:dashboard',
                title: <div className={implementationStyle.homeIcon} />,
                props: {
                    activeClassName: 'active'
                }
            }, {
                routeName: 'ut-customer:customers',
                title: 'Customers',
                permission: ['customer.customer.nav'],
                props: {
                    activeClassName: implementationStyle.active
                }
            // }, {
            //     routeName: 'ut-customer:customers',
            //     title: 'Agents & Merchants',
            //     permission: ['agent.agent.nav'],
            //     props: {
            //         activeClassName: implementationStyle.active
            //     }
            }, {
                routeName: 'ut-bulk:bulkBatch',
                title: 'Transactions',
                permission: ['bulk.transactions.nav'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [{
                    routeName: 'ut-bulk:bulkBatch',
                    title: 'Bulk',
                    permission: ['bulk.batch.nav'],
                    props: {
                        activeClassName: implementationStyle.active
                    },
                    multi: [{
                        routeName: 'ut-bulk:bulkBatchDebit',
                        title: 'Bulk Debits',
                        permission: ['bulk.batch.bulkDebit'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }, {
                        routeName: 'ut-bulk:bulkBatchCredit',
                        title: 'Bulk Credits',
                        permission: ['bulk.batch.bulkCredit'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }, {
                        routeName: 'ut-bulk:bulkBatchCreditMerchants',
                        title: 'Bulk Credits - Merchant',
                        permission: ['bulk.batch.merchantBulkCredit'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }]
                }]
            }, {
                routeName: 'ut-customer:customerReferrals',
                title: 'Operations',
                permission: ['customer.referral.fetch'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [
                    {
                        routeName: 'ut-customer:customerReferrals',
                        title: 'Referrals Management',
                        permission: ['customer.referral.fetch'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }
                ]
            }]
        };
    }

    render() {
        const { children } = this.props;
        return Children.only(children);
    }
}

Provider.childContextTypes = {
    portalName: PropTypes.string,
    implementationStyle: PropTypes.object,
    reports: PropTypes.object,
    getDocsUrl: PropTypes.func,
    mainUrl: PropTypes.string,
    mainTabset: PropTypes.array
};

Provider.propTypes = {
    children: PropTypes.node
};
