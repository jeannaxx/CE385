generated 
-> เก็บไฟล์ อัติโนมัติ ของPisma client
node_modules 
->เก็บพวก ที่ติดตั้ง ไฟล์โปรเจคเรา
pirma 
-> การจัดการข้อมูลDatabase
src
เก็บโค๊ดของระบบ
ภายในsrc 
lib เก็บutilit หรือhelp
-lim.ts ใช้เชื่อมai ,จัดการ promt
-schemaReader.ts เอาโครงสร้างDBไปให้ai
tools เครื่องมือการเรียกใช้ai 
-queryTool.ts 
ฟังกชันที่มาจากdatabase
****ต่อไปการทำงาน 
1.ผู้ส่งคำถามคือRequest 
-ผุ้ส่งrequestผ่ารapiเช่น postman 
2.Router จัดการคำขอ 
chatRouter ทำหน้าที่ รับคำขอจากผู้ใช้ เตรียมข้อมุลก่อนส่งให้ฟร 
มีการส่งต่อไปยังระบบAi
3.ระะบบ AIประมวลผล
lim.ts จะเชื่อมต่อกับ googke genertiveAi ส่งไปให้prom ไปให้AI เเนบschema DB  เพื่อให้AIเข้าใจโครงสร้างข้อมูล
4.AiเลือกTool ที่จำเป็น ถ้าคำถามเกี่ยวกับdatabase จะเรียกใช้Ai queryTool.ts
5.Tool ดึงข้อมูลจากไฟล์Database 
queryTool.ts ใช้Prisma query database ดึงข้อมูลจริงออกมา
6.ส่งข้อมูลกลับไปให้Ai 
ผลลลัพมาจากdatabase
7.ส่งคำตอบกลับหาผุ้ใช้งาน
aiสร้างคำตอบสุดทา้ย ส่งกลับผ่านChartRouter ผู้ใช้ก็จะเห้็น