
let theBtns = document.querySelectorAll(".sections .practice .main-ul > li > a"),
    theIcon = document.querySelectorAll(".sections .practice .main-ul > li > a i");
    // console.log(theIcon);
function showList (e) {
    e.preventDefault();
    let nextEle = this.nextElementSibling;
    console.log(this.firstElementChild.classList.toggle("fa-angle-up"));
    if(this.classList.toggle("clicked"))
        nextEle.style.display = "block";
    else
    nextEle.style.display = "none";
}

for(let i = 0 ; i < theBtns.length ; i++)
    theBtns[i].addEventListener("click", showList);