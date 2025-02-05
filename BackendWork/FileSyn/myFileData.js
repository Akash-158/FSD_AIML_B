const fs=require('fs');
function myWriteFile(){
try{
    console.log("before writing")
fs.writeFileSync("data.txt","Data is not written by nodejs");
console.log("Data Written successfully");
}
catch(err){
    console.log("Error in writing the data:"+err);
}}

function read(){try{
console.log("Before reading");
const rd=fs.readFileSync("data.txt",{encoding:'utf-8'});
console.log(rd.toString());
console.log("After reading");
}
catch(err){
    console.log("Error in reading the data:"+err);
}}

function append(){try{console.log("Before append");
fs.appendFileSync("data.txt","Appended data by fs module");
console.log("After Appending");
}
catch(err){
    console.log("Error in appending the data:"+err);
}}
const obj={
    myWriteFile:myWriteFile,
    read:read,
    append:append
}
module.exports=obj

// fs.unlinkSync("data.txt");
// console.log("file deleted")
