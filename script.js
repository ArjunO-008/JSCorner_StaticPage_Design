let bg = document.getElementById('bg');
let homeContent = document.getElementById('homeContent');
let loginContent = document.getElementById('loginContent');
let aboutContent = document.getElementById('aboutContent');
let contactContent = document.getElementById('contactContent');

let loginForm = document.getElementById('logincard');
let signinForm = document.getElementById('signupcard');

function nextTab(tabData) {
    console.log(tabData);

    if (tabData === "homeTab") {
        bg.style.backgroundImage = 'url(images/home_bg.jpg)';

        loginContent.style.display = "none";
        aboutContent.style.display = "none";
        contactContent.style.display = "none";
        homeContent.style.display = "flex";

        loginForm.style.display = "flex";
        signinForm.style.display = "none";

    }
    else if (tabData === "contactTab") {
        bg.style.backgroundImage = 'url(images/contact_bg.jpg)';

        loginContent.style.display = "none";
        aboutContent.style.display = "none";
        homeContent.style.display = "none";
        contactContent.style.display = "flex";

        loginForm.style.display = "flex";
        signinForm.style.display = "none";

    }
    else if (tabData === "loginTab") {
        bg.style.backgroundImage = 'url(images/login_bg.jpg)';

        homeContent.style.display = "none";
        aboutContent.style.display = "none";
        contactContent.style.display = "none";
        loginContent.style.display = "flex";

        loginForm.style.display = "flex";
        signinForm.style.display = "none";
    }
    else if (tabData === "aboutTab") {
        bg.style.backgroundImage = 'url(images/about_bg.jpg)';

        homeContent.style.display = "none";
        loginContent.style.display = "none";
        contactContent.style.display = "none";
        aboutContent.style.display = "flex";

        loginForm.style.display = "flex";
        signinForm.style.display = "none";

    }

}



function changeLog(logType) {
    console.log(logType)

    if (logType === "toSignin") {
        loginForm.style.display = "none";
        signinForm.style.display = "flex";
        console.log(logType)

    } else if (logType === "toLogin") {
        loginForm.style.display = "flex";
        signinForm.style.display = "none";
        console.log(logType)

    }
    else {
        loginForm.style.display = "flex";
        signinForm.style.display = "none";
        console.log(logType)
    }

}