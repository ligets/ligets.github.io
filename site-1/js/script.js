const sliderItems = document.querySelectorAll('.main-cont');
class slider{
    constructor(curent) {
        this.curent = curent
        this.showSlide = this.showSlide.bind(this);
    }
    newCurent(cur){
        this.curent = cur;
    }
    cout(){
        console.log(this.curent);
    }
    showSlide() {
        sliderItems.forEach(item => {
            item.classList.remove('active');
        });
        sliderItems[this.curent].classList.add('active');
    }
    nextSlide() {
        const slider2Input = document.getElementsByName('123');
        const slider2 = document.querySelectorAll('.image-container');
        slider2Input[this.curent].checked;
        slider2[this.curent].classList.remove('check');
        slider2[this.curent].classList.add('non');
        let lastImg;
        if(this.curent + 1 === 6){
            lastImg = 1
        }
        else{
            lastImg = this.curent;
        }
        console.log(lastImg);
        slider2[lastImg].style.animation = 'anim 0.5s';
        const fon = slider2[this.curent].id+'-fon';
        const fGame_fon = document.getElementById(fon);
        let nextImg;
        console.log(this.curent+2);
        if((this.curent+2) === 6){
            nextImg = 1;
        }
        else{
            nextImg = this.curent+2;
        }
        const fon2 = 'game-'+nextImg+'-fon';
        const cont_fon = document.getElementById(fon2);
        fGame_fon.style.animation = 'anim2 0.5s';
        fGame_fon.style.marginTop = '-442px';
        this.curent = (this.curent + 1) % sliderItems.length;
        slider2[this.curent].classList.remove('non');
        slider2[this.curent].classList.add('check');
        slider2[this.curent].style.animation = 'animate 0.5s';
        cont_fon.style.animation = 'animate2 0.5s';
        cont_fon.style.marginTop = '-549px';
        this.showSlide();
    }
}
const sl = new slider(2);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.games').scrollLeft = 102;
    sl.showSlide();
    setInterval(() => sl.nextSlide(), 10000);
});

function check()
{
    let game;
    let main;
    let inp = document.getElementsByName('123');
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            sl.newCurent(i);
            game = "game-" + (++i);
            main = 'main-' + (i);
            break;
        }
    }
    const main_cont = document.getElementById(main);
    const main_cont_check = document.querySelector('.active');
    const cont = document.getElementById(game);
    const fGame = document.querySelector('.check');
    const cont_fon = document.getElementById(game+'-fon');
    const fon = fGame.id+'-fon';
    const fGame_fon = document.getElementById(fon);
    fGame.classList.add('non');
    fGame.classList.remove('check');
    fGame.style.animation = 'anim 0.5s';
    fGame_fon.style.animation = 'anim2 0.5s';
    fGame_fon.style.marginTop = '-442px';
    if(game === 'game-1'){
        document.querySelector('.games').style.scrollBehavior = 'smooth';
        document.querySelector('.games').scrollLeft = 0;
    }
    else if(game === 'game-5'){
        document.querySelector('.games').style.scrollBehavior = 'smooth';
        document.querySelector('.games').scrollLeft = 214;
    }
    cont.classList.add('check');
    cont.classList.remove('non');
    cont.style.animation = 'animate 0.5s';
    cont_fon.style.animation = 'animate2 0.5s';
    cont_fon.style.marginTop = '-549px';
    main_cont.classList.add('active');
    main_cont_check.classList.remove('active');
}