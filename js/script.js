var acc = document.getElementsByClassName("navAccordion");
var i;
    
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var navPanel = this.nextElementSibling;
    if (navPanel.style.display === "block") {
        navPanel.style.display = "none";
        } else {
        navPanel.style.display = "block";
        }
    });
}
var acc = document.getElementsByClassName("navAccordion",);
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var navPanel = this.nextElementSibling;
    if (navPanel.style.maxHeight) {
        navPanel.style.maxHeight = null;
        } else {
        navPanel.style.maxHeight = navPanel.scrollHeight + "px";
    }
});
}