var styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
var sheet = styleSheet.sheet;

var newFont = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');`;  //La fuente que se quiera poner
sheet.insertRule(newFont, sheet.cssRules.length);

const nav = document.createElement('nav');
nav.style.backgroundColor = '#333';
nav.style.padding = '5px';
nav.style.borderRadius = '6px';

const navUl = document.createElement('ul');
navUl.style.listStyleType = 'none';
navUl.style.fontSize = '24px';
navUl.style.fontFamily = "'Inter', sans-serif";
navUl.style.margin = '10px';
const navItems = ['Inicio', 'Contacto', 'Login']; //Items que se quieran en el NAV, se pueden agregar mas

navItems.forEach(item => {  //Crea para cada item, su link y lo pone dentro del nav.
    const navLi = document.createElement('li');
    const navA = document.createElement('a');

    navA.style.color = 'white';
    navA.style.textDecoration = 'none';

    navA.href = '#' + item;  //Lleva al container que tenga la id con el nombre del item, por ejemplo, #contacto.
    navA.textContent = item;
    navA.addEventListener('mouseenter', function () {
        this.style.transition = '0.4s ease-in';
        this.style.color = 'gray';
    });

    navA.addEventListener('mouseleave', function () {
        this.style.transition = '0.2s ease-in';
        this.style.color = 'white';
    });

    navLi.appendChild(navA);
    navUl.appendChild(navLi);
});
const allLi = navUl.querySelectorAll('*');
nav.appendChild(navUl);
document.body.prepend(nav);

function toggleMenu() {
    navUl.style.display = navUl.style.display === 'block' ? 'none' : 'block';
}

function setResponsiveStyles() {
    if (window.innerWidth < 700) {
        const toggleButtons = nav.querySelector('button');
        if (toggleButtons) {
            toggleButtons.remove();
        }
        navUl.style.display = 'none';
        const toggleButton = document.createElement('button');
        toggleButton.style.backgroundColor = '#333';
        toggleButton.style.color = 'white';
        toggleButton.style.border = 'none';
        toggleButton.style.padding = '5px 10px';
        toggleButton.style.cursor = 'pointer';
        toggleButton.style.fontFamily = "'Inter', sans-serif";
        toggleButton.textContent = '☰';
        allLi.forEach(element => {
            element.style.display = 'block';
            element.style.marginTop = '15px';
        });
        toggleButton.addEventListener('click', toggleMenu);
        nav.prepend(toggleButton);
    } else {
        allLi.forEach(element => {
            element.style.display = 'inline';
            element.style.marginRight = '15px';
        });
        navUl.style.display = 'block';
        const toggleButton = nav.querySelector('button');
        if (toggleButton) {
            toggleButton.remove();
        }
    }
}

window.addEventListener('resize', setResponsiveStyles);
setResponsiveStyles();
