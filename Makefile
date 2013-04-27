all: deps deploy

deps:
	bower install

style:
	lessc css/style.less > css/style.css
	lessc -x css/style.less > css/style.min.css

bundle: style
	r.js -o app.build.js
	rm -rf dist/.git
	rm dist/.gitignore dist/.bowerrc dist/.gitattributes  dist/*.html dist/*.js dist/CNAME dist/Makefile
	rm dist/*.md dist/*.txt dist/*.xml dist/*.json

deploy:
	git push origin master

.PHONY: deps deploy style
