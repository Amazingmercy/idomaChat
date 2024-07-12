const sendButton = document.getElementById("sendbtn");
let textbox = document.getElementById("textbox");
const translateButton = document.getElementById("translatebtn");
const chatArea = document.getElementById("chatArea");
const user = { message: "" };

const arrayOfResponses = [
  { message: "nma eno", response: "aba ho ke" },
  { message: "aba ho ke", response: "nho lo hi" },
  { message: "in mna", response: "ochi beh" },
  { message: "odiya ke", response: "Nothing much, just waiting to help you!" },
  { message: "oteh k'igbo?", response: "ahu, ijeso" },
  { message: "abole", response: "obiobino" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "agbesi", response: "ingbesi, ainya odikpe" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "odi wu iye yo", response: "iye yun wu chatBot, oyu otabo kache" },
  { message: "odi le ge yagira", response: "inge yu otabo iya ache, inge ju ohi lu ache" },
  { message: "dum lu ire", response: "odiya lu scientist kpotuchu atoms ni" },
  { message: "ihayi yo weh emna", response: "In wu okpirichi leben ku internet" },
  { message: "onye yo ah", response: "oche lol yun wuh Esther" },
  { message: "lo ojoje eyeh ka num", response: "aje ka engwu ge biya noo. Archeologist lu  esi yu enwu  piye lu ajeh ku Egypt oke ba lu ihayi 3000 enwu ke biya ni" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "", response: "" },
  { message: "egeh tun labo mru ukoro yo oleh", response: "ingeh tuwo labo mru ukoro yo oleh" },
  { message: "idinya whu epa mra epa", response: "epa mru epah wuh eneh" },
  { message: "age gwu eje gira ", response: "in gwu ejeh gira ni aman ingeh chabo ache ogwu ejeh ko gira" },
  { message: "idinya whu oheyi", response: "oheyi lohi" },
  { message: "egna la ke la", response: "in la lu ipu icho" },
]

