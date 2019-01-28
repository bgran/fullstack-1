#!/bin/sh
set -x
cd osa1 || exit 1
for teht in kurssitiedot unicafe anekdootit; do (
	npx create-react-app $teht
	cd $teht
	npm install -s react@16.8.0-alpha.0 react-dom@16.8.0-alpha.0
	)
done


