import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import implementationStyle from './assets/react/index.css';
import {getLink, registerRoute} from 'ut-front-react/routerHelper';

registerRoute('ut-impl:dashboard').path('/');

export default class Provider extends Component {
    getChildContext() {
        return {
            portalName: 'Self service',
            implementationStyle: implementationStyle,
            mainUrl: getLink('ut-impl:dashboard'),
            mainTabset: [{
                routeName: 'ut-impl:dashboard',
                title: <div className={implementationStyle.homeIcon} />,
                props: {
                    activeClassName: 'active'
                }
            }, {
                routeName: 'ut-customer:customers',
                title: 'Customers',
                permission: ['service.customer.customer.nav'],
                props: {
                    activeClassName: implementationStyle.active
                }
            }, {
                routeName: 'ut-customer:customers',
                title: 'Agents & Merchants',
                permission: ['service.customer.customer.nav'],
                props: {
                    activeClassName: implementationStyle.active
                }
            }, {
                routeName: 'ut-transfer:transactions',
                title: 'Transactions',
                permission: ['service.bulk.transactions.nav'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [{
                    routeName: 'ut-bulk:bulkBatch',
                    title: 'Bulk',
                    permission: ['service.bulk.batch.nav'],
                    props: {
                        activeClassName: implementationStyle.active
                    },
                    multi: [{
                        routeName: 'ut-bulk:bulkBatchDebit',
                        title: 'Bulk Debits',
                        permission: ['service.bulk.batch.bulkDebit'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }, {
                        routeName: 'ut-bulk:bulkBatchCredit',
                        title: 'Bulk Credits',
                        permission: ['service.bulk.batch.bulkCredit'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }, {
                        routeName: 'ut-bulk:bulkBatchCreditMerchants',
                        title: 'Bulk Credits - Merchant',
                        permission: ['service.bulk.batch.merchantBulkCredit'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }]
                }]
            }, {
                title: 'Operations',
                permission: ['service.customer.referral.fetch'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [
                    {
                        routeName: 'ut-customer:customerReferrals',
                        title: 'Referrals Management',
                        permission: ['service.customer.referral.fetch'],
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
    mainUrl: PropTypes.string,
    mainTabset: PropTypes.array
};

Provider.propTypes = {
    children: PropTypes.node
};
