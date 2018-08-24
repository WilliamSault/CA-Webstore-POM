#!/bin/sh
# run the tests
docker container run --rm --network="host" -v "$(PWD)/Tests":/usr/src/app/Tests williamsault/protractor:latest
# Stop existing performance tests
docker stop allure
# Create the report and host results on port 8800
docker container run --rm -d --name allure -p 8800:8800 -v  "${PWD}/Tests/allure-results":/allure-results williamsault/allure

