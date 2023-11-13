// data
let header = {
    logotypeName: 'IN-FITNESS',
    titleLevel1: 'Online Fitness',
    paragraphContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonName: 'Get Started',
    imageName: {
        image1: "./assets/images/wepik-export.svg",
        image2: "./assets/images/Group140.svg"
    }
}
let sections = {
    titleLevel2: 'Exercises',
    titleLevel3: ['Monday', 'Tuesday'],
    titleLevel4: ['Deadlift', 'Pull-ups & Chin-ups', 'Barbell squats', 'Dumbbell lunges'],
    listItemContent:
        [
            [
                'First approach with 50 kg х 10 repetitions',
                'Second approach with 40 kg х 15 repetitions',
                'Third approach with 35 kg х 12 repetitions',
                'Fourth approach with 35 kg х 12 repetitions'
            ],
            [
                'First approach 10 repetitions',
                'Second approach 15 repetitions',
                'Third approach 12 repetitions',
                'Fourth approach 12 repetitions'
            ],
            [
                'First approach with 50 kg х 10 repetitions',
                'Second approach with 40 kg х 15 repetitions',
                'Third approach with 35 kg х 12 repetitions',
                'Fourth approach with 35 kg х 12 repetitions'
            ],
            [
                'First approach 8 kg x 10 repetitions',
                'Second approach 8 kg x 15 repetitions',
                'Third approach 7 kg x 12 repetitions',
                'Fourth approach 5 kg x 12 repetitions'
            ]
        ],
    imageWay:
        [
            "./assets/images/image1.svg",
            "./assets/images/image2.svg",
            "./assets/images/image3.svg",
            "./assets/images/image4.svg",
            "./assets/images/image5.svg",
            "./assets/images/image6.svg",
            "./assets/images/image7.svg",
            "./assets/images/image8.svg",
            "./assets/images/image9.svg",
            "./assets/images/image10.svg",
            "./assets/images/image11.svg",
            "./assets/images/image12.svg"
        ]
}

// render header
document.write(`
<header>
    <a href="#"><span>${header.logotypeName}</span></a>
    <div>
        <h1>${header.titleLevel1}</h1>
        <p>${header.paragraphContent}</p>
        <button type="button">${header.buttonName}</button>
    </div>
    <div>
        <img src="${header.imageName.image1}">
        <img src="${header.imageName.image2}">
    </div>
</header>
`);

// render sections
document.write(`<h2>${sections.titleLevel2}</h2>`);
for (let i = 0; i < sections.titleLevel3.length; i++) {
    document.write(`
    <section>
        <h3>${sections.titleLevel3[i]}</h3>
        <div>
            <h4>${sections.titleLevel4[i*2]}</h4>
            <ol>
                <li>${sections.listItemContent[i*2][0]}</li>
                <li>${sections.listItemContent[i*2][1]}</li>
                <li>${sections.listItemContent[i*2][2]}</li>
                <li>${sections.listItemContent[i*2][3]}</li>
            </ol>
        </div>
        <div>
            <img src="${sections.imageWay[i*6]}">
            <img src="${sections.imageWay[i*6+1]}">
            <img src="${sections.imageWay[i*6+2]}">
        </div>
        <div>
            <h4>${sections.titleLevel4[i*2+1]}</h4>
            <ol>
                <li>${sections.listItemContent[i*2+1][0]}</li>
                <li>${sections.listItemContent[i*2+1][1]}</li>
                <li>${sections.listItemContent[i*2+1][2]}</li>
                <li>${sections.listItemContent[i*2+1][3]}</li>
            </ol>
        </div>
        <div>
            <img src="${sections.imageWay[i*6+3]}">
            <img src="${sections.imageWay[i*6+4]}">
            <img src="${sections.imageWay[i*6+5]}">
        </div>
    </section>
    `);
}