/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />

namespace Subjects {
  // Teacher object
  export const cTeacher: Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
  };

  // Subject constants
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // C++ subject
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // Java subject
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // React subject
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements()); 
  console.log(react.getAvailableTeacher());  
}
