//////////////////////////////////
///anaToVori problem start -1 ///
//////////////////////////////////

function anaToVori(ana) {

	if (typeof (ana) == 'number') {
		let goldVori = ana / 16;
		return goldVori
	} else {
		return 'please enter a valuable Number... ';
	}
}
var goldtotal = (anaToVori(32));
console.log(goldtotal);

//////////////////////////////////
///pandaCost problem start -2 ///
//////////////////////////////////

function pandaCost(Singara, samucha, jilapi) {
	if (typeof (Singara) == 'number' && typeof (samucha) == 'number' &&
		typeof (jilapi) == 'number') {


		let SingaraPrice = 7;
		let samuchaPrice = 10;
		let jilapiPrice = 15;

		totalSingaraPrice = SingaraPrice * Singara;
		totalsamuchaPrice = samuchaPrice * samucha;
		totaljilapiPrice = jilapiPrice * jilapi;
		//  total parice 
		const totalPandacost = totalSingaraPrice + totalsamuchaPrice + totaljilapiPrice;
		return totalPandacost;
	} else
		return 'please enter Right numbar';
}


const totalpandaCostResult = (pandaCost(4, 1, 3));
console.log(totalpandaCostResult);

////////////////////////////////////
///picnicBudget problem start -3 ///
////////////////////////////////////

function picnicBudget(picnicGroup) {
	if (typeof (picnicGroup) == 'number') {


		if (picnicGroup <= 100) {
			var firstTotalCost = picnicGroup * 5000;
			return firstTotalCost;
		} else if (picnicGroup > 100 && picnicGroup <= 200) {
			var firstequalCost = 100 * 5000;
			var remaining = picnicGroup - 100;
			var offerCost = remaining * 4000;
			var totalCostoffer = firstequalCost + offerCost;
			return totalCostoffer;
		} else if (picnicGroup > 200) {
			var fristpicnicGroup100 = 100 * 5000;
			var secondPicnicGroup100 = 100 * 4000;
			var firstAndSecondbetween = picnicGroup - 200;
			var thirdPicnicGroup100 = firstAndSecondbetween * 3000;
			var totalCost = fristpicnicGroup100 + secondPicnicGroup100 + thirdPicnicGroup100;
			return totalCost;
		}
	} else {
		return 'please enter  valuable Number. ';
	}
}
console.log(picnicBudget(101));

//////////////////////////////////
///oddFriend problem start -4 ///
//////////////////////////////////

var myFriend = ['Faysal', 'Rakib ', 'Imran ', 'UmmeAfrin', 'Farhan', 'Mujakkir', 'Nabiha', 'Tahmid'];

function oddFriend(fvrfrid) {



	if (fvrfrid.length > 0) {

		for (const friends of fvrfrid) {
			if (friends.length % 2 != 0) {
				return friends;
				break;
			}
		}
	} else {
		return 'tell me your right firnd name  ..'
	}

}
console.log(oddFriend(myFriend))

// basic problem solvint 