#!/bin/bash

# get root directory
ROOT_DIR="$(cd "$(dirname "$0")" && cd .. && pwd)"

source "$ROOT_DIR/.env.local"

grep '"version"' $LOCAL_UNTITLED_UI_LIB_ROOT_PATH/package.json | sed 's/.*"version": "\(.*\)".*/\1/'