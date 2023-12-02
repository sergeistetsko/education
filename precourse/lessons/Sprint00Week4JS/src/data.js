let songs = [
    {
        year: 2020,
        artist: "Elvira T",
        title: "Море",
        url: '../Elvira T - Море.mp3'
    },
    {
        year: 2019,
        artist: "Lewis Capaldi",
        title: "Someone You Loved"
    },
    {
        year: 2018,
        artist: "Drake",
        title: "God's Plan"
    },
    {
        year: 2017,
        artist: "Ed Sheeran",
        title: "Shape of You"
    },
    {
        year: 2016,
        artist: "Beyoncé",
        title: "Formation"
    }
];

let searchTerm = '';

let subscriber = null;
let sortDirection = null;

// publisher-subscriber
export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}

// getter
export function getSongs() {
    const filteredSongs = songs.filter(s => s.title.toLowerCase().indexOf(searchTerm) > -1 
    || s.artist.toLowerCase().indexOf(searchTerm) > -1);

    return filteredSongs;
}

// setter
export function setSearchTerm(newSearchTerm) {
    searchTerm = newSearchTerm.toLowerCase().trim();
    subscriber();
}

// getter
export function getSearchTerm() {
    return searchTerm;
}
// getter/setter - инкапсуляция

/**
 * 
 * @param {'asc'|'desc'} direction 
 */
export function setSortDirection(direction) {
    sortDirection = direction;
    songs.sort((a,b) => {
        if (direction === 'asc') return a.year - b.year;
        return b.year - a.year;
    });
    subscriber();
} 

export function gerSortDirection() {
    return sortDirection;
}