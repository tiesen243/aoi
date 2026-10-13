#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT=$ROOT/out

rm -rf $OUTPUT
mkdir -p $OUTPUT/{apps,packages}

echo "Pruning monorepo..."

cp "$ROOT/package.json" "$OUTPUT/package.json"
cp "$ROOT/bun.lock" "$OUTPUT/bun.lock"

apps=$(find "$ROOT/apps" -maxdepth 1 -mindepth 1 -type d -exec basename {} \;)
packages=$(find "$ROOT/packages" -maxdepth 1 -mindepth 1 -type d -exec basename {} \;)

for app in $apps; do
  echo "Pruning app: $app"
  mkdir -p "$OUTPUT/apps/$app"
  cp -r "$ROOT/apps/$app/package.json" "$OUTPUT/apps/$app/package.json"
done

for package in $packages; do
  echo "Pruning package: $package"
  mkdir -p "$OUTPUT/packages/$package"
  cp -r "$ROOT/packages/$package/package.json" "$OUTPUT/packages/$package/package.json"
done
