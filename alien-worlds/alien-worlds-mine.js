// ==UserScript==
// @name         Alien Worlds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://play.alienworlds.io/inventory
// @icon         https://play.alienworlds.io/alienworlds-missions-favicon.svg
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// Constants
const SLEEP_TIME = 5 * 1000; // 5 seconds
const INITIAL_DELAY = 10 * 1000; // Script starts 10 seconds after the site is launched
const REPEAT_INTERVAL = 8 * 60 * 1000; // Script repeats every 8 minutes

// Variables
let mineButton = document.getElementsByClassName('css-2bpqia');
let submitButton = document.getElementsByClassName('css-1szn3p1');

// Script initialization
setTimeout(mineTLM, INITIAL_DELAY);

// Repeat script
setInterval(mineTLM, REPEAT_INTERVAL);

// Utility function
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Main script logic
async function mineTLM() {
    try {
        if (mineButton[0].textContent === 'Mine') {
            mineButton[0].click();
        }

        await sleep(SLEEP_TIME);

        if (submitButton[0].textContent === 'Submit') {
            submitButton[0].click();
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
