// ==UserScript==
// @name         Taco Brigade Claimer
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  I will work for you!
// @author       Myself
// @match        https://app.tacocrypto.io/brigade
// @icon         https://tacocrypto.io/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// Constants
const SLEEP_TIME = 10 * 1000; // 10 seconds
const INITIAL_DELAY = 10 * 1000; // Script starts 10 seconds after the site is launched
const REPEAT_INTERVAL = 180 * 60 * 1000; // Script repeats every 3 hours

// Variables
let count = 0;
let button = document.getElementsByClassName('execute-button');

// Script initialization
setTimeout(claimBrigade, INITIAL_DELAY);

// Repeat script
setInterval(claimBrigade, REPEAT_INTERVAL);

// Utility function
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Main script logic
async function claimBrigade() {
    try {
        let shing = document.getElementsByClassName('coin-label');
        for (let i = 0; i <= 3; i++) {
            button[0].click();
            await sleep(SLEEP_TIME);
        }
        count += 1;
        console.log(
            `Amount of claims: ${count}. Amount of shing: ${shing[2].textContent}`
        );
        if (button[0].textContent === 'EXECUTE') {
            window.location.reload();
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
