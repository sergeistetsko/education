class Human {
    constructor(name) {
        this.name = name;
    }
}

class Man extends Human {
    constructor(name) {
        super(name);
        this.gender = 'Male';
    }
}

class Woman extends Human {
    constructor(name) {
        super(name);
        this.gender = 'Female';
    }
}

class God {
    /**
     * @returns Human[]
     */
    static create() {
        let adam = new Man('Adam');
        let eve = new Woman('Eve');
        return [adam, eve];
    }
}