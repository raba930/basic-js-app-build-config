# Basic js app build configuration

## Installation

### Clone repo
```
	git clone https://github.com/raba930/basic-js-app-build-config
```
### Install packages
```
	npm install
```
or
```
	yarn install
```

## Usage

### Start app on development server
```
	npm run start
```

### Run build in watch mode
```
	npm run watch
```

### Build app for production
```
	npm run build
```


## App structure

### Input example
```
	...
	├── src
	│   ├── app.js
	│   └── index.js
	├── static
	│   ├── index.html
	│   ├── js.png
	│   ├── Roboto-Bold.ttf
	│   ├── style.css
	│   └── style.scss
	...
```
**index.js**
```
import '../static/style.css';
import '../static/style.scss';
import './app';
```
**style.scss**
```
...
@font-face {
	font-family: 'Roboto-Bold';
	src:  url('Roboto-Bold.ttf')
}
...
```
**style.css**
```
body {
	background-image: url('js.png')
}
```

### Output
```
	dist
	├── css
	│   └── style.css
	├── font
	│   └── Roboto-Bold.ttf
	├── img
	│   └── js.png
	├── js
	│   └── bundle.js
	│
	├── index.html

```

## Features
- use ES6+ syntax in js files
- bundle & compress js files
- bundle & compile scss files to css
- compress css files
- generate index.html
- dev server