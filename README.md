# Mentoring Done Right

## Installation
The app was developed and tested on these versions:
```
node v8.1.4
yarn v0.24.6
```

Get started by running `git clone`.
Then create `config/config.env` with the template listed below.
From the root directory run `yarn install`. It will install the dependencies in `/client` as well.

### Config file
**config/config.env**
APP_NAME=mentoring-done-right
ENV=development
PORT=3013
PG_HOST=localhost
PG_PORT=5432
PG_USER=mentoring_admin
PG_PASSWORD=
PG_DB=mentoring_db
TZ=utc
COOKIE_SECRET=
COOKIE_DAYS_TOEXPIRE=90

**client/config/config.env**
PORT=3014

### DB Setup
Set up a PostgreSQL DB (version 9.6 or greater), then create a database:
```sql
CREATE DATABASE mentoring_db WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION LIMIT = -1;
REVOKE ALL ON DATABASE mentoring_db FROM public;
```
Then, create an admin user and set its permissions:
```sql
CREATE ROLE mentoring_admin LOGIN PASSWORD 'secure_password';
GRANT CONNECT ON DATABASE mentoring_db TO mentoring_admin;
```
For RDS/Google-Cloud, grant mentoring_admin to the default user (postgres):
```sql
GRANT mentoring_admin TO postgres WITH ADMIN OPTION;
```
Then, create a schema with the admin user as its owner:
```sql
CREATE SCHEMA mentoring AUTHORIZATION mentoring_admin;
SET search_path = mentoring;
ALTER ROLE mentoring_admin IN DATABASE mentoring_db SET search_path = mentoring;
GRANT USAGE, CREATE ON SCHEMA mentoring TO mentoring_admin;
```
Then, import a snapshot, or create the essential tables using the `db_migrations/latest.sql` script.


## Development
This repo contains both the server and the clienr for the appilcation.
The server entrypoint is `/api/Server.js`, and the client entrypoint is `/client/src/index.js`.
In general, the API base-URL is `/api/`, and the app is served from `/app`.

### Server
When developing the API, it's enough to run the server only. Notice that it will serve the compiled client files, so if you plan to use the client make sure you run the build.

`yarn start`
_Optional:_ `yarn client-build`

### Client
When developing the client, it's best to run this for auto-recompiling:
`yarn client-dev`

## Deployment
yarn client-build

## Tests
yarn test
yarn test:api
yarn test:client

Create a test db for e2e tests:
```sql
CREATE DATABASE mentoring_test_db WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION LIMIT = -1;
REVOKE ALL ON DATABASE mentoring_test_db FROM public;
GRANT ALL ON DATABASE mentoring_test_db TO mentoring_admin;
GRANT mentoring_admin TO postgres WITH ADMIN OPTION;
```

## Views
/

## API

### endpoints:

### Authentication

### Issues

### TODO
- remove past sessions tab - show all info in new session
- accelerator dashboard
V add looking for tab in startup page
- create startup/mentor/accelerator flows
- start up / mentor survey sent from accelerator
