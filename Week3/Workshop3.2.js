function calculateBMI(weight, height) { // การสร้างฟังก์ชันคำนวณ BMI

    let bmi=''; //ตัวเเปรเก็บค่าBMI
    let catergory=''; //ตัวเเปรเก็บสถานะBMI

    bmi = weight / (height * height); // สูตรคำนวณ BMI
    bmi = bmi.toFixed(2); //ปัดเศษทศนิยม 2 ตำแหน่ง

//เเบ่งเงือนไข
    if (bmi < 18.5){  //เงื่อนไขBMIน้อยกว่า 18.5
        catergory = "ผอม"; //สถานะผอม 
    }else if (18.5 <= bmi && bmi <= 25){  //เงื่อนไขBMIระหว่าง18.5-25
        catergory = "ปกติ";
    }else if (25 < bmi && bmi <= 30){ //เงื่อนไขBMIระหว่าง25-30
        catergory = "อ้วน";
    }else {
        catergory = "อ้วนมาก";
    }
console.log("BMI: " + bmi);         //แสดงค่าBMI
console.log("สถานะ: " + catergory); //แสดงสถานะBMI
}
calculateBMI(40,1.45); // เรียกใช้ฟังก์ชันพร้อมส่งค่าเข้าไปตาม ค่าที่เราต้องการ
calculateBMI(70,1.75);
