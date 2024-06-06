import inquirer from 'inquirer'

async function askConfimation(){
    const question = {
        type: 'confirm',
        name: 'proceed',
        message:'do you want to continue',
        default: false
    };

    const answer = await inquirer.prompt(question);
    if(answer.proceed){
        console.log('You chose to proceed');
    } else {
        console.log('You chose not to proceed');
    }
}

askConfimation();