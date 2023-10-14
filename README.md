# 2022 Coding Challenge from SparkAmplify, Inc
- Yu-Hsin Weng
- email: yuhsin1614@g.ucla.edu
- Skills: HTML5, CSS, Javascript, React.js, Call API, Data Analyze

## Overview
- This project contains the following 3 pages that were built with React:
    - A "Home" page
    - A "Search result" page
    - A "Item detail" page
- The pages are also usable on mobile and tablet devices.

### "Home" Page
- Refer to the [screens/home.png](./screens/home.png) screen.
- This is the `index.html` screen that displayed 2 tiles, which link to the "Series" page and the "Movies" page.

### "Search result" and "Item detail" Pages
- Refer to the [screens/search-result.png](./screens/search-result.png) and [screens/item-detail.png](./screens/item-detail.png) screens.

- Fetched data from [OMDB API](http://www.omdbapi.com/)
- Also handled the loading and error states, of fetching the JSON feed:
    - "Loading" state [screens/loading.png](./screens/loading.png)
    - "Error" state [screens/error.png](./screens/error.png)

### Project Demo
https://github.com/WWW0828/React-project/assets/67411184/2385b4a6-862f-437b-98be-b9358d50c14b

## Set up instruction
1. clone this repository: `git clone https://github.com/WWW0828/React-project.git`
2. open terminal in this project folder: `cd [project path]`
3. install packages: `npm install`
4. start the server: `npm start`

## References
- [React](https://facebook.github.io/react/)
- [OMDB API](http://www.omdbapi.com/)
