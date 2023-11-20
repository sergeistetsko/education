// data
let header = {
    logotypeName: 'IN-FITNESS',
    titleLevel1: 'Online Fitness',
    paragraphContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonName: 'Get Started',
    imageSources:
        [
            "./assets/images/wepik-export.svg",
            "./assets/images/Group140.svg"
        ]
}
let sections = {
    titleLevel2: 'Exercises',
    days: [
        {
            day: 'Monday',
            exercises: [
                {
                    title: 'Deadlift',
                    approaches: [
                        'First approach with 50 kg х 10 repetitions',
                        'Second approach with 40 kg х 15 repetitions',
                        'Third approach with 35 kg х 12 repetitions',
                        'Fourth approach with 35 kg х 12 repetitions'
                    ],
                    images: [
                        "./assets/images/image1.svg",
                        "./assets/images/image2.svg",
                        "./assets/images/image3.svg"
                    ]
                },
                {
                    title: 'Pull-ups & Chin-ups',
                    approaches: [
                        'First approach 10 repetitions',
                        'Second approach 15 repetitions',
                        'Third approach 12 repetitions',
                        'Fourth approach 12 repetitions'
                    ],
                    images: [
                        "./assets/images/image4.svg",
                        "./assets/images/image5.svg",
                        "./assets/images/image6.svg"
                    ]
                }
            ]
        },
        {
            day: 'Tuesday',
            exercises: [
                {
                    title: 'Barbell squats',
                    approaches: [
                        'First approach with 50 kg х 10 repetitions',
                        'Second approach with 40 kg х 15 repetitions',
                        'Third approach with 35 kg х 12 repetitions',
                        'Fourth approach with 35 kg х 12 repetitions'
                    ],
                    images: [
                        "./assets/images/image7.svg",
                        "./assets/images/image8.svg",
                        "./assets/images/image9.svg"
                    ]
                },
                {
                    title: 'Dumbbell lunges',
                    approaches: [
                        'First approach 8 kg x 10 repetitions',
                        'Second approach 8 kg x 15 repetitions',
                        'Third approach 7 kg x 12 repetitions',
                        'Fourth approach 5 kg x 12 repetitions'
                    ],
                    images: [
                        "./assets/images/image10.svg",
                        "./assets/images/image11.svg",
                        "./assets/images/image12.svg"
                    ]
                }
            ]
        }
    ]
}

// render header
document.write(`
<header>
    <h1>${header.logotypeName}</h1>
    <h2>${header.titleLevel1}</h2>
    <p>${header.paragraphContent}</p>
    <button>${header.buttonName}</button>
    ${header.imageSources.map(src => `<img src="${src}">`).join('')}
</header>
`);

// render sections
document.write(`<h2>${sections.titleLevel2}</h2>`);
for (let day of sections.days) {
    document.write(`<section><h3>${day.day}</h3>`);
    for (let exercise of day.exercises) {
        document.write(`
        <div>
            <h4>${exercise.title}</h4>
            <ol>
                ${exercise.approaches.map(item => `<li>${item}</li>`).join('')}
            </ol>
        </div>
        <div>
            ${exercise.images.map(src => `<img src="${src}">`).join('')}
        </div>`);
    }
    document.write(`</section>`);
}