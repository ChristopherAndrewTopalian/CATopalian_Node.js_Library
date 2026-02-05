// listTextFolderFilesDeep.js

const fs = require('fs');
const path = require('path');

function listTextFolderFilesDeep()
{
    let folderPath = './text/'; 

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

listTextFolderFilesDeep();

//----//

/*
Scanning for text in: ./text/

text\New Rich Text Document.rtf
text\New Text Document.md
text\New Text Document.txt
text\New Text Document.xml
text\New folder\New Rich Text Document.rtf
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

