all: deps deploy

deps:
	bower install

style:
	lessc css/style.less > css/style.css
	lessc -x css/style.less > css/style.min.css

bundle: style
	r.js -o app.build.js

deploy:
	git push origin master

.PHONY: deps deploy style