var pages = [
    {
      "title"       : "About",
      "colour"      : "blue",
      "description" : "(testing deploy) About me, Connor Hillen",
      "content"     : "<p>My name is Connor Hillen and I'm a second year computer science student at" +
                      " Carleton University. Coming into my second year, I already had experience" +
                      " as a research assistant in the <a href='http://hotsoft.carleton.ca'>Hotsoft" +
                      " Labs</a> and I was the first year representative in the <a href='http://ccss.carleton.ca'>" +
                      " Carleton Computer Science Society.</a> I was then elected in as events coordinator " +
                      " for the 2014 year alongside my new position as a teaching assistant.</p>" +
                      "<p> Computer science, teaching, learning, and tinkering have always been my passions." +
                      " I originally self taught myself some simple development, having started" +
                      " when I was a young child. I moved on to reading texts, watching lectures," +
                      " and then teaching the material to the Computer Science Club that I founded" +
                      " in highschool to help those who wanted to learn but didn't have the resources" +
                      " available to them. Development isn't as much a career for me as it is" +
                      " a life style.</p>" +
                      " My hobbies have always included gaming, administration, development, and" +
                      " writing. Administration may seem like a strange hobby, but I tend to find" +
                      " myself applying my creative brain usually seen conducting a tabletop RPG" +
                      " to every day life, be it saving money on wasteful practices or completely" +
                      " questioning standards and practices and thinking hard about how they can" +
                      "  be improved upon.</p>" +
                      "<p> The reason I hold CS and development so dear is because I firmly believe that" +
                      " with a little time and support, a developer can make a serious impact on" +
                      " the world. My first experience with programming was playing a game and then" +
                      " being asked, 'Do you want to learn how to make your own?' That question has" +
                      " stuck with me.</p>"
    },
    {
      "title"       : "Resume",
      "colour"      : "red",
      "description" : "My resume/CV",
      "content"     : "I will be putting my resume here shortly. For now, check out my <a href='http://www.linkedin.com/pub/connor-hillen/82/585/6b8'> LinkedIn </a>."
    },
    {
      "title"       : "Projects",
      "colour"      : "yellow",
      "description" : "Some projects that I've done",
      "content"     : "<p>I don't have many of my personal projects up online as they were generally small"+
                      "-scale or robot programming. This is something I certainly hope to change (the lack"+
                      " of available code, not the robots). My <a href='https://github.com/connorhillen' alt='GitHub'>GitHub</a>, while"+
                      " lacking, still has some code available to browse! Here are a few projects I've worked on, code in ninja-mode or not.</p>"+
                      " <h2 class='text-yellow'>ConnorHillen.com (<a href='https://github.com/connorhillen/personal-website'>GitHub</a>)</h2>"+
                      " <span class='text-red'>Tech Used:</span> Node.js, Express.js, Jade, CSS3"+
                      " <p>This is the obvious one. This is what you're looking at right now! It started as a basic personal site"+
                      " but after a little bit of tinkering one night I ended up with a rather nice system. I'm hoping to use this"+
                      " as a way of testing tech and playing with different ways of displaying content. It's definitely not perfect,"+
                      " and there are lots of small things I want to change in the future. Some parts of it are my way"+
                      " of testing design patterns found around and seeing how they work in a real test. Code on Git!</p>"+
                      " <h2 class='text-blue'>Multi-Device, Multi-Touch Collaborative Mindmap</h2>"+
                      " <span class='text-green'>Tech Used:</span> Node.js, Express.js, Backbone.js, MongoDB, Socket.io, Handlebars.js"+
                      " <p>This was some of the research I was doing at the Hotsoft labs. I was exploring new ways"+
                      " of using web technologies to make interesting web applications with multiple users and"+
                      " how touch devices can work with them. Some cool stuff went into making mobile phones interact"+
                      " with larger screen-based applications.</p>"
    },
    {
      "title"       : "Learn",
      "colour"      : "purple",
      "description" : "Here is some learning material I've produced.",
      "content"     : "<ul class='slider'>" +

                      "<li><span class='title'>First Year CS Supplementary Information Lecture</span>"+
                      "<span class='content'><p>This is a lecture I held March 2014 alongside Eashan Singh"+
                      " and Sam Whiteley. The purpose of it was to help first year students in computer"+
                      " science learn some of the basic concepts which were glazed over in the course"+
                      " material.</p>"+
                      "<p><a href='https://docs.google.com/presentation/d/1fr89AmUEUxjbSvEzkNzZ5VsBS4HeLpVfgGagVMcr9WA/edit?usp=sharing' alt='Google Drive Presentation for First Year Assistance'>"+
                      " Click here for the slideshow!</a></p></span></li>"+

                      "<li><span class='title'>2013 First Year Transition Talk</span>"+
                      "<span class='content'><p>This is the 2013 first year transition talk in which"+
                      " we hope to get professors and upper year students to inform first year students"+
                      " of everything they need to know going into second year, from academic to social.</p>"+
                      " <p>This talk featured several guest speakers, including: "+
                      " Dr. Anil Somayaji, Dr. Pat Morin, Dr. Christine Laurendeau, Chris Cowan (3rd year), Shawn Ellis (2nd year)</p>"+
                      "<p><a href='https://docs.google.com/document/d/1U2qJjogO3d55LwT1hPeZEU8HQhKEV81ILc-WzZzVLa4/edit?usp=sharing'>"+
                      " Click here for the Google Drive document containing all notes!</a></p></span></li>"+
                      "</ul>"
    },
    {
      "title"       : "Contact",
      "colour"      : "green",
      "description" : "Some projects that I've done",
      "content"     : "You can contact me at <a href='mailto:connorhillen@gmail.com'>connorhillen@gmail.com</a>"
    },

];

var index = {
              "title"       : "Welcome",
              "description" : "Welcome to my personal website. I'll be posting resources to help students, my CV, and testing projects.",
              "content"     : "<p class='text-centre'> <span class='text-blue'>" +
                              "Computer Science</span> is being able to <span class='text-red'>change the world</span>" +
                              " with <span class='text-yellow'>some coffee</span>, a few <span class='text-purple'>all nighters,</span>" +
                              " and a <span class='text-green'>text editor.</span></p>"
            };

exports.pages = pages;
exports.index = index;
