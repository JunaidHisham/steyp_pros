const wish = (time) => {
    if (time <= 12) {
        return "Good Morning";
    } else if (time > 12 && time <= 16) {
        return "Good Afternoon";
    } else if (time > 16 && time <= 20) {
        return "Good Evening";
    } else if (time > 20 && time <=24) {
        return "Good Night";
    }
}

console.log(wish(21));