const database = require('../promise_db');

const UserProgress = function(result){
    this.progressPercentage = result.progressPercentage
}

UserProgress.get = async (id, result) => {
    
    const userExercises = await getUserExercises(id);
    const multipleUsersExercises = await getListOfUsersExercises(id);
//TODO fix get sum for one object
    result(null,{progressPercentage: getPercentage(20, multipleUsersExercises.map(item => getSum(item) - item.ID))});
    return;
}



async function getListOfUsersExercises(id){
    let query = `SELECT * FROM Exercise WHERE NOT ID=${id}`;
    let conn = await database.getDBConnection();
    let [data, fields] = await conn.query(query);
    return data;
}

async function getUserExercises(id) {
    let query = `SELECT * FROM Exercise WHERE ID=${id}`;
    let conn = await database.getDBConnection();
    let [data, fields] = await conn.query(query);
    return data;
}

function getSum (value) {
    const sumValue = Object.values(value).reduce((a, b) => a + b);
    return sumValue;
}

function getPercentage(userExercises, usersExercisesSum) {
    var numOfWorstUsers = null;
    usersExercisesSum.map(item => {if(item < userExercises){  numOfWorstUsers ++ }});
    return 100 * numOfWorstUsers / (usersExercisesSum.length + 1); 
}

module.exports = UserProgress;