function showLuck() {
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;

    if (name && dob) {
        var randomNum = Math.floor(Math.random() * 100) + 1; // Generates random number between 1 and 100

        // Fetching a random quote from the web (this part can be done using APIs)
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                var quote = data.content;
                var result = "Your Lucky Number is " + randomNum + " <br> '" + quote + "'";
                document.getElementById('form').style.display = 'none';
                document.getElementById('result').innerHTML = result;
                document.getElementById('result').style.display = 'block';
                document.getElementById('backButton').style.display = 'block';
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
}

function goBack() {
    document.getElementById('form').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
}
