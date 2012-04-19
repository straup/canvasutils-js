all: clean js

clean:
	rm canvasutils.js
	rm canvasutils.min.js

js:
	cat src/base64.js > canvasutils.js
	echo "\n" >> canvasutils.js
	cat src/canvasutils.js >> canvasutils.js

	java -Xmx64m -jar lib/google-compiler/compiler-20100616.jar --js canvasutils.js > canvasutils.min.js