# CODE BOOK

---

<details>
<summary><b>Section: getDiskSpace</b></summary>


### `getDiskSpace.js`

```js
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
```


</details>

---

<details>
<summary><b>Section: read</b></summary>


### `read.js`

```js
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
```


</details>

---

<details>
<summary><b>Section: write</b></summary>


### `write.js`

```js
// write.js

let fs = require('fs');

function write(whichName, whichData, whichMode = 'w')
{
    fs.writeFile(whichName, whichData, { flag: whichMode }, function(theError)
    {
        if (theError)
        {
            console.error('error writing file:', theError);
        }
        else
        {
            console.log('file written with mode: ' + whichMode);
        }
    });
}

//----//

// overwrite
write('ourFile.txt', "Hi Everyone\n", 'w');

// append
write('ourFile.txt', "Another line here\n", 'a');

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: write2</b></summary>


### `write2.js`

```js
// write2.js

function write2(whichName, whichData, whichMode)
{
    // default to overwrite if no mode given
    let mode = whichMode || 'w';

    fs.writeFile(whichName, whichData, { flag: mode }, function(theError)
    {
        if (theError)
        {
            console.error('error writing file:', theError);
        }
        else
        {
            console.log('file written with mode: ' + mode);
        }
    });
}

//----//

// overwrite
write2('ourFile.txt', "Hi Everyone\n", 'w');

// append
write2('ourFile.txt', "Another line here\n", 'a');

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: writeSimple</b></summary>


### `writeSimple.js`

```js
// writeSimple.js

let fs = require('fs');

function writeSimple(whichName, whichData)
{
    fs.writeFile(whichName, whichData, function(theError)
    {
        if (theError)
        {
            console.error('Error writing file:', theError);
        }
        else
        {
            console.log('File written.');
        }
    });
}

//----//

writeSimple('ourFile.txt', "Hi Everyone");

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: 1.1_single_input</b></summary>


### `single_input.js`

```js
// single_input.js

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function askOneQuestion()
{
    const rl = readline.createInterface({ input, output });

    try
    {
        // Just one question to await
        const name = await rl.question('What is your name? ');

        console.log('\nHowdy, ' + name);
    }
    finally
    {
        rl.close();
    }
}

askOneQuestion();

