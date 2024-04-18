let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".buttons"));

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error";
        }
        break;

      case "%":
        let passText = display.innerText + "/100";
        display.innerText = eval(passText);
        break;

      case "+/-":
        display.innerText = eval(display.innerText * -1);
        break;
      default:
        if (display.innerText === "0" && e.target.innerText != ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
