# Makefile by @codewithguillaume
gt:
	git add .
	git commit -m "commit"
	git push

gtc:
	git pull --no-ff
	make gt

gr:
	git rebase main

gm:
	git switch main
	git pull

gmc:
	make gm
	git checkout -

dev:
	npm run dev