/*
What is your name? Christopher Topalian

Howdy, Christopher Topalian!
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: 1.2_multiple_inputs</b></summary>


### `multiple_inputs.js`

```js
// multiple_inputs.js

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function askForNames()
{
    // Create the interface for reading and writing to the console
    const rl = readline.createInterface({ input, output });

    try
    {
        // Wait for the user to answer the first question
        const firstName = await rl.question('What is your first name? ');

        // Wait for the user to answer the second question
        const lastName = await rl.question('What is your last name? ');

        // Output the final greeting message
        console.log('\nHowdy, ' + firstName  + ' ' + lastName + '! Good to meet you.');
    }
    finally
    {
        // Always close the interface so the program can exit successfully
        rl.close();
    }
}

// Run the function
askForNames();

/*
What is your first name? Christopher
What is your last name? Topalian

Howdy, Christopher Topalian! Good to meet you.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: 1.3_single_input_ask_until_answered</b></summary>


### `single_input_ask_until_answered.js`

```js
// single_input_ask_until_answered.js

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function askWithValidation()
{
    const rl = readline.createInterface({ input, output });

    try
    {
        // We set the variable up empty so the while loop runs at least once.
        let name = "";

        // Keep looping as long as the name is empty or just spaces
        while (!name.trim())
        {
            name = await rl.question('What is your name? ');

            // If they just hit enter, show them a warning
            if (!name.trim())
            {
                console.log('You cannot leave this blank. Please try again.\n');
            }
        }

        // Use .trim() again to clean up any extra spaces around their name
        console.log('\nHowdy, ' + name.trim() + '!');
    }
    finally
    {
        rl.close();
    }
}

askWithValidation();

//----//

/*
What is your name?
You cannot leave this blank. Please try again.

What is your name?
You cannot leave this blank. Please try again.

What is your name?
You cannot leave this blank. Please try again.

What is your name? Chris

Howdy, Chris!
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: 1.4_multiple_inputs_custom_function</b></summary>


### `askRequiredQuestion.js`

```js
// askRequiredQuestion.js

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

// Create the reusable helper function
async function askRequiredQuestion(rl, promptText)
{
    let answer = "";
    
    while (!answer.trim())
    {
        answer = await rl.question(promptText);

        if (!answer.trim())
        {
            console.log('You cannot leave this blank. Please try again.\n');
        }
    }

    // Return the cleaned-up answer to whatever called it
    return answer.trim();
}

async function askForNames()
{
    const rl = readline.createInterface({ input, output });

    try
    {
        // Use the helper function as many times as you want!
        const firstName = await askRequiredQuestion(rl, 'What is your first name? ');

        const lastName = await askRequiredQuestion(rl, 'What is your last name? ');

        //console.log(`\nHowdy, ${firstName} ${lastName}! Good to meet you.`);
        console.log('\nHowdy, ' + firstName + ' ' + lastName + '! Good to meet you.');

    }
    finally
    {
        rl.close();
    }
}

module.exports = askForNames;

if (require.main === module)
{
    askForNames();
}

//----//

/*
What is your first name?
You cannot leave this blank. Please try again.

What is your first name? Christopher
What is your last name?
You cannot leave this blank. Please try again.

What is your last name? Topalian

Howdy, Christopher Topalian! Good to meet you.
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: network</b></summary>


### `getNetworkInfoAsync.js`

```js
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
```


</details>

---

<details>
<summary><b>Section: getNetworkInfoAsync2</b></summary>


### `getNetworkInfoAsync2.js`

```js
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
```


</details>

---

<details>
<summary><b>Section: date</b></summary>


### `get_year_month_day.js`

```js
// get_year_month_day.js

function get_year_month_day()
{
    let today = new Date();
    let year = today.getFullYear();

    // JavaScript months are 0-indexed (0 = January), so we add 1.
    // padStart ensures we get '08' instead of '8' for single-digit months/days.
    let month = String(today.getMonth() + 1).padStart(2, '0');

    let day = String(today.getDay()).padStart(2, '0');

    return year + '-' + month + '-' + day;
}

module.exports = get_year_month_day;

if (require.main === module)
{
    console.log(get_year_month_day());
}

/*
2026-08-20
Press Enter to Exit
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: getDiskSpaceSync</b></summary>


### `getDiskSpaceSync.js`

```js
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

module.exports = getDiskSpaceSync;

//----//

if (require.main === module)
{
    let data = getDiskSpaceSync();

    console.log('Sync data:\n' + data);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: listDirDeepFullPaths</b></summary>


### `listDirDeepFullPaths.js`

```js
// listDirDeepFullPaths.js

const fs = require('fs');
const path = require('path');

function listDirDeepFullPaths()
{
    let folderPath = '.'; 

    console.log('Deep scanning: ' + folderPath + '\n');

    try 
    {
        // recursive: true
        // returns a massive single array of EVERYTHING in all subfolders
        let allFiles = fs.readdirSync(folderPath, { 
            recursive: true, 
            withFileTypes: true 
        });

        //-//

        for (let i = 0; i < allFiles.length; i++)
        {
            let item = allFiles[i];

            // we only want files (ignore folder names in the list)
            if (item.isFile()) 
            {
                // construct the full path using the parent folder info
                let fullPath = path.join(item.parentPath, item.name);

                console.log(fullPath);
            }
        }
    } 
    catch (err) 
    {
        console.error('Error:', err);
    }
}

//----//

module.exports = listDirDeepFullPaths;

//----//

if (require.main === module)
{
    listDirDeepFullPaths();
}

/*
listDirDeepFullPaths.js
pdf\hydrogen.pdf
text\text001.txt
videos\001.mp4
textures\screenshots\001.PNG
textures\screenshots\001a.PNG
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: listDirDeepItemNames</b></summary>


### `listDirDeepItemNames.js`

```js
// listDirDeepItemNames.js

const fs = require('fs');
const path = require('path');

function listDirDeepItemNames()
{
    let folderPath = '.'; 

    console.log('Deep scanning: ' + folderPath + '\n');

    try 
    {
        // recursive: true
        // returns a massive single array of EVERYTHING in all subfolders
        let allFiles = fs.readdirSync(folderPath, { 
            recursive: true, 
            withFileTypes: true 
        });

        //-//

        for (let i = 0; i < allFiles.length; i++)
        {
            let item = allFiles[i];

            // we only want files (ignore folder names in the list)
            if (item.isFile()) 
            {
                // construct the full path using the parent folder info
                //let fullPath = path.join(item.parentPath, item.name);

                console.log(item.name);
            }
        }
    } 
    catch (err) 
    {
        console.error('Error:', err);
    }
}

listDirDeepItemNames();

//----//

/*
Deep scanning: .

listDirDeep.js
listDirShallowWithType.js
New Rich Text Document.rtf
New Text Document.txt
New folder\in folder 1.rtf
New folder\in folder 1.txt
*/

//----//

