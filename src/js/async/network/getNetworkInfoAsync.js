// getNetworkInfoAsync.js

const os = require("os");

async function getNetworkInfo()
{
    return new Promise(function(resolve, reject)
    {
        try
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
                resolve("no external ipv4 addresses found");
            }
            else
            {
                resolve(results.join("\n"));
            }
        }
        catch (error)
        {
            reject(error);
        }
    });
}

//----//

// usage example
getNetworkInfo()
.then(function(result)
{
    console.log(result);
})
.catch(function(err)
{
    console.error("error:", err);
});
