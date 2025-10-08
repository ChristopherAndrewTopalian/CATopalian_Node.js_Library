// readSync.js

let fs = require('fs');

function readSync(whichName)
{
    try
    {
        let data = fs.readFileSync(whichName, 'utf8');

        return data;
    }
    catch (error)
    {
        console.error('error reading file:', error);
    }
}

//----//

console.log(readSync('ourFile.txt'));

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

