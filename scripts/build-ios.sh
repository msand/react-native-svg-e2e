#!/bin/bash

set -e

# Go to ios path
cd ios

# Remove build folder
rm -rf build

# Run release build
xcodebuild build \
  -scheme ReactNativeSvgE2E \
  -configuration Release \
  -sdk iphonesimulator \
  -derivedDataPath build \
  ONLY_ACTIVE_ARCH=NO \
  OTHER_LDFLAGS='$(inherited) -ObjC -lc++'
