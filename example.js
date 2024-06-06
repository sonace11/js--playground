import inquirer from 'inquirer'

async function questions(){
    const questions = [
        {
            type: 'input',
            name: 'name',
            messages: 'what is your name'
        },
        {
            type: 'list',
            name: 'area', 
            meassage: 'where do you live?',
            choice: ['nelson','stoke','richmond']
        }
    ]
    const answers = await inquirer.prompt(questions)
    console.log(`Hi my name is Son ${answers.name}! from ${answer.area}`)
}
questions();
/*
lock();  lock execution to the current thread
arr.push('a')
if(arr.length ==1){
    arr.push('b');
}
unlock(); // free execution for the next thread

only possible outcome: ['a','b','a']
*/