const $ = document;
const themebtn = $.getElementById("theme");
const body = $.body;
const container = $.getElementById("cont");
const title = $.getElementById("gamename");
const logoutbtn = $.getElementById("logout");
const player1name = $.getElementById("pl1name");
const player2name = $.getElementById("pl2name");
const turnshower = $.getElementById("turn");
const ratepl1 = $.getElementById("rateshower1");
const ratepl2 = $.getElementById("rateshower2");
const newgamebtn=$.getElementById('newgame')
const spanshow = $.getElementById("turnspan");

const topleftinput = $.getElementById("top-left");
const middleleftinput = $.getElementById("mid-left");
const bottomleftinput = $.getElementById("bot-left");

const topceninput = $.getElementById("top-cen");
const middleceninput = $.getElementById("mid-cen");
const bottomceninput = $.getElementById("bot-cen");

const toprightinput = $.getElementById("top-right");
const middlerightinput = $.getElementById("mid-right");
const bottomrightinput = $.getElementById("bot-right");

let firstplayername;
let secondplayername;
let thememode;
let nowtheme;
let turn = "X";
let playe1rate;
let playe2rate;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

window.addEventListener("load", () => {
  firstplayername = localStorage.getItem("firstplayername");
  secondplayername = localStorage.getItem("secondplayername");
  thememode = localStorage.getItem("theme");
  playe1rate = localStorage.getItem("pl1rate");
  playe2rate = localStorage.getItem("pl2rate");

  if (!firstplayername && !secondplayername) {
    Toast.fire({
      icon: "warning",
      title: "Please enter your name",
    });
    setInterval(function () {
      location.href = "http://127.0.0.1:5500/index.html";
    }, 3000);
  }
  if (!playe1rate && !playe2rate) {
    localStorage.setItem("pl1rate", "0");
    localStorage.setItem("pl2rate", "0");
  }

  themechenger();
  player1name.innerHTML = firstplayername;
  player2name.innerHTML = secondplayername;
  xo();
  rateshow();
});
newgamebtn.addEventListener('click',()=>{
  location.href='http://127.0.0.1:5500/mainpage.html'
})
logoutbtn.addEventListener('click',()=>{
  localStorage.removeItem('pl1rate')
  localStorage.removeItem('pl2rate')
  localStorage.removeItem('firstplayername')
  localStorage.removeItem('secondplayername')
  location.href="http://127.0.0.1:5500/index.html"
})

themebtn.addEventListener("click", () => {
  themebtn.classList.toggle("bx-sun");
  themebtn.classList.toggle("bx-moon");

  if (themebtn.classList == "bx sun me-3 bx-moon") {
    localStorage.setItem("theme", "dark");
    themechenger();
  }
  if (themebtn.classList == "bx sun me-3 bx-sun") {
    localStorage.setItem("theme", "light");
    themechenger();
  }
});

