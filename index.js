function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(string);
}
function sayHiToGrandma(string){
  var dumbyString = string.toLowerCase;
  if (string === dumbyString){
     return "I can't hear you!";
  }
  var dumbyString2 = string.toUpperCase();
  if(string ===dumbyString2){
    return "YES INDEED!"
  }
  if(string !== dumbyString2 && string !== dumbyString){
    return "I love you, too."
  }
}
  