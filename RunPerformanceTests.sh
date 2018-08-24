#!/bin/sh
cd "${PWD}/PerformanceTests"
# Run performance tests  
docker run -it --rm --network="host" -v "${PWD}":/bzt-configs blazemeter/taurus *.yml | grep "Started data feeding:"