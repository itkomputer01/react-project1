#!/bin/bash

cd /var/www/kursusweb/frontend

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building React..."
npm run build

echo "Done deploy!"
