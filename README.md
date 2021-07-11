#  JavaScript The Hard Parts V2

### Object Oriented JavaScript - Classes, Prototypes
1. Solution 1. Generate objects using a function
   
    Problems: Each time we create a new user we make space in our computer's
    memory for all our data and functions. But our functions are just copies
    Is there a better way?
    Benefits: It's simple and easy to reason about!

2. Solution 2: Using the prototype chain --> make link with Object.create() technique
  
    Problems: No problems! It's beautiful. Maybe a little long-winded
    Write this every single time - but it's 6 words!
    Benefits: Super sophisticated but not standard

3. Solution 3 - Introducing the keyword that automates the hard work: new

    Problems:
    95% of developers have no idea how it works and therefore fail interviews
    We have to upper case first letter of the function so we know it requires ‘new’ to work!
    Benefits:
    Faster to write. Often used in practice in professional code
    
4. Solution 4: The class ‘syntactic sugar’

    Problems:
    99% of developers have no idea how it works and therefore fail interviews
    But you will not be one of them!
    Benefits:
    Emerging as a new standard
    Feels more like style of other languages (e.g. Python)
    

