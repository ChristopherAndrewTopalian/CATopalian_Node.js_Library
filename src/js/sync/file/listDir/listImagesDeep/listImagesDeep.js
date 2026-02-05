// listImagesDeep.js

const fs = require('fs');
const path = require('path');

function listImagesDeep()
{
    let folderPath = '.'; 

    console.log('Scanning for images in: ' + folderPath + '\n');

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

                // check if it is one of the types we want
                if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif')
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

listImagesDeep();

//----//

/*
Scanning for images in: .

catopalian_true_ai_4D_hypercube_tesseract_011.png
CATopalian_True_AI_Centered.png
TRUE AI 005.png
TRUE AI 006.png
TRUE AI 008.png
New folder\TRUE AI 007.png
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

