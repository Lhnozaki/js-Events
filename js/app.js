//Make this page sing using events or event listeners for the exercises below.

//1. There are no mistakes, only happy accidents.
/*Create a function named `moreTrees` that will invoke the function after clicking on the button.

The function will add the following content inside the paragraph with the id of `nirvana`.
*/

function moreTrees(){
    nirvana.innerHTML = bliss;
}

var bliss = "Let's put some happy little bushes on the other side now. Anything you want to do you can do here. Trees cover up a multitude of sins. If you don't like it - change it. It's your world. Maybe there's a happy little waterfall happening over here."


//2. Less is More
/*Create a function named `lessContent` that will invoke the function after clicking on the button.

The function will hide the contents in the pargraph with the id of `less`.*/

function lessContent(){
    less.style.display = 'none';
}

//3. Edward (エドワード)
/*Create a function named `bling` that will change the text in the paragraph of `worm` after hovering over it. Use the style guide below.

Style Guide:
font size: 28px
font color: #33cc33
border: 3px dotted rosybrown
padding: 10px
*/

function bling() {
    worm.style.fontSize = '28px';
    worm.style.color = '#33cc33';
    worm.style.border = '3px dotted rosyborwn';
    worm.style.padding = '10px';
}

//4. Beet Cakes by Dre
/*Add an event listener to the `recipe` button that will display the missing ingredient in the paragraph of `ingredient` after clicking on the button*/

var missing = "1 Big ol' beet";

var four = document.getElementById('recipe');
four.addEventListener('click', getRecipe);

function getRecipe() {
    var beets = document.createElement('li');
    beets.innerHTML = missing;
    beets.style.fontStyle = 'italic';
    beets.style.color = '#864747';
    ingredient.appendChild(beets);
}


//5. Pug Life
/*Add an event listener to the img element `puggy` that will rollover a new image after hovering over it.*/

// Use this for the new image:
// 'https://media.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif'

puggy.addEventListener('mouseover', change);

function change() {
    puggy.src = 'https://media.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif';
}

//6. DevLeague Lunch Wagon
/*Add an event listener to the `menu` div element that will display and hide the dessert item after clicking on 'Today's Special'*/

menu.addEventListener('click', showDesserts);

function showDesserts(){
    if(dessert.style.display === 'block'){
        dessert.style.display = 'none';
    }else{
        dessert.style.display = 'block';
    }
}

//7. The Purple Monster
/*Add an event listener to the `bio` paragraph element that will display Grimace's name, sign and hobbies after clicking on the paragraph element. Hint, you'll need to create new elements for each object property. Apppend these new elements into the `bio` paragraph element.*/

var grimace = {
    name: 'Grimace',
    age: 47,
    sign: 'Scorpio',
    bloodtype: 'O postive',
    hobbies: ['knitting', 'scrapbooking', 'mixed martial arts']
};

bio.addEventListener('click', monsterAppear);

function monsterAppear(){
    var gName = document.createElement('li');
    gName.innerHTML = 'name: ' + grimace.name;
    bio.appendChild(gName);

    var gAge = document.createElement('li');
    gAge.innerHTML = 'age: ' + grimace.age;
    bio.appendChild(gAge);

    var gSign = document.createElement('li');
    gSign.innerHTML = 'sign: ' + grimace.sign;
    bio.appendChild(gSign);

    var gBloodType = document.createElement('li');
    gBloodType.innerHTML = 'bloodtype: ' + grimace.bloodtype;
    bio.appendChild(gBloodType);

    var gHobbies = document.createElement('li');
    gHobbies.innerHTML = 'hobbies: ' + grimace.hobbies;
    bio.appendChild(gHobbies);
}

//8. Fortune Cookie
/*Add an event listener to the `fortune` button that will generate a random message in the `showFortune` h3 element after clicking on the button*/

var messages = ["That wasn't chicken.", "The fortune you seek is in another cookie.", "Tell your friends about DevLeague Prep.", "You will be doing many events tonight.", "Don't let statistics do a number on you.", "Buy your instructor a drink and receive double fortune.", "Is a turtle without a shell naked or homeless?"];

fortune.addEventListener('click', randomFortune);

function randomFortune(){
    var wisdom = messages[Math.floor(Math.random()* messages.length)];
    showFortune.innerHTML = wisdom;
}


//9. Open Sesame
/*Add an event listener to the `secret` input element that will capitalize letter inputs in the form. Hint, you'll be using the keyup event*/

secret.addEventListener('keyup', eight);

function eight(){
    secret.value = secret.value.toUpperCase();
}