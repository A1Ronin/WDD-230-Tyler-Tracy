function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
   
// get current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// last modified information
document.getElementById("lastModified").innerHTML = document.lastModified;


