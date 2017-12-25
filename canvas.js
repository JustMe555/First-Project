
function makeCanvas() {
  //1-get the object
  var c1 = document.getElementById('canvas1');
  var ct1 = c1.getContext('2d');
  //2-set the parameters
  ct1.font='32pt Comic Sans MS';
  ct1.fillStyle = 'DeepSkyBlue';
  ct1.strokeStyle = 'Black';
  //3- the Action
  ct1.fillText("I Love HTML5",45,150);
  ct1.strokeText("I Love HTML5",45,150);
  //--------
  //seconde canvas
  //...1
  var c2= document.getElementById('canvas2');
  var ct2= c2.getContext('2d');
  //...2
  // first rect. top left
  ct2.fillStyle = "#da2323" ;
  ct2.strokeStyle = "#000";
  ct2.lineWidth = 10;
  //...3
  ct2.fillRect(45,5,135,135);
  ct2.strokeRect(45,5,135,135);
  //second rect top right
  ct2.fillStyle = "#75777c";
  ct2.fillRect(220,5,135,135);
  //third rect bottom left
  ct2.fillStyle='#75777c';
  ct2.fillRect(45,160,135,135);
  //fourth rect bottom right
  ct2.fillStyle='#da2323';
  ct2.strokeStyle=' #000 ';
  ct2.lineWidth =10;
  ct2.fillRect(220,160,135,135);
  ct2.strokeRect(220,160,135,135);

  //Third canvas lines
  var c3= document.getElementById('canvas3');
  var ct3= c3.getContext('2d');

  ct3.strokeStyle = '#f00';
  ct3.fillStyle = '#17e4da';
  ct3.lineWidth = 5;

  ct3.beginPath();
  ct3.moveTo(100,100);
  ct3.lineTo(280,100);
  ct3.lineTo(295,160);
  ct3.lineTo(340,160);
  ct3.lineTo(340,200);
  ct3.lineTo(40,200);
  ct3.lineTo(40,160);
  ct3.lineTo(85,160);
  ct3.lineTo(100,100);

  ct3.stroke();
  ct3.fill();
  ct3.closePath();

  //fourth canvas circles
  var c4= document.getElementById('canvas4');
  var ct4= c4.getContext('2d');

  ct4.beginPath();
  ct4.fillStyle = '#663253';
  ct4.arc(200,30,25,0, Math.PI *2);
  ct4.fill();
  ct4.closePath();

  ct4.beginPath();
  ct4.fillStyle = '#6d72d4';
  ct4.arc(200,100,45,0, Math.PI *2);
  ct4.fill();
  ct4.closePath();


  ct4.beginPath();
  ct4.fillStyle = '#183d4e';
  ct4.arc(200,220,75,0, Math.PI *2);
  ct4.fill();
  ct4.closePath();


//fifth cnvas animation

var c5= document.getElementById('canvas5');
var ct5= c5.getContext('2d');
var posx =0;
var posy =400;

setInterval(function () {
  posx +=2;
  posy -=2;
  ct5.fillStyle='#0d244f';
  ct5.fillRect(0,0,canvas5.width,canvas5.height);

  ct5.fillStyle = '#c3f1bc';
  ct5.beginPath()
  ct5.arc(posx,220,55,0, Math.PI *2);
  ct5.fill();
  ct5.closePath();

  ct5.fillStyle = '#c73d51';
  ct5.beginPath()
  ct5.arc(posy,50,30,0, Math.PI *2);
  ct5.fill();
  ct5.closePath();



},30)














}
