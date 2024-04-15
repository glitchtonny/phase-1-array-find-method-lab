// code your solution here
function superbowlWin(records){
    const win = records.find(record => record.result === "W");
    if (win){
        return win.year 
    } else {undefined}

}
