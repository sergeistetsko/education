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
document.write('<header>');
document.write('<a href="#">');
document.write('<span>', header.logotypeName, '</span>');
document.write('<a>');
document.write('<div>');
document.write('<h1>', header.titleLevel1, '</h1>');
document.write('<p>', header.paragraphContent, '</p>');
document.write('<button type="button">', header.buttonName, '</button>');
document.write('</div>');
document.write('<div>');
document.write('<img src=', header.imageName.image1, '>');
document.write('<img src=', header.imageName.image2, '>');
document.write('</div>');
document.write('</header>');
/*
// render section 1


document.write('<section>');
document.write('<h3>', sections.titleLevel3[0], '</h3>');
document.write('<div>');
document.write('<h4>', sections.titleLevel4[0], '</h4>');
document.write('<ol>');
document.write('<li>', sections.listItemContent[0][0], '</li>');
document.write('<li>', sections.listItemContent[0][1], '</li>');
document.write('<li>', sections.listItemContent[0][2], '</li>');
document.write('<li>', sections.listItemContent[0][3], '</li>');
document.write('</div>');
document.write('<div>');
document.write('<img src=', sections.imageWay[0], '>');
document.write('<img src=', sections.imageWay[1], '>');
document.write('<img src=', sections.imageWay[2], '>');
document.write('</div>');
document.write('</ol>');
document.write('</div>');

document.write('<div>');
document.write('<h4>', sections.titleLevel4[1], '</h4>');
document.write('<ol>');
document.write('<li>', sections.listItemContent[1][0], '</li>');
document.write('<li>', sections.listItemContent[1][1], '</li>');
document.write('<li>', sections.listItemContent[1][2], '</li>');
document.write('<li>', sections.listItemContent[1][3], '</li>');
document.write('</div>');
document.write('<div>');
document.write('<img src=', sections.imageWay[3], '>');
document.write('<img src=', sections.imageWay[4], '>');
document.write('<img src=', sections.imageWay[5], '>');
document.write('</div>');
document.write('</ol>');
document.write('</div>');
document.write('<hr>');
document.write('</section>');

// render section 2
document.write('<section>');
document.write('<h3>', sections.titleLevel3[1], '</h3>');
document.write('<div>');
document.write('<h4>', sections.titleLevel4[2], '</h4>');
document.write('<ol>');
document.write('<li>', sections.listItemContent[2][0], '</li>');
document.write('<li>', sections.listItemContent[2][1], '</li>');
document.write('<li>', sections.listItemContent[2][2], '</li>');
document.write('<li>', sections.listItemContent[2][3], '</li>');
document.write('<div>');
document.write('<img src=', sections.imageWay[6], '>');
document.write('<img src=', sections.imageWay[7], '>');
document.write('<img src=', sections.imageWay[8], '>');
document.write('</div>');
document.write('</ol>');
document.write('</div>');

document.write('<div>');
document.write('<h4>', sections.titleLevel4[3], '</h4>');
document.write('<ol>');
document.write('<li>', sections.listItemContent[3][0], '</li>');
document.write('<li>', sections.listItemContent[3][1], '</li>');
document.write('<li>', sections.listItemContent[3][2], '</li>');
document.write('<li>', sections.listItemContent[3][3], '</li>');
document.write('<div>');
document.write('<img src=', sections.imageWay[9], '>');
document.write('<img src=', sections.imageWay[10], '>');
document.write('<img src=', sections.imageWay[11], '>');
document.write('</div>');
document.write('</ol>');
document.write('</div>');
document.write('</section>');*/

// render section i
document.write('<h2>', sections.titleLevel2, '</h2>');
document.write('<section>');
for (let i = 0; i < sections.titleLevel3.length; i++) {
    document.write('<h3>', sections.titleLevel3[i], '</h3>');    
}
document.write('<div>');
for (let i = 0; i < sections.titleLevel4.length; i++) {
    document.write('<h4>', sections.titleLevel4[i], '</h4>');
}
document.write('<ol>');
for (let i = 0; i < sections.listItemContent.length; i++) {
    for (let j = 0; j < sections.listItemContent[i][j]; j++) {
        document.write('<li>', sections.listItemContent[i][j], '</li>');
    }
}
document.write('</ol>');
document.write('<div>');
for (let i = 0; i <= 3; i++) {
    document.write('<img src=', sections.imageWay[i], '>');
}
document.write('</div>');
document.write('</section>');