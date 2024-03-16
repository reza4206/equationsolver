function showLuck() {
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;

    if (name && dob) {
        var randomNum = Math.floor(Math.random() * 10) + 1; // Generates random number between 1 and 100

        // Fetching a random quote from the web (this part can be done using APIs)
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                var quote = data.content;
                var resultDiv = document.getElementById('result');
                resultDiv.innerHTML = "Your Lucky Number is " + randomNum + " <br> '" + quote + "'";
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    } else {
        alert("Please enter your name and date of birth");
    }
}

function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('result').innerHTML = '';
}
