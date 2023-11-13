let navLinks = document.getElementById("navLinks");
function openMenu(){
    navLinks.style.right = "0";
}
function closeMenu(){
    navLinks.style.right = "-200px";
}

function dropdown() {
    document.getElementById("dropDowncontent").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropDownbtn')) {
        var dropdowns = document.getElementsByClassName("dropDowncontent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}