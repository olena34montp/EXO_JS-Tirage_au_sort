let btnEntrer = document.querySelector('.btn-entrer');
let btnGagnant = document.querySelector('.btn-gagnant');
let newArr = [];


btnEntrer.addEventListener('click', (e) => {
    let nomUtiliseteur = prompt('Ecrivez votre nom');
    newArr.push(nomUtiliseteur);
    console.log(newArr);
});

btnGagnant.addEventListener('click', (e) => {
    if (newArr.length == 0) {
        alert('Saisissez d\'abord le nom')
    } else {
        let gagnant = Math.floor(Math.random() * newArr.length);
        let result = newArr[gagnant];
        alert(result);
    }
});
