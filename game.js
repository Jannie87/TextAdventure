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
    startStory();

 }

 function startStory() {
    alert("Hej " + username + ". Du är nu på väg in i ett glassigt äventyr där du skall hitta den magiska guldglassen.");
    const answer = prompt

    const scopeOne= prompt ("Enter flavor for scope 1");
    alert("you added " + scopeOne + " to your cone");
   
}



    const scopeTwo= prompt ("Please enter another flavor");
    alert("now you added " + scopeOne + " and " + scopeTwo + " to your cone");
   
    const topping = prompt ("Now its time for topping, would you like Chocolate or Caramel?")
    alert("You choose " + topping)
    
    const iceCream = scopeOne + " and " +  scopeTwo + " topped with " + topping;
    alert(person +" here is your icecream with: " + iceCream)
   
    const goodBye = "Enjoy!"
    alert (goodBye)

 
