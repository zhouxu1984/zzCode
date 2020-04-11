// onclick事件
document.querySelector('html').onclick = function () {
    let myHeading = document.querySelector('h1');
    if (!myHeading.textContent.toString().includes("JavaScript")) {
        myHeading.textContent = myHeading.textContent + " by JavaScript";
    }
}

// 切换img
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');

    if ('images/logo.png' === mySrc) {
        myImage.setAttribute('src', 'images/logo2.png');
    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
}

// 切换用户
let myButton = document.querySelector('button');
let myHeading2 = document.querySelector('h2');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading2.textContent = '欢迎你：' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let myName = localStorage.getItem('name');
    myHeading2.textContent = '欢迎你：' + myName;
}
myButton.onclick = function () {
    setUserName();
}