let number: number [] =[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
number.forEach (number=> {
let suffix= "th" ;
if(number === 1) {
suffix= ("st")
}else if(number === 2) {
    suffix= ("nd")
}else if(number === 3) {
    suffix= ("rd")
}
    console.log (`${number}) ${suffix} `)
})

let username: string []= [];
if (username.length ===0){
    console.log("we have to find users!")
}else {

}
var currentusers = ["user1", "user2", "user3", "admin"];
var newusers = ["user1", "user2", "user3", "admin"];
newusers.forEach(function (newUsers) {
    if (currentusers.some(function (currentUser) { return currentUser.toLowerCase() === newUsers.toLowerCase(); })) {
        console.log("".concat(newUsers, "will need to enter a new user name."));
    }
    else {
        console.log("".concat(newUsers, " is available."));
    }
});
