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
        SideBar.classList.remove('open_side_bar');
        MainContent.classList.remove('blured');
        Body.classList.remove('no-scroll');
    })
   

    const Servicii_Slides = document.querySelectorAll('.slide');
    const Servicii_Slides_SVG = document.querySelectorAll('.slide svg');

    const Macheta_SVG = document.querySelectorAll('.container-image svg');
    const Macheta_ICONS = document.querySelectorAll('.container-image > div');
    
    const Servicii_BTN = document.querySelector('.Servicii-BTN');



    function Select_SLide(x){
        Servicii_Slides.forEach(slide =>{
            slide.classList.remove('slide-selected');
        })
        Macheta_ICONS.forEach(icon =>{
            icon.classList.remove('slide-selected');
        })

        Macheta_ICONS[x].classList.add('slide-selected');
        Servicii_Slides[x].classList.add('slide-selected');
    }
    function Select_SLide_SVG(x){
        Servicii_Slides_SVG.forEach(svg =>{
            svg.classList.remove('svg-selected');
        })
        Macheta_SVG.forEach(svg =>{
            svg.classList.remove('svg-selected');
        })
        
        Servicii_Slides_SVG[x].classList.add('svg-selected');
        Macheta_SVG[x].classList.add('svg-selected');
    }

    function Set_Text(x){
        Servicii_BTN.classList.add('active-btn');
        switch(x){
            case 0:
                Servicii_BTN.textContent = "Prețuri Detailing Exterior";
                break;
            case 1:
                Servicii_BTN.textContent = "Prețuri Detailing Interior";
                break;
            case 2:
                Servicii_BTN.textContent = "Prețuri Curățare Motor";
                break;
            case 3:
                Servicii_BTN.textContent = "Prețuri Recondiționare Faruri";
                break;
            case 4:
                Servicii_BTN.textContent = "Prețuri Semi Detailing";
                break;
        }
    }

    if(Servicii_BTN){
        Servicii_BTN.addEventListener('click',()=>{
            switch(Servicii_BTN.textContent){
                 case "Prețuri Curățare Motor":
                     window.location = "servicii/curatare-motor/";
                     break;
                 case "Prețuri Detailing Interior":
                     window.location = "servicii/detailing-interior/";
                     break;
                 case "Prețuri Detailing Exterior":
                     window.location = "servicii/detailing-exterior/";
                     break;
                 case "Prețuri Recondiționare Faruri":
                    window.location = "servicii/reconditionare-faruri/";
                    break;
                case "Prețuri Semi Detailing":
                    window.location = "servicii/semi-detailing/";
                    break;    
            }
         })
    }
   

    Servicii_Slides.forEach(slide =>{
        slide.addEventListener('click',()=>{
           Select_SLide(Array.from(Servicii_Slides).indexOf(slide));
           Select_SLide_SVG(Array.from(Servicii_Slides).indexOf(slide));
           Set_Text((Array.from(Servicii_Slides).indexOf(slide)));
        })
    })

    Macheta_ICONS.forEach(icon =>{
        icon.addEventListener('click',()=>{
           Select_SLide(Array.from(Macheta_ICONS).indexOf(icon));
           Select_SLide_SVG(Array.from(Macheta_ICONS).indexOf(icon));
           Set_Text((Array.from(Macheta_ICONS).indexOf(icon)));
        })
    })

    const Video = document.querySelector('.body-video .container-video video');
    const Play_Screen = document.querySelector('.body-video .container-video .play-screen');
    let Contor_Video = 0;

    Play_Screen.addEventListener('click',()=>{
        if (Video.paused) {
            Video.play();
            Play_Screen.classList.add('video-play');
        } else {
            Video.pause();
            Play_Screen.classList.remove('video-play');
        }
    })
    Video.addEventListener('ended',()=>{
        Play_Screen.classList.remove('video-play');
    })

    const Counters = document.querySelectorAll('.card-counter span');
    const BodyCounter = document.querySelector('.body-counter');
    const CardCounter = document.querySelectorAll('.card-counter');

    const duration = 2500;

   

    const CounterObserver = new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){

                CardCounter.forEach((card,i)=>{
                    if(i === 0){
                        i = 1;
                    }
                    setTimeout(()=>{
                        card.classList.add('active-counter');
                    }, i * 200);
                })

                setTimeout(()=>{
                    Counters.forEach(counter =>{
                        const target = +counter.getAttribute('data-target');
                        let current = 0;
                
                        const stepTime = Math.floor(duration / target);
                
                        const UpdateCounter = () =>{
                            if(current < target){
                                current += 1;
                                counter.innerText = current;
                                setTimeout(UpdateCounter,stepTime);
                            }
                            else{
                                counter.innerText = target;
                            }
                        };
                
                        UpdateCounter();
                    })
                },500);
                observer.unobserve(entry.target);
            }
        })
    },{
        threshold:0.5
    })
    CounterObserver.observe(BodyCounter);


   
    const ReviewCards = document.querySelectorAll('.card-review');
    const ReviewProgresBar = document.querySelector('.review-progres-line');
    let ProgresBar = [];

    const Previous_Review = document.querySelector('.previous-review');
    const Next_Review = document.querySelector('.next-review');
    const Container_Reviews = document.querySelector('.container-review');

    const Review_Card_Width = ReviewCards[0].clientWidth;
    window.addEventListener('resize',()=>{
        const Review_Card_Width = ReviewCards[0].clientWidth;
    })
    let Scroll_Value = 0;

    if(Container_Reviews.scrollLeft === 0){
        Previous_Review.classList.add('inactive');
    }

    function Scroll_Reviews(x){
        Container_Reviews.scrollLeft += (x * (Review_Card_Width + 40))


            Scroll_Value += (x * (Review_Card_Width + 40))
      

            const totalScrollWidth = Container_Reviews.scrollWidth - Container_Reviews.clientWidth;
    
            if(Scroll_Value >= totalScrollWidth * 0.75){
                Next_Review.classList.add('inactive');
            }
            else{
                Next_Review.classList.remove('inactive');
            }
            if(Scroll_Value <= totalScrollWidth * 0.1){
                Previous_Review.classList.add('inactive');
            }
            else{
                Previous_Review.classList.remove('inactive');
            }   
    }

    Previous_Review.addEventListener('click',()=>{
        Scroll_Reviews(-1);  
    })

    Next_Review.addEventListener('click',()=>{
        Scroll_Reviews(1);
    })



    
    ReviewCards.forEach((card,index) =>{
       let progresLine =   document.createElement('div');
       let barWidth = ReviewProgresBar.clientWidth / ReviewCards.length;
       progresLine.setAttribute('class','line');
       progresLine.style.width = `${barWidth}px`;
       progresLine.style.left = `${index * barWidth}px`;
       ReviewProgresBar.appendChild(progresLine);
       ProgresBar.push(progresLine);
    })




    function UpdateProgresBar(x){
        ProgresBar.forEach(bar => {
            bar.classList.remove('current-line');
        })
        ProgresBar[x].classList.add('current-line');
    }

    const ReviewObserver = new IntersectionObserver((entries)=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                UpdateProgresBar(Array.from(ReviewCards).indexOf(entry.target));
            }
        });
    },
        {
            threshold: 0.5
        }
    )

    ReviewCards.forEach(card=>{
        ReviewObserver.observe(card);
    })
    ProgresBar[0].classList.add('current-line');


    window.addEventListener('load',()=>{
        const QACards = document.querySelectorAll('.card-qa');
        total_height = [];


        function Minimize (item,x,icon){
            item.style.height = x.offsetHeight + 'px';
            icon.classList.remove('rotate');
        }
        function Expand(item,x,icon){
            item.style.height = `${total_height[x]}px`
            icon.classList.add('rotate');
        }
    
        QACards.forEach((card,i) =>{
    
            let contor_qa = 0;
    
            total_height.push(card.offsetHeight);
        
            const Intrebare = card.querySelector('.intrebare');
            const Raspuns = card.querySelector('.raspuns');
            const QA_Icon = card.querySelector('i');

           window.addEventListener('resize',()=>{
            Minimize(card,Intrebare,QA_Icon);
            contor_qa = 0;
           })
    
            let intrebare_height = Intrebare.offsetHeight + 4;
    
            card.style.height = `${intrebare_height}px `
    
            card.addEventListener('click',()=>{
                if( contor_qa % 2 == 0){
                     Expand(card,i,QA_Icon);
                     contor_qa++;
                }
                else{
                    Minimize(card,Intrebare,QA_Icon);
                    contor_qa++;
                }
            })
        })
    })

    const Prorgam_Light = document.querySelector('.circle');
    const Program_Message = document.querySelector('.program p');

    let Now_Date = new Date();
    let Current_Hour = Now_Date.getHours();
    let Current_Day = Now_Date.getDay();
   
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
