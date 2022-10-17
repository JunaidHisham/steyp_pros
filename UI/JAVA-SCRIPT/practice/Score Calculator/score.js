// 3 Points for Win
// 1 Point for draw
// 0 Point for lose

const scoreCalculator = (a, b, c) => {
    let win = a * 3;
    let draw = b * 1;
    let lose = c * 0;
    var Total_score = win + draw + lose;
    return Total_score;
}

var score = scoreCalculator(5, 0, 2);
console.log(score);
