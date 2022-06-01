# UnderTree standard application

## Creating projects based on this template

This is used as a template to start new projects.

In an empty folder named `impl-*` run:

```bash
npm init ut
```

## Development rules

Follow the rules and patterns described in:

- [Composable microservices](https://github.com/softwaregroup-bg/ut-run/blob/master/microservices.md)
- [Standard structure of UT microservice module](https://github.com/softwaregroup-bg/ut-microservice)
- [Software development rules](https://confluence.softwaregroup.com/display/RD/Software+Engineering+Rules)

## Project links

- [Skype chat](https://join.skype.com/kCjJp7cig98r)
- [Continuous Integration (Jenkins)](https://jenkins.softwaregroup.com/job/ut5impl/job/impl-application/)
  [![Build Status](https://jenkins.softwaregroup.com/buildStatus/icon?job=ut5impl/impl-application/master)](https://jenkins.softwaregroup.com/job/ut5impl/job/impl-application/job/master/)
- [Continuous Deployment (Azure DevOps)](https://dev.azure.com/sg-main/env-application/_build)
  [![Build Status](https://dev.azure.com/sg-main/env-application/_apis/build/status/env-application?branchName=cisco)](https://dev.azure.com/sg-main/env-application/_build?view=pipelines)
- [Static Code Analysis (SonarQube)](https://sonar.softwaregroup.com/dashboard?id=impl-application%3Aorigin%2Fmaster)
- [Error aggregator (Sentry)](http://sentry.k8s.softwaregroup-bg.com/sentry/application/dashboard/?statsPeriod=1w)

### Staging environment

- [Platform Administration Portal](https://admin.application.k8s.softwaregroup.com/a/browser/admin.html)
- [Self Service Portal](https://service.application.k8s.softwaregroup.com/a/browser/service.html)
- [Unified Solutions Portal](https://solution.application.k8s.softwaregroup.com/a/browser/solution.html)
- [API](https://admin.application.k8s.softwaregroup.com/api)
- [Log console](https://console.application.k8s.softwaregroup.com)
- [Metrics (Grafana)](http://grafana.k8s.softwaregroup-bg.com/d/ut/ut-performance-metrics?orgId=1&var-Service=All&var-Implementation=application)
- [Logs (Kibana)](http://kibana.k8s.softwaregroup-bg.com/app/discover#/?_g=(time:(from:now-1h,to:now))&_a=(columns:!(impl,env,level,service,name,context,'@meta.mtid','@meta.opcode','@meta.method',msg),filters:!((meta:(index:ut,key:impl,params:(query:application),type:phrase),query:(match_phrase:(impl:application)))),index:ut))
- [Logs (Loki)](http://grafana.k8s.softwaregroup-bg.com/d/ut-log/ut-log?var-Implementation=application)
- [Graph(Kiali)](http://kiali.k8s.softwaregroup-bg.com/kiali/console/graph/namespaces/?edges=responseTime&graphType=app&namespaces=application&unusedNodes=false&operationNodes=false&injectServiceNodes=true&duration=86400&refresh=0&layout=dagre)

## Development tasks

The instructions below assume VSCode is being used for development

### Install recommended extensions

This project includes a list of VSCode recommended extensions.
Press `F1` and type `show recommended extensions`, then install all the
extensions listed in `workspace recommendations`.

### Create a configuration file

Put a file named `.ut_application_devrc` in project folder or in your home folder.
The file has the following recommended structure:

```yaml
db:
  connection:
    server: database-server
    database: impl-application-firstname-lastname
    user: firstname.lastname
    password: secret-password
  create:
    user: user-that-can-create-db
    password: password-for-the-above-user
utAudit:
  db:
    connection:
      server: database-server
      database: impl-application-firstname-lastname-audit
      user: firstname.lastname
      password: secret-password
    create:
      user: user-that-can-create-db
      password: password-for-the-above-user
utHistory:
  db:
    connection:
      server: database-server
      database: impl-application-firstname-lastname-history
      user: firstname.lastname
      password: secret-password
    create:
      user: user-that-can-create-db
      password: password-for-the-above-user
utEmail:
  settings:
    auth:
      user: email-account-user
      pass: email-account-password
```

### Create the database

Use the `DB` run configuration to create the database

### Build the production front end

Use `npm run build` to create the front end for the 3 portals

### Serve front end with hot reload

Use `npm run start` to start webpack-dev-server which will build
the front end and monitor it for hot reload.

You need to run also the appropriate launch configuration to
start the back end.

When using webpack dev server, portal links and their corresponding back ends are:

- [http://localhost:5000/a/browser/adminPoral.html](
   http://localhost:5000/a/browser/admin.html) + `Admin portal (ut-front-devextreme)`
- [http://localhost:5000/a/browser/admin.html](
   http://localhost:5000/a/browser/admin.html) + `Admin portal`
- [http://localhost:5000/a/browser/solution.html](
   http://localhost:5000/a/browser/solution.html) + `Solution portal`
- [http://localhost:5000/a/browser/service.html](
   http://localhost:5000/a/browser/service.html) + `Service portal`

### Run the back end server

Use one of the `XXX portal` run configuration to run the respective portal
back end

### Run automated tests locally

- To run automated tests, make sure you have configuration file `.ut_application_testrc`
  in the project or home folder that points to appropriate databases.
- Use the `Integration test create db` run configuration to create the databases
  used for tests, if required
- Use the `Integration test` run configuration to run the tests.
  This will prompt for one of the parallel test jobs to be selected.
  This run configuration is trying to be as close as possible to the
  way tests are run in Jenkins.
- Use the `Integration test single` run configuration then type the name of test
  you need to run.

### Jenkins

This project will be automatically discovered by Jenkins and build
jobs will be created for each branch or merge request.

All the created jobs are available [here](https://jenkins.softwaregroup.com/view/ut-impl/view/master/job/ut5impl/job/impl-application/).
