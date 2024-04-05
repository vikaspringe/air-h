document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    var hamburger = document.querySelector('.hamburger-menu');
    var navContainer = document.getElementById('navContainer');
    if (hamburger && navContainer) {
        hamburger.addEventListener('click', function() {
            navContainer.classList.toggle('active');
        });
    }

    // Link loading effect
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            document.body.classList.add("loading");
        });
    });

    // Display cookie consent banner every time
    document.getElementById('cookieConsent').style.display = 'block';
});

window.addEventListener("load", function() {
    document.body.classList.remove("loading");
});

function setCookiePreferences(choice) {
    // Logic for handling cookie preferences
    if (choice === "reject") {
        console.log("Cookies rejected. Only essential cookies will be used.");
        window.location.href = '/goodbye.html'; // Adjust the path as necessary
    } else {
        console.log("Cookie preference accepted: " + choice);
    }
    document.getElementById('cookieConsent').style.display = 'none';
}

// Functions to set and get cookies, no changes needed here
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
