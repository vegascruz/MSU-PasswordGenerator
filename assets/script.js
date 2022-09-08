
function generatePrompts(){

    //I'm using the prompt function because it wasn't fully clear in the directions.
    //was gonna use a form and text boxes, but it sounded like "prompts"

    //I tried to do try/catch blocks to handle errors, but got a little messy for
    //recreating new prompts of the same question 

    var charNum = "";
    //THIS FUNCTION VERIFIES THAT THE NUMBER IS BETWEEN 8-128
    charNum = validateChar(charNum);

    var lowerCaseAnswer = "";
    //THIS FUNCTION VERIFIES THAT THE ANSWER IS A YES OR NO
    lowerCaseAnswer = includeLower(lowerCaseAnswer);

    var upperCaseAnswer = "";
    //THIS FUNCTION VERIFIES IF THE ANSWER IS A YES OR NO
    upperCaseAnswer = includeUpper(upperCaseAnswer);

    var numericAnswer = "";
    //THIS FUNCTION VERIFIES THE ANSWER IS YES OR NO
    numericAnswer = includeNumeric(numericAnswer);

    var specialCharAnswer = "";
    //THIS FUNCTION VERIFIES IF THE ANSWER IS YES OR NO
    specialCharAnswer = includeSpecialChars(specialCharAnswer);

    //these if statements will generate the prompts again if all the answers are empty OR all are 'no'
    if( (charNum === "") && (lowerCaseAnswer === "") && (upperCaseAnswer === "") &&
        (numericAnswer == "") && (specialCharAnswer === ""))
        {
            alert("YOU NEED AT LEAST ONE ANSWER");
            generatePrompts();
        }

    var chars = "";
    //this will append all the chars based on each prompt answer
    chars = addChars(chars, lowerCaseAnswer, upperCaseAnswer, numericAnswer, specialCharAnswer);

    var passwordLength = charNum;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    //if all the answers are no, the password string will be empty... so it'll force you to enter in some prompt
    if(password == ""){
        alert("ALL YOUR ANSWERS CAN'T BE NO");
        generatePrompts();
    }
    document.getElementById("password").innerHTML = password;
    //this was also gonna appart of the copy feature
    /*document.getElementById("passwordContainer").innerHTML += 
              "<button class='d-grid gap-2 col-3 mx-auto' onclick='copyPassword()'>Copy</button>";*/

}

//FUNCTIONS

//WAS TRYING TO ADD A COPY FEATURE, BUT FIGURED I'D GET TO IT LATER SINCE 
//IT'S NOT APART OF THE ASSIGNMENT
/*function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");

}*/


//validates number of chars
function validateChar(charNum){
    while((charNum == "") || (charNum > 128) || (charNum < 8) ){
        var charNum = prompt("Number of Characters between 8-128");
        if((charNum >= 8) && (charNum <= 128)){
            break;
        }else{
            alert("Number has to be between 8-128");
        }
    }
    return charNum;
}

//include lower or not
function includeLower(lowerCaseAnswer){
    var validInput = false;
    while(lowerCaseAnswer == "" || validInput == false){
        var lowerCaseAnswer = prompt("Include LowerCase? (yes or no)" );
        if((lowerCaseAnswer == "yes") || (lowerCaseAnswer == "YES") || (lowerCaseAnswer == "Yes")
           || (lowerCaseAnswer == "no") || (lowerCaseAnswer == "NO") || (lowerCaseAnswer == "No" )){
            validInput = true;
            break;
        }else{
            validInput = false;
            alert("Answer can't be blank and needs to be yes/no");
        }
    }
    return lowerCaseAnswer;
}

//include upper or not
function includeUpper(upperCaseAnswer){
    var validInput = false;
    while(upperCaseAnswer == "" || validInput == false){
        var upperCaseAnswer = prompt("Include UpperCase? (yes or no)" );
        if((upperCaseAnswer == "yes") || (upperCaseAnswer == "YES") || (upperCaseAnswer == "Yes")
           || (upperCaseAnswer == "no") || (upperCaseAnswer == "NO") || (upperCaseAnswer == "No" )){
            var validInput = true;
            break;
        }else{
            validInput = false;
            alert("Answer can't be blank and needs to be yes/no");
        }
    }
    return upperCaseAnswer;
}

//include numeric
function includeNumeric(numericAnswer){
    var validInput = false;
    while(numericAnswer == "" || validInput == false){
        var numericAnswer = prompt("Include Numeric? (yes or no)" );
        if((numericAnswer == "yes") || (numericAnswer == "YES") || (numericAnswer == "Yes")
           || (numericAnswer == "no") || (numericAnswer == "NO") || (numericAnswer == "No" )){
            validInput = true;
            break;
        }else{
            validInput = false;
            alert("Answer can't be blank and needs to be yes/no");
        }
    }
    return numericAnswer;
}

//inlcude special chars
function includeSpecialChars(specialCharAnswer){
    var validInput = false;
    while(specialCharAnswer == "" || validInput == false){
        var specialCharAnswer = prompt("Include Special Characters? (yes or no)" );
        if((specialCharAnswer == "yes") || (specialCharAnswer == "YES") || (specialCharAnswer == "Yes")
           || (specialCharAnswer == "no") || (specialCharAnswer == "NO") || (specialCharAnswer == "No" )){
            validInput = true;
            break;
        }else{
            alert("Answer can't be blank and needs to be yes/no");
            validInput = false;
        }
    }
    return specialCharAnswer;
}

//splits the chars string based on prompts and booleans 
function addChars(chars, lowerCaseAnswer, upperCaseAnswer, numericAnswer, specialCharAnswer){
    if(((lowerCaseAnswer == "") || (lowerCaseAnswer == "yes") || (lowerCaseAnswer == "YES") || (lowerCaseAnswer == "Yes")))
    {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }

    if(((upperCaseAnswer == "") || (upperCaseAnswer == "yes") || (upperCaseAnswer == "YES") || (upperCaseAnswer == "Yes"))){
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(((numericAnswer == "") || (numericAnswer == "yes") || (numericAnswer == "YES") || (numericAnswer == "Yes"))){
        chars += "0123456789";
    }
    if(((specialCharAnswer == "") || (specialCharAnswer == "yes") || (specialCharAnswer == "YES") || (specialCharAnswer == "Yes"))){
        chars += "!@#$%^&*()";
    }
    return chars;
}