/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 * 
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 * 
 * Retournez un tableau contenant les 3 résultats
 * 
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 * 
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

const {apiResponse} = require("./11_async");

const parallel = async (urls) => {
    const rep = await Promise.all(urls.map(url => apiResponse(url)));
    return console.table(rep);
}

// parallel(
//     ["https://jsonplaceholder.typicode.com/todos/1",
//     "https://jsonplaceholder.typicode.com/todos/2",
//     "https://jsonplaceholder.typicode.com/todos/3"]
// );

module.exports = {parallel};
