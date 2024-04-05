
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Succès!');
        }, 2000);
    });
};

// sleep().then((value) => console.log(value));

module.exports = {sleep};