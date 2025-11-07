/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    class Cpp extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher() {
            if (!this.teacher.experienceTeachingC)
                return 'No available teacher';
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
export {};
//# sourceMappingURL=Cpp.js.map