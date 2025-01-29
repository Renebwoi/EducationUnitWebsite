let menuCount = 0;
function showMenu() {
    
    let secondNav = document.querySelector("header nav.secondNav")
    let hamburger = document.querySelector(".Hamburger")

    if(menuCount == 0){
        secondNav.style.display = "block"
        hamburger.classList.add("hamCancel")
        hamburger.style.position = "fixed"
        menuCount = 1
    } else {
        secondNav.style.display = "none"
        hamburger.classList.remove("hamCancel")
        hamburger.style.position = "absolute"
        menuCount = 0
    }
}