// this is a simple js document that contains functions we're gonna test
function multiplyByN(number, muliplier)
{
    return number * muliplier;
}

// now we export our functions for node
try
{
    module.exports.multiplyByN = multiplyByN;
}
catch (e) {}