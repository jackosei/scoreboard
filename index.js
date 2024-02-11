//Declaration of global scope variables
const homeScore = document.getElementById("homescore")
const guestScore = document.getElementById("guestscore")
let homePoint = 0
let guestPoint = 0

// Function to add points to teams when relative buttons are clicked
function addPoint(button, point) {
    let = getScoreEl = button.parentElement.previousElementSibling
    
    if(getScoreEl && getScoreEl.id){
        scoreElId = getScoreEl.id
        if (scoreElId == "homescore"){
            homePoint += point
            getScoreEl.textContent = parseInt(homePoint)
        } else if (scoreElId == "guestscore") {
            guestPoint += point
            getScoreEl.textContent = parseInt(guestPoint)
        }
    } else {
        console.log("no id found")
    }
}

// Function to clear scores
function clearScores() {
    homePoint = 0
    homeScore.textContent = "0"
    guestPoint = 0
    guestScore.textContent = "0"
}

//Timer Function
let ticker; // Declare ticker here
let timeInSecs = 0;
let paused = false;
let remainingTime = 0;

function tick() {
    if (!paused) {
        let secs = timeInSecs;
        if (secs > 0) {
            timeInSecs--;
        } else {
            clearInterval(ticker);
            // startTimer(5 * 60); // 5 minutes in seconds
        }

        let mins = Math.floor(secs / 60);
        secs %= 60;
        let pretty = ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;

        document.getElementById("countdown").innerHTML = pretty;
    }
}

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    clearInterval(ticker);
    ticker = setInterval(tick, 1000); // Remove 'let' here
    tick();
    paused = false;
}

function pauseTimer() {
    paused = true;
    remainingTime = timeInSecs;
    clearInterval(ticker);
    
    // Hide Pause & Start Button if they are visible
    if (window.getComputedStyle(endgame).display === "none") {
        endgame.style.display = "block";
        pausegame.style.display = "none";
        resumegame.style.display = "block";
        startgame.style.display = "none";
    }
}

function resumeTimer() {
    paused = false;
    timeInSecs = remainingTime;
    ticker = setInterval(tick, 1000);
    
    // Hide Pause & Start Button if they are visible
    if (window.getComputedStyle(startgame).display === "none") {
        endgame.style.display = "none";
        pausegame.style.display = "block";
        resumegame.style.display = "none";
        startgame.style.display = "block";
    }
}

function resetTimer() {
    paused = false;
    timeInSecs = 0;
    clearInterval(ticker);
    tick(); // Update the UI to display "00:00"
    
    // Hide Pause & Start Button if they are visible
    if (window.getComputedStyle(pausegame).display === "none") {
        endgame.style.display = "none";
        pausegame.style.display = "block";
        resumegame.style.display = "none";
        startgame.style.display = "block";
    }
}
