let userName = prompt("Lütfen Adinizi Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = userName;

function showTime() { //fonksiyon showtime

    let myClock = document.querySelector("#myClock");
    let date = new Date();   // !Date nesnesi

    //js de günler pazardan başlar. (ilk index=0 pazar)
    let days = ["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"]

    myClock.innerHTML = `
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${days[date.getDay()]}
    `
}

setInterval(showTime,1000); //saniye başına showTime fonksiyonunu çağırır.