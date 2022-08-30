// code your solution here

function superbowlWin(record){
    const result = record.find(element => element.result === "W") //I did not need to make a for loop. The .find() function went through the array of objects with results of W
    if (result !== undefined){ // To avoid the TypeError, the if statement helped when result is NOT undefined
        return result.year;
    }
    
}  