#!/bin/sh

rm -rf release
mkdir release
cp Procfile ./release
cd client/
gulp build:dev
cd ../server
gulp build
cp package.json ../release
cp -R ./build/ ../release
cp -R ./public ../release