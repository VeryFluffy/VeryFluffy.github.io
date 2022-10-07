var audioN = {}, blocking = false;
function Lofi(e){
if(blocking == false){
blocking = true;
var tracks = [];
tracks[0] = ['Take-Me-Home.mp3', 'Take-Me-Home.mp3', 'Take-Me-Home.mp3'];
         var current = 0;
         if("pause" in audioN) audioN.pause();
         audioN = new Audio();
         audioN.src = tracks[e][current];  
         audioN.play();                
         audioN.onended = function() { 
  current++;                           
  if (current >= tracks[e].length){
    blocking = false;
    return;
  }
  audioN.src = tracks[e][current];
  audioN.play(); 
}   
}
}