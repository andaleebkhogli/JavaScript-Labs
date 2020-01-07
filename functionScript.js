//File to write all functions in
// 1st function
function summationOfVar(var1,var2)
{
    return var1+var2;
}
//2nd function
function fullname(fullName=" ")
{
    var result ="";
    var splitName =fullName.toLowerCase().split(" ");
    for (i in splitName)
    {
       result += splitName[i].charAt(0).toUpperCase() + splitName[i].substring(1)+ " ";
    } // adelo bdayt kol esm b capitals w b2y 7rof small fl esm eli bybd2 mn index 1
    return result;
}

// 3rd function
function sentence(sentenceVar=" ")
{   

    var max=0;
    var latest = "";
    var newSentence =sentenceVar.split(" ");
    for(i in newSentence)
    {
        
        if(max < newSentence[i].length)
        {
        max = newSentence[i].length;
        latest = newSentence[i];
        }
    }

    return latest;
}

//4th function
function randomO()
{
    return Math.ceil(Math.random()*9);
}

// BONUS
function infinitesum()
{
    var sum = 0;
    for(i in arguments)
    sum+= arguments[i];
}

// --------------------
// BONUS2

function alphabeticorder(alpha="")
{
    var result = alpha.split('');
    return (result.sort()).join("");
}