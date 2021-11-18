 window.onload;
/** Globala variabler */
 const inventory = [];
 let first = true;

 /**
  * En funktion som ger en alert på att spelet är startat.
  */
 function main () {
    alert ('IceCreamYouScream - Ett glassigt äventyr')
    myGame();
 }
/**
 * En funktion där man får ange sitt namn och får info om spelet.
 */
 function myGame () { 
    const person = prompt ("Skriv in ditt namn");
    username = person;
    alert("Hej " + username + ". Du är nu på väg in i ett glassigt äventyr där du skall hitta den magiska guldglassen.");
    startStory();

 }
/**
 * En funktion som startat själva spelet, där användaren få olika va.
 */
 function startStory() {
    const answer = prompt ('Vill du börja ditt äventyr? Skriv "ja eller nej"')

      if (answer === 'ja') {
         alert ("Du kommer nu att gå till en frostig skog")
         enterForest();
      } else if (answer === 'nej') {
         alert ('Spelet avslutas');
      }
        
  }
/**
 * En funktion där användaren får göra ett val. Valet sparas sedan i en inventory.
 */
function enterForest () {
   alert ("Du har nu kommit in i den frostiga skogen. Nu är det upp till dig att hitta den magiska guldglassen. Du hittar tre föremål: en bägare, ett rån och en våffla");
   const answer = prompt ("Plocka upp ett utav föremålen som du vill ta med dig på din resa. 'Skriv: bägare, rån eller våffla'");
      if (answer === 'bägare' || answer === 'rån' || answer ==='våffla') {
         inventory.push(answer);
         resumeGame ();
      } else {
         alert ("Vänligen välj ett utav föremålen");
         enterForest();
      }
}
/**
 * En funktion där användaren får göra ett val. 
 */
function resumeGame() {
   alert("Din resa fortsätter in i skogen. Plötsligt hör du ett prasslande ljud bakom dig...")
   alert ("Du vänder dig om och ser ett glassmonster komma springandes emot dig. Glassmonstret kastar vaniljglass på dig");
   const choice = prompt (" Vad gör du för att skydda dig? Du kan nu välja att använda ditt föremål och kasta glass, strö ut strössel eller hälla ut kolasås, 'Skriv: föremål, strössel eller kolasås'")
      if (choice === 'föremål') {
         alert ("Du valde att använda ditt föremål. Du fyller föremålet med glass och kastar glassen på monstret")
         enterGlade();

      } else if (choice === 'strössel') {
         alert ("Du valde strössel, och glassmonstret halkar på strösslet och du kan fortsätta in i skogen..");
         inventory.push(choice);
         console.log(choice)
         enterGlade();
         } else if (choice === 'kolasås') {
            alert ("Du valde kolasås, och glassmonstret fastnar i kolasåsen och du kan fortsätt in i skogen...");
            inventory.push(choice);
            enterGlade();
            } else {
               alert ("Ahhh!!  Glassmonstret kastar vaniljglass på dig. Du får brainfreeze och får stå kvar i 10 sekunder")
               alert ('10 9 8 7 6 5 4 3 2 1... "Du kan nu gå vidare"' )
               enterGlade();
            }
   
} 
/**
 * En funktion som anropar en global variabel "first" detta för att se om det är första gången man fått alerten "Du har kommit in i en glänta och ser 3 bägare".
 * Annars kommer man direkt till prompten där man får välja 1, 2 eller 3.
 */
function enterGlade() {
   if (first){
      alert ("Du har nu kommit in i en glänta och ser 3 bägare");
   }
   const answer = prompt("Du får nu välja en bägare och se om den magiska guldglassen finns där i. 'Skriv 1, 2 eller 3 ");
        if (answer === '2') {
           alert ("Du hittade guldglassen!! Hurra!!")
           alert ("Varsågod å äta upp guldglassen!")
           alert ("Spelet avslutas")
        } else {
           alert ("Åh nej, här var det tomt")
           first = false;
           enterGlade();
        }
}


 