const companies=[
    {name:"Company One", category:"Finance", start:1981, end:2003},
    {name:"Company Two", category:"Retail", start:1992, end:2008},
    {name:"Company Three", category:"Auto", start:1999, end:2003},
    {name:"Company Four", category:"Retail", start:1989, end:2003},
    {name:"Company Five", category:"Technology", start:2009, end:2014},
    {name:"Company Six", category:"Finance", start:1987, end:2010},
    {name:"Company Seven", category:"Auto", start:1986, end:1996},
    {name:"Company Eight", category:"Technology", start:2011, end:2016},
    {name:"Company Nine", category:"Retail", start:1981, end:2003},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

/* for(let i=0; i<companies.length; i++){
    console.log(companies[i]);
} */

/* //FOR EACH
companies.forEach(function(companies){
    console.log(companies.name, companies.end);
    console.log(companies.start);
}); */


/* //FILTER
let canDrink = [];
for(let i=0; i<ages.length; i++){
    if(ages[i] <= 21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

const canDrink1 = ages.filter(function(age){
    if (age >= 21) {
        return true;
    }
});
console.log(canDrink1); */
/* 
let retail = [];
for(let i = 0; i<companies.length; i++){
    if (companies[i].) {
        retail.push(companies[i]);
    }
}
console.log(retail); */


/* const retail = companies.filter(function(companies){

    if(companies.category === 'Retail'){
        return true;
    }
});
console.log(retail); */


/* let endYear = companies.filter(function(companies){

    if(companies.end === 2003){
        return true;
    }
});
console.log(endYear); */

/* const endYear1 = companies.filter(companies => companies.end === 2003 );
console.log(endYear1); */



/* //MAP -- to get one specific attribute
//to create array of company names
const companyName = companies.map(function(companies){
    return companies.name
});
console.log(companyName);


const testMap = companies.map(companies => `${companies.name} [${companies.start} - ${companies.end}]`);
console.log(testMap); */

/* //SORT
const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
});

console.log(sortedCompanies);

const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortCompanies);


const sortAge = ages.sort();
console.log(sortAge);

const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

const sort_Ages = ages.sort((a, b) => b - a);
console.log(sortAges); */



//REDUCE

/* let ageSum = 0;
for(let i = 0; i< ages.length; i++){
    ageSum += ages[i];

}
console.log(ageSum);


const age_Sum = ages.reduce(function(total, age){

    return total + ages;
}, 0);
console.log(age_Sum);


const sumAge = ages.reduce((total, age) => total + age, 0);
console.log(sumAge); */

// Map 

const arr1 = [5,3,6,8,4];
const arr2 = [12,56,34];

function double(x){
    return x * 2
}

function triple(y){
    return y * 3;
}

function binary(z){
    let store = ' ';
    for(i=0; i<z; i++){
        if(i%2 === 0){
            store += '1';
        }else{
            store += '0';
        }
    }
    return store;
}

let result = arr1.map(double);
let result1 = arr1.map(triple);
let result2 = arr1.map(binary);
let result3 = arr2.map(binary);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);