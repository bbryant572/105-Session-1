console.log("Register");

class User{
    constructor(email, password, first, last, age, address, phone, payment, color) {
        this.email=email;
        this.password=password;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone
        this.payment=payment;
        this.color=color;
    }
}

function registerUser(){
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#telPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
    let user= new User(email,password,first,last,age,address,phone,payment,color);
    console.log(user);
}

function clearInputs(){
     $("txtEmail").val("").reset();
     $("txtPassword").val("").reset();
     $("txtFirst").val("").reset();
     $("txtLast").val("").reset();
     $("txtAddress").val("").reset();
     $("telPhone").val("").reset();
     $("selPayment").val("").reset();
     $("color").val("").reset(); 
    document.getElementsByClassName("form-control").remove();
}

function Init(){
    console.log("Init Function");
}
window.onload=Init;