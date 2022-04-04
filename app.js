const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
let counter = 0;
let firstColor = '';
let secondColor = '';
let firstPanel = '';
let secondPanel = '';

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
    counter++;
    panelColor = event.target.classList.value;

    if(counter === 1){
        event.target.style.backgroundColor = panelColor;
        firstColor = panelColor;
        firstPanel = event.target;
    } 
    else if(counter === 2){
        event.target.style.backgroundColor = panelColor;
        secondColor = panelColor;
        secondPanel = event.target;
        setTimeout(resetColors, 1000);
    }

    function resetColors(){
        if ((firstColor != secondColor) || (firstPanel === secondPanel)) {
            firstPanel.style.backgroundColor = '';
            secondPanel.style.backgroundColor = '';
            firstColor = '';
            secondColor = '';
            counter = 0;
        } 
        else if(continueGame(gameContainer.children)){
            firstColor = '';
            secondColor = '';
            counter = 0;
        } else {
            alert('GAME FINISHED. REFRESH PAGE FOR NEW GAME.');
        }

        function continueGame (divArray) {
            for(div of divArray){
                if(div.style.backgroundColor === ''){
                    return true;
                } else{
                    continue;
                }
            }
        }
    }
    console.log(counter);
    console.dir(gameContainer.children);

}

// when the DOM loads
createDivsForColors(shuffledColors);