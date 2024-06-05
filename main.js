"use strict";
// Ex : 2 
// Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let hello = 'subhan';
// console.log(`Hello ${hello}, would you like to learn some Python today?`);
// Ex : 3 
// let first="ali";
// console.log(first.toLowerCase());
// let first$="ali";
// console.log(first$.toUpperCase());
// let firstname="ali";
// console.log(firstname.charAt(0).toUpperCase()+firstname.slice(1));
// Ex : 4 
//  console.log('Tony robbin once said,"Setting goal is the first step in the turning the invisible in to the visible"');
//  Ex : 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person="Tony robbin"
// let quote = "Setting goal is the first step in the turning the invisible in to the visible"
// console.log(`${famous_person} once said, ${quote}`);
//  Ex : 6 
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let whitespace = "\n \t Subhan \t \n"
// console.log(whitespace)
// let withoutwhitespace = whitespace.trim()
// console.log(withoutwhitespace)
//    Ex : 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let addition_result = 5 + 3
// console.log(addition_result)
// // # Subtraction
//  let subtraction_result = 10 - 2
// console.log(subtraction_result)
// // # Multiplication
// let multiplication_result = 4 * 2
// console.log("Multiplication Result:", multiplication_result)
// // # Division
// let division_result = 16 / 2
// console.log("Division Result:", division_result)
//    Ex:8
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(4+4);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
//   Ex : 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let fav_num = 45;
// let message = `My favarite number is : ${fav_num}`;
// console.log(message);
//  Ex : 10 
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// // Adding comment 
// console.log(4+4);
// // Subtraction comment  
// console.log(10-2);
// // Multiplication comment 
// console.log(4*2);
// // Division comment 
// console.log(16/2);
//    Ex:11
// let message =["Ali","Basit","Noman"]
// message.forEach(message => console.log(message));
//    Ex:12
// let message1 =["Ali","Basit","Noman"]
// message1.forEach(khan => console.log(`Hello ,${khan} how are you ?`));
//    Ex:13
// let Transport =["Bike","Car","Bus","Bycycle"]
// Transport.forEach(mode => console.log(`I would like to own a ${mode}`));
//    Ex:14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let Guestlist =["Basit","Umer","Abbas","Ali"]
// Guestlist.forEach(Guestlist => console.log(`Assalam u alaikium ${Guestlist} , would you like dinner with me ?`));
//    Ex:15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// let Guestlist = ["Ali","Eijaz","Bilal","Haris"];
// let dontcome = Guestlist[0];
// console.log(dontcome, `nhi a raha ha`);
// Guestlist.splice(0,1,"Zaid");
// Guestlist.forEach(Guestlist => console.log(`Assalam u alaikium ${Guestlist} , would you like dinner with me ?`));
//    Ex:16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// let Guestlist = ["Ali","Eijaz","Bilal","Haris"];
// let dontcome = Guestlist[0];
// console.log(dontcome, `nhi a raha ha`);
// Guestlist.splice(0,1,"Zaid");
// console.log("Good News ! We have foumd a Bigger for Dinner");
// Guestlist.unshift("Zain");
// Guestlist.push("usman");
// let middleindex :number = Math.floor(Guestlist.length / 2);
// Guestlist.splice(middleindex,0,"Abbas");
// console.log("update list of the guest");
// Guestlist.forEach(Guestlist => console.log(`Assalam u alaikium ${Guestlist} , would you like dinner with me ?`));
//  Ex : 17 
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// let Guestlist = ["Ali","Eijaz","Bilal","Haris"];
// let dontcome = Guestlist[0];
// console.log(dontcome, `nhi a raha ha`);
// Guestlist.splice(0,1,"Zaid");
// console.log("Good News ! We have foumd a Bigger for Dinner");
// Guestlist.unshift("Zain");
// Guestlist.push("usman");
// let middleindex :number = Math.floor(Guestlist.length / 2);
// Guestlist.splice(middleindex,0,"Abbas");
// console.log("update list of the guest");
// Guestlist.forEach(Guestlist => console.log(`Assalam u alaikium ${Guestlist} , would you like dinner with me ?`));
// console.log("unfortunatly, the new dinner table wont arrive in time for the dinner, and you have space for only two guests.")
// while(Guestlist.length > 2)
// {
//   let removeguest = Guestlist.pop()
//   console.log(`Sorry ${removeguest} i can invite you can dinner`)
// }
// console.log("Invitation to the last 2 guest")
// Guestlist.forEach(Lasttwo => console.log(`Lucky ${Lasttwo}, you are still invited to dinner`))
// Guestlist.pop()
// Guestlist.pop()
// console.log("Empty list :",Guestlist)
//  Ex : 18 
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let countriesToVisit:string[]= ["Canada","Dharki","Bangaldesh","Africa"]
// console.log("Oranginal order",countriesToVisit)
// console.log("Alphabetical order",[...countriesToVisit].sort())
// console.log("Still in oranginal order",countriesToVisit)
// console.log("Reverse order",[...countriesToVisit].reverse())
// console.log("Still in oranginal order",countriesToVisit)
// console.log(" Oraginal Array Reverse",countriesToVisit.reverse())
// console.log("Back to Oraginal Array",countriesToVisit.reverse())
// console.log("Sort in Alphabetical Array",countriesToVisit.sort())
// console.log(" Oraginal Array Reverse Again",countriesToVisit.reverse())
//    Ex:19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// let Guestlist =["Basit","Umer","Abbas","Ali"]
// let lengthguests:number =Guestlist.length;
// console.log(`We are total inviting ${lengthguests} guests,`);
//  Ex : 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let programminglanguage :string[] =["Javascript","Typescript","C#","Php"];
// console.log("List of the program language");
// programminglanguage.forEach(programminglanguage =>console.log(`${programminglanguage}`));
//  Ex: 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// interface itcourse {
//   coursename:string;
//   location:string;
//   onsitestudents:number;
// } 
// let itcourse ={
//   coursename:"Typescript and Javascript",
//   location:"Governer House Karachi",
//   onsitestudents:50000
// }
// console.log(itcourse);
//  Ex: 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// let programminglanguage :string[] =["Javascript","Typescript","C#","Php"];
//   Index error 
// console.log(programminglanguage[10]);
// console.log(programminglanguage[1]);
//  Ex: 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//  making a varaibles
// let five = 5;
// let Ten = 10;
// test :1
// console.log("Five is equal to 5 ");
// console.log(5 == 5)
// Test :2
// console.log("Ten is equal to 10 ");
// console.log(10 == 10)
// Test :3
// console.log("/n 5 is Notequal to 10 ");
// console.log(5 != Ten)
// Test :4
// console.log("/n 10 is Notequal to 5 ");
// console.log(10 != five)
// Test :5
// console.log("/n 10 is Greater than 5 ");
// console.log(10 > five)
// test :6
// console.log("/n Five is !equal to 5 ");
// console.log(5 != 5)
// Test :7
// console.log("/n Ten is !equal to 10 ");
// console.log(10 != 10)
// // Test :8
// console.log("/n 5 is equal to 10 ");
// console.log(five = Ten)
// // Test :9
// console.log("/n 10 is equal to 5 ");
// console.log(Ten = five)
// // Test :10
// console.log("/n 10 is less than 5 ");
// console.log(10 < five)
// Ex: 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// let apple ="apple"
// let uppercase = "Apple"
// let ten = 10
// let twenty = 20
// let fruit =["Apple","mango","orange"]
// console.log("Is apple is equal to apple ?");
// console.log(apple == apple);
// console.log("/n Is apple is !equal to apple ?");
// console.log(apple != apple);
// console.log("/n Is apple is equal to apple after converting to lowercase ?")
// console.log(uppercase.toLowerCase() == apple)
// console.log("/n Is apple is !equal to apple after converting to lowercase ?")
// console.log(uppercase.toLowerCase() != apple)
// console.log("/n Is ten is equal to thirty ?")
// console.log(10 == thirty)
// console.log("/n Is ten is !equal to thirty ?")
// console.log(10 != thirty)
// Greater than 
// console.log("/n Is ten is Greater then zero ?")
// console.log(ten > 0)
// less then 
// console.log("/n Is ten is less then zero ?")
// console.log(ten < 0)
// console.log("/n Is ten is greater then or equal to 5 ?")
// console.log(ten >= 5)
// console.log("/n Twenty is less then or equal to 10 ?")
// console.log(20 <= ten)
// console.log("/n Twenty is not equal to ten and twenty is greater than 10 ?")
// console.log(20 != ten && 20 > 10)
// console.log("/n Twenty is not equal to ten and twenty is greater than 30 ?")
// console.log(20 != ten && 20 > 30)
// console.log("/n Twenty is greater than 50 or twenty is equal to 20 ?")
// console.log(20 > 50  || 20 == 20)
// console.log("/n Twenty is greater than 50 or twenty is notequal to 20 ?")
// console.log(20 > 50  || 20 != 20)
// console.log("/n Is orange include in my array")
// console.log(fruit.includes("orange"))
// console.log("/n Is orange notinclude in my array")
// console.log(!fruit.includes("orange"))
//  Ex: 25 
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// let Alien_color = "Black";
// if (Alien_color === "Black") {
//   console.log("Alien color is Black player just earned 5 points.")
// }
// // Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// if (Alien_color === "White") {
//   console.log("Alien color is White player just earned 5 points.")
// }
//  Ex : 26 
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// let Alien_color = "Blue";
// if (Alien_color === "Black") {
//   console.log("Alien color is Black player just earned 5 points.")
// }
// else{
//   console.log("Player earn just 10 points.")
// }
//  Ex: 27 
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let Alien_color = "green";
// if (Alien_color === "blue") {
//   console.log("you stutdown blue alien you earned 10 points.")
// }
// else if (Alien_color === "green") {
//   console.log("(Version 1)you stutdown green alien you earned 5 points.")
// }
// else if (Alien_color === "Black") {
//   console.log("you stutdown black alien you earned 15 points.")
// }
// let Alien_color1 = "Yellow";
// if (Alien_color1 === "blue") {
//   console.log("you stutdown blue alien you earned 5 points.")
// }
// else if (Alien_color1 === "Yellow") {
//   console.log("(Version 2)you stutdown Yellow alien you earned 10 points.")
// }
// else if (Alien_color1 === "Black") {
//   console.log("you stutdown black alien you earned 15 points.")
// }
// let Alien_color2 = "Red";
// if (Alien_color2 === "blue") {
//   console.log("you stutdown blue alien you earned 5 points.")
// }
// else if (Alien_color2 === "Red") {
//   console.log("(Version 3)you stutdown Red alien you earned 15 points.")
// }
// else if (Alien_color2 === "Black") {
//   console.log("you stutdown black alien you earned 15 points.")
// }
//  Ex : 28 
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age = 50;
// if (age <2 ) {
//   console.log("You are a baby")
// }
// else if(age>=2 && age < 4){
//   console.log("You are a toddler.")
// }
// else if(age>=4 && age < 13){
//   console.log("You are a toddler.")
// }
// else if(age>=13 && age < 20){
//   console.log("You are a toddler.")
// }
// else if(age>=20 && age < 65){
//   console.log("You are a toddler.")
// }
// else if(age>=65){
//   console.log("You are a elders.")
// }
//  Ex : 29 
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits =["Apple","Mango","Orange"]
// if (favorite_fruits.includes("Apple")) {
//   console.log("I Really like Apple")
// }
// if (favorite_fruits.includes("Mango")) {
//   console.log("I Really like Mango")
// }
// if (favorite_fruits.includes("Orange")) {
//   console.log("I Really like Orange")
// }
// if (favorite_fruits.includes("Grapes")) {
//   console.log("I Really like Grapes")
// }
// if (favorite_fruits.includes("Banana")) {
//   console.log("I Really like Banana")
// }
// Ex : 30 
//   Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let Username = ["Ali","Umer","Abbas","Admin","Basit"]
// Username.forEach(oneuser =>{
//   if (oneuser === "Admin") {
//     console.log(`Hello ${oneuser}, would you like to see a status report?`)
//   }
//   else{
//     console.log(`Hello ${oneuser}, thank you for logging in again.`)
//   }
// })
//  Ex : 31 
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//  let Username = ["Ali","Umer","Abbas","Admin","Basit"]
// // • Remove all of the usernames from your array, and make sure the correct message is printed.
//  Username =[]
//  if (Username.length ===0) {
//   console.log("Your array in empty We need to find some users !")
//  }
//  else{
//   Username.forEach(oneuser =>{
//   if (oneuser === "Admin") {
//     console.log(`Hello ${oneuser}, would you like to see a status report?`)
//   }
//   else{
//     console.log(`Hello ${oneuser}, thank you for logging in again.`)
//   }
// })
//  }
// Ex: 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users = ["Abbas","Ali","Subhan","Basit","Noman"]
// let new_users = ["Areeba","abbas","Asif","Zainab","Subhan"]
// new_users.forEach(new_one_users => {
// let our_condition = current_users.some(current_users=> current_users.toLowerCase() === new_one_users.toLowerCase())
// if (our_condition) {
//   console.log(`Sorry ${new_one_users} is already taken`)
// }
// else{
//   console.log(`This username ${new_one_users} is available`)
// }
// })
// Ex: 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let number =[1,2,3,4,5,6,7,8,9]
// for(let onenumber of number ){
//  let ordinalnumber :string
//  if (onenumber === 1) {
//     ordinalnumber = "st"
//  }
//  else if(onenumber === 2){
//     ordinalnumber = "nd"
//  }
//  else if(onenumber === 3){
//   ordinalnumber = "rd"
// }
// else{
//   ordinalnumber = "th"
// }
// console.log(`${onenumber}${ordinalnumber}`)
// }
// Ex : 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let pizza =["Chiken tikka","Malia cheese","Fajita"]
// for(let onepizza of pizza){
//   console.log(`I like ${onepizza} pizza`)
// }
// console.log("Pizza is love")
// console.log("I eat Pizza")
// Ex: 35 
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let Petanimals =["Cat","Dog","Rabbit"]
// for(let onepetanimals of Petanimals){
//   console.log(`A ${onepetanimals} would a great pet`)
// }
// console.log("Any of these animals would like great pets !")
// Ex: 36 
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size:string,printmessage:string){
//     console.log(`you selected ${size} siza shirt with ${printmessage} print on shirt`)
// }
// make_shirt("Medium","Subhan Khan")
// Ex: 37 
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(size:string = "Large",printmessage:string= "I love Typescript"){
//     console.log(`Creating a ${size} size shirt with ${printmessage} print on shirt`)
// }
// make_shirt()
// make_shirt("Medium")
// make_shirt("Small","I love Javascript")
// Ex: 38 
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function Describe_city(City:string ,Country:string= "Pakistan"){
//   console.log(`${City} is in ${Country}`)
// }
// Describe_city("Karachi")
// Describe_city("Lahore")
// Describe_city("Berlin","Germany")
// Ex: 39 
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// function City_Country(City:string ,Country:string= "Pakistan") :string{
//   return `${City} , ${Country}`
// }
// console.log(City_Country("Karachi","Pakistan"))
// console.log(City_Country("Tokyo","Japan"))
// console.log(City_Country("Berlin","Germany"))
// Ex: 40 
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function make_album(artist_name:string,album_title:string, tracks? :number){
//   let album : {artist:string,title:string, tracks? :number}={
//     artist:artist_name,
//     title:album_title,
//   };
//   if (tracks !== undefined) {
//     album.tracks=tracks;
//   }
//   return album;
// }
// let album1 = make_album("Subhan","Title:1")
// let album2 = make_album("Ali","Title:2")
// let album3 = make_album("Basit","Title:3",10)
// console.log(album1)
// console.log(album2)
// console.log(album3)
// Ex: 41 
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function show_magicians(magician:string[]){
//   magician.forEach(names => console.log(names))
// }
// let Magicians_names = ["Harry poeter","Ali khan","Subhan khan"]
// show_magicians(Magicians_names)
// Ex: 42 
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// function show_magicians(magician:string[]){
//   magician.forEach(names => console.log(names))
// }
// function make_great (magician:string[]){
//   return magician.map(names => `The Great ${names}`)
// }
// let Magicians_names = ["Harry poeter","Ali khan","Subhan khan"]
// let great_magicians = make_great(Magicians_names)
// show_magicians(great_magicians)
// Ex: 43 
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// function show_magicians(magician:string[]){
//   magician.forEach(names => console.log(names))
// }
// function make_great (magician:string[]){
//   return magician.map(names => `The Great ${names}`)
// }
// let Magicians_names = ["Harry poeter","Ali khan","Subhan khan"]
// let copy_magicians_names = Magicians_names.slice()
// let copy_great_magicians = make_great(copy_magicians_names)
// console.log("Original array\n")
// show_magicians(Magicians_names)
// console.log("\nCopy array\n")
// show_magicians(copy_great_magicians)
// Ex: 44 
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function making_sandwiches (...items:string[]){
//    console.log("\n Making a sandwiches with the following items : \n")
//    items.forEach(singleitem => console.log(singleitem))
//    console.log("\n Now Enjoy Sandwiches ")
// }
// making_sandwiches("Egg","Cheese","Mayo","Chicken")
// making_sandwiches("Bread","Butter")
// making_sandwiches("Egg","Chicken")
// Ex : 45 
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// function create_car(manufacturer: string, model: string, ...options: string[]) {
//   let car: any = {
//     manufacturer: manufacturer,
//     model: model
//   };
//   options.forEach(option => {
//     let [key, value] = option.split(":");
//     car[key.trim()] = value.trim();
//   });
//   return car;
// }
// let my_car = create_car("Toyota", "Corolla", "Color:Black","Year:2024","Sunroof:True");
// console.log(my_car);
