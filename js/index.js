//iteraçao1

let hacker1 = "Luan";
let hacker2 = "Flavio"

console.log("The driver's name is",hacker1);
console.log("The navigator's name is",hacker2);

//iteraçao2

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

}else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

//iteraçao 3

console.log(hacker1.toUpperCase().split("").join(" "));

console.log(hacker2.split('').reverse().join(''));