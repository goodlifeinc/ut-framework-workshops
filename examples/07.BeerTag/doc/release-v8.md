# impl-application version 8 release notes

## Major updates

Release notes:

- [ut-user@10](https://git.softwaregroup.com/ut5/ut-user/blob/master/doc/release-v10.md)
- [ut-customer@9](https://git.softwaregroup.com/ut5/ut-customer/blob/master/doc/release-v9.md)
- [ut-document@8](https://git.softwaregroup.com/ut5/ut-document/blob/master/doc/release-v8.md)
- [ut-report@9](https://git.softwaregroup.com/ut5/ut-report/blob/master/doc/release-v9.md)
- [ut-bulk-payment@4](https://git.softwaregroup.com/ut5/ut-bulk-payment/blob/master/doc/release-v4.md)

## Breaking Changes

Check the release notes of the major updates

## Upgrade Steps

Check the release notes of the major updates

## New Features

## Bug Fixes

## Improvements

- Zero vulnerabilities reported by `npm audit`
- Removed `.scannerwork` folder from the published package
- Included integration tests for `ut-transfer`
- Changed `Jenkinsfile` `buildimage` to point to nexus-dev
- Removed unused bio mock code
- Simplified configuration which uses defaults from config layer in modules:
  - [server/common.js](../server/common.js)
  - [server/db.json](../server/db.json)
  - [server/dev.json](../server/dev.json)
  - [server/test.json](../server/test.json)
  - [server/uat.json](../server/uat.json)
  - [test/lib/appConfig.js](../test/lib/appConfig.js)
- Individual log files for automated tests ([details](https://git.softwaregroup.com/ut5impl/impl-application/commit/c86604129ee03890076882d555004a7db2552b69#954c9360d2edfc9cf81bf844f63b8b72b88fa6d8))

## Full change set

[https://git.softwaregroup.com/ut5impl/impl-application/compare/v7.12.1...v8.0.0](https://git.softwaregroup.com/ut5impl/impl-application/compare/v7.12.1...v8.0.0)
