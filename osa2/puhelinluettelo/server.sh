#!/bin/sh
exec npx json-server --host 0.0.0.0 --port=3001 --watch db.json
exit 1
