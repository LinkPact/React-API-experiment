function sendAPIRequest(target_url) {
    console.log("Requesting URL: " + target_url);

    fetch(target_url, {
        method: "GET",
        heads: {
            "Content-Type": "application/json"
        },
        credentials: "dummy:dummypass"
    })
        .then(response => response.json())
        .then(
            function(responseData) {
                console.log(responseData);
                return responseData;
            },
            function(error) {
                console.log("Problem with operation: " + error.message);
            }
        );
}

function sendAPIRequestClick(event) {
    const target_url = "http://192.168.1.103/app/users/";
    sendAPIRequest(target_url);
}
