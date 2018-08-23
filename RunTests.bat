docker container run --rm --network="host" -v "%cd%/Tests":/usr/src/app/Tests williamsault/protractor:latest
docker stop allure
timeout 4
start chrome --new-window "http://localhost:8800"
pause