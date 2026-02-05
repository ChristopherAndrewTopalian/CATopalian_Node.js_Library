// getNetworkInfoSync.js

let os = require("os");

// get network info ip addresses
function getNetworkInfoSync()
{
    let interfaces = os.networkInterfaces();

    let results = [];

    for (let name in interfaces)
    {
        let iface = interfaces[name];

        for (let i = 0; i < iface.length; i++)
        {
            let alias = iface[i];

            if (alias.family === "IPv4" && !alias.internal)
            {
                results.push("interface: " + name + " ip: " + alias.address);
            }
        }
    }

    if (results.length === 0)
    {
        return "no external ipv4 addresses found";
    }

    return results.join("\n");
}

//----//

console.log(getNetworkInfoSync());

//----//

/*
interface: Ethernet ip: 28.28.725.823
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

