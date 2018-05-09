#!/bin/bash


cp service-account.json station/functions/test/


cd station/functions

npm install tsd -g

npm install --save-dev mocha
npm install --save-dev typescript

tsd install mocha --save

npm install --save-dev firebase-functions-test
npm install --save-dev firebase-admin
npm install --save-dev firebase-functions


