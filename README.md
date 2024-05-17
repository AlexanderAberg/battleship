# Battleship

Battleship is a game based on the board game.
In the board game you have two boards with 10x10 squares and you will try to hit the enemies 5 different ships before they hit yours, but this game will not be on that level yet.

<img src="assets/images/amiresponsive.png" alt="Responsive Screens">

# UX
### Visitor Goals
The expected visitor is:
- Visitors that likes the Battleship and want to play it online.
- Visitors that want to try different classic board games.
- Visitors that wants to play this game in particular no matter if they played it before or not.

Visitors goals are:
- See pictures and information about colourful tea and get inspired.
- To see what exists in the world of tea.
- Contact the people behind the website.

How Battleship fills the needs:
- You can play the game on the website.
- You can read the instructions on the page if you are new to the game.
- You will in the future be able to follow scores and how many ships left.
- Even if the game is simplified will the real experience come later.


### Business Goals
The Business Goals are:
- To make a well known game.
- Get in touch with other tea drinkers that are not satisfied with your normal tea.
- If enough people will be aware the bigger chance that you will find the more rare tea in your city.

### User Stories
1. As a board game player I want to be able to play them online.
0. I expect to have a functioning game with feedback.
0. If I don't know the game I expect to find out how to play.


### Existing Features

- __Page__
  - There is only one page with everything in it to make it simple for the user.

<img src="assets/images/header.png" alt="Header">

- __Board__
  - You can see a 10x10 board that you can play on.



### Features Left to Implement

- There is many features that is currently commented out because they are not done yet.
- You will in the future be able to have a second board where you can place your own ships that the enemy will attack.
- In the future you will have normal sized ships instead of the current 1 square ships.
- In the future there will be a victory board where you an see wins and defeats plus have a start button so you don't need to refresh the page to restart the game.
- Will be a ships board where you can see ships to place and also where you will be able to se sunken ships for both you and the enemy.

## Testing 

I have tested all links and buttons including navbar and they all work, the form also work and requires an email in email field, one of the radio buttons and the name fields filled in, but checkbox is optional.
I have tested on Chrome, Firefox and Edge without a problem, checked on many different sized from about 280p to 2000 px wide and 400px to about 2000 px high and didn't find any problems with the responsiveness.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Falexanderaberg.github.io%2FDifferent-Coloured-Tea%2Findex.html) Also checked About Tea and Contact Us pages without any errors.
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Falexanderaberg.github.io%2FDifferent-Coloured-Tea%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv) it got validated as CSS Stage 3 +SVG!

<img src="assets/images/validator-index.html.png" alt="Validator Index.html">
<img src="assets/images/validator-about-tea.html.png" alt="Validator About Tea.html">
<img src="assets/images/validator-contact-us.html.png" alt="Validator Contact Us.html">
<img src="assets/images/validator-style.css.png" alt="Validator Style.css.html">

### Unfixed and fixed Bugs

- Solved all known bugs, except for the blue background behind the submit button in the form on the Contact Us page on phones (tested on iPhone 13 Pro), it looks correct in Google Dev Tools.
- I Had some issues with fixing the header and did it with the help of a tutor same thing with photos on larger screens which you can see in the css.
- I did much trial and error with forms, pictures, header and footer and went through many colours on About Tea until my mentor suggested that I use the tea colour as background which made it possible to have text and background fit together better, I also did choose black as background for menu bar and contact form, the contact form I still wanted to see the background through which I sorted with the help of opacity.
- I also got some help from my slack team for the header.

- I would say that the header is by far what I had biggest problems with and the responsivness on larger screens for images on home.

### Quality Score through Google Devtools Lighthouse

- Lighthouse testing on Chrome Incognito to prevent cookies and background cache to slow down.

<img src="assets/images/lighthouse-index-phone.png" alt="Lighthouse Index Phone">
<img src="assets/images/lighthouse-index-computer.png" alt="Lighthouse Index Computer">
<img src="assets/images/lighthouse-abouttea-phone.png" alt="Lighthouse About Tea Phone">
<img src="assets/images/lighthouse-abouttea-computer.png" alt="Lighthouse About Tea Computer">
<img src="assets/images/lighthouse-contactus-phone.png" alt="Lighthouse Contact Us Phone">
<img src="assets/images/lighthouse-contactus-computer.png" alt="Lighthouse Contact Us Computer">


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
  - You can either copy the link for Code or Open in a new repository or see the live version under Deployment to the right under github-pages.
  - In GitHub you can open every seperate file including html. css. images and even favicons and see the folder structure.
  - It is possible to check the commit history in github-pages under Deployment to the right

  - Link to the live version of the project can be found here: - https://alexanderaberg.github.io/battleship/ and to the gitHub page here : https://github.com/AlexanderAberg/battleship


