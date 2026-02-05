// getNetworkInfoAsync2.js

const https = require('https');
const os = require('os');

async function getNetworkInfoAsync2()
{
    const interfaces = os.networkInterfaces();
    let localIPs = [];

    for (let name in interfaces)
    {
        for (let i = 0; i < interfaces[name].length; i++)
        {
            let alias = interfaces[name][i];
            if (alias.family === 'IPv4' && !alias.internal)
            {
                localIPs.push(alias.address);
            }
        }
    }

    // now get external ip asynchronously
    const externalIP = await new Promise(function(resolve, reject)
    {
        https.get('https://api.ipify.org?format=json', function(res)
        {
            let data = '';

            res.on('data', function(chunk)
            {
                data += chunk;
            });

            res.on('end', function()
            {
                try
                {
                    resolve(JSON.parse(data).ip);
                }
                catch (err)
                {
                    reject(err);
                }
            });
        }).on('error', reject);
    });

    return {
        localIPs: localIPs,
        externalIP: externalIP
    };
}

// usage example:
(async function()
{
    let info = await getNetworkInfoAsync();
    console.log('local ips:', info.localIPs);
    console.log('external ip:', info.externalIP);
})();
