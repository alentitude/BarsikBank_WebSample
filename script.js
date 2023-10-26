"use strict";

//DATA

const customer1 = {
  name: "Alen Thomas",
  cname: "alenthomas",
  email: "thomasalen634@gmail.com",
  currBalance: 1000,
};

const customer2 = {
  name: "Amith Thomas",
  cname: "amiththomas",
  email: "thomasamith108@gmail.com",
  currBalance: 5000,
};

const customer3 = {
  name: "Anay Thomas",
  cname: "anaythomas",
  email: "thomasanay123@gmail.com",
  currBalance: 2500,
};

const customers = [customer1, customer2, customer3];

//DOM ELEMENTS

const msg = document.querySelector(".wlcmsg");
const err = document.querySelector(".errMsg");
const ovr = document.querySelector(".overlay");
const closeBt = document.querySelector(".closemsg");
const nclose = document.querySelector(".close");
const firBlock = document.querySelector(".firblock");
const welMsg = document.querySelector(".welmsg");
const nmTag = document.querySelector(".nm");
const em = document.querySelector(".em");
const amount = document.querySelector(".amt");
const main = document.querySelector(".mainpage");

const rec = document.querySelector(".tranrec");
const amt = document.querySelector(".tranamt");
const tButt = document.querySelector(".btTrans");

const tranWindow = document.querySelector(".transComplete");
const tranBal = document.querySelector(".comBod");
const tranButt = document.querySelector(".newUs");

//NEW USER

const startNuse = document.querySelector(".newusr");
const newUser = document.querySelector(".userCreate");
const usMsg = document.querySelector(".usMsg");
const uname = document.querySelector(".uname");
const uemail = document.querySelector(".uemail");
const ubal = document.querySelector(".ubal");
const uButt = document.querySelector(".fincr");
const uclose = document.querySelector(".uclose");

//OPENING BLOCK

const accinfo = document.querySelector(".cred");
const cnBtn = document.querySelector(".ctn");

//FUNCTIONS

let user;
let usersec;

function close() {
  msg.classList.add("hide");
  ovr.classList.add("hide");
}

nclose.addEventListener("click", function () {
  err.classList.add("hide");
  ovr.classList.add("hide");
});

closeBt.addEventListener("click", close);

function getInfo() {
  const cred = accinfo.value;
  let temp = cred.trim().toLowerCase().split(" ").join("");
  if (cred === "") {
    accinfo.style.borderColor = "red";
    setTimeout(function () {
      accinfo.style.borderColor = "black";
    }, 750);
    return;
  }
  if ((user = customers.find((account) => account.cname === temp))) {
    firBlock.classList.add("hide");
    main.classList.remove("hide");
    displayInfo(user);
    accinfo.value = null;
  } else {
    err.classList.remove("hide");
    ovr.classList.remove("hide");
  }
}

cnBtn.addEventListener("click", getInfo);

function displayInfo(user) {
  nmTag.textContent = `${user.name}`;
  em.textContent = `${user.email}`;
  amount.textContent = `₹${user.currBalance}`;
}

function transfer() {
  const valamt = Number(amt.value);
  const ex = rec.value;
  let ntemp = ex.trim().toLowerCase().split(" ").join("");
  if (ex === "") {
    rec.style.borderColor = "red";
    setTimeout(function () {
      rec.style.borderColor = "rgb(35, 105, 245)";
    }, 750);
    return;
  }
  if (
    (usersec = customers.find((user) => user.cname === ntemp)) &&
    usersec !== user
  ) {
    if (valamt <= user.currBalance) {
      console.log("Transaction Possible");
      user.currBalance = user.currBalance - valamt;
      usersec.currBalance = usersec.currBalance + valamt;
      tranWindow.classList.remove("hide");
      tranBal.textContent = `Remaining balance:- ₹${user.currBalance}`;
      rec.value = null;
      amt.value = null;
    } else {
      console.log("Transaction not possible.");
    }
  } else {
    err.classList.remove("hide");
    ovr.classList.remove("hide");
  }
}

tButt.addEventListener("click", transfer);
tranButt.addEventListener("click", function () {
  main.classList.add("hide");
  tranWindow.classList.add("hide");
  firBlock.classList.remove("hide");
});

uButt.addEventListener("click", function () {
  const obj = { name: null, cname: null, email: null, currBalance: null };
  let tempa = uname.value;
  let tempb = tempa.trim().toLowerCase().split(" ").join("");
  let tempc = uemail.value;
  let tempd = Number(ubal.value);
  obj.name = tempa;
  obj.cname = tempb;
  obj.email = tempc;
  obj.currBalance = tempd;
  console.log(obj);
  customers.push(obj);
  console.log(customers);
  uname.value = null;
  uemail.value = null;
  ubal.value = null;
  ovr.classList.remove("hide");
  usMsg.classList.remove("hide");
});

startNuse.addEventListener("click", function () {
  firBlock.classList.add("hide");
  newUser.classList.remove("hide");
});

uclose.addEventListener("click", function () {
  ovr.classList.add("hide");
  usMsg.classList.add("hide");
  newUser.classList.add("hide");
  firBlock.classList.remove("hide");
});
