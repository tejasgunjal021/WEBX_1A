type Student = {
    id: number;
    name: string;
    surname: string;
    age: number;
    marks: number;
  };
  
  const students: Student[] = [
    { id: 1, name: "Aarav", surname: "Sharma", age: 20, marks: 85 },
    { id: 2, name: "Priya", surname: "Patel", age: 21, marks: 72 },
    { id: 3, name: "Ravi", surname: "Kumar", age: 19, marks: 55 },
    { id: 4, name: "Neha", surname: "Iyer", age: 22, marks: 38 },
    { id: 5, name: "Kiran", surname: "Singh", age: 20, marks: 60 },
  ];
  
  const determineResult = (marks: number): string => {
    if (marks < 40) return "Fail";
    if (marks < 60) return "Pass";
    if (marks < 75) return "First Class";
    return "Distinction";
  };
  
  students.forEach((student) => {
    const result = determineResult(student.marks);
    console.log(
      `Student ID: ${student.id}, Name: ${student.name} ${student.surname}, Age: ${student.age}, Marks: ${student.marks}, Result: ${result}`,
    );
  });
  