## Credits 

Favicon from  <a href="https://www.freepik.com/icon/battleship_7445202#fromView=search&page=1&position=24&uuid=1fab3cff-7977-4766-8a3e-e89762b82c90">Icon by Umeicon</a> and generated through https://favicon.io/favicon-converter/ 

- Boards are created with the help of tutorial from W3schools, https://www.w3schools.com/css/css_grid.asp https://www.w3schools.com/css/css_grid_container.asp and https://www.w3schools.com/css/css_grid_item.asp.
- The Tutor Roman helped me with the grid, it is mainly my own code but with his help.
- Got help from Alex C on our Slack Team Group with the ships.
- Template for this README is taken from my previous project Different Coloured Tea that in term got its template from Love Running and my mentors P1.
- Got inspired and used/reused some code from https://codepen.io/patrycja-b/pen/EWRywX and https://www.youtube.com/watch?v=Ubh_k18sX4E&ab_channel=CodewithAniaKub%C3%B3w 


### Content 

- I know since before how you are supposed to play the game, so the information and thought behind it is from how I used to play it as a child.
- Html and css was taken from the Code Institute education, big part from Love Running, Coders Coffeehouse and their Tutors, some parts related to the grid was taken from W3schools 3 part gridsection at this page https://www.w3schools.com/css/css_grid.asp and the following 2 pages.
- JavaScript was taken from the Code Institute education and the project Love Maths, but also used/got inspired by code from https://codepen.io/patrycja-b/pen/EWRywX and https://www.youtube.com/watch?v=Ubh_k18sX4E&ab_channel=CodewithAniaKub%C3%B3w 

### Media

- Favicon is from https://www.freepik.com/icon/battleship_7445202#fromView=search&page=1&position=24&uuid=1fab3cff-7977-4766-8a3e-e89762b82c90 and converted from https://favicon.io/favicon-converter/ 
- Responsive mockup from https://ui.dev/amiresponsive?url=https://alexanderaberg.github.io/Different-Coloured-Tea/ 

### Wireframe

- Used Balsamiq for Wireframe, the Wireframe has some content that is missing in the project because of lack of time, see also Features Left to Implement in this README, also the wireframe is not to scale especially computer.

<img src="assets/images/wireframe-phone.png" alt="Wireframe for Phone">
<img src="assets/images/wireframe-tablet.png" alt="Wireframe for Tablet">
<img src="assets/images/wireframe-computer.png" alt="Wireframe for Computer">

### Technologies Used

- HTML - For how the website with the pages is built and planned 
- CSS - For all the styling
- Images  - Freepik for Pictures except for purple tea that I got from bluetea mentioned in media
- Fonts - From Google Fonts
- Icons - From Fontawesome 
- Education Tool- From the people at Codeinstitute
- Wireframe - From Balsamiq 
- Favicons - Icon from freepik and converted with Favicon.io
- Mockup - Generated at amiresponsive 
- Colours I mostly tested what fit together and got help from Lighthouse in Google dev tools to see if I should adjust further 
- Google Devtools to check responsiveness and to check Lighthouse for Accessibility
- GitHub for storing the project and deploying it
- Gitpod for project development

### Colours & Text

- Did choose dark colours for header, footer, menu etc. to fit with the pictures and wanted the background of the h2 in Home and the form in Contact Us to have opacity so you can see through without covering the images completely.
- The colour for About Tea is pastel colour to make it friendlier to the eyes compared to sharp colours, the white and black doesn't really exist as pastel so I tried to make them friendlier also which you can see on the colours and in the css picture below.
- Used Font style that is seperate between the logo, h1 and h2 compared to h3 and text with backup font for browsers without the font, the text colour in general is supposed to fit very well with the background colours that is why the background colour for tea has white text except for black that instead has white text.

<img src="assets/images/colours.png" alt="Pastel Colours">
<img src="assets/images/colours.png" alt="Pastel Colours">