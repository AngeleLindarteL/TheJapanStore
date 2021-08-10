function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}
let srcImg = './img/pink-cloud.png';
let cloudContainer = document.querySelector('.first-banner-container');

for(let i = 0; i < 9;i++){
    let cloud = document.createElement('IMG');
    cloud.src = srcImg;
    cloud.className = "cloud"
    cloud.id = `cloud-${i}`
    cloud.style.top = `${randomNumber(-15,15)}%`
    cloud.style.opacity = `${randomNumber(40,80)}%`
    cloud.animate([
        { left: '120%' },
        { left: '-20%' }
      ], {
        // timing options
        duration: randomNumber(12500,21000),
        iterations: Infinity,
        direction: "alternate-reverse"
    });
    cloudContainer.appendChild(cloud);
}
function cloudTopTansition(){
    for(let i = 0; i < 9;i++){
    cloud = document.querySelector(`#cloud-${i}`)
    cloud.style.top = `${randomNumber(-15,20)}%`
}}

for(let i = 0; i < 9;i++){
    let cloud = document.createElement('IMG');
    cloud.src = srcImg;
    cloud.className = "cloud"
    cloud.id = `cloud-${i}`
    cloud.style.top = `${randomNumber(-10,15)}%`
    cloud.style.opacity = `${randomNumber(40,80)}%`
    cloud.animate([
        { left: '-20%' },
        { left: '120%' }
      ], {
        // timing options
        duration: randomNumber(12500,21000),
        iterations: Infinity,
        direction: "alternate-reverse"
    });
    cloudContainer.appendChild(cloud);
}

const header = document.querySelector('header')
const navMenu = document.querySelector('#nav-menu')

window.addEventListener('scroll', () => {
    if(window.scrollY > 15){
        header.style.background = "rgb(255 153 191)";
        navMenu.style.opacity = "100%";
    }else{
        header.style.background = "transparent"
        navMenu.style.opacity = "0%"
    }
})
