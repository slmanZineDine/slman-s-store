// Create collapse list
let theBtns = document.querySelectorAll(".sections .practice .main-ul > li > a");

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

// Last Up Date
let lastModifier = document.querySelector("footer .last-up-date");
lastModifier.textContent = document.lastModified;