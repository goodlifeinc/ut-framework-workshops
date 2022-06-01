import {getLink} from 'ut-front-react/routerHelper';

const getStrippedLink = (route) => {
    let link = getLink(route);
    if (!link) {
        // If route has not been registered return empty string as fallback
        return '';
    }
    const index = link.indexOf('/:');
    if (index === -1) {
        return link;
    }
    link = link.substr(0, index);

    return link;
};

const mapping = {
    _notFoundRoute: '/docs/portal/AccessingtheSystem.html',
    '/': '/docs/portal/UserInterface.html',
    // Customer
    [getLink('ut-customer:home')]: '/docs/portal/Customers.html',
    [getLink('ut-customer:customers')]: '/docs/portal/Customers.html',
    [getStrippedLink('ut-customer:customerCreate')]: '/docs/portal/Customers.html',
    [getStrippedLink('ut-customer:customerEdit')]: '/docs/portal/Customers.html',
    [getStrippedLink('ut-customer:customerApprove')]: '/docs/portal/Customers.html',
    [getLink('ut-customer:customerReferrals')]: '/docs/portal/ReferralsManagement.html',
    // Bulk
    [getStrippedLink('ut-bulk:bulkBatch')]: '/docs/portal/Bulk.html',
    [getLink('ut-bulk:bulkBatchDebit')]: '/docs/portal/BulkDebitMaker.html',
    [getLink('ut-bulk:bulkBatchCredit')]: '/docs/portal/BulkCreditMaker.html',
    [getLink('ut-bulk:bulkBatchCreditMerchants')]: '/docs/portal/BulkCreditsMerchant.html',
    // TODO: Remove these routes when registerig routes in ut-bulk-payment are fixed
    [`/${getStrippedLink('ut-bulk:bulkBatch')}`]: '/docs/portal/Bulk.html',
    [`/${getLink('ut-bulk:bulkBatchDebit')}`]: '/docs/portal/BulkDebitMaker.html',
    [`/${getLink('ut-bulk:bulkBatchCredit')}`]: '/docs/portal/BulkCreditMaker.html',
    [`/${getLink('ut-bulk:bulkBatchCreditMerchants')}`]: '/docs/portal/BulkCreditsMerchant.html'
};

export const getDocsUrl = (location) => {
    const specialWords = ['edit', 'validate', 'approve', 'create'];
    specialWords.forEach(word => {
        if (location.indexOf(`/${word}/`) > -1) {
            const index = location.indexOf(`/${word}/`);
            location = location.substr(0, index + `/${word}`.length);
        }
    });

    return mapping[location] || mapping._notFoundRoute;
};
