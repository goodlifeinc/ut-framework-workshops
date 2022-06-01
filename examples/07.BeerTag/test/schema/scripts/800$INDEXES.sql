IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_actorHierarchy_predicate_object')
    CREATE NONCLUSTERED INDEX [IX_actorHierarchy_predicate_object] ON [core].[actorHierarchy] ([predicate], [object]) INCLUDE ([subject])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_actorHierarchy_predicate_object' AND ic.index_column_id = 1) != 'predicate'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_actorHierarchy_predicate_object' AND ic.index_column_id = 2) != 'object'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_actorHierarchy_predicate_object' AND c.name = 'subject')
    BEGIN
        DROP INDEX [IX_actorHierarchy_predicate_object] ON [core].[actorHierarchy]

        CREATE NONCLUSTERED INDEX [IX_actorHierarchy_predicate_object] ON [core].[actorHierarchy] ([predicate], [object]) INCLUDE ([subject])
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_itemName_itemTypeId_itemSyncId')
    CREATE NONCLUSTERED INDEX [IX_itemName_itemTypeId_itemSyncId] ON [core].[itemName] (itemTypeId ASC, itemSyncId ASC) INCLUDE (itemNameId, itemName, itemCode, countryId, organizationId, isEnabled)
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_itemName_itemTypeId_itemSyncId' AND ic.index_column_id = 1) != 'itemTypeId'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_itemName_itemTypeId_itemSyncId' AND ic.index_column_id = 2) != 'itemSyncId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_itemName_itemTypeId_itemSyncId' AND c.name = 'itemNameId')

        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_itemName_itemTypeId_itemSyncId' AND c.name = 'itemName')

        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_itemName_itemTypeId_itemSyncId' AND c.name = 'itemCode')

        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_itemName_itemTypeId_itemSyncId' AND c.name = 'countryId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_itemName_itemTypeId_itemSyncId' AND c.name = 'organizationId')

        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_itemName_itemTypeId_itemSyncId' AND c.name = 'isEnabled')

    BEGIN
        DROP INDEX [IX_itemName_itemTypeId_itemSyncId] ON [core].[itemName]

        CREATE NONCLUSTERED INDEX [IX_itemName_itemTypeId_itemSyncId] ON [core].[itemName] (itemTypeId ASC, itemSyncId ASC) INCLUDE (itemNameId, itemName, itemCode, countryId, organizationId, isEnabled)
    END
END


IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_account_actorId')
    CREATE NONCLUSTERED INDEX [IX_account_actorId] ON [customer].[account] ([actorId]) INCLUDE (
        [accountTypeId],
        [balance],
        [accountNumber],
        [accountName],
        [statusId],
        [currencyId],
        [accountLastTrx],
        [accountLastTrxOn],
        [accountOpenedOn])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_account_actorId' AND ic.index_column_id = 1) != 'actorId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'accountTypeId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'balance')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'accountNumber')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'accountName')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'statusId')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'currencyId')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'balance')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'accountLastTrx')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'accountLastTrxOn')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_actorId' AND c.name = 'accountOpenedOn')
    BEGIN
        DROP INDEX [IX_account_actorId] ON [customer].[account]

        CREATE NONCLUSTERED INDEX [IX_account_actorId] ON [customer].[account] ([actorId]) INCLUDE ([accountTypeId], [balance], [accountNumber],
        [accountName],
        [statusId],
        [currencyId],
        [accountLastTrx],
        [accountLastTrxOn],
        [accountOpenedOn])
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_account_accountTypeId')
    CREATE NONCLUSTERED INDEX [IX_account_accountTypeId] ON [customer].[account] ([accountTypeId]) INCLUDE ([actorId], [balance])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_account_accountTypeId' AND ic.index_column_id = 1) != 'accountTypeId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_accountTypeId' AND c.name = 'actorId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_account_accountTypeId' AND c.name = 'balance')
    BEGIN
        DROP INDEX [IX_account_accountTypeId] ON [customer].[account]

        CREATE NONCLUSTERED INDEX [IX_account_accountTypeId] ON [customer].[account] ([accountTypeId]) INCLUDE ([actorId], [balance])
    END
END



IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_address_actorId')
    CREATE NONCLUSTERED INDEX [IX_address_actorId] ON [customer].[address] ([actorId])
