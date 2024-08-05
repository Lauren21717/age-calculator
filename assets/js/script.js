let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.getElementById("result");

const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

const calculateAge = () =>{
    let birthDate = new Date(userInput.value);

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let today = new Date();

    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    let diffDay, diffMonth, diffYear;

    diffYear = todayYear-birthYear;

    if(todayMonth>=birthMonth){
        diffMonth = todayMonth - birthMonth
    }else{
        diffYear--;
        diffMonth = 12+todayMonth-birthMonth;
    }

    if(todayDay >= birthDay){
        diffDay = todayDay-birthDay
    } else {
        diffMonth --;
        diffDay = getDaysInMonth(birthYear, birthMonth) + todayDay - birthDay;
    }

    if(diffMonth < 0){
        diffMonth = 11;
        diffYear--;
    }
    if (isNaN(diffDay) || isNaN(diffMonth) || isNaN(diffYear)) {
        result.innerHTML = "Error calculating age, Please check the entered date."
    } else {
        result.innerHTML = `You are <span>${diffYear}</span> years, <span>${diffMonth}</span> months and <span>${diffDay}</span> days old`;
    }
}
