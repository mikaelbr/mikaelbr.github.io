all: deps deploy

deps:
	bower install

style:
	lessc css/style.less > css/style.css
	lessc -x css/style.less > css/style.min.css

bundle: style
	r.js -o app.build.js
	rm -rf build/.git
	rm build/.gitignore build/.bowerrc build/.gitattributes  build/*.html build/*.js build/CNAME build/Makefile
	rm build/*.md build/*.txt build/*.xml build/*.json

deploy:
	git push origin master

.PHONY: deps deploy style
