const tabsContainer = document.querySelector(".features_tabs");
const tabs = document.querySelectorAll(".content_btn");
const tab_content = document.querySelectorAll(".content");

// tabs.forEach(tab =>{
//   tab.addEventListener('click', ()=>{

//   })
// })

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".content_btn");

  if (!clicked) return;

  tabs.forEach((tab) => tab.classList.remove("btn_active"));
  clicked.classList.add("btn_active");

  console.log(clicked);

  const activeContent = document.querySelector(`.content_${clicked.dataset.tab}`);
  console.log(activeContent);

  tab_content.forEach((content) => {
    content.classList.remove("content_active");
  });
  activeContent.classList.add("content_active");
});


// accordion


const question = document.querySelectorAll(".question");

question.forEach((item, index) => {
  let header = item.querySelector(".acc_title");
  let plus = item.querySelector(".fa-chevron-up");
  let minus = item.querySelector(".fa-chevron-down");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let questionText = item.querySelector(".acc_text");
    console.log(questionText);
    if (item.classList.contains("open")) {
      questionText.style.height = "180px";
      plus.style.display = "none";
      minus.style.display = "block";
      minus.style.color = "#FA5959";
    } else {
      questionText.style.height = "0px";
      plus.style.display = "inline";
      minus.style.display = "none";
      minus.style.color = "black";
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  question.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let text = item2.querySelector(".acc_text");
      let pilus = item2.querySelector(".fa-chevron-up");
      let miinus = item2.querySelector(".fa-chevron-down");

      text.style.height = "0px";
      text.style.padding = "0rem";
      pilus.style.display = "inline";
      miinus.style.display = "none";
    }
  });
}


// navbar


const btnOpenBar = document.querySelectorAll(".btn_nav");
const btnCloseBar = document.querySelector(".close_nav");
const Bar = document.querySelector(".nav_toggle");

for (let i = 0; i < btnOpenBar.length; i++) {
  btnOpenBar[i].addEventListener("click", () => {
    Bar.classList.remove("hidden");
  });
}

function closeBar() {
  Bar.classList.add("hidden");
}


btnCloseBar.addEventListener("click", closeBar);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeBar();
});


// error

const massageError = document.querySelector(".massage_error");
document.querySelector(".btn_contact").addEventListener('click', (e)=>{
    e.preventDefault();
})

function validateEmail() {
    let emailInput = document.getElementById("emailInput");
    let errorText = document.getElementById("errorText");


    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailInput.value)) {
        massageError.style.background = "#FA5959";
        massageError.style.border = "3px solid #FA5959";
        errorText.style.display = "inline";
    } else {
        massageError.style.background = 'none';
        massageError.style.border = "3px solid #fff";
        errorText.style.display = 'none'
    }
}