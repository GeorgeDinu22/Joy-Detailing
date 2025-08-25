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
    },150);
    setTimeout(()=>{
        LoadingLogo.style.marginRight = '0px';
    },100);
    setTimeout(()=>{
        LoadingScreen.classList.add('loadingCompleted');
        Body.classList.remove('no-scroll');
    },1400);
    setTimeout(()=>{
        LoadingScreen.style.display = 'none';
    },1950);

    const Header = document.querySelector('header');
    let Scroll_Initial = window.scrollY;

    const bottom_body_size = document.getElementById('bottom');

    let scroll_limit = null;
    let scroll_blocked = true;

    window.addEventListener('resize',()=>{
        if(bottom_body_size){
            offset_bottom = bottom_body_size.getBoundingClientRect().top + window.scrollY;
            scroll_limit = offset_bottom;
        }
    })
    if(bottom_body_size){
        let offset_bottom = bottom_body_size.getBoundingClientRect().top + window.scrollY;
        scroll_limit = offset_bottom;
    }


    function Shake_cards(array){
        array.forEach(card =>{
            card.classList.add('shake');
            setTimeout(()=>{
                card.classList.remove('shake');
            },1000);
        })
    }

    function blockScrollMomentarily() {
        document.body.style.overflow = 'hidden';
    
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 250);
    }


    window.addEventListener('scroll',()=>{
        let current_Scroll = window.scrollY;

        if(bottom_body_size && scroll_blocked){
            if(current_Scroll >= scroll_limit){
                window.scrollTo(0, scroll_limit);
                Shake_cards(Size_Cards);
                blockScrollMomentarily();
            }
        }
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
        SideBar.classList.remove('open_side_bar');
        MainContent.classList.remove('blured');
        Body.classList.remove('no-scroll');
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

    ///// SLIDER BEFORE / AFTER
    const container = document.getElementById('sliderContainer');
    let isDragging = false;

    if(container){
        const afterImage = container.querySelector('.slider-after');
        const sliderBtn = document.getElementById('sliderBtn');
        const sliderLine = document.getElementById('sliderLine');
        
        function setSliderPosition(x) {
            const rect = container.getBoundingClientRect();
            let pos = x - rect.left;
            pos = Math.max(0, Math.min(pos, rect.width));
        
            let percent = (pos / rect.width) * 100;
        
            percent = Math.max(4, Math.min(percent, 96));
        
            afterImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
            sliderBtn.style.left = `${percent}%`;
            sliderLine.style.left = `${percent}%`;
        }
          
              sliderBtn.addEventListener('mousedown', () => isDragging = true);
              document.addEventListener('mouseup', () => isDragging = false);
              document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                setSliderPosition(e.clientX);
              });
              
              sliderBtn.addEventListener('touchstart', () => isDragging = true);
              document.addEventListener('touchend', () => isDragging = false);
              document.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                setSliderPosition(e.touches[0].clientX);
              });
    }
    
   
   

    const SizeCards = document.querySelectorAll('.card-size');
    const Servicii_Pret = document.querySelectorAll('.pret');
    const Size_Slider = document.querySelector('.size-select');

    const Card_Semi_Detailing = document.getElementById('card-semi-detailing');
    const pretSEMI = document.querySelector('.pretSEMI');

    const wrapperServiciiExterne = document.querySelector('.wrapperServiciiExterne');
    
    
    
    function Scroll_Slider(x){
        let Size_Slider_width = Size_Slider.offsetWidth;
        if(x === 0){
            Size_Slider.scrollLeft -= Size_Slider_width;
        }
        else if(x === 1){
            Size_Slider.scrollLeft += Size_Slider_width;
        }
    }

    const CardsPret = document.querySelectorAll('.card-pret');
    const containerINFO = document.querySelector('.containerINFO');
    const wrapperSemiDetailing = document.querySelector('.wrapperSemiDetailing');


    function Update_Price_Cards(){
        CardsPret.forEach(card=>{
            setTimeout(()=>{
                card.classList.add('active');
            },50);
        })
        if(containerINFO){
            containerINFO.classList.add('active');
        }
        if(wrapperServiciiExterne){
            wrapperServiciiExterne.classList.add('active');
        }
        if(wrapperSemiDetailing){
            wrapperSemiDetailing.classList.add('active');
        }
    }

    let Contor_Clasa_Mare = 0;

    if(SizeCards[0] && SizeCards[1]){
        SizeCards.forEach((card,index)=>{
            card.addEventListener('click',()=>{
                scroll_blocked = false;

                Scroll_Slider(index)
                Update_Price_Cards();
                Card_Semi_Detailing
                if(index === 1 && Contor_Clasa_Mare === 0){
                    Contor_Clasa_Mare = 1;
                    Servicii_Pret.forEach(pret =>{
                        let temp_pret = parseFloat(pret.textContent.trim());
                        temp_pret += 200;
                        pret.textContent = temp_pret + " RON";
                    })
                    if(pretSEMI){
                        let tmp_pretSEMI = parseFloat(pretSEMI.textContent.trim());
                        tmp_pretSEMI += 100;
                        pretSEMI.textContent =tmp_pretSEMI + " RON";
                    }
                }
                else {
                    if(index === 0 && Contor_Clasa_Mare === 1){
                        Contor_Clasa_Mare = 0;
                        Servicii_Pret.forEach(pret =>{
                            let temp_pret = parseFloat(pret.textContent.trim());
                            temp_pret -= 200;
                            pret.textContent = temp_pret + " RON";
                        })
                        if(pretSEMI){
                            let tmp_pretSEMI = parseFloat(pretSEMI.textContent.trim());
                            tmp_pretSEMI -= 100;
                            pretSEMI.textContent =tmp_pretSEMI + " RON";
                        }
                        if(wrapperSemiDetailing){
                            wrapperSemiDetailing.classList.add('active');
                        }
                    }
                }
            })
        })
    }
    else{
        CardsPret.forEach(card=>{
                card.classList.add('active');
        })
        if(containerINFO){
            containerINFO.classList.add('active');
        }
        if(wrapperServiciiExterne){
            wrapperServiciiExterne.classList.add('active');
        }
    }


    const Prorgam_Light = document.querySelector('.circle');
    const Program_Message = document.querySelector('.program p');

    let Now_Date = new Date();
    let Current_Hour = Now_Date.getHours();
    let Current_Day = Now_Date.getDay();
    console.log(Now_Date.getDay())
   
    if (Current_Day === 0 || Current_Day === 6) {
        Program_Message.textContent = 'Închis, Luni - Vineri: 09:00 - 18:00';
        Prorgam_Light.style.setProperty('--pulse_color', 'red');
    } else {
        if (Current_Hour >= 9 && Current_Hour < 17) {
            Prorgam_Light.style.setProperty('--pulse_color', 'rgb(0, 255, 0)');
            Program_Message.textContent = 'Deschis, 09:00 - 18:00';
        } else if (Current_Hour >= 17 && Current_Hour < 18) {
            Prorgam_Light.style.setProperty('--pulse_color', 'rgb(251, 216, 80)');
            Program_Message.textContent = 'Închidem curând, 09:00 - 18:00';
        } else {
            Prorgam_Light.style.setProperty('--pulse_color', 'red');
            Program_Message.textContent = 'Închis, 09:00 - 18:00';
        }
    }

})