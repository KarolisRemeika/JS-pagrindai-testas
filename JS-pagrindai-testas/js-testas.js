/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

let euruSuma = Math.floor(Math.random() * 1000) + 1;

function euraiDoleriai(eurai) {
  let kursas = 1.067; 
  let doleriai = eurai * kursas;
  return doleriai.toFixed(2);
}
console.log(`${euruSuma} euru atitinka ${euraiDoleriai} " doleriu."`);

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
let doleriuSuma = Math.floor(Math.random() * 1000) + 1;

function doleriaiEurai(doleriai) {
  let kursas1 = 0.880; 
  let eurai = doleriai * 1;
  return eurai.toFixed(2);
}
console.log(`${doleriuSuma} doleriu atitinka ${doleriaiEurai} " doleriu."`);

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
let ugis="";//Cia paciam ivesti ugi
let svoris ="";// Cia ivesti savo svori
let indeksasBMI = skaiciuotiBMI(ugis, svoris); 

function skaiciuotiBMI(ugis, svoris) {
  return svoris / (ugis ** 2);
}

function BMIvertinimas(indeksasBMI) {
  if (indeksasBMI >= 25) {
      return "Virssvoris";
  } else if (indeksasBMI >= 18.5 && indeksasBMI < 25) {
      return "Normalus svoris";
  } else {
      return "Svoris per mazas";
  }
}

let rezultatas = BMIvertinimas(indeksasBMI);
console.log(`Jusu BMI yra ${indeksasBMI.toFixed(2)}. Tai yra ${rezultatas}.`);

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
let amzius=""; //Ivesti cia savo amziu...

function konvertuotiAmziu(amzius) {
    const sekundes = amzius * 365 * 24 * 60 * 60;
    const minutes = amzius * 365 * 24 * 60;
    const valandos = amzius * 365 * 24;
    const dienos = amzius * 365;

    return { sekundes, minutes, valandos, dienos };
}

const skaiciuotiAmziu = konvertuotiAmziu(amzius);

console.log(`Jusu amzius yra ${skaiciuotiAmziu.sekundes} sekundziu.`);
console.log(`Jusu amzius yra ${skaiciuotiAmziu.minutes} minuciu.`);
console.log(`Jusu amzius yra ${skaiciuotiAmziu.valandos} valandu.`);
console.log(`Jusu amzius yra ${skaiciuotiAmziu.dienos} dienu.`);


/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

let fahrenheitTemperatura= "";//Cia ivesti norima temperatura farenheitais
let celsiusTemperatura= "";//Cia ivesti norima temperatura celsijais

function fahrenheitICelsius(fahrenheitai) {
  return (fahrenheitai - 32) * (5 / 9);
}

function celsiusIFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
console.log(`${fahrenheitTemperatura} farenheitu yra ${fahrenheitICelsius(fahrenheitTemperatura).toFixed(2)} celsiju.`);
console.log(`${celsiusTemperatura} celsiju yra ${celsiusIFahrenheit(celsiusTemperatura).toFixed(2)} farenheitu.`);

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
let skaicius = 1;

for (let i = 2; i <= 10; i++) {
    skaicius += '-' + i;
}
console.log(skaicius);


/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
for (let i = 1; i <= 5; i++) {
  let eilute = (`${i}`);
  for (let z = 1; z <= i; z++) {
      eilute += '*';
  }
  console.log(eilute);
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

const dabartineData = new Date();

let kaledos = new Date(dabartineData.getFullYear(), 11, 25);

let skirtumas = kaledos - dabartineData;

console.log(`Iki Kaledu liko ${skirtumas} dienu.`);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
let vardai = ['Karolis', 'Gintare', 'Pranas', 'Zita'];

let tekstineEiluteSuKableliais = vardai.join(',');
let tekstineEiluteSuPliusais1 = vardai.join('+');

console.log(tekstineEiluteSuKableliais);
console.log(tekstineEiluteSuPliusais1);

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
function sugeneruotiDidziajaRaide() {
  let visosDidziosioRaides = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Ą,Č,Ę,Ė,Į,Š,Ų,Ū,Ž]; 
  let atsitiktinisIndeksas = Math.floor(Math.random() * visosDidziosioRaides.length); 
  let atsitiktineDidziojiRaide = visosDidziosioRaides[atsitiktinisIndeksas]; 
  return atsitiktineDidziojiRaide;
}

function sugeneruotiMazajaRaide() {
  let visosMazosiosRaides = visosDidziosiosraides.toLowerCase; 
  let atsitiktinisIndeksas = Math.floor(Math.random() * visosMazosiosRaides.length); 
  let atsitiktineMazojojiRaide = visosMazosiosRaides[atsitiktinisIndeksas]; 
  return atsitiktineMazojojiRaide;
}

function sugeneruotiAtsitiktiniSkaiciu (){
  return Math.floor(Math.random() * 10);
}

function sugeneruotiAtsitiktiniSpecialuSimboli() {
  let specSimboliai = ['!', '@', '#', '$', '%', '^', '&', '*']; 
  let atsitiktinisIndeksas2 = Math.floor(Math.random() * specSimboliai.length);
  let atsitiktinisSimbolis = specSimboliai[atsitiktinisIndeksas];
  return atsitiktinisSimbolis;
}



function generuotiSlaptazodi() {
  for(let i=0; i<=3; i++){
  let slaptazodis = '';
  slaptažodis += sugeneruotiDidziajaRaide();
  slaptažodis += sugeneruotiMazajaRaide();
  slaptažodis += sugeneruotiAtsitiktiniSkaiciu ();
  slaptažodis += sugeneruotiAtsitiktiniSpecialuSimboli();
  }
  return slaptazodis;
}


console.log(generuotiSlaptazodi());
