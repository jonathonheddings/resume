function viewModel() {
    this.firstName = "Jonathon";
    this.lastName = "Heddings";
    this.fullName = this.firstName + " " + this.lastName;

    this.phone = "";
    this.email = "";
    this.github = "github.com/jonathonheddings";
    this.website = "jonathonheddings.github.io/resume";

    this.sections = [{
            header: ["Employment"],
            subsections: [{
                    header: [
                        "Freelance Editor//Social Media Administrator",
                        "At How-To-Geek LLC",
                        "July 2019 - Present",
                        "Website: https://www.reviewgeek.com/author/jonathonheddings/"

                    ],
                    bullets: [
                        "Written 40+ articles on consumer products and various techy things for a popular consumer website.",
                        "Managed Amazon Syndication for hundreds of consumer articles partnered with Amazon.com and moderated social media groups for ReviewGeek.",
                        "Managed Community Outreach Online Groups for the brand."
                    ]
                },
                {
                    header: [
                        "Assistant Manager Domino’s Pizza LLC",
                        "August 2016 - August 2019",
                    
                    ],
                    bullets: [
                        "Managed a group of 10 to 20 employees depending on the year, that included hiring, training, and day to day activities.  ",
                            "Managed inventory, food and labor costs, kept track of our profit and loss statements, and implemented policies to correct problems",
                            "Learned how to spin pizzas with just one hand"
                    ]
                },
                
                {
                    header: [
                        "Economics Internship",
                        "Virginia's Gateway Region",
                        "March 2021 - June 2021"
                    ],
                    bullets: [
                        "Created multiple high quality maps using ArcGIS Pro and shapefiles of Virginia's highways, interstates, and counties.",
                        "Analyzed multiple Economic Impact Reports done on infrasture projects undertaken throughout the Economic Development Region"
                           
                    ]
                },
               
                
            ]
        },
        {
            header: ["Education"],
            subsections: [{
                    header: [
                        "Virginia State University",
                        "Fall 2018 - May 2021"
                    ],
                    bullets: [
                        "Graduated with a Bachelor of Science in Economics, Summa Cum Laude",
                        "Vice President of Computer Science Student Advisory Board"
                    
                    ],
           
                },
                {
                    header: [
                        "Alexandria, VA",
                        "Thomas Jefferson HS for Science and Technology",
                        "2009 - 2013"
                    ],
                    bullets: [
                        "4.14 GPA",
                        "Ranked the best public high school in the nation by US news from 2007-2013"
                    ]
                }
            ]
        },
    ] 
        /*{
            header: ["Prominent Projects"],
            subsections: [{
                    header: [
                        "Arkmo",
                        "Spring 2018"
                    ],
                    bullets: [
                        "Won the $4000 prize at Bitcamp 2018 for best use of blockchain",
                        "A system built on top of ARK coin, used to safely send cryptocurrency to other users. Doing so requires that the receiving user verifies the transaction, ensuring that money isn't accidentally sent into a non-existent address"
                    ]
                },
                {
                    noPrint: true,
                    decorators: {
                        icon: "github",
                        url: "https://github.com/asakaplan/Bitcamp2017"
                    },
                    header: [
                        "FinProp",
                        "Spring 2017"
                    ],
                    bullets: [
                        "Won <a href='https://devpost.com/software/financial-ethics-propagator'>2nd place</a> for Finra challenge at Bitcamp 2017",
                        "Uses machine learning to discover circles of corruption among financial adviors based on publicly available data"
                    ]
                },
                // {
                //     decorators: {
                //         icon: "github",
                //         url: "https://github.com/quarkw/resume"
                //     },
                //     header: [
                //         "Resume",
                //         ""
                //     ],
                //     bullets: [
                //         "Built using Knockout.JS", [
                //             "~Printer friendly!",
                //             // "Fills in info from JSON",
                //             // "Github pages friendly (simple html/js/css)"
                //         ]
                //     ]
                // },
                {
                    header: ["Personal Life Hacks"],
                    bullets: [
                        "Created script to watch full-classes and auto-register when a space opens up",
                        "~Created a browser extension to integrate ratemyprofessor into class scheduling system",
                        ["~Ability to filter sections to only those taught by professors above a certain rating"],
                        "Created a Twilio app for my apartment callbox so I can access my apartment building if I don't have my key fob and phone"
                    ]
                },
                {
                    noPrint: true,
                    decorators: {
                        icon: "github",
                        url: "https://github.com/johnheng/Myo"
                    },
                    header: [
                        "Myo Theremin",
                        "September 2014"
                    ],
                    bullets: [
                        "MIDI synthesizer using the Myo motion control band", [
                            "Won 2nd place overall, and won award for most innovative project"
                        ]
                    ]
                },
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/quarkw/operating-system-simulator"
                    },
                    header: [
                        "Operating System Simulator",
                        "Fall 2016"
                    ],
                    bullets: [
                        "Operating System Simulator built in Java", [
                            "Implements a multi-level priority queue",
                            "Simulates virtual memory/swapping",
                            "~Implementation of 'cat' for JavaFX based CLI",
                            "~Features adjustable simulation speed"
                        ],
                        "Received a 105% in the class when the average and median were both less than 73%"
                    ]
                },
            ]
        },
        {
            noPrint: true,
            header: ["Leadership"],
            subsections: [{
                    header: [
                        "RamHacks Organizer",
                        "Spring 2016 - Spring 2018"
                    ],
                    bullets: [
                        "Contact sponsors, organize transportation, advertising, communication during the event, swag, and prizes",
                        "Went around during the event, helping out teams with technical issues"
                    ]
                },
                {
                    header: [
                        "Vice President of RamDev",
                        "Fall 2016 - Spring 2018"
                    ],
                    bullets: [
                        "Organize weekly tech-talks by companies and students, and hackthon trips",
                        "Have given several tech-talks to students on several subjects", [
                            "Intro to web development: HTML, CSS, Bootstrap, and Emmet",
                            "How to consume a RESTful API, (used the dark sky API for weather)"
                        ]
                    ]
                },
                {
                    header: [
                        "President of ACM Club",
                        "Summer 2015 - Spring 2018"
                    ],
                    bullets: [
                        "Organize weekly meetings to prepare for the ACM International Collegiate Programming Contest"
                    ]
                },
                // {
                //     header: [
                //         "President of Lion Dance Club",
                //         "Fall 2015 - Fall 2016"
                //     ],
                //     bullets: [
                //         "Organized the 2016 Inter-Collegiate Lion Dance competition, hosting over 40 lion dancers from Virginia to Massachusetts",
                //         "Organized bi-weekly practices, performances, and the annual vcu-hosted lion dance expo", [
                //             "Performed for companies such as Google, Capital One, and Suntrust",
                //             "Performed for the 2015 Richmond Heart Ball, which raised $1 million to help fund programs to prevent and research cardiovascular disease"
                //         ]
                //     ]
                // }
            ]
        }
    ]
};
*/}
