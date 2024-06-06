import inquirer from 'inquirer'

async function askPassword(){
    const question = {
        type: 'password',
        name: 'password',
        message: 'Enter your password',
        mask:'*'
    };

    const answer = await inquirer.prompt(question);
    console.log('password received');
    // be careful with how hanlde the password after this point
}

askPassword();
