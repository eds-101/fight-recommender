# Fight Recommender
Demo React Native project which recommends fighters to watch, based on their volume of knockout and submission wins. For this project I was keen to explore a personal interest and use some of the latest technologies.

## Progress to date
- I have successfully built a screen with "fun fighters" based on an Apollo query to a mock DB.
- Next steps are to build a functional GraphQL endpoint to query and add additional features.

<img src="/assets/screenshot.png" height="400px">
<!-- ![Grappitude v2 Gif](https://github.com/eds-101/
fight-recommender/blob/assets/screenshot.png) -->

Key technologies used:
- GraphQL
- Apollo Client
- React Native
- Python & BeautifulSoup (Web scraping) to get data from Wikipedia

# How to install and run the program:

Clone the directory
```sh
$ git clone git@github.com:eds-101/fight-recommender.git
```
Use your terminal, navigate to root of this project root folder and run the following commands
```
$ yarn
$ node server/index.js
```
Open a second terminal for the client in root directory
```
$ expo start
i
```
Pressing i will open the app via the iOS simulator

More details and planning in this short doc: https://www.notion.so/UFC-Fight-Focus-V1-Planning-3336b33cec2045c29a1629f82222b9c9
