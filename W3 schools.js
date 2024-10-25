// script.js
function openTab(evt, tabName) {
    var i, tabcontent, tablinks, heroSection;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab content
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Load content for the selected tab
    if (tabName !== 'Page1') { // Assuming Page1 content is static
        heroSection = document.querySelector(".hide").style.display ="none";
        
        fetch(`${tabName.toLowerCase()}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById(tabName).innerHTML = data;
            });
    }
}
function homepage(){
   
    heroSection = document.querySelector(".hide").style.display ="";
    

}

// Set default tab
// // document.getElementsByClassName('tablinks')[0].click();
// const heroSection = document.querySelector(".hero-section").style.display ="block";


