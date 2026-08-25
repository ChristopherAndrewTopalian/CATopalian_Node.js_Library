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

Howdy, Christopher Topalian! Great to meet you.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2011-2025
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting

