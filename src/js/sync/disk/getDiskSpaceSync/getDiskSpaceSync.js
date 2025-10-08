// getDiskSpaceSync.js

const child_process = require('child_process');

function getDiskSpaceSync()
{
    try
    {
        let stdout = child_process.execSync('wmic logicaldisk get caption,freespace,size', { encoding: 'utf8' });

        console.log('Disk info:\n' + stdout);

        return stdout;
    }
    catch (err)
    {
        console.error('Error:', err);
    }
}

//----//

let data = getDiskSpaceSync();
console.log('Sync data:\n' + data);

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

