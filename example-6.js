import inquirer from 'inquirer';

async function askRawList(){
    const question = {
        type:'rawlist',
        name:'os',
        message:'which operating system do you use?',
        choices: ['windown','macOS','linux','other']
    };
    const answer = await inquirer.prompt(question);
    console.log(`you use ${answer.os}.`);
}

askRawList();