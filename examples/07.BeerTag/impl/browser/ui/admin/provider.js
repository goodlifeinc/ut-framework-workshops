import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import implementationStyle from './assets/react/index.css';
import {getDocsUrl} from './config/docs.config';
import {getLink, registerRoute} from 'ut-front-react/routerHelper';

registerRoute('ut-impl:dashboard').path('/');

export default class Provider extends Component {
    getChildContext() {
        return {
            portalName: 'Administration',
            implementationStyle: implementationStyle,
            mainUrl: getLink('ut-impl:dashboard'),
            getDocsUrl: getDocsUrl,
            mainTabset: [{
                routeName: 'ut-impl:dashboard',
                title: <div className={implementationStyle.homeIcon} />,
                props: {
                    activeClassName: implementationStyle.active
                }
            }, {
                routeName: 'ut-user:businessUnits',
                title: 'Organizations',
                permission: ['customer.organization.nav'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [
                    {
                        routeName: 'ut-user:businessUnits',
                        title: 'Business Units Management',
                        permission: ['customer.bu.nav'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }, {
                        routeName: 'ut-agent:networks',
                        title: 'Agency & Merchant Networks',
                        permission: ['agent.network.nav'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }
                ]
            }, {
                routeName: 'ut-user:roles',
                title: 'Roles & Users',
                permission: ['user.admin.nav'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [
                    {
                        routeName: 'ut-user:accesspolicy',
                        title: 'Access Policies Management',
                        permission: ['user.access.nav'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    },
                    {
                        routeName: 'ut-user:roles',
                        title: 'Roles & Permissions Management',
                        permission: ['user.role.nav'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    },
                    {
                        routeName: 'ut-user:accesspermissions',
                        title: 'Permissions Bulk Management',
                        permission: ['user.permissions.nav'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    },
                    {
                        routeName: 'ut-user:users',
                        title: 'Users Management',
                        permission: ['user.user.nav'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }
                ]
            }, {
                routeName: 'ut-ledger:home',
                title: 'Products & Accounts',
                permission: ['ledger.ledger.nav'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [{
                    routeName: 'ut-ledger:products',
                    title: 'Product Catalog',
                    permission: ['ledger.product.nav'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-ledger:accounts',
                    title: 'Internal Accounts',
                    permission: ['ledger.account.nav'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }]
            }, {
                routeName: 'ut-rule:home',
                title: 'Rules',
                permission: ['rule.rule.nav'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [{
                    routeName: 'ut-rule:rules',
                    title: 'Fees, Commissions and Limits (FCL)',
                    permission: ['rule.rule.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-customer:kyc',
                    title: 'KYC Configuration',
                    permission: ['customer.kyc.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }]
            }, {
                routeName: 'ut-user:home',
                title: 'System',
                permission: ['user.system.nav'],
                props: {
                    activeClassName: 'active'
                },
                multi: [
                    {
                        routeName: 'ut-core:items',
                        title: 'Content Items & Translations',
                        permission: ['core.content.nav'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }, {
                        routeName: 'ut-user:systemerrormessages',
                        title: 'Error Messages',
                        permission: ['user.errors.fetch'],
                        props: {
                            activeClassName: 'active'
                        }
                    }, {
                        routeName: 'ut-user:systemexternalsystems',
                        routeParams: {},
                        title: 'External System Integrations',
                        permission: ['user.externalSystem.fetch'],
                        props: {
                            activeClassName: 'active'
                        }
                    }, {
                        routeName: 'ut-system:systemexternalsystemcredentials',
                        routeParams: {},
                        title: 'External System Credentials',
                        permission: ['user.externalUser.fetch'],
                        props: {
                            activeClassName: 'active'
                        }
                    }, {
                        routeName: 'ut-transfer:partners',
                        title: 'Transfer Partners and Card Issuers',
                        permission: ['transfer.partner.fetch'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }
                ]
            }, {
                routeName: 'ut-aml:home',
                title: 'Risk & Fraud',
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [{
                    routeName: 'ut-aml:setup-list',
                    title: 'AML Lists',
                    permission: ['aml.setupList.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-aml:manual-search',
                    title: 'Manual Search',
                    permission: ['aml.manualSearch.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-aml:monitoring-results',
                    title: 'Monitoring Alerts',
                    permission: ['aml.monitoring.results.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-aml:conflicts',
                    title: 'List Import Conflicts',
                    permission: ['aml.conflicts.management.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-aml:import-status',
                    title: 'List Import Jobs',
                    permission: ['aml.import.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-aml:monitoring-status',
                    title: 'Monitoring Jobs',
                    permission: ['aml.monitoring.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-aml:monitoring-scheduler',
                    title: 'Monitoring Schedule',
                    permission: ['aml.monitoring.scheduler.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-aml:notifications',
                    title: 'Notifications',
                    permission: ['aml.notification.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-audit:auditActionConfiguration',
                    title: 'Audit Log Configuration',
                    permission: ['externalAudit.action.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }, {
                    routeName: 'ut-audit:auditLogReport',
                    title: 'Audit Log Reports',
                    permission: ['externalAudit.audit.fetch'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }]
            }, {
                routeName: 'ut-notice:home',
                title: 'Alerts & Notifications',
                permission: ['notice.notice.nav'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [
                    {
                        routeName: 'ut-notice:systemAlerts',
                        title: 'System Alerts',
                        permission: ['notice.systemAlerts.fetch'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    },
                    {
                        routeName: 'ut-notice:notifications',
                        title: 'Customer Notifications',
                        permission: ['notice.customerNotifications.fetch'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    },
                    {
                        routeName: 'ut-notice:messageHistory',
                        title: 'Message History',
                        permission: ['notice.messageHistory.fetch'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }
                ]
            }, {
                routeName: 'ut-report:reports',
                title: 'Reports & Analytics',
                permission: ['report.report.nav'],
                props: {
                    activeClassName: implementationStyle.active
                },
                multi: [{
                    routeName: 'ut-report:report',
                    title: 'Transfer Reports',
                    permission: ['report.transfer.nav'],
                    props: {
                        activeClassName: 'active'
                    },
                    multi: [{
                        routeName: 'ut-report:report',
                        routeParams: {name: 'TransferReport'},
                        title: 'Transfer List',
                        permission: ['transfer.report.transfer'],
                        props: {
                            activeClassName: 'active'
                        }
                    }, {
                        routeName: 'ut-report:report',
                        routeParams: {name: 'TransferTypeStatistics'},
                        title: 'Transfer Type Statistics',
                        permission: ['transfer.report.byTypeOfTransfer'],
                        props: {
                            activeClassName: 'active'
                        }
                    }, {
                        routeName: 'ut-report:report',
                        routeParams: {name: 'TransferHourOfDay'},
                        title: 'Transfer Hour of Day Statistics',
                        permission: ['transfer.report.byHourOfDay'],
                        props: {
                            activeClassName: 'active'
                        }
                    }, {
                        routeName: 'ut-report:report',
                        routeParams: {name: 'TransferDayOfWeek'},
                        title: 'Transfer Day of Week Statistics',
                        permission: ['transfer.report.byDayOfWeek'],
                        props: {
                            activeClassName: 'active'
                        }
                    }, {
                        routeName: 'ut-report:report',
                        routeParams: {name: 'TransferWeekOfYear'},
                        title: 'Transfer Week of Year Statistics',
                        permission: ['transfer.report.byWeekofYear'],
                        props: {
                            activeClassName: 'active'
                        }
                    }, {
                        routeName: 'ut-report:report',
                        routeParams: {name: 'SettlementReport'},
                        title: 'Settlement Report',
                        permission: ['transfer.report.settlement'],
                        props: {
                            activeClassName: 'active'
                        }
                    }, {
                        routeName: 'ut-report:report',
                        routeParams: {name: 'SettlementDetails'},
                        title: 'Settlement Details',
                        permission: ['transfer.report.settlementDetails'],
                        props: {
                            activeClassName: 'active'
                        }
                    }]
                }, {
                    routeName: 'ut-mirrors:reports',
                    title: 'Advanced Reporting & Analytics (MIRRORS)',
                    permission: ['mirrors.getReport'],
                    props: {
                        activeClassName: implementationStyle.active
                    }
                }]
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
