var p1 = document.getElementById("p1");
p1.innerHTML = "I changed the text using javascript";

var createPTag = document.createElement("p");
createPTag.innerHTML = "I just Created a new P tag with javascript ";
document.getElementById("maincontainer").appendChild(createPTag);

var createTextElement = document.createTextNode("this is another text node");
document.getElementById("maincontainer").appendChild(createTextElement);

console.log("what is the type of this element : " , p1.nodeType);
console.log("This is the inner HTML : ", p1.innerHTML);
console.log("does it have any child node : ",p1.childNodes);

var listItem = document.getElementsByTagName("li");
// var aTag = listItem.getElementsByTagName("a");
console.log("we have : ", listItem.length," Items");