topleftinput.addEventListener("click", (event) => {
  if (!topleftinput.value) {
    if (turn == "X") {
      topleftinput.classList.add("fa-solid");
      topleftinput.style.color = "red";
      topleftinput.style.font = "55px;";
      topleftinput.value = turn;
      topleftinput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      topleftinput.classList.add("fa-solid");
      topleftinput.style.color = "blue";
      topleftinput.style.font = "55px;";
      topleftinput.value = turn;
      topleftinput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

middleleftinput.addEventListener("click", (event) => {
  if (!middleleftinput.value) {
    if (turn == "X") {
      middleleftinput.classList.add("fa-solid");
      middleleftinput.style.color = "red";
      middleleftinput.style.font = "55px;";
      middleleftinput.value = turn;
      middleleftinput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      middleleftinput.classList.add("fa-solid");
      middleleftinput.style.color = "blue";
      middleleftinput.style.font = "55px;";
      middleleftinput.value = turn;
      middleleftinput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

bottomleftinput.addEventListener("click", (event) => {
  if (!bottomleftinput.value) {
    if (turn == "X") {
      bottomleftinput.classList.add("fa-solid");
      bottomleftinput.style.color = "red";
      bottomleftinput.style.font = "55px;";
      bottomleftinput.value = turn;
      bottomleftinput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      bottomleftinput.classList.add("fa-solid");
      bottomleftinput.style.color = "blue";
      bottomleftinput.style.font = "55px;";
      bottomleftinput.value = turn;
      bottomleftinput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

topceninput.addEventListener("click", (event) => {
  if (!topceninput.value) {
    if (turn == "X") {
      topceninput.classList.add("fa-solid");
      topceninput.style.color = "red";
      topceninput.style.font = "55px;";
      topceninput.value = turn;
      topceninput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      topceninput.classList.add("fa-solid");
      topceninput.style.color = "blue";
      topceninput.style.font = "55px;";
      topceninput.value = turn;
      topceninput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

middleceninput.addEventListener("click", (event) => {
  if (!middleceninput.value) {
    if (turn == "X") {
      middleceninput.classList.add("fa-solid");
      middleceninput.style.color = "red";
      middleceninput.style.font = "55px;";
      middleceninput.value = turn;
      middleceninput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      middleceninput.classList.add("fa-solid");
      middleceninput.style.color = "blue";
      middleceninput.style.font = "55px;";
      middleceninput.value = turn;
      middleceninput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

bottomceninput.addEventListener("click", (event) => {
  if (!bottomceninput.value) {
    if (turn == "X") {
      bottomceninput.classList.add("fa-solid");
      bottomceninput.style.color = "red";
      bottomceninput.style.font = "55px;";
      bottomceninput.value = turn;
      bottomceninput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      bottomceninput.classList.add("fa-solid");
      bottomceninput.style.color = "blue";
      bottomceninput.style.font = "55px;";
      bottomceninput.value = turn;
      bottomceninput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

toprightinput.addEventListener("click", (event) => {
  if (!toprightinput.value) {
    if (turn == "X") {
      toprightinput.classList.add("fa-solid");
      toprightinput.style.color = "red";
      toprightinput.style.font = "55px;";
      toprightinput.value = turn;
      toprightinput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      toprightinput.classList.add("fa-solid");
      toprightinput.style.color = "blue";
      toprightinput.style.font = "55px;";
      toprightinput.value = turn;
      toprightinput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

middlerightinput.addEventListener("click", (event) => {
  if (!middlerightinput.value) {
    if (turn == "X") {
      middlerightinput.classList.add("fa-solid");
      middlerightinput.style.color = "red";
      middlerightinput.style.font = "55px;";
      middlerightinput.value = turn;
      middlerightinput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      middlerightinput.classList.add("fa-solid");
      middlerightinput.style.color = "blue";
      middlerightinput.style.font = "55px;";
      middlerightinput.value = turn;
      middlerightinput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

bottomceninput.addEventListener("click", (event) => {
  if (!bottomceninput.value) {
    if (turn == "X") {
      bottomceninput.classList.add("fa-solid");
      bottomceninput.style.color = "red";
      bottomceninput.style.font = "55px;";
      bottomceninput.value = turn;
      bottomceninput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      bottomceninput.classList.add("fa-solid");
      bottomceninput.style.color = "blue";
      bottomceninput.style.font = "55px;";
      bottomceninput.value = turn;
      bottomceninput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

bottomrightinput.addEventListener("click", (event) => {
  if (!bottomrightinput.value) {
    if (turn == "X") {
      bottomrightinput.classList.add("fa-solid");
      bottomrightinput.style.color = "red";
      bottomrightinput.style.font = "55px;";
      bottomrightinput.value = turn;
      bottomrightinput.style.animation = "clickred 1s";

      playerone = false;
      turn = "O";
      xo();
      win();
    } else if (turn == "O") {
      bottomrightinput.classList.add("fa-solid");
      bottomrightinput.style.color = "blue";
      bottomrightinput.style.font = "55px;";
      bottomrightinput.value = turn;
      bottomrightinput.style.animation = "clickblue 1s";
      playerone = false;
      turn = "X";
      xo();
      win();
    }
  }
});

function themechenger() {
  nowtheme = localStorage.getItem("theme");
  if (nowtheme === "dark") {
    body.style.backgroundColor = "black";
    container.style.backgroundColor = "rgb(38, 37, 37)";
    themebtn.style.color = "white";
    container.style.boxShadow = " 0px 0px 47px 8px rgb(246, 243, 243, 0.35)";
    title.classList.add("text-light");
    logoutbtn.classList.remove("bg-dark");
    logoutbtn.classList.remove("text-white");
    logoutbtn.classList.add("bg-secondary");
    turnshower.classList.add("text-light");
    ratepl1.classList.add("text-light");
    ratepl2.classList.add("text-light");
  }
  if (nowtheme === "light") {
    body.style.backgroundColor = "white";
    container.style.backgroundColor = "rgb(233, 229, 229)";
    themebtn.style.color = "black";
    container.style.boxShadow = " 1px 1px 39px 2px rgba(0,0,0,0.32)";
    title.classList.remove("text-light");

    logoutbtn.classList.remove("bg-secondary");
    logoutbtn.classList.add("bg-dark");
    logoutbtn.classList.add("text-white");

    turnshower.classList.remove("text-light");

    ratepl1.classList.remove("text-light");
    ratepl2.classList.remove("text-light");
  }
}
function xo() {
  if (turn == "X") {
    spanshow.classList.remove("fa-o");
    spanshow.classList.add("fa-solid");
    spanshow.classList.add("fa-x");
  } else if (turn == "O") {
    spanshow.classList.remove("fa-x");
    spanshow.classList.add("fa-solid");
    spanshow.classList.add("fa-o");
  }
}
function rateshow() {
  playe1rate = localStorage.getItem("pl1rate");
  playe2rate = localStorage.getItem("pl2rate");
  console.log(playe1rate);
  console.log(playe2rate);

  ratepl1.innerHTML = playe1rate;
  ratepl2.innerHTML = playe2rate;
}
function win() {
  if (
    topleftinput.value == "X" &&
    topceninput.value == "X" &&
    toprightinput.value == "X"
  ) {
    topleftinput.style.border = "5px solid red";
    topceninput.style.border = "5px solid red";
    toprightinput.style.border = "5px solid red";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe1rate = localStorage.getItem("pl1rate");
    playe1rate++;
    localStorage.setItem("pl1rate", playe1rate);
    ratepl1.innerHTML = playe1rate;
    middleleftinput.setAttribute("disabled", "");
    middleceninput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("firstplayername")} win`,
    });
  } else if (
    topleftinput.value == "O" &&
    topceninput.value == "O" &&
    toprightinput.value == "O"
  ) {
    topleftinput.style.border = "5px solid blue";
    topceninput.style.border = "5px solid blue";
    toprightinput.style.border = "5px solid blue";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe2rate = localStorage.getItem("pl2rate");
    playe2rate++;
    localStorage.setItem("pl2rate", playe2rate);
    ratepl2.innerHTML = playe2rate;
    middleleftinput.setAttribute("disabled", "");
    middleceninput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("secondplayername")} win`,
    });
  } else if (
    middleleftinput.value == "X" &&
    middleceninput.value == "X" &&
    middlerightinput.value == "X"
  ) {
    middleleftinput.style.border = "5px solid red";
    middleceninput.style.border = "5px solid red";
    middlerightinput.style.border = "5px solid red";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe1rate = localStorage.getItem("pl1rate");
    playe1rate++;
    localStorage.setItem("pl1rate", playe1rate);
    ratepl1.innerHTML = playe1rate;
    topleftinput.setAttribute("disabled", "");
    topceninput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("firstplayername")} win`,
    });
  } else if (
    middleleftinput.value == "O" &&
    middleceninput.value == "O" &&
    middlerightinput.value == "O"
  ) {
    middleleftinput.style.border = "5px solid blue";
    middleceninput.style.border = "5px solid blue";
    middlerightinput.style.border = "5px solid blue";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe2rate = localStorage.getItem("pl2rate");
    playe2rate++;
    localStorage.setItem("pl2rate", playe2rate);
    ratepl2.innerHTML = playe2rate;
    topleftinput.setAttribute("disabled", "");
    topceninput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("secondplayername")} win`,
    });
  } else if (
    bottomleftinput.value == "X" &&
    bottomceninput.value == "X" &&
    bottomrightinput.value == "X"
  ) {
    bottomleftinput.style.border = "5px solid red";
    bottomceninput.style.border = "5px solid red";
    bottomrightinput.style.border = "5px solid red";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe1rate = localStorage.getItem("pl1rate");
    playe1rate++;
    localStorage.setItem("pl1rate", playe1rate);
    ratepl1.innerHTML = playe1rate;
    middleleftinput.setAttribute("disabled", "");
    middleceninput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    topleftinput.setAttribute("disabled", "");
    topceninput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("firstplayername")} win`,
    });
  } else if (
    bottomleftinput.value == "O" &&
    bottomceninput.value == "O" &&
    bottomrightinput.value == "O"
  ) {
    bottomleftinput.style.border = "5px solid blue";
    bottomceninput.style.border = "5px solid blue";
    bottomrightinput.style.border = "5px solid blue";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe2rate = localStorage.getItem("pl2rate");
    playe2rate++;
    localStorage.setItem("pl2rate", playe2rate);
    ratepl2.innerHTML = playe2rate;
    middleleftinput.setAttribute("disabled", "");
    middleceninput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    topleftinput.setAttribute("disabled", "");
    topceninput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("secondplayername")} win`,
    });
  } else if (
    topleftinput.value == "X" &&
    middleceninput.value == "X" &&
    bottomrightinput.value == "X"
  ) {
    topleftinput.style.border = "5px solid red";
    middleceninput.style.border = "5px solid red";
    bottomrightinput.style.border = "5px solid red";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe1rate = localStorage.getItem("pl1rate");
    playe1rate++;
    localStorage.setItem("pl1rate", playe1rate);
    ratepl1.innerHTML = playe1rate;
    middleleftinput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    topceninput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("firstplayername")} win`,
    });
  } else if (
    topleftinput.value == "O" &&
    middleceninput.value == "O" &&
    bottomrightinput.value == "O"
  ) {
    topleftinput.style.border = "5px solid blue";
    middleceninput.style.border = "5px solid blue";
    bottomrightinput.style.border = "5px solid blue";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe2rate = localStorage.getItem("pl2rate");
    playe2rate++;
    localStorage.setItem("pl2rate", playe2rate);
    ratepl2.innerHTML = playe2rate;
    middleleftinput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    topceninput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("secondplayername")} win`,
    });
  } else if (
    toprightinput.value == "X" &&
    middleceninput.value == "X" &&
    bottomleftinput.value == "X"
  ) {
    bottomleftinput.style.border = "5px solid red";
    middleceninput.style.border = "5px solid red";
    toprightinput.style.border = "5px solid red";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe1rate = localStorage.getItem("pl1rate");
    playe1rate++;
    localStorage.setItem("pl1rate", playe1rate);
    ratepl1.innerHTML = playe1rate;
    middleleftinput.setAttribute("disabled", "");
    topceninput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    topleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("firstplayername")} win`,
    });
  } else if (
    toprightinput.value == "O" &&
    middleceninput.value == "O" &&
    bottomleftinput.value == "O"
  ) {
    bottomleftinput.style.border = "5px solid blue";
    middleceninput.style.border = "5px solid blue";
    toprightinput.style.border = "5px solid blue";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe2rate = localStorage.getItem("pl2rate");
    playe2rate++;
    localStorage.setItem("pl2rate", playe2rate);
    ratepl2.innerHTML = playe2rate;
    middleleftinput.setAttribute("disabled", "");
    topceninput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    topleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("secondplayername")} win`,
    });
  } else if (
    topleftinput.value == "X" &&
    middleleftinput.value == "X" &&
    bottomleftinput.value == "X"
  ) {
    topleftinput.style.border = "5px solid red";
    middleleftinput.style.border = "5px solid red";
    bottomleftinput.style.border = "5px solid red";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe1rate = localStorage.getItem("pl1rate");
    playe1rate++;
    localStorage.setItem("pl1rate", playe1rate);
    ratepl1.innerHTML = playe1rate;
    topceninput.setAttribute("disabled", "");
    middleceninput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("firstplayername")} win`,
    });
  } else if (
    topleftinput.value == "O" &&
    middleleftinput.value == "O" &&
    bottomleftinput.value == "O"
  ) {
    topleftinput.style.border = "5px solid blue";
    middleleftinput.style.border = "5px solid blue";
    bottomleftinput.style.border = "5px solid blue";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe2rate = localStorage.getItem("pl2rate");
    playe2rate++;
    localStorage.setItem("pl2rate", playe2rate);
    ratepl2.innerHTML = playe2rate;
    topceninput.setAttribute("disabled", "");
    middleceninput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("secondplayername")} win`,
    });
  } else if (
    topceninput.value == "X" &&
    middleceninput.value == "X" &&
    bottomceninput.value == "X"
  ) {
    topceninput.style.border = "5px solid red";
    middleceninput.style.border = "5px solid red";
    bottomceninput.style.border = "5px solid red";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe1rate = localStorage.getItem("pl1rate");
    playe1rate++;
    localStorage.setItem("pl1rate", playe1rate);
    ratepl1.innerHTML = playe1rate;
    topleftinput.setAttribute("disabled", "");
    middleleftinput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("firstplayername")} win`,
    });
  } else if (
    topceninput.value == "O" &&
    middleceninput.value == "O" &&
    bottomceninput.value == "O"
  ) {
    topceninput.style.border = "5px solid blue";
    middleceninput.style.border = "5px solid blue";
    bottomceninput.style.border = "5px solid blue";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe2rate = localStorage.getItem("pl2rate");
    playe2rate++;
    localStorage.setItem("pl2rate", playe2rate);
    ratepl2.innerHTML = playe2rate;
    topleftinput.setAttribute("disabled", "");
    middleleftinput.setAttribute("disabled", "");
    middlerightinput.setAttribute("disabled", "");
    toprightinput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    bottomrightinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("secondplayername")} win`,
    });
  } else if (
    toprightinput.value == "X" &&
    middlerightinput.value == "X" &&
    bottomrightinput.value == "X"
  ) {
    toprightinput.style.border = "5px solid red";
    middlerightinput.style.border = "5px solid red";
    bottomrightinput.style.border = "5px solid red";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe1rate = localStorage.getItem("pl1rate");
    playe1rate++;
    localStorage.setItem("pl1rate", playe1rate);
    ratepl1.innerHTML = playe1rate;
    topceninput.setAttribute("disabled", "");
    middleceninput.setAttribute("disabled", "");
    middleleftinput.setAttribute("disabled", "");
    topleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("firstplayername")} win`,
    });
  } else if (
    toprightinput.value == "O" &&
    middlerightinput.value == "O" &&
    bottomrightinput.value == "O"
  ) {
    toprightinput.style.border = "5px solid blue";
    middlerightinput.style.border = "5px solid blue";
    bottomrightinput.style.border = "5px solid blue";
    turnshower.innerHTML = "WIN";
    turnshower.classList.add("text-danger");
    spanshow.classList.add("d-none");
    playe2rate = localStorage.getItem("pl2rate");
    playe2rate++;
    localStorage.setItem("pl2rate", playe2rate);
    ratepl2.innerHTML = playe2rate;
    topceninput.setAttribute("disabled", "");
    middleceninput.setAttribute("disabled", "");
    middleleftinput.setAttribute("disabled", "");
    topleftinput.setAttribute("disabled", "");
    bottomceninput.setAttribute("disabled", "");
    bottomleftinput.setAttribute("disabled", "");
    Toast.fire({
      icon: "info",
      title: `${localStorage.getItem("secondplayername")} win`,
    });
  } else if (
    topleftinput.value &&
    middleleftinput.value &&
    bottomleftinput.value &&
    topceninput.value &&
    middleceninput.value &&
    bottomceninput.value &&
    toprightinput.value &&
    middlerightinput.value &&
    bottomrightinput.value
  ) {
    turnshower.innerHTML = "Draw";
    turnshower.classList.add("text-warning");
    spanshow.classList.add("d-none");
    
    newgamebtn.classList.remove('d-none')
    
  }
}
