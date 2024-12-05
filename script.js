const clickIn1 = document.querySelector(".link1");
const clickOut1 = document.querySelector(".ans1");
const img1 = document.querySelector(".img1");
clickIn1.addEventListener("click", myA);

function myA() {
  if (clickOut1.style.display == "none") {
    clickOut1.style.display = "block";
    img1.src = "icon-minus.svg";
  } else {
    clickOut1.style.display = "none";
    img1.src = "icon-plus.svg";
  }
}

const clickIn2 = document.querySelector(".link2");
const clickOut2 = document.querySelector(".ans2");
const img2 = document.querySelector(".img2");
clickIn2.addEventListener("click", myB);

function myB() {
  if (clickOut2.style.display == "none") {
    clickOut2.style.display = "block";
    img2.src = "icon-minus.svg";
  } else {
    clickOut2.style.display = "none";
    img2.src = "icon-plus.svg";
  }
}

const clickIn3 = document.querySelector(".link3");
const clickOut3 = document.querySelector(".ans3");
const img3 = document.querySelector(".img3");
clickIn3.addEventListener("click", myC);

function myC() {
  if (clickOut3.style.display == "none") {
    clickOut3.style.display = "block";
    img3.src = "icon-minus.svg";
  } else {
    clickOut3.style.display = "none";
    img3.src = "icon-plus.svg";
  }
}

const clickIn4 = document.querySelector(".link4");
const clickOut4 = document.querySelector(".ans4");
const img4 = document.querySelector(".img4");
clickIn4.addEventListener("click", myFunction4);

function myFunction4() {
  if (clickOut4.style.display == "none") {
    clickOut4.style.display = "block";
    img4.src = "icon-minus.svg";
  } 
  
  else {
    clickOut4.style.display = "none";
    img4.src = "icon-plus.svg";
    
  }
  
}





