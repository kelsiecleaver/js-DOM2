/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/
var changeRating = document.getElementById("rating1");
changeRating.innerHTML = "Rating: 5 Stars";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/
var changePrice = document.getElementById("price2");
changePrice.innerHTML = "Price: $$$";

var changeAddress = document.getElementById("addy2");
changeAddress.innerHTML = "Address: 525 Kapahulu Ave, Honolulu, Hi 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat


Append this div element to the div id "text3"*/

var addHours = document.createElement("div");
addHours.id = "hours3";
addHours.innerHTML = "Hours: 6pm -12am Sun - Sat"
text3.appendChild(addHours);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/
var addPrice = document.createElement("div");
addPrice.id = "price4";
addPrice.innerHTML = "Price: $$$";
text4.appendChild(addPrice);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/
var addAddress = document.createElement("div");
addAddress.id = "addy4";
addAddress.innerHTML = "Address: 1620 N. School St, Honolulu, Hi 96817";
text4.appendChild(addAddress);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/
var addHours2 = document.createElement("div");
addHours2.id = "hours4";
addHours2.innerHTML = "Hours: 9am - 10pm Sun - Sat";
text4.appendChild(addHours2);



/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/
var addParagraph = document.createElement("p");
addParagraph.id = "update4";
addParagraph.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(addParagraph);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var updateName5 = document.createElement("div");
updateName5.id = "name5";
updateName5.innerHTML = "5. The Death Star Cafe";
text5.appendChild(updateName5);

var updateRating5 = document.createElement("div");
updateRating5.id = "rating5";
updateRating5.innerHTML = "Rating: 2 Stars";
text5.appendChild(updateRating5);

var updatePrice5 = document.createElement("div");
updatePrice5.id = "price5";
updatePrice5.innerHTML = "Price: $$";
text5.appendChild(updatePrice5);

var updateAddy5 = document.createElement("div");
updateAddy5.id = "addy5";
updateAddy5.innerHTML = "Address: A galaxy far, far away.";
text5.appendChild(updateAddy5);

var updateHours5 = document.createElement("div");
updateHours5.id = "hours5";
updateHours5.innerHTML = "Hours: We never close";
text5.appendChild(updateHours5);
