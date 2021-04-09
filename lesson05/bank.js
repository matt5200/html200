function bankPrompt() {
    var response = prompt("Welcome to Bank of HTML5200!\n Press one of the following keys to take action on your account.\n Q to quit.\n W to make a withdrawl.\n D to deposit.\n B to view balance.");
    switch (response) {
        case "Q":
            return;
        case "W":
        case "D":
        case "B":
        default:
            console.log("Please enter one of the supported commands.");
    }
    bankPrompt();
}