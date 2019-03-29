let colors = ["Red","Green","Blue", "Yellow", "Purple", "Orange", "Lavender", "Teal", "Dark Red","Navy","White","Black"];
let suffixes = ["st","nd","rd", "th", "th", "th", "th","th","th","th","th","th"];

function colorranks(col, suf){
    let index = 0;
    for (color of col){
        console.log((index + 1)+suf[index],"is",color)
        index += 1
        if (index == 10){
            break;
        }
    }
}

colorranks(colors,suffixes);