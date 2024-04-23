function animateCharacters() {
    var characters = document.getElementById('div1').textContent.split('');
    var div2 = document.getElementById('div2');
    var delay = 4; // Initial delay for odd characters
    var totalDelay = 0; // Total delay for even characters

    for(var i = 1; i < characters.length; i+=2) {
        var charDiv = document.createElement('div');
        charDiv.textContent = characters[i];
        charDiv.classList.add('char');

        var charDivPrev = document.createElement('div');
        charDivPrev.textContent = characters[i-1];
        charDivPrev.classList.add('char');

        totalDelay += delay + i;
        charDiv.style.animationDelay = totalDelay + 's'; // Set animation delay for odd characters

        totalDelay +=  1; // Increase total delay by 1 for even characters
        charDivPrev.style.animationDelay = totalDelay + 's'; // Set animation delay for even characters

        div2.appendChild(charDivPrev);
        div2.appendChild(charDiv);

    }

    var charDiv = document.createElement('div');
    charDiv.textContent = characters[8];
    charDiv.classList.add('char');
    totalDelay += delay + i;
    charDiv.style.animationDelay = totalDelay + 's'; // Set animation delay for odd characters
    div2.appendChild(charDiv);

    // Show div1 after animation setup to trigger animations
    document.getElementById('div1').style.display = 'none'; // Hide div1 after animation setup
}

var button = document.getElementById("myButton");
button.addEventListener("click", function() {
    animateCharacters();
});
