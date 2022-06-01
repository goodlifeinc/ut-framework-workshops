import {getLink} from 'ut-front-react/routerHelper';

const getStrippedLink = (route) => {
    let link = getLink(route);
    if (!link) {
        // If route has not been registered return empty string as fallback
        return '';
    }
    const index = link.indexOf('/:');
    if (index > 0) {
        link = link.substr(0, index);
    }
    return link;
};

const mapping = {
    _notFoundRoute: '/docs/admin/AccessingtheSystem.html',
    '/': '/docs/admin/UserInterface.html',
    [getLink('ut-user:userProfile')]: '/docs/admin/ManagingUserProfile.html',
    [getLink('ut-user:home')]: '/docs/admin/UserInterface.html',
    // Content
    [getLink('ut-core:items')]: '/docs/admin/ContentItemsTranslations.html',
    [getLink('ut-core:itemCreate')]: '/docs/admin/ContentItemsTranslations.html',
    [getStrippedLink('ut-core:itemEdit')]: '/docs/admin/ContentItemsTranslations.html',
    // Units
    [getLink('ut-user:businessUnits')]: '/docs/admin/BusinessUnitsManagement.html',
    [getLink('ut-user:businessUnitsCreate')]: '/docs/admin/CreatingBusinessUnit.html',
    [getStrippedLink('ut-user:businessUnitsEdit')]: '/docs/admin/EditingBusinessUnit.html',
    [getStrippedLink('ut-user:businessUnitsValidate')]: '/docs/admin/RecordValidation.html',
    // Network
    [getLink('ut-agent:networks')]: '/docs/admin/AgencyMerchantNetworks.html',
    [getLink('ut-agent:networkCreate')]: '/docs/admin/CreatingNetwork.html',
    [getStrippedLink('ut-agent:networkEdit')]: '/docs/admin/EditingNetwork.html',
    [getStrippedLink('ut-agent:networkApprove')]: '/docs/admin/RecordValidation.html',
    // Users
    [getLink('ut-user:users')]: '/docs/admin/UsersManagement.html',
    [getLink('ut-user:userCreate')]: '/docs/admin/CreatingUser.html',
    [getStrippedLink('ut-user:userEdit')]: '/docs/admin/EditingUser.html',
    [getStrippedLink('ut-user:userValidate')]: '/docs/admin/RecordValidation.html',
    // Roles
    [getLink('ut-user:roles')]: '/docs/admin/RolesPermissionsManagement.html',
    [getLink('ut-user:roleCreate')]: '/docs/admin/CreatingRole.html',
    [getStrippedLink('ut-user:roleEdit')]: '/docs/admin/EditingRole.html',
    [getLink('ut-user:accesspermissions')]: '/docs/admin/PermissionsBulkManagement.html',
    // Access
    [getLink('ut-user:access')]: '/docs/admin/AccessPoliciesManagement.html',
    [getLink('ut-user:accesspolicy')]: '/docs/admin/AccessPoliciesManagement.html',
    [getLink('ut-user:accesspolicyCreate')]: '/docs/admin/CreatingAccessPolicy.html',
    [getStrippedLink('ut-user:accesspolicyEdit')]: '/docs/admin/EditingAccessPolicy.html',
    // System
    [getLink(('ut-user:systemerrormessages'))]: '/docs/admin/ErrorMessages.html',
    [getLink('ut-user:systemexternalsystems')]: '/docs/admin/ExternalSystemIntegrations.html',
    [getStrippedLink('ut-user:createExternalSystemConfig')]: '/docs/admin/ExternalSystemIntegrations.html',
    [getStrippedLink('ut-user:editExternalSystemConfig')]: '/docs/admin/ExternalSystemIntegrations.html',
    [getLink('ut-system:systemexternalsystemcredentials')]: '/docs/admin/ExternalSystemCredentials.html',
    [getLink('ut-transfer:partners')]: '/docs/admin/TransferPartnersandCardIssuers.html',
    // Reports
    [getLink('ut-report:reports')]: '/docs/admin/AccessingtheSystem.html',
    [getLink('ut-report:report')]: '/docs/admin/AccessingtheSystem.html',
    [getLink('ut-report:report:transfer')]: '/docs/admin/AccessingtheSystem.html', // to be added
    // Mirrors
    // [getLink('ut-mirrors:reports')]: '/docs/admin/Reports.html',
    // Rules
    // [getLink('ut-rule:home')]: '/docs/admin/RulesManagement.html',
    [getLink('ut-customer:kyc')]: '/docs/admin/KYCConfiguration.html',
    [getStrippedLink('ut-customer:kycCreate')]: '/docs/admin/CreatingKYCLevel.html',
    [getStrippedLink('ut-customer:kycEdit')]: '/docs/admin/EditingKYCLevel.html',
    [getLink('ut-rule:rules')]: '/docs/admin/FeesCommissionsandLimitsFCL.html',
    [getStrippedLink('ut-rule:create')]: '/docs/admin/CreatingFCLRule.html',
    [getStrippedLink('ut-rule:edit')]: '/docs/admin/EditingFCLRule.html',
    // ledger
    [getLink('ut-ledger:products')]: '/docs/admin/ProductCatalog.html',
    [getStrippedLink('ut-ledger:productEdit')]: '/docs/admin/EditingProduct.html',
    [getStrippedLink('ut-ledger:productValidate')]: '/docs/admin/RecordValidation.html',
    [getLink('ut-ledger:productCreate')]: '/docs/admin/CreatingProduct.html',
    [getLink('ut-ledger:accounts')]: '/docs/admin/InternalAccounts.html',
    [getLink('ut-ledger:accountCreate')]: '/docs/admin/CreatingInternalAccount.html',
    [getStrippedLink('ut-ledger:accountEdit')]: '/docs/admin/EditingInternalAccount.html',
    [getStrippedLink('ut-ledger:accountApprove')]: '/docs/admin/RecordValidation.html',
    // Risk & Fraud
    [getLink('ut-audit:auditActionConfiguration')]: '/docs/admin/AuditLogConfiguration.html',
    [getLink('ut-audit:auditLogReport')]: '/docs/admin/AccessingtheSystem.html',
    // Customer
    [getLink('ut-customer:home')]: '/docs/portal/Customers.html',
    [getLink('ut-customer:customers')]: '/docs/portal/Customers.html',
    [getStrippedLink('ut-customer:customerCreate')]: '/docs/portal/Customers.html',
    [getStrippedLink('ut-customer:customerEdit')]: '/docs/portal/Customers.html',
    [getStrippedLink('ut-customer:customerApprove')]: '/docs/portal/Customers.html',
    [getLink('ut-customer:customerReferrals')]: '/docs/portal/ReferralsManagement.html',
    // Bulk
    [getLink('ut-bulk:bulkBatch')]: '/docs/portal/BulkDebitMaker.html',
    [getStrippedLink('ut-bulk:bulkBatchDebit')]: '/docs/portal/BulkDebitMaker.html',
    [getStrippedLink('ut-bulk:bulkBatchCredit')]: '/docs/portal/BulkCreditMaker.html',
    [getStrippedLink('ut-bulk:bulkBatchCreditMerchants')]: '/docs/portal/BulkCreditsMerchant.html'
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
