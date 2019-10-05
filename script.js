var charTypes = {
    'special': '!$%^&*()-=+[]{};#:@~,./<>?',
    'numeric': '0123456789',
    'lowerCase': 'abcdefghijklmnopqrstuvwxyz',
    'upperCase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
}; 
var password = ''; 
var finalPassword = '';
function pwdGen(){
 
                 
                var charLength = parseInt(window.prompt("How many characters would you like your password to contain?"));
                // document.getElementById("charLength").innerHTML = charLength;


                if(!isNaN(charLength) && charLength <= 128){
                var special = confirm("Click OK to confirm including special character");
                // document.getElementById("special").innerHTML = charTypes.special;
                
                var numeric = confirm("Click OK to confirm including numeric character");
                //document.getElementById("numeric").innerHTML = charTypes.numeric;

                var lowerCase = confirm("Click OK to confirm including Lowercase character");
                //document.getElementById("lowerCase").innerHTML = charTypes.lowerCase;

                var upperCase = confirm ("Click OK to confirm including Uppercase character");
                //document.getElementById("upperCase").innerHTML = charTypes.upperCase;

                }

                else{
                    alert("password Requirenment : maximum Password size is 128");
                    pwdGen();
                    
                }  
               
                for(var i = 0; i < charLength;i++){
                specialChar();
                numericChar();
                lowerCaseChar();
                upperCaseChar();

                }
                
                
                function specialChar(){
                if(special){
                     password += charTypes.special[Math.floor(Math.random() * charTypes.special.length)];
                     
                     }
                }
                function numericChar(){
                if(numeric){
                    password += charTypes.numeric[ Math.floor(Math.random() * charTypes.numeric.length) ];
                    
                    
                }
                }
                function lowerCaseChar(){
                if(lowerCase){
                    password += charTypes.lowerCase[ Math.floor(Math.random() * charTypes.lowerCase.length) ];
                    
                } 
                }
                function upperCaseChar(){
                if(upperCase) {
                    password += charTypes.upperCase[Math.floor(Math.random() * charTypes.upperCase.length) ];  
                    
                }
                }
                
                var passwordLength = charLength;
                var longPassword = password;
                finalPassword = longPassword.substring(0,passwordLength);
                document.getElementById("passwordArea").innerHTML = finalPassword;
                document.getElementById("copyButton").disabled = false;
                
}
function copyFunction() {
    var copyPassword = document.getElementById("passwordArea");
    copyPassword.select();
    copyPassword.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Your password  " + copyPassword.value + " was copied to your clipboard");
}
