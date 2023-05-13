/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.filter((student)=>{
    if(student.marks>50){
      console.log(student.marks);
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
    arr.forEach((student)=>{
      if(student.marks>50){
        console.log(student.marks);
      }
    })
}

function addData() {
  //Write your code here, just console.log
  let obj={
    id:4,
    name:"susan",
    age:"20",
    marks:45
  }
  arr.push(obj);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr=arr.filter((student)=>{
    if(student.marks>50){
      return student;
    }
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.
  let arr2 = [
    { id: 1, name: "Harry", age: "18", marks: 80 },
    { id: 2, name: "Hermoine", age: "20", marks: 85 },
    { id: 3, name: "Ron", age: "19", marks: 35 },
  ];

  for(let i=0;i<arr2.length;i++){
      arr.push(arr2[i]);
  }
  console.log(arr);
}



// `PrintStudentbyMap()`: console.log all students with marks over 50 using the `.map` function.
// `PrintStudentbyForEach()`: console.log all the students who have marks over 50 using the `.forEach` function.
// `addData()`: In this function, create another student object and append it to the array. For example, push this in the array - `{id:4,name:"susan",age:"20",marks:45}` and then console.log it.
// `removeFailedStudent()`: In this function, remove the student who has failed, i.e. with less than 50 marks. console.log the changed array.
// `ConcatenateArray()`: Create another array with 3 student objects similar to the one in the given array but with different ids and all other parameters.