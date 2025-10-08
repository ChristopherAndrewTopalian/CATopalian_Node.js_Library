// write.js

let fs = require('fs');

function write(whichName, whichData, whichMode = 'w')
{
    fs.writeFile(whichName, whichData, { flag: whichMode }, function(theError)
    {
        if (theError)
        {
            console.error('error writing file:', theError);
        }
        else
        {
            console.log('file written with mode: ' + whichMode);
        }
    });
}

//----//

// overwrite
write('ourFile.txt', "Hi Everyone\n", 'w');

// append
write('ourFile.txt', "Another line here\n", 'a');

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