const arrayOfTranslations = [
  { message: "nma eno", meaning: "good afternoon" },
  { message: "owoicho", meaning: "God" },
  { message: "aba ho ke", meaning: "how are you?" },
  { message: "nho lo hi", meaning: "i am fine" },
  { message: "odinya biyo Wu olum intche", meaning: "what brought you here today" },
  { message: "egna leke wa lu onya ma?", meaning: "where is it taking place?" },
  { message: "ochi beh", meaning: "morning" },
  { message: "ene", meaning: "mummy" },
  { message: "in mna", meaning: "good morning" },
  { message: "nngeh yah kunyo mu wa", meaning: "i would find time to visit" },
  { message: "ainya lu owoicho", meaning: "thank God" },
  { message: "imi na mna? ", meaning: "where are you coming from?" },
  { message: "oyo oche onya lo oma ah", meaning: "she gave birth to a baby girl" },
  { message: "oho olohi", meaning: "wow! thats good" },
  { message: "imi na mna?", meaning: "where are you coming from?" },
  { message: "odiya ke", meaning: "what's happening?" },
  { message: "Nge pu egba", meaning: "i can hear some shout from afar" },
  { message: "neh", meaning: "father" },
  { message: "ohima du oche", meaning: "he is sick" },
  { message: "ochei ge ku", meaning: "someone died" },
  { message: "olohi", meaning: "it's fine" },
  { message: "Olu ebu eko", meaning: "okay, till then" },
  { message: "oteh k'igbo?", meaning: "how are you?" },
  { message: "ahu, ijeso", meaning: "i'm fine thank you" },
  { message: "ow'ogba", meaning: "good morning" },
  { message: "abole", meaning: "hello" },
  { message: "obiobino", meaning: "hi, there!" },
  { message: "agbesi", meaning: "how are you" },
  { message: "ingbesi, ainya odikpe", meaning: "I'm good thanks for asking" },
  { message: "odi wu iye yo", meaning: "what is your name" },
  { message: "iye yun wu chatBot, oyu otabo kache", meaning: "I'm chatBot, your virtual assistant." },
  { message: "odiya lu scientist kpotuchu atoms ni", meaning: "why don't scientists trust atoms? because they make up everything" },
  { message: "dum lu ire", meaning: "tell me a joke" },
  { message: "iye yun wu chatbot, oyu otabo kache", meaning: "i can help you with various tasks like answering questions, providing information, and more" },
  { message: "odi le ge yagira", meaning: "what can you do" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
  { message: "", meaning: "" },
];

const sendMessage = (userMessage) => {
  let messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.style.margin = "10px";

  if (userMessage.length == 0) {
    messageElement.innerHTML = "<span>You:Nothing</span>";
    chatArea.appendChild(messageElement);
  } else {
    messageElement.innerHTML =
      "<span>You: </span>" + "<span>" + userMessage + "</span>";
    chatArea.appendChild(messageElement);
  }
};

const chatBotResponse = (userMessage) => {
  let messageElement = document.createElement("div");
  messageElement.style.margin = "5px";
  messageElement.style.padding = "10px";
  messageElement.style.borderRadius = "40px";
  messageElement.style.backgroundColor = "rgb(29, 97, 136)";
  messageElement.style.color = "white";
  messageElement.style.display = "inline";

  let chatBotMessage = "";

  if (userMessage.length == 0) {
    messageElement.innerHTML = "<span>Hi, I'm an Idoma chatbot send me a message </span>";
    chatArea.appendChild(messageElement);
  } else {
    var result = arrayOfResponses.filter((value) =>
      value.message.toLowerCase().includes(userMessage.toLowerCase())
    );
  }

  if (result.length > 0) {
    var response = result[0].response;
    chatBotMessage = response;
  } else {
    chatBotMessage = "Hello can I tell you a joke instead?";
  }

  messageElement.innerHTML = "<span>IdomaBot: </span>" + "<span>" + chatBotMessage + "</span>";
  chatArea.appendChild(messageElement);
};

const chatBotTranslate = (userMessage) => {
  let messageElement = document.createElement("div");
  messageElement.style.margin = "5px";
  messageElement.style.padding = "10px";
  messageElement.style.borderRadius = "40px";
  messageElement.style.backgroundColor = "rgb(29, 97, 136)";
  messageElement.style.color = "white";
  messageElement.style.display = "inline";

  let chatBotMessage = "";

  if (userMessage.length == 0) {
    messageElement.innerHTML = "<span>Please enter a message to be translated </span>";
    chatArea.appendChild(messageElement);
  } else {
    var result = arrayOfTranslations.filter((value) =>
      value.message.toLowerCase().includes(userMessage.toLowerCase())
    );

    var reply = arrayOfTranslations.filter((value) =>
      value.meaning.toLowerCase().includes(userMessage.toLowerCase())
    );

  }
  if (result.length > 0) {
    var response = result[0].meaning;
    chatBotMessage = response;
  } else if (reply.length > 0 && result.length == 0) {
      var response = reply[0].message;
      chatBotMessage = response;
    } else {
    chatBotMessage = "sorry, I do not understand that."
  }

  messageElement.innerHTML = "<span>Meaning: </span>" + "<span>" + chatBotMessage + "</span>";
  chatArea.appendChild(messageElement);
};

sendButton.addEventListener("click", function (e) {
  let userMessage = textbox.value;
  let userText = userMessage.trim().toLowerCase()
  user.message = userText;
  textbox.value = "";
  sendMessage(userText);
  chatBotResponse(userText);
});

translateButton.addEventListener("click", function (e) {
  let userMessage = textbox.value;
  let userText = userMessage.trim().toLowerCase();
  user.message = userText;
  textbox.value = "";
  sendMessage(userText);
  chatBotTranslate(userText);
});
