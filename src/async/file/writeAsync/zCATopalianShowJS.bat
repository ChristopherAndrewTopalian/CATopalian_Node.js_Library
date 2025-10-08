:: zCATopalianShowCode.bat

@echo off

set "jsFile="

for %%f in (*.js) do set "jsFile=%%f" & goto :open_editor

:open_editor
if defined jsFile (
    echo Opening the file in the default editor: %jsFile%
    start "" "%jsFile%"
) else (
    echo No such files found in the directory.
)

pause

:: Dedicated to God the Father
:: All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
:: https://github.com/ChristopherTopalian
:: https://github.com/ChristopherAndrewTopalian
:: This .bat File shows the code of a .js file in the folder.
:: To activate this .bat file, we double click the .bat file, while it is located in our js folder.

