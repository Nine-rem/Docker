#!/bin/sh

export MYSQL_PASSWORD=$(cat /run/secrets/mysql_password)
export MYSQL_ROOT_PASSWORD=$(cat /run/secrets/mysql_root_password)

exec node index.js
