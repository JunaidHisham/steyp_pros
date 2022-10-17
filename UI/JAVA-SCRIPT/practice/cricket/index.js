let sachin = require("./data/sachin.json");
let sehwag = require("./data/sehwag.json");
let yuvraj = require("./data/yuvraj.json");
let dravid = require("./data/dravid.json");
let ganguly = require("./data/ganguly.json");
let virat  = require("./data/virat.json");

let most_fours = 0;
let most_six = 0;
let most_runs = 0;
let most_wikts = 0;

let most_fours_player = "";
let most_six_player = "";
let most_runs_player = "";
let most_wikts_player = "";

let check_status = (data) => {
    let total_fours = 0;
    let total_six = 0;
    let total_runs = 0;
    let total_wikts = 0;


    for (let [key, value] of Object.entries(data.data.batting)) {
        if (value["4s"] != "") {
            total_fours += parseInt(value["4s"]);
        }
        if (value["6s"] != "") {
            total_six += parseInt(value["6s"]);
        }
        if (value["Runs"] != "") {
            total_runs += parseInt(value["Runs"]);
        }
    }
    for (let [key, value] of Object.entries(data.data.bowling)) {
        if (value["Wkts"] != "") {
            total_wikts += parseInt(value["Wkts"]);
        }
    }
    // console.log(total_fours);

    if (most_fours < total_fours) {
        most_fours_player = data.name;
        most_fours = total_fours;
    }
    
    if (most_six < total_six) {
        most_six_player = data.name;
        most_six = total_six;
    }
    
    if (most_runs < total_runs) {
        most_runs_player = data.name;
        most_runs = total_runs;
    }
    
    if (most_wikts < total_wikts) {
        most_wikts_player = data.name;
        most_wikts = total_wikts;
    }
};

check_status(dravid);
check_status(ganguly);
check_status(sachin);
check_status(sehwag);
check_status(virat);
check_status(yuvraj);

console.log(most_fours);
console.log(most_fours_player);

console.log(most_six);
console.log(most_six_player);

console.log(most_runs);
console.log(most_runs_player);

console.log(most_wikts);
console.log(most_wikts_player);

