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


//FILTER
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
console.log(canDrink1);
/* 
let retail = [];
for(let i = 0; i<companies.length; i++){
    if (companies[i].) {
        retail.push(companies[i]);
        
    }
}

console.log(retail); */


const retail = companies.filter(function(companies){

    if(companies.category === 'Retail'){
        return true;
    }
});
console.log(retail);



/* let endYear = companies.filter(function(companies){

    if(companies.end === 2003){
        return true;
    }
});
console.log(endYear); */

const endYear1 = companies.filter(companies => companies.end === 2003 );
console.log(endYear1);
