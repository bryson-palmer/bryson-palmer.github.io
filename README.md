# **Hello and welcome to my portfolio!**
This is the first project that I've put together outside the completion of my Full Stack Web Dev bootcamp from the **University of Washington**. Although I did not do this for a class assignment, I still had direction from my program's career materials experts and various internet resources. Major inluences for this project were **Beck's** `Hyperspace: A.I. Exploration` of our solar system and `Taylor Ho's` portfolio. Here I thought I would take the opportunity to unpack the process I went through and the resources I used. I look forward to using my new skill set to contribute to the future. Thank you for visiting my GitHub.

<a id="toTop"></a>

## **Process**

### **Table of Contents**
  [Research](#research) </br>
  [Landing Page](#landingPage) </br>
  [Work](#work) </br>
  [Contact](#contact) </br>
  [About](#about) </br>
  [Boring Stuff](#boringStuff) </br>
  [Conclusions](#conclusions) </br>
  [Challenges](#challenges) </br>
  [Future Plans](#futurePlans) </br>
  [Resources](#resources) </br>

### **<a id="research" >Research</a>**
Seeing as how I didn't get to making my `React` portfolio in bootcamp, I made it my priority project right after. The first thing I did was google `What to include in my web developer portfolio`. That's were I found *toggle's* [8 Tips to Build an Outstanding Web Developer Portfolio](https://toggl.com/blog/web-developer-portfolio). I went through all of their tips and took some notes. They had an example portfolio by [Taylor Ho](http://taylorkmho.com/about.html) that I found very inspiring. I now had my mental vision for what I wanted to see and how I wanted my portfolio to behave. I was happy not be constrained by an assignment time frame and to really dig into React.

At this point, I already knew I was going to have two or more pages in my portfolio so using GitHub pages was not going to work for me. I also knew that I wanted to use Material-UI for styling my portfolio. I've heard good things about this UI framework and I wanted to explore something beyond Bootstrap.

### **<a id="landingPage" >Landing Page</a>**
My next step took me to youtube where I searched for `how to make a landing page using material ui`. That's where I found the tutorial by [Daily Web Coding](https://www.youtube.com/watch?v=rK0Lz8x7npA). I created my React portfolio here with the tutorial and followed till the end. I learned of some very valuable npm packages and techniques. 
* First, the tutorial showed me how to import and use the `makeStyles` from MUI's core library. I used this in every component avoiding an acutal css file for styles. I can see arguments for separating styles into their own files, but in this case, I really liked this set up. 
* Next, I installed `react-scroll` and `react-visibility-sensor`. I love these packages and used them throughout my portfolio! The scroll package I used to help smoothly scroll to my work and contact components. The VizSensor package helped me with the effect of having the component disapear after scrolling away from a specified point and reappear after scrolling back to a specified point. This was the behavior I saw in Taylor Ho's portfolio and what I wanted my portfolio to do as well. Adding in the `collapse` and `fade` from MUI's component API and my portfolio was coming along nicely. All of these effects were cultivating some really cool movement. 
* The last thing I picked up from this tutorial was the use of a `custom hook` to get the user's screen height. I modified the one I got from the tutorial to better suit my needs by getting both the height and the width of the user's screen. This really came in handy later when I was conditionally rendering styles inline when in mobile screen sizes.

This eventually became my header component. Part of me wanted to recreate what Taylor Ho did with his background/hero gif/image, because it's really cool, but I knew I would have to come up with something of my own. After thinking about what made his portfolio feel and look awesome while also being inspired by the music and imagery from **Beck's** Hyperspace album with A.I. exploration from NASA, I decided to explore my love for space. Here I had a lot of fun experimenting with css properties like `backgroundBlendMode`, `transform`, and `border` properties to make the overlapping triangles. I wanted something modern and retro. Something you could read as little into or as much as you wanted to in the work. It has a feel.

### **<a id="work" >Work<a>** [☝️](#toTop)
The next component that I needed to tackle was the work and projects section. The layout for this section was inspired by Taylor Ho's. I created a header of text here but I also added in text buttons to make it more interactive and dynamic. For example, the info icon next to MERN shows a MUI `snackbar` component API. This is a little pop out modal that explains to non technical users what a MERN developer is. I also added in the `react-clock` npm package so when a user clicks on the word interactive an old round clock face shows up. I did this because I'm still getting use to adding/using npm packages for React and to create a little Easter egg for the user.

The next section of the work component is for all of my project cards. I went with a grid system layout up until iPad Pro screen size and then conditionally (remember that custom hook?) turned it into a carousel using the `react-items-carousel` npm package. Each project card has a background image of the milkyway by [Felix Wegerer](https://unsplash.com/photos/Gi1kD265cdw) with a title of the project. When a user hovers over a card, it reveals a new background image of the project with a `backdrop` of my role and responsibilities. Here the user should click for more details. I added this backdrop to make it more clear what the user should expect if they click on a project card.

If a user clicks on a project card, they are taken to a full screen `backdrop` with a carousel of project images, demo account log in information (if applicable), project title, app description, concepts used, technologies used, and links to the app and the GitHub. I picked up most of my tech icons from [iconfinder](https://www.iconfinder.com/).

I made all the components responsive for every screen size on google chrome dev tools and iPhone 12 Pro but the work component had the most complexity and I'm very proud of how it all turned out. It's by far the biggest component in my portfolio.

### **<a id="contact" >Contact<a>** [☝️](#toTop)
Here I wanted to add in sort of a personal banner to separate my work from my contact links. I was inspired by the retro borders used in `The Guardians of the Galaxy Vol.2` end credits. So I added three borders and colors. I played around with different sizes but nothing was as appealling as the 1px size that I used. I accidentally pushed an inner border out and created an interesting effect and decided to refine it and keep it. 

I then reused the hero image for the background and added my profile picture that my wife took. Trying to recreate Taylor Ho's profile image, I had asked her to set up some lighting so I could get a really bright outline and a dark center. We then used lightroom and photoshop to style and cut out the image. It was by happenstance in googling background css properties that I came across `backgroundAttachment`. I have the backgroundAttachment of the profile picture conditionally rendered so that when on desktop, the image drops down into the contact component from the top as you scroll down. I thought it was quite clever and added it to my space theme but it wouldn't work on touch screens. So I had to change it from `fixed` to `local` starting at iPad Pro screen size. 

I used that line "`Let's  build the future`" becauase that's really what I'm interested in doing with my new set of skills. Plus, it gels well with the space theme.

