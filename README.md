# Website Optimization
	This project is to optimize the Cameron portfolio which gives the pagespeed above 90 in mobile and desktop.And it has 60FPS while scrolling the Camerons pizzeria page.

## How to Run the Project
- Download the frontend-nanodegree-mobile-portfolio folder.
- It has two main folders **src** and **dist**.
- **src** folder has a source code which is readable.
- **dist** folder has a minified js,css, html files and optimized images.
- Open the **index.html**(in dist folder) to run this project.
- To inspect the site on your phone, you can run a local server
	```
    $> cd to your project directory
    $> python -m SimpleHTTPServer 8080
	```
- Open a browser and visit localhost:8080

- Download and install ngrok to make your local server accessible remotely.
    ```
	$> cd to your project directory
	$> ./ngrok http 8080
    ```
- Copy the public URL ngrok gives you and try running it.

## Files in the folder
	src
		index.html
		project-2048.html
		project-mobile.html
		project-webperf.html
		css
			print.css
		img
			2048.png
			cam_be_like.jpg
			mobilewebdev.jpg
			profilepic.jpg
		js
			perfmatters.js
		views
			pizza.html
			css
				bootstrap-grid.css
			images
				pizza.png
				pizzeria.jpg
			js
				main.js


## Optimization in this project

- Inline the css and Js.
- Added **media='print'** to the print.css style.
- Added **async** to the Javascript.
- Moved the render blocking css to the end of the HTML.
- Moved the async JS to the end of the HTML.
- Used imageoptim to optimiza the images.
- Finally used grunt to minify the .html,.css,.js files.

## How to use the grunt

- Grunt and Grunt plugins are installed and managed via npm, **the Node.js** package manager.Grunt needs a stable node.js version.
- Install grunt as a global application.
- In command line cd to your project directory.Then enter **sudo npm install -g grunt-cli**(for mac).
- Enter **npm init** to create the package.json.
- Run **npm install -s grunt** to create the node-modules.
- Then create a **gruntfile.js** where you enter all the task to be happened.
- Then run the task in the cmd line to get the task done.

## Optimization in the main.js in the pizza.html
	
- Reduced the number of sliding pizzas while scrolling from **200 to 24.**
- Moved the **document.body.scrollTop** out of the **"for loop"** to avoiding layout thrashing.
- Changed the **querselectorall** by **getElementsByClassName.**
- Stored the pizzaContainer.length in a var pizzaContainerlength.
	- **var pizzaContainerlength = pizzaContainer.length**
- Instead of modular function(i%5) stored the remainder value for the 24 sliding pizzas in **num[] array**.
- **items[i].style.left** alters the geometry of the layout so the paint and the composite layer has to be followed.
- So replaced it with the **transform** which does not alter the geometry of the layout.
- Changed the **querSelector** by **getElemnetById.**
   - **var windowWidth = document.getElementById("randomPizzas").offsetWidth;**
- The pizzasDiv variable is declared outside so it can call DOM only once.
   - **var pizzasDiv = document.getElementById("randomPizzas");**
- Stored the items.length in itemsLength variable.
   - **var itemsLength = items.length;**
- Declared the **phase variable** outside the for loop.
   - **var phase;**
- Stored the DOM call in a variable outside the for loop.
   - **var movingPizzas = document.getElementById("movingPizzas1");**
- Declared **elem variable** outside the for loop.
- Because of the transform property removed the elem.basicLeft to elem.style.left
   - **elem.style.left = (i % cols) * s + 'px';**




