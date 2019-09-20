function askName() {
    var userName = prompt('What\'s your name?');
    return 'Hi ' + userName + '!';
}

function likeDogs() {
    var askAboutDogs = confirm('Are you a dog that likes dogs?');
    var dog = '<img src="https://cdn1.iconfinder.com/data/icons/hand-drawn/100/handdrawn_pup-512.png">';
    if (askAboutDogs === true) {
        var howMany = '';
        while (Number.isInteger(howMany) === false) {
            howMany = Number(prompt('How many dogs are you interested in connecting with?'));
        }
            var result = '';
            for (i=0; i < howMany; i++) {
                count = i + 1;
                result = '<div>' + result + count + dog + '</div>'; 
            }
            return result;        
    }
    else {
        return 'You may want to check out our sister site, Cat Tinder.';
    } 
}