import * as mug_collect from "./mugs.js";

const COLLECT = mug_collect.MUG_COLLECTION;

var p = new URLSearchParams(window.location.search);

var num = p.get("num");

/* helper function for email validation */
function emailValidate(){
    var regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (  email.value.match(regexp)){
            return true;
    }
    return false;
}

/* helper function for phone number validation */
function phoneValidate(){
    var regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (  phone_number.value.match(regexp)){
            return true;
    }
    return false;
}

/* helper function for phone number validation */
function addressValidate(){
    var regexp = /^\s*\S+(?:\s+\S+){2}/;
    if (  street_address.value.match(regexp)){
            return true;
    }
    return false;
}



function validate() {
    var amount = document.getElementById("amount");
    var first_name = document.getElementById("first_name");
    var last_name = document.getElementById("last_name");
    
    var phone_number = document.getElementById("phone_number");
    var phone_length = phone_number.value.length;
    var email = document.getElementById("email");

   
    var street_address = document.getElementById("street_address");
    var city = document.getElementById("city");
    
    var state = document.getElementById("state");    
    var credit_card = document.getElementById("credit_card");
    var card_length = credit_card.value.length;


    var shipping = document.getElementById("selection");
    console.log(shipping.value);


  /* check that all fields are filled out */
    if( amount.value.trim() == "") {
            alert("Provide item amount.");
            return false;
    }
    if( first_name.value.trim() == "") {
            alert("Provide first name.");
            return false;
    }
    if( last_name.value.trim() == "") {
            alert("Provide last name.");
            return false;
    }
    if( phone_number.value.trim() == "") {
            alert("Provide phone number.");
            return false;
    }
    if( street_address.value.trim() == "") {
            alert("Provide street address.");
            return false;
    }
    if( city.value.trim() == "") {
            alert("Provide city.");
            return false;
    }
    if( state.value.trim() == "") {
            alert("Provide state.");
            return false;
    }
    if( credit_card.value.trim() == "") {
            alert("Provide credit card.");
            return false;
    }
    if( email.value.trim() == "") {
            alert("Provide email.");
            return false;
    }
    if( shipping == "default") {
            alert("Select shipping method.");
            return false;
    }
    

    /* check that amount is a digit*/
    if(isNaN(amount.value)){
            alert("Amount must be a number.")
            return false;
    }
    /* check that amount is greater than 0 */
    if(amount.value < 1){
            alert("Amount must be 1 or larger.")
            return false;
    } 
    /* check that email is in correct format */
    if(  emailValidate() != true  ){
        alert("Email is not in valid.")
        return false;
    }

    /* check that phone number is in correct format */
    if(  phoneValidate() != true  ){
        alert("Phone number is not in valid format.")
        return false;
    }

     /* check that address is in correct format */
     if(  addressValidate() != true  ){
        alert("Street address is not in valid format.")
        return false;
    }

    /* check formatting of state */
    if( state.value.length != 2){
        alert("State must be abbrieviated.")
        return false;
    }

    /* check that credit card is correct length */
    if(card_length != 19){
        alert("Credit card number must be 16 digits long")
        return false;
    }

   
    return true;
};

function purchase_item(e){
    console.log("purchase");
    console.log(validate());
    if (validate()){
        
        send_email(document.getElementById("email").value);
    }else{
      
        e.preventDefault();
    }
}

function send_email(mail){
    
   
    
    window.location.href = "mailto:"+ mail + "?subject=Get%20Ready%20For%20a%20Delivery!&body="  + "Hi%20" + first_name.value + "%20" + last_name.value +"!"+"%0D%0A"
    +"This%20is%20a%20confirmation%20of%20your%20purchase%20of%20" 
                + COLLECT["mug_"+num].name
                +"%20hand-made%20by%20"+ COLLECT["mug_"+num].artist 
                + ".%0D%0A" + "Order%20Amount:%20" + amount.value 
                + "%0D%0A" + "Price%20Per%20Unit:%20" + COLLECT["mug_"+num].price
                +"%0D%0A"   + "Your%20Address:%20" + street_address.value + "%20" + city.value + "%20" + state.value +"%0D%0A"
                + "We%20will%20email%20you%20once%20your%20item%20has%20shipped!" + "%0D%0A" + "%0D%0A"+ "Thank%20you!" + "%0D%0A" + "%20%20%20MORNING%20RITUALS";
    window.setTimeout(function () { location.href="products.html" }, 0); 
    
}

window.onload = function (){
    console.log("winow onload");
    document.getElementById("first-pic").src = COLLECT["mug_"+num].img;
    document.getElementById("other-pic-1").src = COLLECT["mug_"+num].pic_1;
    document.getElementById("other-pic-2").src = COLLECT["mug_"+num].pic_2;
    document.getElementById("name").innerHTML = COLLECT["mug_"+num].name;
    document.getElementById("small-name").innerHTML = COLLECT["mug_"+num].name;
    document.getElementById("price").innerHTML = '$ ' + COLLECT["mug_"+num].price;
    document.getElementById("artist").innerHTML += COLLECT["mug_"+num].artist;
    document.getElementById("description").innerHTML += COLLECT["mug_"+num].description;
}

document.getElementById('user-form').onsubmit = function(e){
    console.log("on submit");
    purchase_item(e);
}