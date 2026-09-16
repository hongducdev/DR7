@echo off
setlocal
title MHK DR7 - Hot reload
where node >nul 2>&1
if errorlevel 1 (
    echo Can Node.js 22 tro len de theo doi code.
    pause
    exit /b 1
)
node "%~dp0watch-plugin.js"
pause
