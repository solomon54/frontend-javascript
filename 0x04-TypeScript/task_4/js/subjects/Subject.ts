namespace Subjects {
  export class Subject {
    teacher!: Teacher; // tells TS "I promise this will be assigned later"

    setTeacher(teacher:Teacher) {
      this.teacher = teacher;
    }
  }
}
