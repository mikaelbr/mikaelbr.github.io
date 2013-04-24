all: deps deploy

deps:
	bower install

style:
	lessc css/style.less > css/style.css
	lessc -x css/style.less > css/style.min.css

deploy:
	git push origin master

.PHONY: deps deploy style