import inquirer from 'inquirer'

async function askCheckbox(){
    const question = {
        type: 'checkbox',
        name:'languages',
        message:'which programming languages do you know?',
        choices:['JavaScript','Python','Java','C++','Ruby']
    };

    const answer = await inquirer.prompt(question);
    console.log(`you know the following languages: ${answer.languages.join(',')}.`)
}

askCheckbox();