var studentname = [];
studentname[0] = 10;
studentname[1] = 20;
studentname[2] = 30;
studentname[3] = 40;
studentname[4] = 50;

document.write(studentname.toString()+"<br>");
document.write(studentname.length);

function calc(l,w){
  var l = document.getElementById("len").value;
  var w = document.getElementById("wid").value;
  var area = l * w;
  document.getElementById("area").value = area;
}
var linksA = document.getElementByTagName("a");
document.write(linksA);
