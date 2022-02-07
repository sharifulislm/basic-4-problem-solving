
/*
   Function name should be given anaToVori]: Ana will be taken as a parameter in a function
  (ana). Then convert it to weight and return the number of values. Only the 
 number will return. */

 ///////////////////////
//  problem start -1 //
///////////////////////

function anaToVori(ana)  {
    let goldVori = ana / 16;
    return goldVori

}
// var goldtotal = (anaToVori(32));
// console.log(goldtotal);

/*
Function name must be given pandaCost]: Three parameters are required.
Price of  Singara - 7 rupees
The price of 1 samucha - 10 rupees
Price of  jilapi - 15 rupees
Now if he orders different numbers of Singara,
 Samucha, and Jilapi then he has to return the total amount of money.
*/
///////////////////////
//  problem start -2 //
///////////////////////

function pandaCost(Singara,samucha,jilapi) {

    let SingaraPrice = 7;
    let samuchaPrice = 10;
    let jilapiPrice = 15;
    
    totalSingaraPrice = SingaraPrice * Singara;
    totalsamuchaPrice = samuchaPrice * samucha;
    totaljilapiPrice = jilapiPrice * jilapi;
  //  total parice 
  const totalPandacost =  totalSingaraPrice + totalsamuchaPrice + totaljilapiPrice;
  return totalPandacost;
  
  }
  // const totalpandaCostResult = (pandaCost(2,1,3));
  // console.log(totalpandaCostResult);

///////////////////////
//  problem start -3 //
///////////////////////
  

function picnicBudget(picnicGroup) {
  if (typeof(picnicGroup)== 'number'){
    "return sorry  we are sell only coffee"

}

 if (picnicGroup <=100){
   var firstTotalCost = picnicGroup * 5000;
   return firstTotalCost;
 } else if(picnicGroup>100 && picnicGroup<=200) {
   var firstequalCost = 100*5000;
   var remaining = picnicGroup - 100;
   var offerCost = remaining * 4000;
   var totalCostoffer = firstequalCost + offerCost;
   return totalCostoffer;
 }
 else if(picnicGroup>200){
  var fristpicnicGroup100 =100*5000;
  var secondPicnicGroup100 =100*4000;
  var firstAndSecondbetween= picnicGroup-200;
  var thirdPicnicGroup100= firstAndSecondbetween*3000;
  var totalCost= fristpicnicGroup100+secondPicnicGroup100+thirdPicnicGroup100;
  return totalCost;
}
 

}
console.log(picnicBudget());

///////////////////////
//  problem start -4 //
///////////////////////

var myFriend = ['Faysal','Rakib ','Imran ','UmmeAfrin','Farhan','Mujakkir','Nabiha','Tahmid'];

function oddFriend(fvrfrid) {
  if (fvrfrid.length != Number) {
    return "sorry , we are sell only coffee.";

}

  if (fvrfrid.length>0) {

  for (const friends of fvrfrid) {
    if(friends.length % 2 != 0){
      return friends;
      break;
    }
  }
} 

}
// console.log(oddFriend(myFriend));








  

