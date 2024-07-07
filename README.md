# Quick Start Guide

This guide will help you set up and run this site in a production environment.

## Step 1: Install Node.js

Before we start, you need to have Node.js installed on your computer. To check if you already have it:

1. Open your terminal or command prompt.
2. Type `node -v` and press Enter.

If you see a version number, you're all set. If not, download and install Node.js from [nodejs.org](https://nodejs.org/).

## Step 2: Install App Dependencies

1. Open your terminal or command prompt.
2. Navigate to the folder where you have this project located.
3. Type `npm install` and press Enter.

This will install everything the app needs to run.

## Step 3: Build the App for Production

1. In the terminal, still in the app folder, type `npm run build` and press Enter.

This will create a `build` folder with the production version of the app.

## Step 4: Run the App

1. To preview the app, you need a simple server. Install it by typing `npm install -g serve` and press Enter.
2. Then, type `serve -s build` and press Enter.

This will start the app. Open your web browser and go to `http://localhost:5000` or `http://localhost:3000` to see it.

## You're Done!

The project is now running in production mode. If you have any questions or run into any issues, please let me know.
