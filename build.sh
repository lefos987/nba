#!/bin/sh

rm -rf release
mkdir release
cd client/
gulp build:dev
cd ../server
gulp build
cp build/ ../release/
cp public/ ../release