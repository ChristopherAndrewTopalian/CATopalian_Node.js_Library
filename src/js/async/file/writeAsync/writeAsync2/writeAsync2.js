// writeAsync2.js

function writeAsync2(whichName, whichData, whichMode)
{
    // default to overwrite if no mode given
    let mode = whichMode || 'w';

    fs.writeFile(whichName, whichData, { flag: mode }, function(theError)
    {
        if (theError)
        {
            console.error('error writing file:', theError);
        }
        else
        {
            console.log('file written with mode: ' + mode);
        }
    });
}

//----//

// overwrite
writeAsync2('ourFile.txt', "Hi Everyone\n", 'w');

// append
writeAsync2('ourFile.txt', "Another line here\n", 'a');

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

