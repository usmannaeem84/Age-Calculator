const CalBtn = document.querySelector(".btn")
let InputValue = document.querySelector(".input")
InputValue.max = new Date().toISOString().split("T")[0];  //to make date not possible for future
const Container = document.querySelector(".container")
const Result = document.querySelector(".result")

const AgeCalculator = (e) => {

    let BirthDate = new Date(InputValue.value)

    let d1 = BirthDate.getDate();
    let m1 = BirthDate.getMonth() + 1;
    let y1 = BirthDate.getFullYear();



    let CurrentDate = new Date()

    let d2 = CurrentDate.getDate();
    let m2 = CurrentDate.getMonth() + 1;
    let y2 = CurrentDate.getFullYear();

    let d3, m3, y3;

    if (y2) {
        
    }

    y3 = y2 - y1;
   

    if (m2 >= m1) {
        m3 = m2 - m1
    }
    else {
        y3--
        m3 = 12 + m2 - m1
    }


    if (d2 >= d1) {
        d3 = d2 - d1
    }
    else {
        m3--
        d3 = DaysInMOnth + d2 - d1
    }

    if (m3 < 0) {
        m3 = 11;
        y3--
    }


    Result.innerHTML = `You are <span>${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> days old `



    function DaysInMOnth(month, year) {

        return new Date(year, month, 0).getDate()


    }





}
CalBtn.addEventListener("click", AgeCalculator)