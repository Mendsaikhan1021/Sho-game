/* тоглогчийн ээржийг хадгалах хувьсагч нэгдүгээр тоглогч 0 хоёрдугаар тоглогч 1*/
var activePlayer = 0;
/* Тоглогчдын цуглуулсан оноог хадгалах хувьсагч */
var scores = [0, 0];
/*  тоглогчийн ээлжиндэ цуглуулж байгаа оноог хадгалах хувьсагч */
var roundScores = 0;
/* Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 талтай   */
var dice = Math.floor(Math.random() * 6) + 1;
// Програм эхлэхэд оноо 0 байх
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// дэлгэц дээр сss ээс дуудагдах зургыг харуулахгүй
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

/*btn-roll дарахад Shooshid -ийг callBack хийж дуудах
    function() нь anonymous функц нэг удаа ажиллах нөхцөлд үүсгэвэл тохиромжтой*/
document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    roundScores = roundScores + diceNumber;
    document.getElementById(
      "current-" + activePlayer
    ).textContent = roundScores;
  } else {
    // 1 буусан тохиолдолд ээлж солих
    switchToNextPlayer();
  }
});
// Hold товчны эвент
document
  .querySelector(".btn-hold")
  .addEventListener("click", function holdFunction() {
    // цуглуулсан оноог глобал оноондээр нэмэх
    //   if (activePlayer === 0) {
    //     scores[0] = scores[0] + roundScores;
    // } else {
    //     scores[1] = scores[1] + roundScores;
    //   }
    scores[activePlayer] = scores[activePlayer] + roundScores;
    // Дэлгэц дээр оноог шилжүүлэх
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      document.getElementById("name-" + activePlayer).textContent =
        "Ялагч боллоо";
        document.getElementById('player-' + activePlayer+'-panel').classList.add("winner"); 
        document.querySelector(".player-0-panel").classList.remove("active");
    } else {
      switchToNextPlayer();
    }
    // ээлжийн оноог 0 болгоно
  });

function switchToNextPlayer() {
  // тоглогчийн ээлжийг солино
  roundScores = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //   if(activePlayer ===0) {
  //       activePlayer = 1;
  //   }
  //   else {
  //       activePlayer = 0;
  //   }
  // toggle active байгаа тоглогчийг шилжүүлэх ногоон дүрс
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
