const levels = Object.freeze({
  primary: "primary",
  middle: "middle",
  high: "high",
});

class School {
  /**
   *
   * @param {string} name
   * @param {levels} level
   * @param {number} numberOfStudents
   */
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  /**
   *
   * @param {[string]} substituteTeachers
   */
  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}

class PrimarySchool extends School {
  /**
   *
   * @param {string} name
   * @param {number} numberOfStudents
   * @param {string} pickUpPolicy
   */
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name, levels.primary, numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }
  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

class MiddleSchool extends School {}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, levels.high, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}
