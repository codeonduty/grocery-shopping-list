
const menuItems = document.querySelectorAll('.menu-item');

//THEME///
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
    })
})


const openThemeModal = () => {
    themeModal.style.display ='grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

//remove active class from colours
const changeActiveColorClass = () => {
    colorPallete.forEach(coloPicker => {
        coloPicker.classList.remove('active');
    })
}
//change primary colours
colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);

    })
})

//////BACKGROUNG COLOR///////
let lightColorLightness;
let whiteColorlightness;
let darkColorlightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {
    //add active class
    bg1.classList.add('active');
    //remove active class from the others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorlightness = '20%';
    lightColorLightness = '15%';

    //add active class
    bg2.classList.add('active');
    //remove active class from the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorlightness = '10%';
    lightColorLightness = '0%';

    //add active class
    bg3.classList.add('active');
    //remove active class from the others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})

