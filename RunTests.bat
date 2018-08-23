docker container run --rm --network="host" -v "%cd%/Tests:/usr/src/app/Tests" williamsault/protractor:latest
docker stop allure
docker run --rm -d --name=allure -p 8800:8800 -v "%cd%/Tests/allure-results:/allure-results" williamsault/allure
timeout 4
start chrome --new-window "http://localhost:8800"
pause