//QUESTION NO1:Ordinal Numbers: Display numbers with their ordinal suffixes.

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
//QUESTION no2:No Users: Ensure your user list isn’t empty.

let username: string []= [];
if (username.length ===0){
    console.log("we have to find users!")
}else {

}
//QUESTION NO3:Checking Usernames: Ensure uniqueness in usernames.

let currentusers :string[]=["user1","user2","user3","admin"]
let newusers :string[]=["user1","user2","user3","admin"]
newusers.forEach(newUsers =>{
    if (currentusers.some(currentUser =>currentUser.toLowerCase()=== newUsers.toLowerCase())){
        console.log(`${newUsers}will need to enter a new user name.`)
    }else {
        console.log(`${newUsers} is available.`)
}
})
