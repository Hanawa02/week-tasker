export class Task {
  id: string;
  name: string;
  description: string;
  weeklyQuotaInMinutes: number;
  minutesExecutedThisWeek: number;

  constructor(
    id: string,
    name: string,
    description: string,
    weeklyQuotaInMinutes: number,
    minutesExecutedThisWeek: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.weeklyQuotaInMinutes = weeklyQuotaInMinutes;
    this.minutesExecutedThisWeek = minutesExecutedThisWeek;
  }

  get missingMinutesThisWeek() {
    return this.weeklyQuotaInMinutes - this.minutesExecutedThisWeek;
  }
}
