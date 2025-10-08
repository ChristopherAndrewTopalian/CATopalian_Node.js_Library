// writeSync2.js

const fs = require('fs');

function writeSync2(whichName, whichData, whichMode)
{
    // default to overwrite if no mode given
    let mode = whichMode || 'w';

    try
    {
        fs.writeFileSync(whichName, whichData, { flag: mode });

        console.log('File written synchronously with mode: ' + mode);
    }
    catch (theError)
    {
        console.error('Error writing file:', theError);
    }
}

//----//

// overwrite
writeSync2('ourFile.txt', "Hi Everyone\n", 'w');

//----//

// append
writeSync2('ourFile.txt', "Another line here\n", 'a');

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

