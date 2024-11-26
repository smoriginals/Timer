////let countdown;
////function Timer(e) {
////    const now = Date.now();
////    const then = now + e * 1000;

////    countdown = setInterval(() => {
////        const secLeft = Math.round((then - Date.now()), 1000);
////        if (secLeft <= 0) {
////            clearInterval(countdown);
////            return;
////        }
////        console.log(secLeft);
////    }, 1000);
////}

//let countdown;
////const displayTime = document.querySelector(".eta");
////const endTime = document.querySelector(".etg");

//function Timer(e) {
//    const now = Date.now(); //get current time,day,date,sec,hour,min...etc.
//    const then = now + e * 1000; // multiply by 1000 gives you miliseconds of that sec that you pass in Timer(sec).

//    //DisplayLeftTime(e);
//    //DisplayEndTime(then)
//    countdown = setInterval(() => {
//        const secLeft = Math.round((then - Date.now()) / 1000);
//        //check if we should stop it
//        if (secLeft <= 0) {
//            clearInterval(countdown);
//            return;
//        }
//        //Display it
//        DisplayLeftTime(e);
//    }, 1000);
//}

//function DisplayLeftTime(sec) {
//    const min = Math.floor(sec / 60);
//    const secLeft = sec % 60;
//    const display = `${min}:${secLeft < 10 ? '0' : ''}${secLeft}`;
//    document.title = display;
//    displayTime.textContent = display;

//}

//function DisplayEndTime(timeStamp) {
//    const end = new Date(timeStamp);
//    const hour = end.getHours();
//    const min = end.getMinutes();
//    const adjustedHour = hour > 12 ? hour - 12 : '';
//    endTime.textContent = `Be Back @${adjustedHour}:${min < 10 ? '0' : ''}${min}`;
//}

