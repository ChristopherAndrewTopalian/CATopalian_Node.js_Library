// listDirDeepFullPaths.js

const fs = require('fs');
const path = require('path');

function listDirDeepFullPaths()
{
    let folderPath = '.'; 

    console.log('Deep scanning: ' + folderPath + '\n');

    try 
    {
        // recursive: true
        // returns a massive single array of EVERYTHING in all subfolders
        let allFiles = fs.readdirSync(folderPath, { 
            recursive: true, 
            withFileTypes: true 
        });

        //-//

        for (let i = 0; i < allFiles.length; i++)
        {
            let item = allFiles[i];

            // we only want files (ignore folder names in the list)
            if (item.isFile()) 
            {
                // construct the full path using the parent folder info
                let fullPath = path.join(item.parentPath, item.name);

                console.log(fullPath);
            }
        }
    } 
    catch (err) 
    {
        console.error('Error:', err);
    }
}

//----//

module.exports = listDirDeepFullPaths;

//----//

if (require.main === module)
{
    listDirDeepFullPaths();
}

/*
listDirDeepFullPaths.js
pdf\hydrogen.pdf
text\text001.txt
videos\001.mp4
textures\screenshots\001.PNG
textures\screenshots\001a.PNG
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

