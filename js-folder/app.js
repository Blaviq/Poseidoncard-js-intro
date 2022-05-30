
let headerEl = document.querySelector("h1");
headerEl.innerHTML = "POSEIDON TEAM";

document.getElementById("header-title").style.color = "skyblue";


let teamName = 
["Mubaraq Abuahsan", 
 "Jimoh Segun",
 "Clinton Samuel", 
 "Onumajuru Divinegift",
 "Arinola Goodness",
 "Sherif Muhammed",
 "Khadijah Muhammmad",
];

  console.log(teamName[0]);



const myInfo = {firstName: "Poseidon", lastName:"Olympios", bestMovie: "Money Heist", bestFood: "Rice and sauce", complexion: "Dark", birthMonth: "October", state: "Imo", groupName: "Poseidon"};

console.log(myInfo.bestMovie);


let noun = "merit";
let verb = "dance";
let adjective = "perfect";

console.log(`${noun} is ${adjective}`);
console.log(`${noun} ${verb}`);
console.log(`${noun} is ${adjective} and ${verb}s`);
console.log(`${noun} is ${adjective} and ${verb}s well`);
console.log(`${adjective} ${noun} ${verb}s`);



function poseidonFunction(a, b){
    return a % b;
}
console.log(poseidonFunction(10, 3));



function quadFunction (a, b, c){
    var result = ((b * b) - Math.sqrt(4 * a * c)) / (2 * a);
    var result2 = ((b * b) + Math.sqrt(4 * a * c)) / (2 * a);
    return result + " and " + result2
}
console.log(quadFunction(1, 2, 1));




 const myNoun = "merit";
 const myAdjective = "perfect";
 const myVerb = "dance";
 const myAdverb = "carefully";

 const wordBlanks= `${myNoun} is ${myAdjective} and she ${myVerb} ${myAdverb} in church`;
  console.log(wordBlanks);


  const pi = 3.142;
  const radius = 9;


  function circleArea(radius){
      return pi * (radius * radius);
  }
  console.log(circleArea(radius));



  const principal = 8200;
  const rate = 17.5;
  const time = 2.5;
  const interest = (principal * rate * time) / 100;
  console.log(interest);


  const ten = 10;
  const four = 4;
  console.log(ten % four);



  const meritMass = 78;
  const meritHeight = 1.69;
  const meritBMI = meritMass / (meritHeight * meritHeight);
  console.log(meritBMI);

  const nutjobMass = 92;
  const nutjobHeight = 1.95;
  const nutjobBMI = nutjobMass / (nutjobHeight * nutjobHeight);
  console.log(nutjobBMI);

  const meritHigherBMI = meritBMI > nutjobBMI;
  console.log(meritHigherBMI);


  // Data 2
  const nutjobMass2 = 95;
  const nutjobHeight2 = 1.88;
  const nutjobBMI2 = nutjobMass2 / (nutjobHeight2 * nutjobHeight2);
  console.log(nutjobBMI2);

  const meritMass2 = 85;
  const meritHeight2 = 1.76;
  const meritBMI2 = meritMass2 / (meritHeight2 * meritHeight2);
  console.log(meritBMI2);

  const meritHigherBMI2 = meritBMI2 > nutjobBMI2;
  console.log(meritHigherBMI2);
