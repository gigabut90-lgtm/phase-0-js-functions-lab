function calculateTax(Amount){
    let taxValue = Amount * (10/100)
    return taxValue
}
   


function convertToUpperCase(Text){
    return Text.toUpperCase()
}
console.log(convertToUpperCase("amy"))

function findMaximum(num1,num2){
    if (num1>num2){
        return num1
    }
    else{
        return num2
    }
}

function isPalindrome(word){
    let reversedword = word.split("").reverse().jion("")
    if (word == reversedword){
        return true;
    }
    else{ return false

    }
}
function calculateDiscountedPrice(originalPrice,discountedPercentage){
    let discount = originalPrice * (discountedPercentage/100)
    let discountedPrice = originalPrice - discount 
    return discountedPrice
}
