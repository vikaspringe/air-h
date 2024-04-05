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
    let consent = getCookie("userConsent");
    if (!consent) {
        document.getElementById('cookieConsent').style.display = 'block';
    }
});

function setCookiePreferences(choice) {
    if (choice === "reject") {
        // Example: Clear certain cookies here if needed
        alert("Cookies rejected. Only essential cookies will be used.");
        // Redirect or take other actions as needed for rejection
        // window.location.href = '/goodbye.html'; // Uncomment to redirect
    }
    setCookie("userConsent", choice, 365); // Stores user consent for 365 days
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
