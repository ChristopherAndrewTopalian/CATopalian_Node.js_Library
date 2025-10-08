// read.js

let fs = require('fs');

function read(whichName, callback)
{
    fs.readFile(whichName, 'utf8', function(error, data)
    {
        if (error)
        {
            console.error('error reading file:', error);
            return;
        }
        callback(data);
    });
}

//----//

read('ourFile.txt', function(contents)
{
    console.log('file contents:\n' + contents);
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

