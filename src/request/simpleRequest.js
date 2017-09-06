const request = require("request")

request(
    {
        url: "http://google.com"
    },
    function (error, response) {
        if (error) {
            console.log(error)
        }
        else {
            console.log(response.body)
        }
    }
)