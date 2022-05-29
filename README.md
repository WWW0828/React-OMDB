# React Code Challenge
- Weng, Yu-Hsin (Chloe)
- email: wwweng828@gapp.nthu.edu.tw
- Any comment? -> [Google Form](https://forms.gle/T6eyGiUDNdMnmDW58)
## Set up instruction
- clone this repository
```
git clone https://github.com/WWW0828/TCA-SparkAmplify.git
```
- open terminal in this project folder
```
cd [project path]
```
- install packages
```
npm install
```
- start the localhost
```
npm start
```
- Run the project with http://localhost:3000/

## How I decide which technologies to use as part of my solution
- I'm tring to make my code simple, readable, reusable and maintainable, also, I tried to avoid writing similar codes so many times.
- Home Page
    - I collect searching data like title, type and year in this page
    - after the search btn is clicked, I'll send those information to the API
    - and get the return data from it, then pass needed data(url, totalResults, text to show ...) to the search result page
- Search Results
    - since the API will only return 10 results at a time, I should also get `totalResults` from the API's return json
    - and handle user request for next page or last page
    - I maintain a state called `page` in Search Results Component, and if the user click `Next` then I fetch data from the original url + page=${page}, and show the results to the screen
- Item Detail
    - In this page I just simply show the movie's information, and make a button to let user go back to Search Results Page
- By the way, there's a demo video in this repository, for you to quickly know what I have done.

## Improvements to my submission
- RWD
    - I've only done the PC version of the app, because I didn't have enough time, and I'm really sorry about the incompleteness.
    - I've used RWD before, and I know it can let the website usable on different devices
    - So my first improvement will be using RWD to let the pages also be usable on mobile and tablet devices.
- Fix the bug of going back to home page from error page
    - For the current version, I have to click `Back to home` button twice in order to go back to home page.
    - after first click, it will fo back to the same error page, but if I click it again, it can redirect to the home page.
- Better appearance
    - After figuring out how does react work, I first started develop the features of the website, which leads to not having enough time to better its appearance.
    - The current website is designed simply, so I would like to make it more better and more friendly for the user.
- User input format checking [done in 5/30]
    - For the current version, if a user type 'a' in year's textbox, there won't pop up any alert or error
    - But we know that year should be an integer, to better my app, I'd like to check the user input format before sending it to the API. 

## What will I do differently if I were allocated more time
- In my implementation, I use button and state to change the pages.
- while I think the more standard way to switch from page to page is to use `Router`, `Route`, `Switch`, `Link` in React.
- However, after many tries, I still couldn't figure out the solution.
- I've already known how to do it if I didn't need to pass any data to the pages' component.
- But I failed in this code challenge, since I collect data in Home Page, and should pass all movies info to the Search Result Page.
- If I were allocated more time, I will try to successfully complete the pages transform feature using Route.
