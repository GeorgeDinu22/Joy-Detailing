document.addEventListener('DOMContentLoaded',()=>{

    const Index_IMG = document.querySelectorAll('img');
    Index_IMG.forEach(img =>{
        img.style.pointerEvents = 'none';
        img.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
        })
    })

    const MainContent = document.querySelector('.main-content');
    const Body = document.body;

    const SideBar = document.querySelector('.side-bar');
    const Open_Side_Bar = document.querySelector('.box')
    const Close_Side_Bar = document.querySelector('.side-bar .close');

    Open_Side_Bar.addEventListener('click',()=>{
        SideBar.classList.toggle('open_side_bar');
        MainContent.classList.toggle('blured');
        Body.classList.toggle('no-scroll');
    })

    Close_Side_Bar.addEventListener('click',()=>{
        SideBar.classList.toggle('open_side_bar');
        MainContent.classList.toggle('blured');
        Body.classList.toggle('no-scroll');
    })

    const Size_Cards = document.querySelectorAll('.card-size');
    const Size_Cards_IMG =  document.querySelectorAll('.card-size img');
    console.log(Size_Cards.length)

    function Card_Selected(x){
        Size_Cards.forEach(card =>{
            card.classList.remove("selected-size");
        })
        Size_Cards_IMG.forEach(img =>{
            img.classList.remove('focus');
        })
        Size_Cards[x].classList.add("selected-size");
        Size_Cards_IMG[x].classList.add('focus');
    }

    Size_Cards.forEach(card =>{
        card.addEventListener('click',()=>{
            Card_Selected(Array.from(Size_Cards).indexOf(card));
        })
    })

    const Container_Before_After = document.querySelector('.before_after_section');
    const Slider = document.querySelector('.slider')
    if(Slider){
        Slider.addEventListener('input',(e)=>{
            Container_Before_After.style.setProperty('--position',`${e.target.value}%`);
        })
    }

    const SizeCards = document.querySelectorAll('.card-size');
    const Servicii_Pret = document.querySelectorAll('.pret');
    const Size_Slider = document.querySelector('.size-select');
    const Titlu_Semi_Detailing = document.querySelector('.container-semi-detailing h4');
    
    
    
    function Scroll_Slider(x){
        let Size_Slider_width = Size_Slider.offsetWidth;
        Titlu_Semi_Detailing.classList.add('visible-title')
        if(x === 0){
            Size_Slider.scrollLeft -= Size_Slider_width;
        }
        else if(x === 1){
            Size_Slider.scrollLeft += Size_Slider_width;
        }
    }

    const CardsPret = document.querySelectorAll('.card-pret');


    function Update_Price_Cards(){
        CardsPret.forEach(card=>{
            setTimeout(()=>{
                card.classList.add('active');
            },50);
        })
    }

    let Contor_Clasa_Mare = 0;

    if(SizeCards[0] && SizeCards[1]){
        SizeCards.forEach((card,index)=>{
            card.addEventListener('click',()=>{

                Scroll_Slider(index)
                Update_Price_Cards();

                if(index === 1 && Contor_Clasa_Mare === 0){
                    Contor_Clasa_Mare = 1;
                    Servicii_Pret.forEach(pret =>{
                        let temp_pret = parseFloat(pret.textContent.trim());
                        temp_pret += 200;
                        pret.textContent = temp_pret + " RON";
                    })
                }
                else {
                    if(index === 0 && Contor_Clasa_Mare === 1){
                        Contor_Clasa_Mare = 0;
                        Servicii_Pret.forEach(pret =>{
                            let temp_pret = parseFloat(pret.textContent.trim());
                            temp_pret -= 200;
                            pret.textContent = temp_pret + " RON";
                        })
                    }
                }
            })
        })
    }
    else{
        Titlu_Semi_Detailing.classList.add('visible-title')
        CardsPret.forEach(card=>{
                card.classList.add('active');
        })
    }

})