ELSE
BEGIN
    IF (SELECT
        c.name
    FROM
        sys.indexes i
        JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
        JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
    WHERE i.name = 'IX_address_actorId' AND ic.index_column_id = 1) != 'actorId'
    BEGIN
        DROP INDEX [IX_address_actorId] ON [customer].[address]

        CREATE NONCLUSTERED INDEX [IX_address_actorId] ON [customer].[address] ([actorId])
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_address_statusId_addressTypeId')
    CREATE NONCLUSTERED INDEX [IX_address_statusId_addressTypeId] ON [customer].[address]([statusId] ASC, [addressTypeId] ASC) INCLUDE ( [actorId], [value])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_address_statusId_addressTypeId' AND ic.index_column_id = 1) != 'statusId'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_address_statusId_addressTypeId' AND ic.index_column_id = 2) != 'addressTypeId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_address_statusId_addressTypeId' AND c.name = 'actorId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_address_statusId_addressTypeId' AND c.name = 'value')
    BEGIN
        DROP INDEX [IX_address_statusId_addressTypeId] ON [customer].[address]

        CREATE NONCLUSTERED INDEX [IX_address_statusId_addressTypeId] ON [customer].[address]([statusId] ASC, [addressTypeId] ASC) INCLUDE ( [actorId], [value])
    END
END


IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_address_statusId_addressTypeId')
    CREATE NONCLUSTERED INDEX [IX_address_statusId_addressTypeId] ON [customer].[address]([statusId] ASC, [addressTypeId] ASC) INCLUDE ( [actorId], [value])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_address_statusId_addressTypeId' AND ic.index_column_id = 1) != 'statusId'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_address_statusId_addressTypeId' AND ic.index_column_id = 2) != 'addressTypeId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_address_statusId_addressTypeId' AND c.name = 'actorId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_address_statusId_addressTypeId' AND c.name = 'value')
    BEGIN
        DROP INDEX [IX_address_statusId_addressTypeId] ON [customer].[address]

        CREATE NONCLUSTERED INDEX [IX_address_statusId_addressTypeId] ON [customer].[address]([statusId] ASC, [addressTypeId] ASC) INCLUDE ( [actorId], [value])
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_customer_customerNumber_organizationId')
    CREATE NONCLUSTERED INDEX [IX_customer_customerNumber_organizationId] ON [customer].[customer] ([customerNumber], organizationId) INCLUDE (actorId)
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_customer_customerNumber_organizationId' AND ic.index_column_id = 1) != 'customerNumber'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_customer_customerNumber_organizationId' AND ic.index_column_id = 2) != 'organizationId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_customerNumber_organizationId' AND c.name = 'actorId')
    BEGIN
        DROP INDEX [IX_customer_customerNumber_organizationId] ON [customer].[customer]

        CREATE NONCLUSTERED INDEX [IX_customer_customerNumber_organizationId] ON [customer].[customer] ([customerNumber], organizationId) INCLUDE (actorId)
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_customer_customerNumber_countryId')
BEGIN
    CREATE NONCLUSTERED INDEX [IX_customer_customerNumber_countryId] ON [customer].[customer] ([customerNumber], [countryId]) INCLUDE ([actorId])
END
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_customer_customerNumber_countryId' AND ic.index_column_id = 1) != 'customerNumber'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_customer_customerNumber_countryId' AND ic.index_column_id = 2) != 'countryId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_customerNumber_countryId' AND c.name = 'actorId')
    BEGIN
        DROP INDEX [IX_customer_customerNumber_countryId] ON [customer].[customer]
        CREATE NONCLUSTERED INDEX [IX_customer_customerNumber_countryId] ON [customer].[customer] ([customerNumber], [countryId]) INCLUDE ([actorId])
    END
END


IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_customer_organizationId')
    CREATE NONCLUSTERED INDEX [IX_customer_organizationId] ON [customer].[customer] ([organizationId]) INCLUDE ([actorId], [countryId], [customerNumber], [stateId], [prospectClient],
    [adminfee], [udf], [loanCycle], [industryId], [sectorId])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_customer_organizationId' AND ic.index_column_id = 1) != 'organizationId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'actorId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'countryId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'customerNumber')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'stateId')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'prospectClient')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'adminfee')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'udf')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'loanCycle')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'industryId')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_customer_organizationId' AND c.name = 'sectorId')
    BEGIN
        DROP INDEX [IX_customer_organizationId] ON [customer].[customer]

        CREATE NONCLUSTERED INDEX [IX_customer_organizationId] ON [customer].[customer] ([organizationId]) INCLUDE ([actorId], [countryId], [customerNumber], [stateId], [prospectClient],
        [adminfee], [udf], [loanCycle], [industryId], [sectorId])
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_phone_statusId_phonetTypeId')
    CREATE NONCLUSTERED INDEX [IX_phone_statusId_phonetTypeId] ON [customer].[phone]([statusId] ASC, [phoneTypeId] ASC) INCLUDE ([actorId], [phoneNumber])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_phone_statusId_phonetTypeId' AND ic.index_column_id = 1) != 'statusId'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_phone_statusId_phonetTypeId' AND ic.index_column_id = 2) != 'phoneTypeId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_phone_statusId_phonetTypeId' AND c.name = 'actorId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_phone_statusId_phonetTypeId' AND c.name = 'phoneNumber')
    BEGIN
        DROP INDEX [IX_phone_statusId_phonetTypeId] ON [customer].[phone]

        CREATE NONCLUSTERED INDEX [IX_phone_statusId_phonetTypeId] ON [customer].[phone]([statusId] ASC, [phoneTypeId] ASC) INCLUDE ([actorId], [phoneNumber])
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_phone_actorId')
    CREATE NONCLUSTERED INDEX [IX_phone_actorId] ON [customer].[phone]([actorId] ASC) INCLUDE ([phoneNumber], [phoneTypeId], [statusId])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_phone_actorId' AND ic.index_column_id = 1) != 'actorId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_phone_actorId' AND c.name = 'phoneNumber')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_phone_actorId' AND c.name = 'phoneTypeId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_phone_actorId' AND c.name = 'statusId')
    BEGIN
        DROP INDEX [IX_phone_actorId] ON [customer].[phone]

        CREATE NONCLUSTERED INDEX [IX_phone_actorId] ON [customer].[phone]([actorId] ASC) INCLUDE ([phoneNumber], [phoneTypeId], [statusId])
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_document_statusId_documentTypeId')
    CREATE NONCLUSTERED INDEX [IX_document_statusId_documentTypeId] ON [document].[document]([statusId] ASC, [documentTypeId] ASC) INCLUDE ([documentId], [documentNumber])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_document_statusId_documentTypeId' AND ic.index_column_id = 1) != 'statusId'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_document_statusId_documentTypeId' AND ic.index_column_id = 2) != 'documentTypeId'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_document_statusId_documentTypeId' AND c.name = 'documentId')
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_document_statusId_documentTypeId' AND c.name = 'documentNumber')
    BEGIN
        DROP INDEX [IX_document_statusId_documentTypeId] ON [document].[document]

        CREATE NONCLUSTERED INDEX [IX_document_statusId_documentTypeId] ON [document].[document]([statusId] ASC, [documentTypeId] ASC) INCLUDE ([documentId], [documentNumber])
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_hash_identifier')
    CREATE NONCLUSTERED INDEX [IX_hash_identifier] ON [user].[hash] ([identifier])
ELSE
BEGIN
    IF (SELECT
        c.name
    FROM
        sys.indexes i
        JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
        JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
    WHERE i.name = 'IX_hash_identifier' AND ic.index_column_id = 1) != 'identifier'
    BEGIN
        DROP INDEX [IX_hash_identifier] ON [user].[hash]

        CREATE NONCLUSTERED INDEX [IX_hash_identifier] ON [user].[hash] ([identifier])
    END
END



IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_hash_actorId_isEnabled')
    CREATE NONCLUSTERED INDEX [IX_hash_actorId_isEnabled] ON [user].[hash] ([actorId], [isEnabled]) INCLUDE ([identifier])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_hash_actorId_isEnabled' AND ic.index_column_id = 1) != 'actorId'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_hash_actorId_isEnabled' AND ic.index_column_id = 1) != 'isEnabled'
        OR
        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_hash_actorId_isEnabled' AND c.name = 'identifier')
    BEGIN
        DROP INDEX [IX_hash_actorId_isEnabled] ON [user].[hash]

        CREATE NONCLUSTERED INDEX [IX_hash_actorId_isEnabled] ON [user].[hash] ([actorId], [isEnabled]) INCLUDE ([identifier])
    END
END
IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_mno_countryId')
    CREATE NONCLUSTERED INDEX [IX_mno_countryId] ON [customer].[mno] (countryId) INCLUDE (ut5Key)
