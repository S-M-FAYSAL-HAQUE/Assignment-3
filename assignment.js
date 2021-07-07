// https://github.com/S-M-FAYSAL-HAQUE/Assignment-3

function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "Negative Value is not use in Distance.";
    }
    else{
        meter = kilometer / 1000;
    return meter;
    }
}
var outputMeter = kilometerToMeter(5);
console.log(outputMeter);



/**
function budgetCalculator(total){
    if(total < 0){
        return "Negative Value is not use in Material.";
    }
    else{
        let watch = 0;
        let phone = 0;
        let laptop = 0;
        totalWatch = watch + total * 50;
        totalPhone = phone + total * 100;
        totalLaptop = laptop + total * 500;
        totalPrize = totalWatch + totalPhone + totalLaptop;
    }
    return totalPrize;
    
}
var totalBudget = budgetCalculator(11);
console.log(totalBudget);
 */ 



function budgetCalculator(watch, phone, laptop){
    if (watch < 0 || phone < 0 || laptop < 0){
        return "Negative Value is not use in Material.";
    }
    else{
        watchPrize = watch * 50;
        phonePrize = phone * 100;
        laptopPrize = laptop * 500;
        totalPrize = watchPrize + phonePrize + laptopPrize;
    }
    return totalPrize;
}
var totalBudget = budgetCalculator(5, 3, 2);
console.log(totalBudget);



function hotelCost(day){
    var cost = 0;
    if (day <= 10){
        cost = day * 100;
    }
    else if (day <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        cost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = day - 10;
        var afterSecondTenDays = remainingDays * 50;
        cost = firstTenDays + secondTenDays + afterSecondTenDays;
    }
    return cost;
}
var totalCost = hotelCost(21);
console.log(totalCost);



/**
var megaFriend = ['Fahad', 'Faysal', 'Rohim', 'Humbarkha', 'Mohammad', 'Ibrahim'];
var max = megaFriend[0];
for(var i = 0; i < megaFriend.length; i++){
    var element = megaFriend[i].length;
    console.log(element);
    if (element > max){
        max = element;
    }
    
}

console.log('Longest name is: ', max);
 */


function megaFriend(maxName){
    var longestName = "";
    var nameLen = 0;
    for(var i = 0; i < maxName.length; i++){
        if(maxName[i].length > nameLen){
            nameLen = maxName[i].length;
            longestName = maxName[i];
        }
    }
    return longestName;
}
var maxName = ['Faysal', 'Fahad', 'Rohim', 'Humbarkha', 'Mohammad', 'Ibrahim'];
var largestName = megaFriend(maxName);
console.log('Largest name is: ', largestName);