/*
Deep scanning: .

listDirDeepItemNames.js
New Rich Text Document.rtf
New Text Document.txt
in folder 1.rtf
in folder 1.txt
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: listDirShallowWithType</b></summary>


### `listDirShallowWithType.js`

```js
// listDirShallowWithType.js

const fs = require('fs');
const path = require('path');

// CHOOSE THE FOLDER
const folderPath = '.'; 

console.log('Scanning folder: ' + folderPath + '\n');

// READ CONTENTS (Synchronous)
try
{
    // "withFileTypes" gives us special objects that know if they are folders or files
    let items = fs.readdirSync(folderPath, { withFileTypes: true });

    for (let i = 0; i < items.length; i++)
    {
        // get the specific item for this turn of the loop
        let item = items[i];

        if (item.isDirectory())
        {
            console.log('[FOLDER] ' + item.name);
        }
        else
        {
            console.log('(FILE) ' + item.name);
        }
    }
}
catch (err)
{
    console.error("Error reading folder:", err);
}

//----//

/*
Scanning folder: .

(FILE) listDirShallowWithType.js
[FOLDER] New folder
(FILE) New Rich Text Document.rtf
(FILE) New Text Document.txt
*/

/*
This script shows content of directory without showing contents of inner folders
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: listImagesDeep</b></summary>


### `listImagesDeep.js`

```js
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
                if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' || ext === '.webp')
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
```


</details>

---

<details>
<summary><b>Section: listImagesFolderDeep</b></summary>


### `listImagesFolderDeep.js`

```js
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
```


</details>

---

<details>
<summary><b>Section: listTextFilesDeep</b></summary>


### `listTextFilesDeep.js`

```js
// listTextFilesDeep.js

const fs = require('fs');
const path = require('path');

function listTextFilesDeep()
{
    let folderPath = '.'; 

    console.log('Scanning for text in: ' + folderPath + '\n');

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

                let allowedTypes = ['.txt', '.c', '.cpp', '.js', '.py', '.rb', '.md', '.rtf', '.html', '.htm', '.xml'];

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

listTextFilesDeep();

//----//

/*
Scanning for text in: .

listTextFilesDeep.js
New Rich Text Document.rtf
New Text Document (2).xml
New Text Document.md
New Text Document.txt
New folder\New Rich Text Document 2.rtf
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: listTextFolderFilesDeep</b></summary>


### `listTextFolderFilesDeep.js`

```js
// listTextFolderFilesDeep.js

const fs = require('fs');
const path = require('path');

function listTextFolderFilesDeep()
{
    let folderPath = './text/'; 

    console.log('Scanning for text in: ' + folderPath + '\n');

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
                // get the extension (e.g., ".txt") and lower case it
                let ext = path.extname(item.name).toLowerCase();

                let allowedTypes = ['.txt', '.c', '.cpp', '.js', '.py', '.rb', '.md', '.rtf', '.html', '.htm', '.xml', '.csv'];

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

listTextFolderFilesDeep();

//----//

/*
Scanning for text in: ./text/

text\New Rich Text Document.rtf
text\New Text Document.md
text\New Text Document.txt
text\New Text Document.xml
text\New folder\New Rich Text Document.rtf
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: readFileSync_from_cwd</b></summary>


### `readFileSync_from_cwd.js`

```js
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
```


</details>

---

<details>
<summary><b>Section: readSync</b></summary>


### `readSync.js`

```js
// readSync.js

let fs = require('fs');

function readSync(whichName)
{
    try
    {
        let data = fs.readFileSync(whichName, 'utf8');

        return data;
    }
    catch (error)
    {
        console.error('error reading file:', error);
    }
}

//----//

console.log(readSync('ourFile.txt'));

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: writeSync</b></summary>


### `writeSync.js`

```js
// writeSync.js

const fs = require('fs');

function writeSync(whichName, whichData, whichMode = 'w')
{
    try
    {
        fs.writeFileSync(whichName, whichData, { flag: whichMode });

        console.log('File written synchronously with mode: ' + whichMode);
    }
    catch (theError)
    {
        console.error('Error writing file:', theError);
    }
}

//----//

// overwrite
writeSync('ourFile.txt', "Hi Everyone\n", 'w');

// append
writeSync('ourFile.txt', "Another line here\n", 'a');

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: writeSync2</b></summary>


### `writeSync2.js`

```js
// writeSync2.js

const fs = require('fs');

function writeSync2(whichName, whichData, whichMode)
{
    // default to overwrite if no mode given
    let mode = whichMode || 'w';

    try
    {
        fs.writeFileSync(whichName, whichData, { flag: mode });

        console.log('File written synchronously with mode: ' + mode);
    }
    catch (theError)
    {
        console.error('Error writing file:', theError);
    }
}

//----//

// overwrite
writeSync2('ourFile.txt', "Hi Everyone\n", 'w');

//----//

// append
writeSync2('ourFile.txt', "Another line here\n", 'a');

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```


</details>

---

<details>
<summary><b>Section: getNetworkInfoSync</b></summary>


### `getNetworkInfoSync.js`

```js
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
```


</details>

---

<details>
<summary><b>Section: getSystemUptime</b></summary>


### `getSystemUptimeSync.js`

```js
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
```


</details>


---
