
//login button event handeler
const loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionarea = document.getElementById("transction-area");
    transactionarea.style.display = "block";
})

//deposit button event handeler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
                                                                               //   const  depositAmount = document.getElementById("depositAmount").value;
                                                                               //     const depositNumber = parseFloat(depositAmount);

    const depositNumber = getInputNumber("depositAmount");



                                                                                //   const currentDeposit = document .getElementById("currentDeposit").innerText;
                                                                                //   const currentDepositNumber = parseFloat(currentDeposit);
                                                                                //   const totalDeposit = depositNumber + currentDepositNumber;
                                                                                //   document.getElementById("currentDeposit").innerText = totalDeposit;

    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber)

    document.getElementById("depositAmount").value = "";

})

//withdraw button event hander

const widthdrawBtn = document.getElementById("addWidthdraw");
widthdrawBtn.addEventListener("click", function () {
    const widthdrawNumber = getInputNumber("widthdrawAmount");


    updateSpanText("currentWidthdraw", widthdrawNumber);
    updateSpanText("currentBalance", -1 * widthdrawNumber)


    document.getElementById("widthdrawAmount").value = ""
})

function getInputNumber(id) {

    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber) {

    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;

}



