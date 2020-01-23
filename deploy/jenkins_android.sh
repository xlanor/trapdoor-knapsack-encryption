#!/usr/bin/env bash

# Prepare some artifacts for turtle.
COMMIT_MSG="$(git log --format=%B --no-merges -n 1)"

# Creates an artifacts folder.
mkdir /home/node/$APP_TITLE

# Sets up turtle
turtle setup:android --sdk-version 35.0.0

mkdir /home/node/app/exports
rm -rf /home/node/app/exports/*

expo export --public-url $PUBLIC_URL

mv /home/node/app/dist/* /home/node/app/exports/

echo "Building Production Build"
export EXPO_ANDROID_KEY_PASSWORD=$EXPO_ANDROID_KEY_PASSWORD_PROD
export EXPO_ANDROID_KEYSTORE_PASSWORD=$EXPO_ANDROID_KEYSTORE_PASSWORD_PROD
export EXPO_ANDROID_KEYSTORE_ALIAS=$KEYSTORE_ALIAS_PROD
# Builds the apk
turtle build:android --keystore-path ./$APP_TITLE.keystore --keystore-alias $KEYSTORE_ALIAS_PROD \
    -t apk -o /home/node/$APP_TITLE/$APP_TITLE.apk --public-url $PUBLIC_URL_ANDROID 

# Send my build to telegram
curl -v -F "chat_id=$CHAT_ID" -F document=@/home/node/$APP_TITLE/$APP_TITLE.apk https://api.telegram.org/bot$BOT_TOKEN/sendDocument