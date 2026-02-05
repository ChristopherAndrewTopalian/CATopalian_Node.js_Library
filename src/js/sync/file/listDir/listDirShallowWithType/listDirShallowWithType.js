// listDirShallowWithType.js

const fs = require('fs');
const path = require('path');

// CHOOSE THE FOLDER
const folderPath = '.'; 

console.log('Scanning folder: ' + folderPath + '\n');

// READ CONTENTS (Synchronous)
try
{
    // "withFileTypes" gives us special objects that know if they are folders or files
    let items = fs.readdirSync(folderPath, { withFileTypes: true });

    for (let i = 0; i < items.length; i++)
    {
        // get the specific item for this turn of the loop
        let item = items[i];

        if (item.isDirectory())
        {
            console.log('[FOLDER] ' + item.name);
        }
        else
        {
            console.log('(FILE) ' + item.name);
        }
    }
}
catch (err)
{
    console.error("Error reading folder:", err);
}

//----//

/*
Scanning folder: .

(FILE) listDirShallowWithType.js
[FOLDER] New folder
(FILE) New Rich Text Document.rtf
(FILE) New Text Document.txt
*/

/*
This script shows content of directory without showing contents of inner folders
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

