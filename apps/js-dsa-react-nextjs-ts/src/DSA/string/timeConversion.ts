

export default function timeConversion(s="07:05:45PM") {
  console.log("----star---------------")
// case
// 12 AM  => 00 
// after 1 AM  to 12 PM  = no hour conversion
// after 12 PM (starting 1 PM)  = convert hour to  plus by 12

let hour = s.substring(0,2);
console.log('hour:', hour)
let min =s.substring(3,5);
console.log('min:', min)
let second =s.substring(6,8);
console.log('second:', second)
let period =s.substring(8,10);
console.log('period:', period)


if( hour == 12 && period == "AM"){
  hour = "00";
}else if(period == "PM" && hour !=12 ){
hour = parseInt(hour,10)+12;
}else {
  hour = hour;
}

let output = `${hour}:${min}:${second}`
console.log('output:', output)
console.log("----end---------------")
    return output


}
