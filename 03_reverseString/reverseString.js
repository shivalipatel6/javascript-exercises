const reverseString = function(string) {
let finalstring = "";

for(let i = (string.length -1); i > -1; i--){
    finalstring = finalstring + string.charAt(i);

}

return finalstring;
};

// Do not edit below this line
module.exports = reverseString;
