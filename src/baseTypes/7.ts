/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}

function isWeekend(day: DayOfWeek): boolean {
  return day%6 === 0;
 }
