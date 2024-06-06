import inquirer from 'inquirer';

async function askList(){
    const question = {
        type: 'list',
        name:'framework',
        message: 'which javascipt framework do you prefer?',
        choices: ['react','vue','angular','svelte']
    };

    const answer = await inquirer.prompt(question);
    console.log(`You prefer ${answer.framework}.`);       // what does answer.framework mean?
    
}

askList();