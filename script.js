function sendMessage() {

  let input = document.getElementById("messageInput");

  let message = input.value;

  if(message.trim() === "") {
    return;
  }

  let chatBox = document.getElementById("chatBox");

  let div = document.createElement("div");

  div.className = "message sent";

  let time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute:'2-digit'
  });

  div.innerHTML =
    message +
    "<span>" + time + "</span>";

  chatBox.appendChild(div);

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}