

const inquirer = require('inquirer');

class Pet {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }
//changed to function
    GetName() {
        return `${this.name}`;
    }

    hunger = 0;
    thirst = 0;
    happiness = 0;
}

class Tortoise extends Pet {
    energy = 2;

    play1() {
        console.log(`{$this.name} loves pottering around the garden`);
        this.energy++;
        this.thirst++;
        this.hunger++;
        this.happiness++;
    }

    feed1() {
        console.log(`${this.name} is munching on some lettuce`);
        this.energy++;
        this.hunger--;
        this.thirst--;
        this.happiness++;
    }
}

class Hen extends Pet {
    energy = 6;

    play2() {
        console.log(`${this.name} is pecking in the ground`);
        this.energy--;
        this.thirst++;
        this.hunger++;
        this.happiness++;
    }

    feed2() {
        console.log(`${this.name} is having some grain`);
        this.energy++;
        this.hunger--;
        this.thirst--;
        this.happiness++;
    }
}

class Scorpion extends Pet {
    energy = 2;

    play3() {
        console.log(`${this.name} is scuttling in the desert`);
        this.energy--;
        this.thirst++;
        this.hunger++;
        this.happiness++;
    }

    feed3() {
        console.log(`${this.name} is eating some tasty insects`);
        this.energy++;
        this.hunger--;
        this.thirst--;
        this.happiness++;
    }
}
//syntax was wrong here had [] - I took console.log out as it's not needed with inquirer.
const game = async () => {
    let answers = await inquirer.prompt({
        name: 'type',
        type: 'list',
        message: 'What pet would you like?',
        choices: ['Tortoise', 'Hen', 'Scorpion'],
    });

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What would you like to call your pet?',
        },
    ]);

    console.log(answers);
    if (answers.name === 'Tortoise') {
        Pet = new Tortoise(answers.name, Date.now());
        choices = 'Toroise';
    } else if (answers.name === 'Hen') {
        Pet = new Hen(answers.name, Date.now());
        choices = 'Hen';
    } else {
        Pet = new Scorpion(answers.name, Date.now());
        choices = 'Scorpion';
    }
};

let TortoiseCare = [
    {
        type: 'list',
        name: 'action',
        message: `What do you want to do with your pet?`,
        choices: ['Feed', 'Play'],
    },
];

let HenCare = [
    {
        type: 'list',
        name: 'action',
        message: `What do you want to do with your pet?`,
        choices: ['Feed', 'Play'],
    },
];

let ScorpionCare = [
    {
        type: 'list',
        name: 'action',
        message: `What do you want to do with your pet?`,
        choices: ['Feed', 'Play'],
    },
];

let inquirerQs;

const PetCare = async () => {
    if (choices === 'Tortoise') {
        inquirerQs = TortoiseCare;
    } else if (choices === 'Hen') {
        inquirerQs = HenCare;
    } else if (choices === 'Scorpion') {
        inquirerQs = ScorpionCare;
    }

    let answers = await inquirer.prompt(inquirerQs);

    console.log(choices);
    if (answers.action === 'Feed') {
        Pet.feed();
    } else if (answers.action === 'Play') {
        Pet.play();
    }
};
//Moved this function call to global scope as it was inside the scope of PetCare - Petcare function is not currently being used.
game();
