/* тоглогчийн ээржийг хадгалах хувьсагч нэгдүгээр тоглогч 0 хоёрдугаар тоглогч 1*/
var activePlayer = 1;
/* Тоглогчдын цуглуулсан оноог хадгалах хувьсагч */
var scores = [0,0];
/*  тоглогчийн ээлжиндэ цуглуулж байгаа оноог хадгалах хувьсагч */
var roundScores = 0;
/* Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 талтай   */
var dice = Math.floor(Math.random() * 6 ) +1 ;
// Програм эхлэхэд оноо 0 байх 
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;

window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";         // дэлгэц дээр сss ээс дуудагдах зургыг харуулахгүй 
console.log("Шоо: " + dice);
/*  */