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

