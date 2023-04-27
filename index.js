//original customer object
let customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
}

//print out of original object
console.log(customer);

//Modifying email, phone, zip code, and favorite flavors using bracket notation
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "match"];

//print out of above modifications
console.log(customer);

//Deleting zip code and favorite store
delete customer.zipCode;
delete customer.favoriteStore;

//print out of above modifications
console.log(customer);

//Adding toppings, future flavors, and purchase cost using dot notation
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = ["mango"];
customer.todaysPurchaseCost = 5.32;

//printing out the keys in customer object
for(let key in customer){
    console.log(key);
}


