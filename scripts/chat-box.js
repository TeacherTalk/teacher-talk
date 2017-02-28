function sendMessage(){
  document.getElementById("message-to-send");
  var node = document.createElement("DIV");
  var textnode = document.createTextNode(document.getElementById("message-to-send").val());
  document.getElementById("chat-log").appendChild(node);
}