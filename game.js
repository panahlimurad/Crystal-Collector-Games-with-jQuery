$(document).ready(function () {
  let targetScore = $("#target_score");
  let yourScore = $("#your_score");
  let winCount = $("#win_count");
  let blueCrystal = $("#blue_crystal");
  let greenCrystal = $("#green_crystal");
  let redCrystal = $("#red_crystal");
  let yellowCrystal = $("#yellow_crystal");
  let lossCount = $("#loss_count");

  let randomNumber = Math.floor(Math.random() * 120 + 19);
  targetScore.html(randomNumber);

  let amethyst = Math.floor(Math.random() * 12 + 1);
  let emld = Math.floor(Math.random() * 12 + 1);
  let ruby = Math.floor(Math.random() * 12 + 1);
  let saphire = Math.floor(Math.random() * 12 + 1);

  let wins = 0;
  let losses = 0;

  let calScore = 0;
  yourScore.html(calScore);

  function win() {
    alert("YOU WIN");
    wins = wins + 1;
    winCount.html(wins);
    resetTwo();
    reset();
  }

  function lose() {
    alert("YOU LOSE");
    losses = losses + 1;
    lossCount.html(losses);
    resetTwo();
    reset();
  }

  blueCrystal.click(() => {
    calScore = calScore + amethyst;
    yourScore.html(calScore);
    if (calScore === randomNumber) {
      win();
      reset();
      resetTwo();
    } else if (calScore > randomNumber) {
      lose();
      reset();
      resetTwo();
    }
  });

  greenCrystal.click(() => {
    calScore = calScore + emld;
    yourScore.html(calScore);
    if (calScore === randomNumber) {
      win();
      reset();
      resetTwo();
    } else if (calScore > randomNumber) {
      lose();
      reset();
      resetTwo();
    }
  });

  redCrystal.click(() => {
    calScore = calScore + ruby;
    yourScore.html(calScore);
    if (calScore === randomNumber) {
      win();
      reset();
      resetTwo();
    } else if (calScore > randomNumber) {
      lose();
      reset();
      resetTwo();
    }
  });

  yellowCrystal.click(() => {
    calScore = calScore + saphire;
    yourScore.html(calScore);
    if (calScore === randomNumber) {
      win();
      reset();
      resetTwo();
    } else if (calScore > randomNumber) {
      lose();
      reset();
      resetTwo();
    }
  });

  function reset() {
    calScore = 0;
    yourScore.html(calScore);
  }

  function resetTwo() {
    randomNumber = Math.floor(Math.random() * 120 + 19);
    targetScore.html(randomNumber);
    amethyst = Math.floor(Math.random() * 12 + 1);
    emld = Math.floor(Math.random() * 12 + 1);
    ruby = Math.floor(Math.random() * 12 + 1);
    saphire = Math.floor(Math.random() * 12 + 1);
  }
});
