//Test1
let usrename = "admin";
let password = "1234";
let age = 22 ;


if (usrename == "admin" && password == "1234" && age >= 18 ) { // กำหนดเงื่อนไขตรงนี้ ถ้าตามเงื่อไขจะไปตบรรทัดต่อไป
    console.log("เข้าสู่ระบบสำเร็จ") //จะเเสดงเมื่อตรงจามเงื่อนไข
} else if (age < 18 ){
    console.log ("อายุไม่ถึงเกณฑ์")
}else {
    console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง") //เงื่อไขไม่ตรงกับที่กำหนดไว้ข้างบนบรรทัดif
}

//Test2
// let usrename = "jenny"; //เปลี่ยนชื่อ ให้ไม่ตรงตามเงื่อนไข
// let password = "1234";
// let age = 22 ;


// if (usrename == "admin" && password == "1234" && age >= 18 ) {
//     console.log("เข้าสู่ระบบสำเร็จ")
// } else if (age < 18 ){
//     console.log ("อายุไม่ถึงเกณฑ์")
// }else {
//     console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
// }
