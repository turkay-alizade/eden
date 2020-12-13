
//Search button
let searchOpen=document.querySelector('.search');
let searchClose=document.querySelector('.search-close');
let searchForm=document.querySelector('#search-form');
let searchInput=document.querySelector('#search-form>form');
searchOpen.addEventListener('click',function(){
    searchForm.style.display='block';
    setTimeout(function() {
        searchInput.style.transform="rotateX(0deg)";
    }, 100);   
})
searchClose.addEventListener('click',function(){
    setTimeout(function() {
        searchForm.style.display="none";
    }, 500);
    searchInput.style.transform="rotateX(90deg)";
})

//Login button
let loginOpen=document.querySelector('.login');
let loginClose=document.querySelector('.cancel-btn');
let loginForm=document.querySelector('#login-form');
loginOpen.addEventListener('click',function(){
    loginForm.style.display='block';
})
loginClose.addEventListener('click',function(){
    loginForm.style.display='none';
})

//login show password
let loginPasswordId=document.getElementById('login-password');
let loginCheckbox=document.getElementById('login-checkbox');
loginCheckbox.addEventListener('click',function(){
  if(loginPasswordId.type==='password'){
    loginPasswordId.type='text';
  }else{
    loginPasswordId.type='password';
  }
});

//login input password
let loginForms=document.forms['login-form'];
let loginPassword=document.forms['login-form']['login-password'];
let passwordText=document.querySelector('#password-text');
loginForms.addEventListener('submit',function(e){
    if(loginPassword.value==''){
        loginPassword.style.border='1px solid red';
        passwordText.innerHTML='Password cannot be empty.'
        e.preventDefault();
    }
});

//contact us
let contactForm=document.forms['contact-form'];
if (contactForm !== undefined){
    contactForm.addEventListener('submit',function(e){
        let fName=contactForm['fName'];
        let lName=contactForm['lName'];
        let email=contactForm['email'];
        let formInput=[fName,lName,email];

        for(let i=0;i<formInput.length;i++){
            if(formInput[i].value==''){
                formInput[i].style.border='1px solid red';
                e.preventDefault();
            }
        }
    });
}


//menu
let btn=document.querySelector('.menu-btn');
let menu=document.querySelector('ul');
let menuopen=false;

btn.addEventListener('click',function(){
    if(!menuopen){
        btn.classList.add('open');
        menuopen=true;
        menu.style.display='block';
    }else{
        btn.classList.remove('open');
        menuopen=false;
        menu.style.display='none';
    }
});

// lates-news date
let newsDay=document.querySelectorAll('.day');
let newsMonth=document.querySelectorAll('.month');
let newsHours=document.querySelectorAll('.hours');

let d=new Date();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

for(let i = 0; i<newsDay.length; i++){
    newsDay[i].innerHTML=d.getDate();
};

for(let j = 0;j<newsMonth.length;j++){
    newsMonth[j].innerHTML=months[d.getMonth()];
};

for(let i = 0;i<newsHours.length;i++){
    newsHours[i].innerHTML=d.getHours()+':'+d.getMinutes();
};


// service read more-read less button
let service=document.getElementById('service');
if (service !== null){
    service.addEventListener('click',function(e){
        let target=e.target;
        if(target.classList.contains('service-btn')){
            let cardBody=target.parentNode;
            let open=target.dataset.open==='true';
            target.dataset.open=!open;
            if(open){
                target.innerHTML='Read more';
                cardBody.classList.remove('open');
            }else{
                target.innerHTML='Read less';
                cardBody.classList.add('open');
            }
        }
    });
};

// categories section
let categories_link=document.querySelectorAll('#categories a');
let categories_card=document.querySelectorAll('.categories-card');
let categories_img=document.querySelectorAll('.categories-card img');
let img_gallery=document.querySelector('.img-gallery');
let image=document.querySelector('.img-gallery img');
let close=document.querySelector('.img-gallery .fa-times');
let prev=document.querySelector('.fa-chevron-left');
let next=document.querySelector('.fa-chevron-right');

categories_link.forEach(function(link){
    link.addEventListener('click',function(){
        categories_link.forEach(function(link){
            link.classList.remove("active")
        });
        this.classList.add("active");
        let value=this.textContent;
        categories_card.forEach(function(card){
            card.style.display='none';
            card.classList.remove('show');
            if(card.getAttribute("data-id")===value || value ==="all"){
                card.classList.add('show');
            };
        });
        next_prev();
    });
});

for(let i=0;i<categories_card.length;i++){
    categories_card[i].classList.add('show');
    categories_card[i].addEventListener('click',function(){
        img_gallery.style.display='block';
        image.src=categories_img[i].src;   
    });
    next_prev();
};
    
function next_prev(){
    let show_img=document.querySelectorAll('.show img');
    let i=0;
    next.addEventListener('click',function(){
        if(i>=show_img.length-1){
            i=0;
            image.src=show_img[0].src;
        }else{
            image.src=show_img[i+1].src;
            i++;
        }; 
    });

    prev.addEventListener('click',function(){
        if(i===0){
            i=show_img.length;
            image.src=show_img[0].src;
        }else{
            image.src=show_img[i-1].src;
            i--;
        }
    });
}; 

if( close !==null){
    close.addEventListener('click',function(){
        img_gallery.style.display='none';
    });
}




// Checkout open-close
let checkout=document.getElementById('checkout');
let checkoutFirstChild=document.querySelector('#checkout>div');
let pricing=document.getElementById('pricing');
let checkoutClose=document.querySelector('.checkout-close');
let pricingBtn=document.querySelectorAll('.pricing-btn');

for(let i=0;i<pricingBtn.length;i++){
    pricingBtn[i].addEventListener('click',function(){
        checkout.style.display='block';
        checkoutFirstChild.style.animation='checkoutopen 0.7s';
    });
};

if(checkoutClose !== null){
    checkoutClose.addEventListener('click',function(){
        checkoutFirstChild.style.animation='checkoutclose 0.7s';
        setTimeout(function(){
            checkout.style.display='none';
        },700);
    });
};