ELSE
BEGIN
    IF NOT EXISTS (SELECT
        1
    FROM
        sys.indexes i
        JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
        JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
    WHERE i.name = 'IX_mno_countryId' AND c.name = 'ut5Key')
    BEGIN
        DROP INDEX [IX_mno_countryId] ON [customer].[mno]
        CREATE NONCLUSTERED INDEX [IX_mno_countryId] ON [customer].[mno] (countryId) INCLUDE (ut5Key)
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_address_actorId_statusId_addressTypeId')
    CREATE NONCLUSTERED INDEX [IX_address_actorId_statusId_addressTypeId] ON [customer].[address] (actorId, statusId, addressTypeId) INCLUDE (value, city, lat, lng)
ELSE
BEGIN
    IF NOT EXISTS (SELECT 1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_address_actorId_statusId_addressTypeId' AND c.name = 'value')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_address_actorId_statusId_addressTypeId' AND c.name = 'city')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_address_actorId_statusId_addressTypeId' AND c.name = 'lat')
        OR NOT EXISTS (SELECT
            1
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_address_actorId_statusId_addressTypeId' AND c.name = 'lng')
    BEGIN
        DROP INDEX [IX_address_actorId_statusId_addressTypeId] ON [customer].[address]
        CREATE NONCLUSTERED INDEX [IX_address_actorId_statusId_addressTypeId] ON [customer].[address] (actorId, statusId, addressTypeId) INCLUDE (value, city, lat, lng)
    END
END

IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_itemTranslation_itemNameId_languageId')
    CREATE NONCLUSTERED INDEX [IX_itemTranslation_itemNameId_languageId] ON [core].[itemTranslation] ([languageId] ASC, [itemNameId] ASC) INCLUDE ([itemNameTranslation])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_itemTranslation_itemNameId_languageId' AND ic.index_column_id = 1) != 'languageId'
        OR
        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_itemTranslation_itemNameId_languageId' AND ic.index_column_id = 2) != 'itemNameId'
        OR

        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_itemTranslation_itemNameId_languageId' AND c.name = 'itemNameTranslation')
    BEGIN
        DROP INDEX [IX_itemTranslation_itemNameId_languageId] ON [core].[itemTranslation]

        CREATE NONCLUSTERED INDEX [IX_itemTranslation_itemNameId_languageId] ON [core].[itemTranslation] ([languageId] ASC, [itemNameId] ASC) INCLUDE ([itemNameTranslation])
    END
END


--index for the flat hiearchy
IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_organizationHierarchyFlat_object')
    CREATE NONCLUSTERED INDEX [IX_organizationHierarchyFlat_object] ON [customer].[organizationHierarchyFlat] ([object]) INCLUDE ([subject])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_organizationHierarchyFlat_object' AND ic.index_column_id = 1) != 'object'
        OR

        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_organizationHierarchyFlat_object' AND c.name = 'subject')
    BEGIN
        DROP INDEX [IX_organizationHierarchyFlat_object] ON [customer].[organizationHierarchyFlat]

        CREATE NONCLUSTERED INDEX [IX_organizationHierarchyFlat_object] ON [customer].[organizationHierarchyFlat] ([object]) INCLUDE ([subject])
    END
END



IF NOT EXISTS(SELECT *
FROM
    sys.indexes
WHERE name = 'IX_actorHierarchyUnapproved_subject_predicate')
    CREATE NONCLUSTERED INDEX [IX_actorHierarchyUnapproved_subject_predicate] ON [core].[actorHierarchyUnapproved] ([subject], [predicate]) INCLUDE ([object], [isDeleted])
ELSE
BEGIN
    IF (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_actorHierarchyUnapproved_subject_predicate' AND ic.index_column_id = 1) != 'subject'
        OR

        (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 0
        WHERE i.name = 'IX_organizationHierarchyFlat_object' AND ic.index_column_id = 2) != 'predicate'
        OR

        NOT EXISTS (SELECT c.name
        FROM
            sys.indexes i
            JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
            JOIN sys.columns c ON C.object_id = I.object_id AND C.column_id = ic.column_id AND IC.is_included_column = 1
        WHERE i.name = 'IX_actorHierarchyUnapproved_subject_predicate' AND c.name = 'subject')
    BEGIN
        DROP INDEX [IX_actorHierarchyUnapproved_subject_predicate] ON [core].[actorHierarchyUnapproved]

        CREATE NONCLUSTERED INDEX [IX_actorHierarchyUnapproved_subject_predicate] ON [core].[actorHierarchyUnapproved] ([subject], [predicate]) INCLUDE ([object], [isDeleted])
    END
END
