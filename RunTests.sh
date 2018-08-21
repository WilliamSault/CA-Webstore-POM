#!/bin/sh
docker container run --rm --network="host" -v "$(PWD)/Tests":/usr/src/app/Tests williamsault/protractor:latest

