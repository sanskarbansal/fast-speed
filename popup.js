var btns = document.getElementsByClassName("btn");
var pspeed = document.getElementById("speed");
var currentSpeed = document.querySelector("#currentSpeed span");
for (let i = 0; i < 19; i++) {
    btns[i].addEventListener("click", (event) => {
        chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, event.target.id);
        });
        pspeed.value = event.target.id;
        currentSpeed.innerText = event.target.id;
    });
}
pspeed.addEventListener("input", (event) => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, event.target.value);
        currentSpeed.innerText = event.target.value;
    });
});
