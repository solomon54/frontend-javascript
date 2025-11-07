/// <reference path="./Teacher.ts" />
var Subjects;
(function (Subjects) {
    class Subject {
        teacher;
        setTeacher(teacher) {
            this.teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
export {};
//# sourceMappingURL=Subject.js.map