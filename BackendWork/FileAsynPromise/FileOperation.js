const fs=require('fs').promises;
const promise=fs.writeFile("data.txt","Writing data through Fs promises module",{encoding:'utf-8'})
promise.then(()=>{
console.log("data written successfully");
}).catch(err=>{
    console.log("Error is"+err)
}).finally(msg=>{console.log("Finally done")})

fs.readFile("data.txt",{encoding:"utf-8"}).then((data)=>{
    console.log("Your data is:",data)
}).catch(err=>{
    console.log("Error is"+err)
}).finally(msg=>{console.log("Finally done")})