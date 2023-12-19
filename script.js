let count = 0;
const allInputs = [...document.getElementsByClassName("firstInput")];
const err = [...document.getElementsByClassName("err")];
const firstBtn = document.getElementById("one");
const secBtn = document.getElementById("two");
const pages = document.getElementsByClassName("card");
const planBtns = [...document.getElementsByClassName("plan")];
const errtwo = document.getElementById("errtwo");
const final = document.getElementById("final");
const prev = document.getElementById("prev");
const finalP = document.getElementById("finalP");
const finalH = document.getElementById("finalH");
const confirmBtn = document.getElementById("confirm");
const circle = [...document.getElementsByClassName("circle")];
let price = 0;

function stepOne() {
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value === "") {
            err[i].innerHTML = "This field is required";
            allInputs[i].style.border = "1px solid red"
        }
        else {
            count++
            err[i].innerHTML = "";
            allInputs[i].style.border = "1px solid black"
        }
    }
    count = count - (allInputs.length - 1)
    pages[count - 1].style.display = "none";
    pages[count].style.display = "flex";
    circle[count - 1].classList.add("done")
}

firstBtn.addEventListener("click", stepOne);

function plan() {
    planBtns.forEach(btns => { btns.classList.remove("clicked") });
    this.classList.add("clicked")
    if (this.classList.contains("average")) {
        final.innerHTML = "$50/mo"
        price = 50
    }
    if (this.classList.contains("good")) {
        final.innerHTML = "$100/3mo"
        price = 100
    }
    if (this.classList.contains("excellent")) {
        final.innerHTML = "$500/yr"
        price = 500
    }
}

planBtns.forEach(btns => { btns.addEventListener("click", plan) });

function stepTwo() {
    let isClicked = false;
    planBtns.forEach(btn => {
        if (btn.classList.contains("clicked")) {
            isClicked = true;
        }
    });
    if (isClicked) {
        count++;
        console.log(count);
    }
    else {
        errtwo.innerHTML = "Please select one"
    }
    pages[count - 1].style.display = "none";
    pages[count].style.display = "flex";
    circle[count - 1].classList.add("done")
}

secBtn.addEventListener("click", stepTwo);

function prevBtn() {
    count--;
    pages[count + 1].style.display = "none";
    pages[count].style.display = "flex"
    circle[count].classList.remove("done")

}

prev.addEventListener("click", prevBtn);

function confirm() {
    finalH.innerHTML = "ThankYou";
    finalP.innerHTML = `Your Bank Account is debited by $${price}.`;
    confirmBtn.style.visibility = "hidden";
    document.getElementById("prevTwo").style.visibility = "hidden";
    circle[count].classList.add("done")
}

confirmBtn.addEventListener("click", confirm);


