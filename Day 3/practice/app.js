//! Empty Arrays

// let arr = [, , ,];
// let arr1 = [];
// let arr2 = new Array(3);

// console.log(arr);
// console.log(arr1);
// console.log(arr2);

//! Array Methods

//* PUSH: Adding at the end.
let arrM = [1,2,3];

arrM.push(7);
arrM.push(5);

console.log(arrM);

//* POP: Removes the last element from the Array

arrM.pop();
arrM.pop();

console.log(arrM);

//* UNSHIFT adds an element at the front of the array

arrM.unshift(4);
arrM.unshift(6);

console.log(arrM);

//* SHIFT removes the first element from the Array

arrM.shift(2);// even if yiou put in a number it wont matter
arrM.shift();

console.log(arrM);

//* LENGTH

console.log(arrM.length);

//* SPLICE: deletes selected indexes splice(startIndex,no of digits to be deleted)

let arrM2 = [0,1,2,3,4,5,6,7,8,9];
console.log(arrM2.length);

arrM2.splice(3,5);
console.log(arrM2);

//* Reverse , selfexplainatory

//! Higher Order Array Methods

//* MAP: loops through every element of the array

const user = [{name:'Henry'},
{name:'Tim'},
{name:'Bosch'},
{name:'Kingly'},
{name:'Martha'},];

const username = user.map(user => user.name);

console.log(username);

//* Promises
// it works in background while you run your other code,
// promises can be called when needed

let p =  new Promise((resolve,reject)=> {
    let a =1 +1;
    if(a==3){
        resolve('Success')
    } else {
        reject('Failed')
    }
});

p.then((message)=>{
    console.log('it was in then '+ message);
}).catch((message)=> {
    console.log('This was in catch '+ message);
})

// promises are meant to replace callbacks

// callback = resolve
// errorCallback = reject

const watchCat = false;
const watchAnime =false;

function watchPromise() {
    return new Promise((resolve, reject)=> {
        if(watchCat){
            reject({
                name: 'watching Cat',
                message: 'sad'
            })
        } else if(watchAnime){
            reject({
                name: 'watching Anime',
                message: 'promise < Anime'
            })
        } else {
            resolve('Good job watching promise')
        }
    })
}

watchPromise().then((message)=> {
    console.log('success '+ message)
}).catch((error)=> {
    console.log(error.name + ' ' + error.message)
})

//promise.all , promise.race
//ASync Await

function eatFood(dish) {
    return new Promise((resolve,reject)=> {
        console.log('I want to eat'+ dish)
        if(dish === 'Biriyani') {
            resolve('Lets Eat Biriyani')
        } else {
            reject('I only eat Biriyani')
        }
    })
}

function orderItem(response) {
    return new Promise((resolve,reject)=> {
        console.log('Ordering Item')
        resolve('Add Items' + response)
    })
}

eatFood('Biriyani').then(response => {
    console.log('Order Recieved')
    return orderItem(response)
}).then(process => {
    console.log(process)
}).catch(err => {
    console.log(err)
})


async function doWork() {
    const response = await eatFood('Biriyani')
    //await basicaly pauses the function at that moment until the task following await is finished.
    console.log('Order Received')
    const king = await orderItem(response)
    console.log()

}
// api

async function callData(){
    const url = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ee61edc571msh614dce4843225c1p1a1619jsnba7821059f52',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
callData();