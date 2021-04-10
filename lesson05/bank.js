
account = 0;

function bankPrompt() {
    console.log("Please enter one of the supported commands.");
    var response = prompt("Welcome to Bank of HTML5200!\n Press one of the following keys to take action on your account.\n Q to quit.\n W to make a withdrawl.\n D to deposit.\n B to view balance.");
    switch (response) {
        case "Q":
            return;
        case "W":
             makeWithdrawl();
            break;
        case "D":
            makeDeposit();
            break;
        case "B":
            alert("Your account has a balance of $" + account);
            break;
        default:
            alert("Please enter one of the supported commands.");
    }
    bankPrompt();
}

function makeDeposit() {
    var dep = prompt("Please enter the amount you will deposit.");
    if (Number.isNaN(Number(dep))) {
        return;
    }
    account += Number(dep);
}

function makeWithdrawl() {
    var wd = prompt("Please enter the amount you will withdrawl.");
    if (Number.isNaN(Number(wd))) {
        return;
    }
    account -= Number(wd);
}