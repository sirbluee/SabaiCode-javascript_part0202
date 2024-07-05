const checkPassword = (passwords)=>{

    if (passwords.length >= 8){
        console.log("Good password.")
    }else{
        console.log("Your password must be at least 8 characters.");
    }
    return passwords.length;
}

let passwords = [1,2,3,4,5,6,7];
console.log(checkPassword(passwords));