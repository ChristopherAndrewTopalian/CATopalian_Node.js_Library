// single_input_ask_until_answered.js

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function askWithValidation()
{
    const rl = readline.createInterface({ input, output });

    try
    {
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

