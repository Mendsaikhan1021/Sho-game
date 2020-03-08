/* тоглогчийн ээржийг хадгалах хувьсагч нэгдүгээр тоглогч 0 хоёрдугаар тоглогч 1*/
var activePlayer = 1;
/* Тоглогчдын цуглуулсан оноог хадгалах хувьсагч */
var scores = [0,0];
/*  тоглогчийн ээлжиндэ цуглуулж байгаа оноог хадгалах хувьсагч */
var roundScores = 0;
/* Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 талтай   */
var dice = Math.floor(Math.random() * 6 ) +1 ;
// Програм эхлэхэд оноо 0 байх 
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// дэлгэц дээр сss ээс дуудагдах зургыг харуулахгүй
var diceDom =  document.querySelector(".dice");
diceDom.style.display = "none";  
        
 /*btn-roll дарахад Shooshid -ийг callBack хийж дуудах
    function() нь anonymous функц нэг удаа ажиллах нөхцөлд үүсгэвэл тохиромжтой*/
 document.querySelector(".btn-roll").addEventListener("click" , function() { 
    var diceNumber = Math.floor(Math.random() * 6 ) +1 ;
  diceDom.style.display = "block";
  document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
 });      