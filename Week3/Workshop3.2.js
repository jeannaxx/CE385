function calculateBMI(weight, height) {

    let bmi='';
    let catergory='';

    bmi = weight / (height * height);
    bmi = bmi.toFixed(2);


    if (bmi < 18.5){
        catergory = "ผอม";
    }else if (18.5 <= bmi && bmi <= 25){
        catergory = "ปกติ";
    }else if (25 < bmi && bmi <= 30){
        catergory = "อ้วน";
    }else {
        catergory = "อ้วนมาก";
    }
console.log("BMI: " + bmi);
console.log("สถานะ: " + catergory);
}
calculateBMI(40,1.45);