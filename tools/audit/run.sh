#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."
mkdir -p .cache/audit
rebuild=0
if [ ! -f .cache/audit/gate.mjs ]; then
  rebuild=1
elif [ -n "$(find src/content tools/audit/gate.mjs -newer .cache/audit/gate.mjs -print -quit 2>/dev/null)" ]; then
  rebuild=1
fi
if [ "$rebuild" -eq 1 ]; then
  NODE_OPTIONS="--max-old-space-size=4096" ./node_modules/.bin/esbuild tools/audit/gate.mjs --bundle --platform=node --format=esm \
    --outfile=.cache/audit/gate.mjs --log-level=error --tsconfig=tsconfig.json
fi
NODE_OPTIONS="--max-old-space-size=4096" node .cache/audit/gate.mjs "$@"
