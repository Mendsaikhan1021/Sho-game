/* тоглогчийн ээржийг хадгалах хувьсагч нэгдүгээр тоглогч 0 хоёрдугаар тоглогч 1*/
var activePlayer ;
var isNewGAme;
/* Тоглогчдын цуглуулсан оноог хадгалах хувьсагч */
var scores;
/*  тоглогчийн ээлжиндэ цуглуулж байгаа оноог хадгалах хувьсагч */
var roundScores ;
/* Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 талтай   */
var diceDom = document.querySelector(".dice");
function initGame()
{
    isNewGAme = true;
     activePlayer = 0;
/* Тоглогчдын цуглуулсан оноог хадгалах хувьсагч */
 scores = [0, 0];
/*  тоглогчийн ээлжиндэ цуглуулж байгаа оноог хадгалах хувьсагч */
 roundScores = 0;
/* Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 талтай   */
 dice = Math.floor(Math.random() * 6) + 1;
// Програм эхлэхэд оноо 0 байх
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// тоглогчдын нэрийг шинэчлэх 
document.getElementById('name-0').textContent ="Player 1";
document.getElementById('name-1').textContent ="Player 2";

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');  

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');



// дэлгэц дээр сss ээс дуудагдах зургыг харуулахгүй
diceDom.style.display = "none";
}

/*btn-roll дарахад Shooshid -ийг callBack хийж дуудах
    function() нь anonymous функц нэг удаа ажиллах нөхцөлд үүсгэвэл тохиромжтой*/
document.querySelector(".btn-roll").addEventListener("click", function() {
 if(isNewGAme  )
 {
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
    
 }else {
     alert("Тоглоом дууссан байна New game дарж шинээр эхлэнэ үү") ;  
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
     if(isNewGAme)
     {
        scores[activePlayer] = scores[activePlayer] + roundScores;
        // Дэлгэц дээр оноог шилжүүлэх
        document.getElementById("score-" + activePlayer).textContent =
          scores[activePlayer];
        if (scores[activePlayer] >= 30) {
            isNewGAme = false;
          document.getElementById("name-" + activePlayer).textContent =
            "Ялагч боллоо";
            document.getElementById('player-' + activePlayer+'-panel').classList.add("winner"); 
            document.querySelector(".player-0-panel").classList.remove("active");
        } else {
          switchToNextPlayer();
        }
        // ээлжийн оноог 0 болгоно
     }
     else 
     {
        alert("Тоглоом дууссан байна New game дарж шинээр эхлэнэ үү") ;  
     }
    
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
document.querySelector(".btn-new").addEventListener('click' , initGame);
