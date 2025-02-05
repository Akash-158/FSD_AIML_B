function avg(num1,num2,num3){
    return (num1+num2+num3)/3;
}
function avgsqrt(num1,num2,num3){
    return Math.sqrt(avg(num1,num2,num3))
}
module.exports=avgsqrt