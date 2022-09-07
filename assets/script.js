
function generatePrompts(){

    //I'm using the prompt function because it wasn't fully clear in the directions.
    //was gonna use a form and text boxes, but it sounded like "prompts"

    //I tried to do try/catch blocks to handle errors, but got a little messy for
    //recreating new prompts of the same question 
    try{
        var charNum = prompt("Number of Characters between 8-128");
        if(isNaN(charNum)) {
            alert("You can only enter in a number");
            charNum = prompt("Number of Characters between 8-128");
        } 
        if((charNum < 8) || (charNum > 128)){
            alert("Number has to be between 8-128");
            charNum = prompt("Number of Characters between 8-128");
        }
    }catch{
        console.log(error);
    }
    let lowerCaseAnswer = prompt("Include LowerCase? (yes or no)" );
    let upperCaseAnswer = prompt("Include UpperCase? (yes or no)");
    let numericAnswer = prompt("Inlude Numeric? (yes or no)");
    let specialCharAnswer = prompt("Include Special Characters? (yes or no)");

    if( (charNum === "") && (lowerCaseAnswer === "") && (upperCaseAnswer === "") &&
        (numericAnswer == "") && (specialCharAnswer === ""))
        {
            alert("YOU NEED AT LEAST ONE ANSWER");
            generatePrompts();
        }


}