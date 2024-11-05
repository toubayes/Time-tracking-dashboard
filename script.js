const daily_track = document.querySelector(".daily");
const weekly_track = document.querySelector(".weekly");
const monthly_track = document.querySelector(".monthly");

const hrparday = document.querySelectorAll(".time");
const daily_text = document.querySelectorAll(".week");
const daily_last = document.querySelectorAll(".last");

let daily_arry = ["5 hr", "1 hr", "4 hr", "4 hr", "5 hr", "2 hr"];
let weeklyly_arry = ["32 hr", "10 hr", "4 hr", "4 hr", "5 hr", "2 hr"];
let monthly_arry = ["103 hr", "23 hr", "13 hr", "11 hr", "21 hr", "7 hr"];



let last_daily_arry = ["5 hr", "1 hr", "4 hr", "4 hr", "5 hr", "2 hr"];
let last_weeklyly_arry = ["36 hr", "8 hr", "7 hr", "5 hr", "10 hr", "2 hr"];
let last_monthly_arry = ["128 hr", "29 hr", "19 hr", "18 hr", "23 hr", "9 hr"];

// Function to update the UI based on the selected time period
function updateTimePeriod(timeArray, lastArray,periodText) {
    hrparday.forEach((element, index) => {
        element.textContent = timeArray[index];
    });
    daily_last.forEach((element, index) => {
        element.textContent = lastArray[index];
    });
    daily_text.forEach((element) => {
        element.textContent = periodText; 
    });
}

// Event listeners for each time period button
daily_track.addEventListener("click", () => {
    updateTimePeriod(daily_arry, last_daily_arry,"daily");
});

weekly_track.addEventListener("click", () => {
    updateTimePeriod(weeklyly_arry, last_weeklyly_arry,"weekly");
});

monthly_track.addEventListener("click", () => {
    updateTimePeriod(monthly_arry, last_monthly_arry,"monthly");
});
// Display "daily" data by default when the page loads
window.addEventListener("load", () => {
    updateTimePeriod(daily_arry, last_daily_arry,"daily");
});