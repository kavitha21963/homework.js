//var name='kavi'
//var newname='kavitha'
//var age =10
//var adress ='123 dog wood'
//var emailaddress ='kavitha21963'
//var carname ='RollsROYCE'
//var companyname='Bugati'
//var isvaccinated =true
//var iscountry = false
//console.log(name)
//console.log(newname)

function add_numbers(a,b)
{
    var c=a+b
    console.log(c)
    return c
}
console.log (add_numbers(2,3));

console.log (add_numbers(200,800));
function findsquares(a) {
    return (a*a)
}

    
    console.log (findsquares(200));
    

function printthis(a,b)
{
    
    var c=(a-b)
    return c
}
console.log (printthis(111,100));
function printthis(a,b)
{
    
    var c=(a-b)
    return c
}
console.log (printthis(111,100));
function getwordcount(str){
    return str.split('')
    .filter(function(n){return n!=''}).length;

}

const sentence ="give the count of all words";
console.log('sentence;'+sentence);
console.log('total characters in the above sentence:'+getwordcount(sentence));
function largest_number(n1,n2){
    if (n1 > n2) {
        return n1 + ' is greater ';
    }
else 
   { return n2 + ' is greater '; }
}

console.log ('Largest number :' + largest_number(100,113));

function return_boolean_flag(n1){
    if (n1 =>5000 && n1<=9999) {
        return 'True : ' + n1 + ' is between 5000 and 9999';
    } else
    { 
        return 'false: ' + n1 + ' is NOT between 5000 and 9999';
    }
    
}
console.log (return_boolean_flag(5000));
function cube_root(a){
    return 'cube_root of ' +a +' is:' + Math.cbrt(a);
}
console.log( cube_root(64));
function inches_to_feet(a)
{
    return 'converting '+a+' inches to feet :'+(a/12)+' feet';
}
console.log(inches_to_feet(30));
function degrees_fahrenheit(a){
    return +a+' converting into ' +((a*9/5)+32);
}


const state={
    "name" :"california",
    "language":"english",
    "capital":"sacramanto",
    "size":"largest",
    "governor":"vishwa",
    "senators":"shivani and isha",
    "national parks":50,
    "stateparks":20

}
console.log(state.name);
const state2={
    "name" :"penyslvania",
    "language":"english",
    "capital":"hariisburgh",
    "size":"medium",
    "governor":"vishwa1",
    "senators":"shvani1 and prajina1",
    "national parks":50,
    "stateparks":20

}
console.log(state2.name);
var str1=new String(state.name);
const state3={
    "name" :"idaho",
    "language":"english",
    "capital":"sacramanto",
    "size":"largest",
    "governor":"vishwa",
    "senators":"shvani and prajina",
    "national parks":50,
    "stateparks":20

}

console.log(state3.name);
const state4={
    "name" :"ohio",
    "language":"english",
    "capital":"sacramanto",
    "size":"largest",
    "governor":"vishwa",
    "senators":"shvani and prajina",
    "national parks":50,
    "stateparks":20

}
console.log(state4.name);
const state5={
    "name" :"new jersey",
    "language":"english",
    "capital":"sacramanto",
    "size":"largest",
    "governor":"vishwa",
    "senators":"shvani and prajina",
    "national parks":50,
    "stateparks":20

}
console.log(state5.name);
const state6={
    "name" :"new york",
    "language":"english",
    "capital":"sacramanto",
    "size":"largest",
    "governor":"vishwa",
    "senators":"shvani and prajina",
    "national parks":50,
    "stateparks":20

}
console.log(state6.name);
const state7={
    "name" :"washington d.c",
    "language":"english",
    "capital":"sacramanto",
    "size":"largest",
    "governor":"vishwa",
    "senators":"shvani and prajina",
    "national parks":50,
    "stateparks":20

}
console.log(state7.name);
const state8={
    "name" :"florida",
    "language":"english",
    "capital":"sacramanto",
    "size":"largest",
    "governor":"vishwa",
    "senators":"shvani and prajina",
    "national parks":50,
    "stateparks":20

}
console.log(state8.name);
const state9={
    "name" :"kentucky",
    "language":"english",
    "capital":"sacramanto",
    "size":"largest",
    "governor":"vishwa",
    "senators":"shvani and prajina",
    "national parks":50,
    "stateparks":20

}
console.log(state9.name);
const state10={
    "name" :"minesota",
    "language":"english",
    "capital":"sacramanto",
    "size":"largest",
    "governor":"vishwa",
    "senators":"shvani and prajina",
    "national parks":50,
    "stateparks":20

}
console.log(state10.name);
console.log(str1.length);
function longest_string(a,b)
{
    var a1=new String(a);
    var b1=new String(b);
    if (a1>b1){
        return a + " is the longest string ";
    }else{
        return b + "is the longest string ";
    }
}
console.log(longest_string("helo how are you","fine"));
const cricket_team ={
    " team_name":"chennai super king",
    "captain":"Mahendra singh Dhoni",
    "team members":["Dhoni","gaekwad","jadeja"],
    "city":"chennai",
    "no of championships":"4",
    "color":"yellow",

}
console.log(cricket_team.color );
console.log(cricket_team);
console.log(cricket_team.captain);

function weightconverter(pounds,kilograms)
{

    var p =pounds/2.2046
    var k=kilograms*2.204
    return pounds+"lbs are converted as "+ p +" kgs in kilograms. " +kilograms+"kgs are converted as "+ k +" lbs in pounds.thankyou " 

    

}
console.log(weightconverter(100,100));
const USstates={
    "pennsylvania":{"state abreviation":"PA",
    "CapitaL":"harrisburgh",
"region":"northeast" },




    "Newyork":
    {"state abbreviation":"ny",
       "Capital" : "albany",
"region":"northeast"},
"california":{"state abreviation":"Ca",
"capital":"sacromento",
"region": "south"},
"illinois":
{"state abbreviation":"il",
"capital":"springfield",
"region": "midwest"},


}
console.log(USstates.Newyork.Capital);
console.log(USstates.illinois);
console.log(USstates.california.region);

function countlength(z){
    var q1=new String(z);
    return q1.length;
}
console.log(countlength("all is well"));
