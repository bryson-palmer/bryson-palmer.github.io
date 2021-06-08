import { v4 as uuidv4 } from 'uuid';

// Work Details
const WorkData = [
    {
        key: uuidv4(),
        title: "Progressing",
        description: "A goal tracking MERN app with simple design. We help the user define their goal, break it down into milestones, and give back a dashboard of useful information.",
        concepts: "",
        src: ["assets/progressing1.png", "assets/progressing2.png", "assets/progressing3.png"],
        url: "https://progressing-pod10.herokuapp.com/",
        git: "https://github.com/JJHPhoto/progressing",
    },
    {
        key: uuidv4(),
        title: "SongBirdie",
        description: "A personal songbook app. It’s mobile. It’s stored on-line. Never lose another songbook.",
        concepts: "Full stack app using MySQL, hanldebars, and utilizing a passport user authentication strategy.",
        src: ["assets/songbirdie1.png", "assets/songbirdie2.png", "assets/songbirdie3.png"],
        url: "https://song-birdie.herokuapp.com/",
        git: "https://github.com/bryson-palmer/song-bird",
    },
    {
        key: uuidv4(),
        title: "Trick Trivia",
        description: "Trick Trivia pits your wits against a diverse range of trivia questions accompanied by a GIF. You can customize the game and get some laughs, too!",
        concepts: "",
        src: ["assets/tricktrivia1.png", "assets/tricktrivia2.png", "assets/tricktrivia3.png"],
        url: "https://tomakpo.github.io/UWCB-P1-Trick-Trivia/",
        git: "https://github.com/ToMakPo/UWCB-P1-Trick-Trivia",
    },
    {
        key: uuidv4(),
        title: "BJJ's Burgers",
        description: "Tap out your hunger with the classic Americana or go big with Tripple Flying Triangle. At BJJ's Burgers we grapple with only the freshest ingredients. All you have to do is bump, slap, and tap that burger.",
        concepts: "Follows the MVC paradigm using handlebars and a custom ORM for CRUD operations.",
        src: ["assets/bjjsburgers1.png", "assets/bjjsburgers2.png", "assets/bjjsburgers3.png"],
        url: "https://bjjs-burgers.herokuapp.com/",
        git: "https://github.com/bryson-palmer/burger",
    },
    {
        key: uuidv4(),
        title: "Budget Buddy",
        description: "This straight forward budget app is set up to be used even if you don't have access to the internet.",
        concepts: "A PWA that follows an MVC paradigm using mongoose as the ODM for CRUD operations.",
        src: ["assets/budgetbuddy1.png", "assets/budgetbuddy2.png", "assets/budgetbuddy3.png"],
        url: "https://budget-buddy-web-app.herokuapp.com/",
        git: "https://github.com/bryson-palmer/budget-buddy",
    },
    {
        key: uuidv4(),
        title: "My Fitness Chart",
        description: "This app charts your last seven workout routines using different interactive graphs. It keeps track of total time, total weight, duration of each excercise, and weight lifted per exercise. This visual representation is a fun way to keep tabs on your workouts.",
        concepts: "",
        src: ["assets/myfitnesschart1.png", "assets/myfitnesschart2.png", "assets/myfitnesschart3.png"],
        url: "https://my-fitness-chart.herokuapp.com/",
        git: "https://github.com/bryson-palmer/fitness-tracker",
    },
    {
        key: uuidv4(),
        title: "Weather Bug",
        description: "A basic weather app that gives you the current weather and a five-day forcast. It's set up in dark mode. It's also searchable by any city name in the world. It saves your searches in a drop down menu for quick access.",
        concepts: "",
        src: ["assets/weatherbug1.png", "assets/weatherbug2.png", "assets/weatherbug3.png"],
        url: "https://bryson-palmer.github.io/weather-dashboard/",
        git: "https://github.com/bryson-palmer/weather-dashboard",
    },
    {
        key: uuidv4(),
        title: "Riddles in the Dark",
        description: "Inspired by the Hobbit, ch.5 Riddles in the Dark, by J.R.R. Tolkien. The game of riddles between Bilbo and Gollum turned into a trivia game. Join the ranks of other middle earthers who have made it through the challenge.",
        concepts: "",
        src: ["assets/riddles1.png", "assets/riddles2.png", "assets/riddles3.png"],
        url: "https://bryson-palmer.github.io/RIDDLES-IN-THE-DARK/",
        git: "https://github.com/bryson-palmer/RIDDLES-IN-THE-DARK",
    },
];

export default WorkData;