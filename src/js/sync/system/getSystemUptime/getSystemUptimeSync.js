// getSystemUptimeSync.js

let os = require("os");

// get system uptime in hours, minutes, seconds
function getSystemUptimeSync()
{
    // seconds since last reboot
    let uptime = os.uptime();

    let hours = Math.floor(uptime / 3600);

    let minutes = Math.floor((uptime % 3600) / 60);

    let seconds = uptime % 60;

    return "uptime: " + hours + "h " + minutes + "m " + seconds + "s";
}

//----//

console.log(getSystemUptimeSync());

//----//

/*
uptime: 326h 4m 33.25s
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

