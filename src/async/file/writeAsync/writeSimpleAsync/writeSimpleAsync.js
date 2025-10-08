// writeSimpleAsync.js

let fs = require('fs');

function writeSimpleAsync(whichName, whichData)
{
    fs.writeFile(whichName, whichData, function(theError)
    {
        if (theError)
        {
            console.error('Error writing file:', theError);
        }
        else
        {
            console.log('File written.');
        }
    });
}

//----//

writeSimpleAsync('ourFile.txt', "Hi Everyone");

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

