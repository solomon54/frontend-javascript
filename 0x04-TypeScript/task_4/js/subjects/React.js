/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    class React extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher() {
            if (!this.teacher.experienceTeachingReact)
                return 'No available teacher';
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
    Subjects.React = React;
})(Subjects || (Subjects = {}));
export {};
//# sourceMappingURL=React.js.map