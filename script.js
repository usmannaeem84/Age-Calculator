const CalBtn = document.querySelector(".btn");
let InputValue = document.querySelector(".input");
InputValue.max = new Date().toISOString().split("T")[0];  // to make date not possible for future
const Result = document.querySelector(".result");

const AgeCalculator = (e) => {
    let BirthDate = new Date(InputValue.value);

    let d1 = BirthDate.getDate();
    let m1 = BirthDate.getMonth() + 1; // month is 1-based now
    let y1 = BirthDate.getFullYear();

    let CurrentDate = new Date();

    let d2 = CurrentDate.getDate();
    let m2 = CurrentDate.getMonth() + 1; // month is 1-based now
    let y2 = CurrentDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        // If the day of the current month is less than the birth date, subtract days from the previous month
        m3--;
        if (m2 - 1 === 0) {
            d3 = DaysInMonth(12, y2 - 1) + d2 - d1; // December of the previous year
        } else {
            d3 = DaysInMonth(m2 - 1, y2) + d2 - d1; // previous month of the current year
        }
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    Result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;

    function DaysInMonth(month, year) {
        return new Date(year, month, 0).getDate(); // Returns the number of days in the given month
    }
}

CalBtn.addEventListener("click", AgeCalculator);
