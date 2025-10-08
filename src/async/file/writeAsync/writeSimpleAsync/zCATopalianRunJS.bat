:: zCATopalianRunJS.bat

@echo off

set "jsFile="

for %%f in (*.js) do set "jsFile=%%f" & goto :run_js

:run_js
if defined jsFile (
    echo Running the file: %jsFile%
    node "%~dp0%jsFile%"
) else (
    echo No such files found in the directory.
)

pause

:: Dedicated to God the Father
:: All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
:: https://github.com/ChristopherTopalian
:: https://github.com/ChristopherAndrewTopalian
:: This .bat File runs a .js file found in the folder.
:: To activate this .bat file, we double click the .bat file, while it is located in our js folder.

