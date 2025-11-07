/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    class Java extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher() {
            if (!this.teacher.experienceTeachingJava)
                return 'No available teacher';
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
export {};
//# sourceMappingURL=Java.js.map