# growthland-api

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)

## Install SQL Server connector

npm install loopback-connector-mssql --save

## Create Datasource and fill wizard

lb4 datasource

## Compile project before discover (inverse engineering data model)

npm run build

## Create models for all entities from inverse Enginnering using SQL Server datasource and schema

lb4 discover --all --schema PUBLISHER

## Create Repositories from models

lb4 repository

## Create Controller for each Repository select controller

lb4 controller GenCliente

## Start project

npm start
