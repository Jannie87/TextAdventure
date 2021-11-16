 window.onload();
 const scene = {
    text: '',
    nextScene: [1, 2, 3],
    items: ['bägare', 'rån', 'våffla']
 }
 const scenes = [{
   text: 'Scene 0',
   nextScene: [1, 2],
   items: ['bägare', 'rån', 'våffla']
}, {
   text: 'Scene 1',
   nextScene: [1, 2],
   items: ['strössel', 'kolasås']
}];


 
 function myGame () { 
    const person = prompt ("Skriv in ditt namn");
    username = person;
    alert("Hej " + username + ". Du är nu på väg in i ett glassigt äventyr där du skall hitta den magiska guldglassen.");
    startStory();

 }

 function startStory() {
    const answer = prompt ('Gå igenom dörren,  vill du gå till skogen eller huset? Skriv "skogen eller huset"')

      if (answer === 'skogen') {
         enterForest();
      } else if (answer === 'huset') {
         enterHouse();
      } else {
         alert ("Var god ange skogen eller huset");
         startStory();
      }
        
  }

function enterForest () {
   alert ("Du har nu kommit in i skogen och skall hitta den magiska guldglassen. Framför dig har du tre föremål 'bägare, rån, våffla'");
   const answer = prompt ("Plocka upp det föremål du vill ta med dig 'bägare, rån, våffla', Skriv namnet på föremålet");
}

    const scopeTwo= prompt ("Please enter another flavor");
    alert("now you added " + scopeOne + " and " + scopeTwo + " to your cone");
   
    const topping = prompt ("Now its time for topping, would you like Chocolate or Caramel?")
    alert("You choose " + topping)
    
    const iceCream = scopeOne + " and " +  scopeTwo + " topped with " + topping;
    alert(person +" here is your icecream with: " + iceCream)
   
    const goodBye = "Enjoy!"
    alert (goodBye)

 
