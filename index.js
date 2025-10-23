const bodyNode = document.querySelector('.body');
const btnNode = document.querySelector('.btn');
const quetionNode = document.querySelector('.question');
const mainTextNode = document.querySelector('.main-text');

const bodyClass = 'body-class';

btnNode.addEventListener('click', () => {
    render();
});

function render() {
    renderBody();
    renderQuetion();
    renderMainText();
};

function renderBody() {
    bodyNode.classList.add(bodyClass);
};

function renderQuetion() {
    quetionNode.innerHTML = 'Ура, теперь не скучно 🔥';
};

function renderMainText() {
    fetch("https://bored-api.appbrewery.com/random")
        .then(data => data.json())
        .then(result => console.log(result))
        .catch(error => console.log(error));
};