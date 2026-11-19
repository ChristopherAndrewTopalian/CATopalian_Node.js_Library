// readFileSync_from_cwd.js

let fs = require('fs');
let path = require('path');

function readAndProcessFile()
{
    // Get the current working directory
    let baseDir = process.cwd();

    // Build the path: baseDir/src/text/ourText001.txt
    // path.join automatically uses the right slashes (\ for Windows, / for Mac/Linux)
    let filePath = path.join(baseDir, 'src', 'text', 'ourText001.txt');

    console.log('Reading from: ' + filePath);

    // Read the file as standard text ('utf8')
    let fileText = fs.readFileSync(filePath, 'utf8');

    // Do something with the text
    let lines = fileText.split('\n');
    console.log('Total lines: ' + lines.length);
    console.log('Content');
    console.log(fileText);
}

readAndProcessFile();

//----//

/*
Total lines: 1
Content
Hi Everyone
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

