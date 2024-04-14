const user ={
    username : "john",
    price : 699,
    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);  //this key word tells about the current contest 
    }
}

user.welcomeMessage()

// console.log(user["username"]); // accesing same as user.username

user.username ="mike"
user.welcomeMessage()
