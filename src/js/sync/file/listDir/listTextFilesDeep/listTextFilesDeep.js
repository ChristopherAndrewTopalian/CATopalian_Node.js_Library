// listTextFilesDeep.js

const fs = require('fs');
const path = require('path');

function listTextFilesDeep()
{
    let folderPath = '.'; 

    console.log('Scanning for text in: ' + folderPath + '\n');

    try 
    {
        let allFiles = fs.readdirSync(folderPath, { 
            recursive: true, 
            withFileTypes: true 
        });

        //-//

        for (let i = 0; i < allFiles.length; i++)
        {
            let item = allFiles[i];

            if (item.isFile()) 
            {
                // get the extension (e.g., ".jpg") and lower case it
                let ext = path.extname(item.name).toLowerCase();

                let allowedTypes = ['.txt', '.c', '.cpp', '.js', '.py', '.rb', '.md', '.rtf', '.html', '.htm', '.xml'];

                if (allowedTypes.includes(ext))
                {
                    let fullPath = path.join(item.parentPath, item.name);

                    console.log(fullPath);
                }
            }
        }
    } 
    catch (err) 
    {
        console.error('Error:', err);
    }
}

listTextFilesDeep();

//----//

/*
Scanning for text in: .

listTextFilesDeep.js
New Rich Text Document.rtf
New Text Document (2).xml
New Text Document.md
New Text Document.txt
New folder\New Rich Text Document 2.rtf
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

