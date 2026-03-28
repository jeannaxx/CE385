import * as fs from "fs";
import * as path from "path";

interface ModelInfo {
  name: string;
  fields: string[];
}

export function readPrismaSchema(): ModelInfo[] {
  const schemaPath = path.join(process.cwd(), "prisma", "schema.prisma");
  const content = fs.readFileSync(schemaPath, "utf-8"); // อ่านไฟล์ schema.prisma เป็น text

  const models: ModelInfo[] = []; // เก็บข้อมูล model ทั้งหมด
  const modelRegex = /model\s+(\w+)\s*\{([^}]*)\}/g; // regex สำหรับจับ model และ body

  let match;
  while ((match = modelRegex.exec(content)) !== null) {
    const modelName = match[1]; // ชื่อ model (group 1)
    const body = match[2]; // body ของ model (group 2)

    // extract field names (ข้าม relation และ decorator)
    const fields = body
      .split("\n") // แยกเป็นบรรทัด
      .map((line) => line.trim()) // ตัดช่องว่าง
      // กรอง: ไม่เอาบรรทัดว่าง, comment, decorator
      .filter(
        (line) =>
          line &&
          !line.startsWith("//") &&
          !line.startsWith("@") &&
          !line.startsWith("@@")
      )
      .map((line) => line.split(/\s+/)[0]) // เอาชื่อ field (คำแรกของบรรทัด)
      .filter(Boolean); // กรองค่าที่ว่าง

    models.push({ name: modelName, fields }); // เพิ่มเข้า array
  }

  return models;
}

export function getSchemaAsText(): string {
  const models = readPrismaSchema();
  return models
    .map((m) => `Model: ${m.name}\nFields: ${m.fields.join(", ")}`)
    .join("\n\n"); // คั่นแต่ละ model ด้วยบรรทัดว่าง
}