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

