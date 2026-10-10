import { calculateLearnOfWeek } from "./calculator.mjs";
import { calculateLearnOfFourWeeks } from "./calculator.mjs";

const hoursPerDay = Number(process.argv[2]);
const daysPerWeek = Number(process.argv[3]);

if (Number.isNaN(hoursPerDay) || Number.isNaN(daysPerWeek)) {
  console.log("กรุณาใส่ตัวเลข");
} else if (hoursPerDay <= 0 || hoursPerDay > 24) {
  console.log("ชั่วโมงต่อวันต้องมากกว่า 0 และไม่เกิน 24");
} else if (
  !Number.isInteger(daysPerWeek) ||
  daysPerWeek < 1 ||
  daysPerWeek > 7
) {
  console.log("จำนวนวันต้องเป็นจำนวนเต็มตั้งแต่ 1 ถึง 7");
} else {
  const totalHours = calculateLearnOfWeek(hoursPerDay, daysPerWeek);
  const totalHoursInFourWeeks = calculateLearnOfFourWeeks(totalHours);
  console.log(`ฉันเรียนสัปดาห์ละ ${totalHours} ชั่วโมง`);
  console.log(`ฉันเรียนใน 4 สัปดาห์ ${totalHoursInFourWeeks} ชั่วโมง`);
}