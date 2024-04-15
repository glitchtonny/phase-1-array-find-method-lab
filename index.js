// code your solution here
function superbowlWin(records){
    const win = records.find(({result}) => result === "W");
    if (win){
        return win.year 
    } else {
        return undefined
    }

}
