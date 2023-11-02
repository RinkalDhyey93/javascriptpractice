//get or set is method that work on property and that use in function,class,and object.

const User={
    _email:'rinkal@google.com',
    _password:"rina",


    get email(){
return this._email.toUpperCase();
    },  

    set email(value){
this._email=value;
    },

    get _password(){
        return this._password.toUpperCase();
            },  
        
            set password(value){
        this._password=value;
            }
}

const tea=Object.create(User)
console.log(tea.email);

