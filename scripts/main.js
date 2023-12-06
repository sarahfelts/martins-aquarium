import { getFish } from './database.js'
import { fishList } from './fishList.js'

const allFish = getFish()
// Import the FishList function from the correct module


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishHTMLElement = document.querySelector('.fishList')


fishHTMLElement.innerHTML = fishList(allFish)


for (const fish of allFish) {
    console.log(fish);
}
