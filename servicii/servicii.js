document.addEventListener('DOMContentLoaded',()=>{

    const Index_IMG = document.querySelectorAll('img');
    Index_IMG.forEach(img =>{
        img.style.pointerEvents = 'none';
        img.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
        })
    })

    const LoadingScreen = document.querySelector('.loading-screen');
    const LoadingLogo = document.querySelector('.loading-screen img');
    const LoadingLine = document.querySelector('.loading-line');
    const Body = document.body;

    Body.classList.add('no-scroll');
    setTimeout(()=>{
        LoadingLine.classList.add('StartAnimation');
    },400);
    setTimeout(()=>{
        LoadingLogo.style.marginRight = '0px';
    },100);
    setTimeout(()=>{
        LoadingScreen.classList.add('loadingCompleted');
        Body.classList.remove('no-scroll');
    },2600);

    const Header = document.querySelector('header');
    let Scroll_Initial = window.scrollY;

    window.addEventListener('scroll',()=>{
        let current_Scroll = window.scrollY;


        if(current_Scroll > Scroll_Initial){
            Header.classList.add('invisible');
        }
        else if(current_Scroll < Scroll_Initial){
            Header.classList.remove('invisible');
        }
        else{
            Header.classList.add('invisible');
        }
         Scroll_Initial = current_Scroll;
    })

    const Servicii_List_Drop_Down = document.getElementById('Servicii-Drop-Down-Li');
    const  Servicii_List = document.querySelector('.drop-down-servicii');
    const Servicii_List_Drop_Down_Icon = Servicii_List_Drop_Down.querySelector('i');

    Servicii_List_Drop_Down.addEventListener('mouseover',(e)=>{
        Servicii_List.classList.add('extend-list')
        Servicii_List_Drop_Down_Icon.style.rotate = '180deg'
    })
    Servicii_List_Drop_Down.addEventListener('mouseleave',(e)=>{
        Servicii_List.classList.remove('extend-list')
               Servicii_List_Drop_Down_Icon.style.rotate = '0deg'
    })
    

    const MainContent = document.querySelector('.main-content');

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
    const SubTitle_Semi_Detailing = document.querySelector('.container-semi-detailing p');
    const Card_Semi_Detailing = document.getElementById('card-semi-detailing');
    
    
    
    function Scroll_Slider(x){
        let Size_Slider_width = Size_Slider.offsetWidth;
        Titlu_Semi_Detailing.classList.add('visible-title')
        SubTitle_Semi_Detailing.classList.add('visible-title')
        if(x === 0){
            Size_Slider.scrollLeft -= Size_Slider_width;
        }
        else if(x === 1){
            Size_Slider.scrollLeft += Size_Slider_width;
        }
    }

    const Observer_Semi_Detailing = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('offer-visible');
                Start_Animtion();
                console.log("Semi a intrat in viewport")
            }
        })
    }, {
        threshold: 0.6
    });

    function Start_Animtion(){
        setTimeout(()=>{
            SubTitle_Semi_Detailing.classList.add('offer-visible')
        },400);
        setTimeout(()=>{
            Card_Semi_Detailing.classList.add('offer-visible')
        },700);
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
                Observer_Semi_Detailing.observe(Titlu_Semi_Detailing);

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
        Titlu_Semi_Detailing.classList.add('visible-title');
        SubTitle_Semi_Detailing.classList.add('visible-title')
        Observer_Semi_Detailing.observe(Titlu_Semi_Detailing);
        CardsPret.forEach(card=>{
                card.classList.add('active');
        })
    }


    const Prorgam_Light = document.querySelector('.circle');
    const Program_Message = document.querySelector('.program p');

    let Now_Date = new Date();
    let Current_Hour = Now_Date.getHours();
   
    

    if(Current_Hour >= 9 && Current_Hour < 17){
        Prorgam_Light.style.setProperty('--pulse_color', 'rgb(0, 255, 0)')
        Program_Message.textContent = 'Deschis, 09:00 - 18:00'
    }
    else if( Current_Hour >= 17 && Current_Hour < 18){
        Prorgam_Light.style.setProperty('--pulse_color', 'rgb(251,216,80)')
        Program_Message.textContent = 'Inchidem Curand, 09:00 - 18:00'
    }   
    else{
        Prorgam_Light.style.setProperty('--pulse_color', 'red')
        Program_Message.textContent = 'Inchis,  09:00 - 18:00'
    }

})