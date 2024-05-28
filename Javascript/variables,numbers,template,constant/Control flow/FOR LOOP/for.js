let student=["shubham","alex","mark","deepak"];

//for loop//

for(let i=0;i<5;i++){
    console.log("Hello!");
}

//Getting index of student array//
for(let index=0;i<4;i++){
    console.log(student[i]);
}


//Using OF in for loop//
//Access to value,Access empty value//
//Cannot be used for key-value pair//
for(let student of students){
    console.log(student);
}


//Using IN in for loop//
//Access to key,Skips empty value//
//Can use key-value pair//
for(let index in students){
    console.log(index);
}
