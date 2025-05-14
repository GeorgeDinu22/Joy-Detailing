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
                Servicii_BTN.textContent = "Preturi detailing exterior";
                break;
            case 1:
                Servicii_BTN.textContent = "Preturi detailing interior";
                break;
            case 2:
                Servicii_BTN.textContent = "Preturi curățare motor";
                break;
        }
    }

    if(Servicii_BTN){
        Servicii_BTN.addEventListener('click',()=>{
            switch(Servicii_BTN.textContent){
                 case "Preturi curățare motor":
                     window.location = "servicii/curatare-motor/index.html";
                     break;
                 case "Preturi detailing interior":
                     window.location = "servicii/detailing-interior/index.html";
                     break;
                 case "Preturi detailing exterior":
                     window.location = "servicii/detailing-exterior/index.html";
                     break;
            }
         })
    }
   

    Servicii_Slides.forEach(slide =>{
        slide.addEventListener('click',()=>{
            console.log(Array.from(Servicii_Slides).indexOf(slide))
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
                    }, i * 300);
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
        threshold:0.8
    })
    CounterObserver.observe(BodyCounter);


    const Container_Before_After = document.querySelector('.before_after_section');
    document.querySelector('.slider').addEventListener('input',(e)=>{
        Container_Before_After.style.setProperty('--position',`${e.target.value}%`);
    })

    const ReviewCards = document.querySelectorAll('.card-review');
    const ReviewProgresBar = document.querySelector('.review-progres-line');
    let ProgresBar = [];
    
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
                console.log(`Cardul cu numarul ${Array.from(ReviewCards).indexOf(entry.target)} a intrat pe ecran`)
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


    const QACards = document.querySelectorAll('.card-qa');
    total_height = [];

    
    QACards.forEach((card,i) =>{

        let contor_qa = 0;

        total_height.push(card.offsetHeight);
    
        const Intrebare = card.querySelector('.intrebare');
        const Raspuns = card.querySelector('.raspuns');
        const QA_Icon = card.querySelector('i');

        let intrebare_height = Intrebare.offsetHeight + 4;

        card.style.height = `${intrebare_height}px `

        card.addEventListener('click',()=>{
            if( contor_qa % 2 == 0){
                 card.style.height = `${total_height[i]}px`
                 contor_qa++;
                 QA_Icon.classList.add('rotate');
            }
            else{
                 card.style.height = `${intrebare_height}px `
                 contor_qa++;
                 QA_Icon.classList.remove('rotate');
            }
           
        })
    })


  
    const Week = ["Duminica","Luni" , "Marti", "Miercuri", "Joi", "Vineri","Samabata"];
    let Current_Date =  new Date();
    let Current_Day = Week[Current_Date.getDay()];
    console.log(Current_Date.getHours())
    console.log(Current_Date.getMinutes())

    if(Current_Date.getDay() === 0 || Current_Date.getDay() === 1){
        console.log("este duminica")
    }
    else{
        console.log(`Astazi este ${Current_Day}`)
    }
    if(Current_Date.getHours() > 18){
        console.log("Am inchis \n Ne vedem maine")
    }
    else {
        console.log("Suntem deschisi")
    }

})