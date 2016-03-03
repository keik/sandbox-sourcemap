all: 1 2 3 4 5 6 7

1:
	node_modules/.bin/browserify main.js -o 1-browserify.js -d

2:
	node_modules/.bin/browserify -t coffeeify main.coffee -o 2-browserify-coffeeify.js -d

3:
	node_modules/.bin/browserify -t undebuggify main.js -o 3-browserify-undebuggify.js -d

4:
	node_modules/.bin/browserify -g uglifyify main.js -o 4-browserify-uglifyify.js -d

5:
	node_modules/.bin/browserify -t coffeeify -t undebuggify main.coffee -o 5-browserify-coffeeify-undebuggify.js -d

6:
	node_modules/.bin/browserify -t coffeeify -g uglifyify main.coffee -o 6-browserify-coffeeify-uglifyify.js -d

7:
	node_modules/.bin/browserify -t undebuggify -g uglifyify main.js -o 7-browserify-undebuggify-uglifyify.js -d

.PHONY: 1 2 3 4 5 6 7
