all: n b a d b+a b+d s b+s

n:
	@echo n
	node_modules/.bin/browserify main.js -o bundle-n.js -d

b:
	@echo b
	node_modules/.bin/browserify -t babelify main.js -o bundle-b.js -d

a:
	@echo a
	node_modules/.bin/browserify -t unassertify main.js -o bundle-a.js -d

d:
	@echo d
	node_modules/.bin/browserify -t undebuggify main.js -o bundle-d.js -d

b+a:
	@echo b+a
	node_modules/.bin/browserify -t babelify -t unassertify main.js -o bundle-b+a.js -d

b+d:
	@echo b+d
	node_modules/.bin/browserify -t babelify -t undebuggify main.js -o bundle-b+d.js -d

# s:
#  	@echo
#  	node_modules/.bin/browserify -t ./standalone/throughify main.js -o standalone/bundle-s.js -d
#
# b+s:
#  	@echo b+s
#  	node_modules/.bin/browserify -t babelify -t ./standalone/throughify main.js -o standalone/bundle-b+s.js -d

.PHONY: n b a d b+a b+d s b+s
