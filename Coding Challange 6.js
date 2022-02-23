function cleanTheRoom (array){
	let cleanedArray = [];
	array.map(number =>{
		let filterArray = createFilterArray (cleanedArray, array); 
		if (array.length === cleanedArray.flat(Infinity).length){

		}
		else (cleanedArray.push(addSameNumbers(filterArray)));
		 
	})
	return cleanedArray
}



//find smallest number in Array
function smallestNumber(array) {
	let lowest = Infinity;
	array.map(number => { 	
		if (number < lowest){
			lowest = number;
		}	
	})
	return lowest;
}

//add same Number to Array
function addSameNumbers(array){
	let newArray = array.filter(number => {
	return number === smallestNumber(array)})
	if (newArray.length === 1){
		newArray = newArray[0];
		return newArray;
	}
	else
	return newArray;
}

//adding Numbers that are not already in the array
function addNewNumbers(number, array){
if (array.flat(Infinity).includes(number)) {
	return;
}
else addSameNumbers()
}

// create an array based of the numbers that are in array but not in cleanedArray
function createFilterArray (cleanedArray, array){
	let filterArray = array.filter(value =>{
		return (numberInArray(cleanedArray.flat(Infinity),value))
	})
	return filterArray
}

// is number in array
function numberInArray (array,number) {
	let numInArray = true;
	for (num of array){
		if (num === number){
			numInArray = false;	
		}
	}return numInArray;
}
