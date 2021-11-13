 function myGame () { 
    const person = prompt ("Please enter your name");
    alert("Hi " + person);

    const scopeOne= prompt ("Enter flavor for scope 1");
    alert("you added " + scopeOne + " to your cone");
   

    const scopeTwo= prompt ("Please enter another flavor");
    alert("now you added " + scopeOne + " and " + scopeTwo + " to your cone");
   
    const topping = prompt ("Now its time for topping, would you like M&M or rainbow sprinkles?")
    alert("You choose " + topping)
    
    const iceCream = scopeOne + " and " +  scopeTwo + " topped with " + topping;
    alert(person +" here is your icecream with: " + iceCream)
   
    const goodBye = "Enjoy!"
    alert (goodBye)

 }
