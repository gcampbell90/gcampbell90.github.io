function onGet() {
    const url = "https://raw.githubusercontent.com/gcampbell90/gcampbell90.github.io/1cf45bcd1a8ae3da9852b0a08392861f121a2787/models/titanic.gltf";
    var headers = {}

    fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.error)
            }
            return response.json();
        })
        .then(data => {
            console.log(data.messages);
            document.getElementById('city').value = data.messages;
        })
        .catch(function (error) {
            document.getElementById('city').value = error;
        });
}