### **<a id="about" >About<a>** [☝️](#toTop)
Since I made my contact and footer components reuseable, I now needed to make my bio and skills section for my about page. This was a very quick page to set up. I reused the header component as well, minus the welcome text, to keep the same feel in pages. I simply dropped my `brand statement`, `technical skills`, and `transferable skills` into an over flow container and made it scrollable. I also felt the need to add in a `life experience conclusions` list so I could share a bit more about myself.

At first I was going to make my about text use the **Star Wars** opening credits crawl but in the end I decided it would be too much visually and let it go. There are some great resources out there for this effect and I may use it on another project. Perhaps I could create a crawl mode so the user would be able to choose between viewing planes. 

I dropped my other image of myself, floating head in the bubble, so a user could really see my face. That pretty much wrapped up any component work I had left. It was starting to feel complete but I wasn't out of the woods yet.

## **<a id="boringStuff" >Boring Stuff</a>** [☝️](#toTop)
* I went back and <span style="color: #ffff99">optimized</span> every image in my assets folder to cut file size. 
* I also went in and used <span style="color: #ffff99">Format Document</span> in all of my files just to make sure I was using best indentation practices.
* Since I wasn't using GitHub pages, I deployed with `Heroku`. One down side to using Heroku, is that the app goes to sleep after 30 minutes of inactivity and goes to sleep for 6 hours in a 24 hr period. I didn't like how long it took for my portfolio to wake up so I knew I needed to find a work around, and I did. I read a blog that introduced me to [cron-job.org](https://cron-job.org/en/). All I had to do was:
  * Create a server and add a simple `GET` route to my `"/"` page in my app. I had to move my current react portfolio into a client folder to keep file structure standard. 
  * Set up an account at [cron-job.org](https://cron-job.org/en/).
  * Then I had to create a new cron job
  * I had to fill in the name of the app and the URL of my `GET "/"` route.
  * Then select User-defined in the schedule section.
  * Select all options for `Days of month`, `Days of week`, and `Months`.
  * Then select hours `7-23` (app has to sleep from 0-6hrs with free Heroku).
  * Then select minute `0` and `30` from the list. This will automatically ping my apps' `GET` route every 30 minutes for the hours of awake time ensuring a quick load and preventing my app from going to sleep. 
  * Lastly, select create cronjob.

All of these steps really cleaned up my code, reduced file size, and created a better user experience by virtue of not having to wait for the app to wake.

## **<a id="conclusions" >Conclusions</a>** [☝️](#toTop)
Every step of this was a learning experience. I listened to a ton of great music. I stayed up late at times. I scoured the internet for images, videos, icons, npm packages, and information. I really wanted to have fun with this and I think it shows. Web development is exciting. I know where I'm at with my skills and I know where I'm not. I'm on a journey. My journey. I'm ok with that. I'm exploring. Creating. Getting experience. I am truly excited to build for the future.

## **<a id="challenges" >Challenges</a>** [☝️](#toTop)
I originally wanted a video background (like Talyor Ho's about me section) with text flowing over the top of it. I was going to use the song and video "`Die waiting`" from **Beck's** album. The album had been in heavy rotation for this project and I wanted to capture that vibe for my portfolio. I tried using several npm packages and vanilla java script to implement this song's video of A.I. from NASA about the sun with no avail. It was poetry in space. It was perfect but it didn't work out. I wasn't sure I could even use the song/video. I wasn't sure how to make it auto start and repeat so you didn't see the pesky youtube ads. I couldn't make it the viewport size I wanted. It was taking up too much time. This is one thing I had to let go of and move on.

## **<a id="futurePlans" >Future Plans</a>** [☝️](#toTop)
* I will spend some more time running `lighthouse` in google dev tools to identify any performance and accessibility issues.
* I would also like to explore using a `skeleton` component from MUI with a shimmer effect on app load. </br>
These fixes would all add to a better user experience and meet modern user expectations. </br>
* During the course of this project I became aware of the `Three.js` 3D library and I look forward to exploring depth and perspective more. </br>I can see some powerful web user experience using this library.
* I also have ambitions to create a project using the `frosted glass` effect and `neumorphism` design. </br>
All are different looks but have very useful and beautiful applications in modern web development.

## **<a id="resources" >Resources</a>** [☝️](#toTop)
* Floating head and profile picture by `Lindsay Palmer (wife)`.
  * `Tools:` Camera D850, Lens Nikon 85mm, Lighting MOUNTDOG lighting kit, photoshop, lightroom.
* Portfolio guidance from [8 Tips to Build an Outstanding Web Developer Portfolio](https://toggl.com/blog/web-developer-portfolio).
* Portfolio inspiration from [Tayler Ho Portfolio](http://taylorkmho.com/about.html).
* Landing page using React and Material UI tutorial by [Daily Web Coding](https://www.youtube.com/watch?v=rK0Lz8x7npA) from youtube.
* Star image (project cards background) by [Felix Wegerer](https://unsplash.com/photos/Gi1kD265cdw) from unsplash.
* React UI framework was [Material-UI](https://material-ui.com/).
* Most tech icons found from [iconfinder](https://www.iconfinder.com/) others by individual google search.
* I used the color picker over at **Mozilla's** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool).