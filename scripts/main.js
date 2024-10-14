const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/handsome.png") {
    myImage.setAttribute("src", "images/handsome4.png");
  } else {
    myImage.setAttribute("src", "images/handsome.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `A cat name Handsome, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `A cat name Handsome, ${storedName}`;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  