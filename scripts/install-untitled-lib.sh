#!/bin/bash
set -e

# get root directory
ROOT_DIR="$(cd "$(dirname "$0")" && cd .. && pwd)"
SCRIPTS_DIR=$ROOT_DIR/scripts

source "$ROOT_DIR/.env.local"

# get version
echo "🔍 Detecting version..."
if ! VERSION=$(bash $SCRIPTS_DIR/_detect_version.sh); then
    echo "❌ Error: Failed to detect version"
    exit 1
fi

if [ -z "$VERSION" ]; then
    echo "❌ Error: Version is empty"
    exit 1
fi

echo "🎤 Detect Version : $VERSION"
echo

# Main process
echo "💫 Starting install local untitle-ui-library."
echo

echo "🍀 Uninstall existed @naru/untitled-ui-library"
if ! npm uninstall @naru/untitled-ui-library; then
    echo "❌ Error: Failed to uninstall @naru/untitled-ui-library"
    exit 1
fi
echo

echo "🎸 Delete cache .next"
rm -rf "$ROOT_DIR/.next"
echo

echo "🎼 Install local untitled-ui-library"
if ! npm install $LOCAL_UNTITLED_UI_LIB_ROOT_PATH/local_publish/naru-untitled-ui-library-$VERSION.tgz --legacy-peer-deps; then
    echo "❌ Error: Failed to install @naru/untitled-ui-library"
    exit 1
fi
echo

echo "💫 Completed install local untitle-ui-library."
echo