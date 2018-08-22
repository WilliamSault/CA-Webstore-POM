# Protractor-ARD-Webstore-Demo

A project which will allow you to easliy get up and running using ARD and automation

## Prerequisite

You must have docker installed. Vist <https://www.docker.com/> for more information.

CA ARD must be installed if editing the `.vtf` files

## Setup

First, you need to run the selenium server by executing the docker-compose file from the terminal

```bash
docker-compose
```

## Running your own tests

You can of course run your own scripts. To do this map the volume `/usr/src/app/Tests` to a folder with your tests. To execute the tests you must include `conf.js` which details the specs of the test.

```bash
docker container run --rm --network="host" -v "$(PWD)/Tests":/usr/src/app/Tests williamsault/protractor:latest
```

Tests results can be visualised through Allure.

```bash
docker container run --rm -d --name allure -p 8800:8800 -v  "${PWD}/Tests/allure-results":/allure-results williamsault/allure
```

You can do this by running the shell script `RunTests.sh`

## Visulising the tests

An extra option is to visualise the test cases being ran. To do this you need a [VNC viewer](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en). I recommend using the chrome extension or, for mulitple desktops at once, download the desktop version.

By default chrome is exposed on `port 5901` and firefox on `port 5902`. No password is required for either.