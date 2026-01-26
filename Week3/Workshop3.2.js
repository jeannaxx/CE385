let BMI ={
    Thin : 18.5,
    Normal : 25,
    Fat : 30,
    OverFat :30,
};
let weight = 110; // กิโลกรัม          
let height = 1.65; // เมตร
let bmiValue = weight / (height * height);
console.log("BMI = " + bmiValue.toFixed(2));
if (bmiValue < BMI.Thin){
    console.log("คุณอยู่ในเกณฑ์ ผอม");
}
else if (bmiValue < BMI.Normal){
    console.log("คุณอยู่ในเกณฑ์ ปกติ");
}

