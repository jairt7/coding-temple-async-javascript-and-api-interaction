// Part of this code was written by ChatGPT because I didn't know how to do it. I did what I could on my own.
function startTimer() {
    let seconds = parseInt(document.getElementById('time').value);
    let countdownInterval;
    function updateTimerDisplay(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        document.getElementById('timer').textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    updateTimerDisplay(seconds);
    countdownInterval = setInterval(() => {
        seconds--;
        updateTimerDisplay(seconds);

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').textContent = "Time's up!";
        }
    }, 1000);
}

const grassTimeout = setTimeout(touchGrass, 30000)

function touchGrass() {
    document.getElementById("grass").innerHTML = "You've probably been using your computer too long. Go touch some grass. (I don't know if this has an offensive connotation, apologies if I'm being rude.)"
}

const areWeThere = setInterval(areWeThereYet, 6000);

function areWeThereYet() {
    document.getElementById("weThereYet").innerHTML += "<br>Are we there yet?"
}

function thereYetResponse() {
    clearInterval(areWeThere)
    document.getElementById("thereResponse").innerHTML = "We'll get there when we get there!"
}