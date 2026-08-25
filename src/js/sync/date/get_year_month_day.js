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

