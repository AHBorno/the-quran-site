@echo off
title The Quran Site - GitHub Push
color 0A

cd /d "%~dp0"

echo.
echo ==========================================
echo       THE QURAN SITE - GITHUB PUSH
echo ==========================================
echo.

echo [1/4] Checking Git status...
git status

echo.
echo [2/4] Adding all changes...
git add .

echo.
echo [3/4] Creating commit...
set /p commitmsg="Enter commit message (or press Enter for default): "

if "%commitmsg%"=="" set commitmsg=Update website

git commit -m "%commitmsg%"

echo.
echo [4/4] Pushing to GitHub...
git push origin main

echo.
echo ==========================================
echo              PUSH COMPLETE
echo ==========================================
echo.

pause