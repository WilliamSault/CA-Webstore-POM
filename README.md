# Protractor-ARD-Webstore-Demo

A project which will allow you to easliy get up and running using ARD and automation

## Prerequisite

You must have docker installed. Vist <https://www.docker.com/> for more information.

CA ARD must be installed if editing the `.vtf` files

## Setup

First, you need to run the selenium server by executing the docker-compose file from the terminal

```bash
docker-compose up
```

The selenium hub will then be running on `port 4444` and the CA webstore will be accessible on `port 8080`.

## Running your own tests

To run the test cases agianst the website, map the volume `/usr/src/app/Tests` to a folder with your tests. To execute the tests you must include `conf.js` which details the specs of the test. Examples are contiained within the `/Tests` folder.

```bash
docker container run --rm --network="host" -v "PATH/TO/DIR/Tests":/usr/src/app/Tests williamsault/protractor
```

Tests results can be visualised through Allure.

```bash
docker container run --rm --name allure -p 8800:8800 -v  "PATH/TO/DIR/Tests/allure-results":/allure-results williamsault/allure
```

You can do this by running the shell script `RunTests.sh` or `RunTests.sh`

## Cucumber implementation

Feature files can be excuted from the features folder. The step definitions can also be found here. 

In order to change between the normal and cucumber execution. You need to copy and paste the contents of the `conf.cucumber.js` into the `conf.js`. Then execute them as normal.

## Visulising the tests

An extra option is to visualise the test cases being ran. To do this you need a [VNC viewer](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en). I recommend using the chrome extension or, for mulitple desktops at once, download the desktop version.

By default chrome is exposed on `port 5901` and firefox on `port 5902`. No password is required for either.
