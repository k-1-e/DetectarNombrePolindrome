function palindromeChecker(str) {
    var newStr = str.replace(/[\W_]/g, "").toLowerCase();
    var strReversed = newStr.split("").reverse().join("");
    return newStr === strReversed ? "es palindromo" : "no es palindromo";
}
console.log(palindromeChecker("ana")); // es palindromo
console.log(palindromeChecker("oto")); // es palindromo
console.log(palindromeChecker("otra cosa")); // no es palindromo
