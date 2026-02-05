// listImagesFolderDeep.js

const fs = require('fs');
const path = require('path');

function listImagesFolderDeep()
{
    let folderPath = './images/'; 

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

                let allowedTypes = ['.png', '.jpg', '.jpeg', '.gif'];

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

listImagesFolderDeep();

//----//

/*
Scanning for images in: ./images/

images\catopalian_true_ai_4D_hypercube_tesseract_011.png
images\CATopalian_True_AI_Centered.png
images\TRUE AI 005.png
images\TRUE AI 006.png
images\TRUE AI 008.png
images\New folder\TRUE AI 007.png
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

