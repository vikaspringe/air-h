document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navContainer = document.getElementById('navContainer');

    hamburger.addEventListener('click', function() {
        navContainer.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function() {
      document.body.classList.add("loading");
    });
  });

  window.addEventListener("load", function() {
    document.body.classList.remove("loading");
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Always display the cookie consent banner, ignoring previous consent
    document.getElementById('cookieConsent').style.display = 'block';
});

function setCookiePreferences(choice) {
    if (choice === "reject") {
        // Example: Clear certain cookies here if needed
        console.log("Cookies rejected. Only essential cookies will be used.");
        // Redirect users to the goodbye page if they reject cookies
        window.location.href = '/goodbye.html'; // Make sure to adjust the path as necessary
    } else {
        // If cookies are accepted or mandatory, you might still want to store this choice
        // Or perform actions based on acceptance, but without setting a long-term cookie
        console.log("Cookie preference accepted: " + choice);
        // Here, you would not set the 'userConsent' cookie to remember the choice
    }
    // Always hide the cookie consent banner after making a choice
    document.getElementById('cookieConsent').style.display = 'none';
}



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
