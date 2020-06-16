function palindrome(message){
    return message==(message.split("").reverse().join(""));
}
console.log(palindrome('hello'))// should return false
console.log(palindrome('abcba'))// should return true