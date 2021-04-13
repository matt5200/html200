
account = 0;

function bankPrompt() {
    console.log("Please enter one of the supported commands.");
    var response = prompt("Welcome to Bank of HTML5200!\n Press one of the following keys to take action on your account.\n Q to quit.\n W to make a withdrawl.\n D to deposit.\n B to view balance.");
    switch (response) {
        case "Q":
            return;
        case "W":
            makeWithdrawal();
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
    if (Number(dep)>50000) {
        alert("Your deposit cap is $50,000. Please enter a value less than your cap.");
    }
    account += Number(dep);
}

function makeWithdrawal() {
    var wd = prompt("Please enter the amount you will withdraw.");
    if (Number.isNaN(Number(wd))) {
        return;
    }
    else if (account < Number(wd)) {
        alert("Your account has insufficient funds to withdraw that amount.");
        return;
    }
    else if (account - Number(wd) < 300) {
        var ans = prompt("Low balance alert. This withdrawl will leave your account with less than $300. Please enter C to confirm this withdrawl.");
        if (ans == 'C') {
            alert("Your withdrawl is confirmed.");
        }
        else {
            alert("Your withdrawl was cancelled.");
            return;
        }
    }
    account -= Number(wd);
}