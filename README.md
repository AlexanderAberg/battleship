# Battleship

Battleship is a game based on the board game.
In the board game you have one board with 10x10 squares and you will try to hit the enemies 5 different ships before you are out of chances.

<img src="assets/images/amiresponsive.png" alt='Responsive Screens'>

# UX
### Visitor Goals
The expected visitor is:
- Visitors that likes the Battleship and want to play it online.
- Visitors that want to try different classic board games.
- Visitors that wants to play this game in particular no matter if they played it before or not.

Visitors goals are:
- Be able to play Battlefield.
- Keep track on how many victories and defeats.
- Contact the people behind the website.

How Battleship fills the needs:
- You can play the game on the website.
- You can read the instructions on the page if you are new to the game.


### Business Goals
The Business Goals are:
- To make a well known game.
- To get people interested in the game

### User Stories
1. As a board game player I want to be able to play them online.
0. I expect to have a functioning game with feedback.
0. If I don't know the game I expect to find out how to play.


### Technologies Used

- HTML - For how the website with the pages is built and planned 
- CSS - For all the styling
- JS - For the game to function as a game including its logic
- Fonts - From Google Fonts
- Education Tool- From the people at Codeinstitute and W3 School
- Wireframe - From Balsamiq 
- Favicons - Icon from freepik and converted with Favicon.io
- Mockup - Generated at amiresponsive 
- Colours I wanted to have colours that fit the old military style and therefore is pretty boring, I used Coolors to create my palette but did experiement by myself for my choices 
- Google Devtools to check responsiveness and to check Lighthouse for Accessibility
- GitHub for storing the project and deploying it
- Gitpod for project development

### Colours & Text

- The colours are chosen to be clear so it is easy to see and bland to fit the military setting of the game, while the board is blue because the ocean is blue.
- The text is supposed to be easy to understand and decently plain to also fit with the mi,itary setting of the game.
- I used a font that I think fit for a historic background which the game has both from being from around WWI and that the warfare is very before GPS, radars and satelites.

<img src="assets/images/battleship-palette.png" alt="Colour palette">
### Existing Features

- __Page__
  - There is only one page with everything in it to make it simple for the user.

<img src="assets/images/phone-image.png" alt='Looks on phone'>


- __Board__
  - You can see a 10x10 board that you can play on, it will be coloured red if you hit a ship and black if you miss.
  
  <img src="assets/images/board.png" alt='board with 2 squares attacked, one of them with a ship'>


### Features Left to Implement

- You will in the future be able to have a second board where you can place your own ships that the enemy will attack.
- Will be a ships board where you can see ships to place and also where you will be able to se sunken ships for both you and the enemy.

## Testing 

- You can play the game in Chrome, Firefox, Edge and on iPhone in the same way without any other errors.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Falexanderaberg.github.io%2Fbattleship%2F).
- CSS
  - No errors when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Falexanderaberg.github.io%2Fbattleship%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv) it got validated as CSS Stage 3 +SVG.
- JS
  - No errors was returned for JS, but 16 warnings when passing through the official [(Jigsaw) validator](https://jshint.com/).


<img src="assets/images/validator-html.png" alt='Validator html'>

<img src="assets/images/validator-css.png" alt='Validator css'>
<img src="assets/images/validator-js.png" alt='Validator js'>

### Unfixed and fixed Bugs

- With the help of the validator did I notice some small issues that I fixed.
- I got help with some bugs by mentor, slack and tutor.

### Quality Score through Google Devtools Lighthouse

- Lighthouse testing on Chrome Incognito to prevent cookies and background cache to slow down.

<img src="assets/images/lighthouse-phone.png" alt='Lighthouse  Phone'>
<img src="assets/images/lighthouse-desktop.png" alt='Lighthouse  Computer'>


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
  - You can either copy the link for Code or Open in a new repository or see the live version under Deployment to the right under github-pages.
  - In GitHub you can open every seperate file including html. css. images and even favicons and see the folder structure.
  - It is possible to check the commit history in github-pages under Deployment to the right

  - Link to the live version of the project can be found here: - https://alexanderaberg.github.io/battleship/ and to the gitHub page here : https://github.com/AlexanderAberg/battleship

### Wireframe

- Used Balsamiq for Wireframe, the Wireframe has some content that is missing in the project because of lack of time, see also Features Left to Implement in this README, also the wireframe is not to scale especially computer.

<img src="assets/images/wireframe-phone.png" alt='Wireframe for Phone'>
<img src="assets/images/wireframe-tablet.png" alt='Wireframe for Tablet'>
<img src="assets/images/wireframe-computer.png" alt='Wireframe for Computer'>


### Content 

- I know since before how you are supposed to play the game, so the information and thought behind it is from how I used to play it as a child.
- Html and css was taken from the Code Institute education, big part from Love Running, Coders Coffeehouse and their Tutors, some parts related to the grid was taken from W3schools 3 part gridsection at this page https://www.w3schools.com/css/css_grid.asp and the following 2 pages.
- JavaScript was taken from the Code Institute education and the project Love Maths, but also used/got inspired by code from https://codepen.io/patrycja-b/pen/EWRywX and https://www.youtube.com/watch?v=Ubh_k18sX4E&ab_channel=CodewithAniaKub%C3%B3w 

### Media

- Favicon is from https://www.freepik.com/icon/battleship_7445202#fromView=search&page=1&position=24&uuid=1fab3cff-7977-4766-8a3e-e89762b82c90 and converted from https://favicon.io/favicon-converter/ 
- Responsive mockup from https://ui.dev/amiresponsive?url=https://alexanderaberg.github.io/battleship/ 

## Credits 

Favicon from  <a href="https://www.freepik.com/icon/battleship_7445202#fromView=search&page=1&position=24&uuid=1fab3cff-7977-4766-8a3e-e89762b82c90">'Icon by Umeicon'</a> and generated through https://favicon.io/favicon-converter/ 

- Boards are created with the help of tutorial from W3schools, https://www.w3schools.com/css/css_grid.asp https://www.w3schools.com/css/css_grid_container.asp and https://www.w3schools.com/css/css_grid_item.asp.
- The Tutor Roman helped me with the grid, it is mainly my own code but with his help.
- Got help from Alex C on our Slack Team Group with the ships and also got some other suggestions on slack.
- Help and guidance from Ioan Zaharia from my team, here is his GitHub if you want to know who he is or contact him: https://github.com/zioan.
- My mentor Rory Patrick has been much help with suggestion and ideas.
- Template for this README is taken from my previous project Different Coloured Tea that in term got its template from Love Running and my mentors P1.
- Got inspired and used/reused some code from https://codepen.io/patrycja-b/pen/EWRywX and https://www.youtube.com/watch?v=Ubh_k18sX4E&ab_channel=CodewithAniaKub%C3%B3w 