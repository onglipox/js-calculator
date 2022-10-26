// Write Javascript code!
let finalString = 0,
    currentSymbol = "";

calculate = (input) => {
    if (input === "AC") {
        finalString = 0;
    } else if (["+", "-", "/", "X"].indexOf(input) > -1) {
        currentSymbol = input;
        document.getElementById(input)?.classList.remove("dark:bg-orange-400");
        document.getElementById(input)?.classList.add("dark:bg-white");
    } else {
        switch (currentSymbol) {
            case "+":
                finalString = finalString + input;
                break;
            case "-":
                finalString = finalString - input;
                break;
            case "X":
                finalString = finalString * input;
                break;
            case "/":
                finalString = finalString / input;
                break;
            default:
                finalString = input;
                break;
        }

        document
            .getElementById(currentSymbol)
            ?.classList.remove("dark:bg-white");
        document
            .getElementById(currentSymbol)
            ?.classList.add("dark:bg-orange-400");
        currentSymbol = "";
    }

    document.getElementById("output").innerHTML = finalString;
};
