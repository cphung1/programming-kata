const organizeInstructors = (instructors) => {
  let outputObject = {};
  
  for (const val in instructors) {
    outputObject[instructors[val].course] = [];
  }

  for (const val in instructors) {
    if (instructors[val].course) {
      outputObject[instructors[val].course].push(instructors[val].name);
    }
  }

  return outputObject;
  
};



console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));