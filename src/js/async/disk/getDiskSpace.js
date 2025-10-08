// getDiskSpace.js

const child_process = require('child_process');

function getDiskSpace(callback)
{
    child_process.exec('wmic logicaldisk get caption,freespace,size', function(error, stdout, stderr)
    {
        if (error)
        {
            callback(error);
            return;
        }
        // Output the raw data
        console.log('Disk info:\n' + stdout);
        callback(null, stdout);
    });
}

//----//

getDiskSpace(function(err, data)
{
    if (err)
    {
        console.error('Error:', err);
    }
    else
    {
        console.log('Disk info:\n' + data);
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

