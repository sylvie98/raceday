 //this program called race days
 let raceNumber = Math.floor(Math.random() * 1000);
 const registeredEarly = false;
 const age =19 ;
if(age >18 && registeredEarly ===true){
    console.log('they will race at 9:30 am '+raceNumber);
}
else if(age > 18 && registeredEarly !==true){
    console.log('Late adults run at 11:00 am '+raceNumber);
}
else if(age < 18 ){
    console.log('outh registrants run at 12:30 pm'+raceNumber);
}
else{
    console.log("the registration desk");
}
console.log("Runners who are"+" "+age+"years old and registered early will run at 9:30 am")