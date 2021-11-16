 window.onload;
 

//  const scene = {
//     text: '',
//     nextScene: [1, 2, 3],
//     items: ['bägare', 'rån', 'våffla']
//  }
//  const scenes = [{
//    text: 'Scene 0',
//    nextScene: [1, 2],
//    items: ['bägare', 'rån', 'våffla']
// }, {
//    text: 'Scene 1',
//    nextScene: [1, 2],
//    items: ['strössel', 'kolasås']
// }];


 const inventory = [];

 function main () {
    alert ('IceCreamYouScream - Ett glassigt äventyr')
    myGame();
 }

 function myGame () { 
    const person = prompt ("Skriv in ditt namn");
    username = person;
    alert("Hej " + username + ". Du är nu på väg in i ett glassigt äventyr där du skall hitta den magiska guldglassen.");
    startStory();

 }

 function startStory() {
    const answer = prompt ('Vill du börja ditt äventyr och gå till skogen? Skriv "ja eller nej"')

      if (answer === 'ja') {
         enterForest();
      } else if (answer === 'nej') {
         alert ('Spelet avslutas');
        
         
      } else {
         alert ("Var god ange skogen eller huset");
         startStory();
      }
        
  }

function enterForest () {
   alert ("Du har nu kommit in i skogen och skall hitta den magiska guldglassen. Framför dig har du tre föremål 'bägare, rån, våffla'");
   const answer = prompt ("Plocka upp det föremål du vill ta med dig 'bägare, rån, våffla', Skriv namnet på föremålet");
      if (answer === 'bägare' || answer === 'rån' || answer ==='våffla') {
         inventory.push(answer);
         console.log(answer);
         resumeGame ();
      } else {
         alert ("Vänligen välj ett föremål");
         enterForest();
      }
}

function resumeGame() {
   alert("Du fortsätter in i skogen. Då hör du plötsligt steg bakom dig. Du vänder dig om och ser ett glassmonster komma emot dig. Glassmonstret kastar vaniljglass på dig");
   const choice = prompt ("Du kan nu välja att använda ditt föremål och kasta glass på glassmonstret eller strö ut strössel eller kolasås, ' skriv in föremål, strössel eller kolasås'")
      if (choice === 'föremål') {
         alert ("Du valde att använda ditt föremål och kasta glass på monstret")
         enterGlade();
      } else if (choice === 'strössel') {
         alert ("Du valde strössel, och glassmonstret halkar och du går vidare i spelet");
         enterGlade();
         } else if (choice === 'kolasås') {
            alert ("Du valde kolasås, och glassmonstret åkte nu kana ner för backen. Du går vidare...");
            enterGlade();
            } else {
               alert ("Glassmonstret kastar vaniljglass på dig. Du får brainfrezze och får stå kvar i 10 sekunder")
               alert ('10 9 8 7 6 5 4 3 2 1 "Du kan nu gå vidare"' )
               enterGlade();
            }
   
} 

function enterGlade() {
   alert ("Du har nu kommit in i en glänta och ser 3 bägare");
   const answer = prompt("Du får nu välja en bägare och se om den magiska guldglassen finns där i. 'Skriv 1, 2 eller 3 ");
        if (answer === '2') {
           alert ("Du hittade guldglassen!! Hurra!!")
           alert ("Nu när du hittat guldglassen - får du äta upp den")
           const playAgain = prompt ('Vill du spela igen? Skriv "ja eller nej"')
               if (playAgain === ja) {
                  myGame();
               } else {
                  alert ("Tack för din medverkan, spelet kommer nu att avslutas")
                  
               }
        } else {
           alert ("Åh nej, här var det tomt")
           enterGlade();
        }
}





// glassmonster som slänger vaniljglass -använda items
// 

   //  const scopeTwo= prompt ("Please enter another flavor");
   //  alert("now you added " + scopeOne + " and " + scopeTwo + " to your cone");
   
   //  const topping = prompt ("Now its time for topping, would you like Chocolate or Caramel?")
   //  alert("You choose " + topping)
    
   //  const iceCream = scopeOne + " and " +  scopeTwo + " topped with " + topping;
   //  alert(person +" here is your icecream with: " + iceCream)
   
   //  const goodBye = "Enjoy!"
   //  alert (goodBye)

 