$(document).ready(function(){

    navigacijaHeder()
    drustveneMreze()
    futerKontaktInfo()
    korisniLinkovi()
    nasTim()
    testimonial()
    klijenti()
    portfolio()
    usluge()
    onama()
    kontaktInfo()

    $(".belaPozadina").hide();

    $("#kontaktDugme").click(proveraForme);

    $("#autor").click(function(e){
        e.preventDefault()
        $(".belaPozadina").toggle();
    })
    

    function navigacijaHeder(){

        let navigacijaText = ['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact']

        let navigacijaPutanja = ['intro', 'about', 'services', 'portfolio', 'team', 'contact']

        let navigacija = document.getElementById("navigacija")

        let html = ''

        let navigacijaCount = navigacijaText.length    

        for(let i = 0; i < navigacijaCount; i++){

            html += `<li><a href="#${navigacijaPutanja[i]}">${navigacijaText[i]}</a></li>`
        }

        navigacija.innerHTML = html
    }

    function drustveneMreze(){

        let navigacijaIkonice = ['twitter', 'facebook', 'instagram', 'google-plus', 'linkedin']

        let linkovi = document.getElementById("social-links")

        let html = ''

        let linkoviCount = navigacijaIkonice.length    

        for(let i = 0; i < linkoviCount; i++){

            html += `<a href="#" class="${navigacijaIkonice[i]}"><i class="fa fa-${navigacijaIkonice[i]}"></i></a>`
        }

        linkovi.innerHTML = html
    }

    function futerKontaktInfo(){

        let futerKontaktInfoText = ['A108 Adam Street <br>', 'New York, NY 535022<br>', ' United States <br>', '<strong>subject:</strong> +1 5589 55488 55<br>', '<strong>Email:</strong> info@example.com<br>']

        let futerKontaktInfo = document.getElementById("futerKontaktInfo")

        let html = ''

        let futerKontaktInfoCount = futerKontaktInfoText.length    

        for(let i = 0; i < futerKontaktInfoCount; i++){

            html += `${futerKontaktInfoText[i]}`
        }

        futerKontaktInfo.innerHTML = html
    }

    function korisniLinkovi(){

        let korisniLinkoviText = ['Home', 'Services', 'Dokumentacija', 'Sitemap']

        let korisniLinkoviHref = ['index.html#intro', 'index.html#services', 'dokumentacija.pdf', 'sitemap.xml']

        let korisniLinkovi = document.getElementById("korisniLinkovi")

        let html = ''

        let korisniLinkoviTextCount = korisniLinkoviText.length    

        for(let i = 0; i < korisniLinkoviTextCount; i++){

            html += `<li><i class="ion-ios-arrow-right"></i> <a href="${korisniLinkoviHref[i]}">${korisniLinkoviText[i]}</a></li>`
        }
        html+= `<li><i class="ion-ios-arrow-right"></i> <a href="#" id='autor'>Author</a></li>`
        korisniLinkovi.innerHTML = html
    }

    function nasTim(){

        let timIme = ['Walter White', 'Sarah Jhonson', 'William Anderson', 'Amanda Jepson']

        let timUloga = ['Chief Executive Officer', 'Product Manager', 'CTO', 'Accountant']

        let nasTim = $("#nasTim")

        let html = ''

        let nasTimCount = timIme.length    

        for(let i = 0; i < nasTimCount; i++){

            html += `<div class="col-lg-3 col-md-6 wow fadeInUp">
                        <div class="member">
                        <img src="img/team-${[i+1]}.jpg" class="img-fluid" alt="">
                        <div class="member-info">
                            <div class="member-info-content">
                            <h4>${timIme[i]}</h4>
                            <span>${timUloga[i]}</span>
                            <div class="social">
                                <a href=""><i class="fa fa-twitter"></i></a>
                                <a href=""><i class="fa fa-facebook"></i></a>
                                <a href=""><i class="fa fa-google-plus"></i></a>
                                <a href=""><i class="fa fa-linkedin"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>`
        }

        nasTim.html(html)

    }

    function testimonial(){

        let testimonialIme = ['Saul Goodman', 'Sara Wilsson', 'Jena Karlis', 'Matt Brandon']

        let testimonialloga = ['Ceo &amp; Founder', 'Designer', 'Store Owner', 'Freelancer']
        
        let testimonialText = [
            'Their services were very good and accurate!',
            'I love their communication skills!',
            'They were on point with their ideas!',
            'Everything was as described!'
        ]

        let testimonial = $("#testimonial")

        let html = ''

        let testimonialCount = testimonialIme.length    

        for(let i = 0; i < testimonialCount; i++){

            html += ` <div class="testimonial-item">
                        <img src="img/testimonial-${[i+1]}.jpg" class="testimonial-img" alt="">
                        <h3>${testimonialIme[i]}</h3>
                        <h4>${testimonialloga[i]}</h4>
                        <p>
                        <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
                        ${testimonialText[i]}
                        <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
                        </p>
                    </div>`
        }

        testimonial.html(html)
    }

    function klijenti(){

       

        let klijenti = $("#klijenti")

        let html = ''   

        for(let i = 0; i < 8; i++){

            html += `<img src="img/clients/client-${[i+1]}.png" alt="">`
        }

        klijenti.html(html)        
    }

    function portfolio(){

        let portfolioText = ['App 1', 'App 2', 'App 3', 'Card 1', 'Card 2', 'Card 3', 'Web 1', 'Web 2', 'Web 3']

        let portfolioKategorija = ['App', 'App', 'App', 'Card', 'Card', 'Card', 'Web', 'Web', 'Web']

        let portfolioFilter = ['app', 'app', 'app', 'card', 'card', 'card', 'web', 'web', 'web']

        let portfolioImg = [
            'img/portfolio/app1.jpg',
            'img/portfolio/app2.jpg',
            'img/portfolio/app3.jpg',
            'img/portfolio/card1.jpg',
            'img/portfolio/card2.jpg',
            'img/portfolio/card3.jpg',
            'img/portfolio/web1.jpg',
            'img/portfolio/web2.jpg',
            'img/portfolio/web3.jpg'
        ]

        let html = ''

        for(let i = 0; i < portfolioText.length; i++){

        html += `<div class="col-lg-4 col-md-6 portfolio-item filter-${portfolioFilter[i]} wow fadeInUp">
                    <div class="portfolio-wrap">
                    <figure>
                        <img src="${portfolioImg[i]}" class="img-fluid" alt="">
                        <a href="${portfolioImg[i]}" data-lightbox="portfolio" data-title="${portfolioText[i]}" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="#">${portfolioText[i]}</a></h4>
                        <p>${portfolioKategorija[i]}</p>
                    </div>
                    </div>
                </div>`
        }

        $("#portfolioStavke").html(html)

        let portfolioIsotope = $('#portfolioStavke').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
          });
    
        $('#portfolio-flters li').on( 'click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');
        
            portfolioIsotope.isotope({ filter: $(this).data('filter') });
          });

        // ako nece da se prikaze web sekcija, samo skrolujte na gore malo, problem je kod fadeIn metode koja je odradjena u templejtu
    }

    function usluge(){

        let uslugeNaslov = ['Design', 'Web pages', 'Web Apps', 'Cards', 'Responsive', 'Desktop Apps']

        let uslugeIkonica = [
            'ion-ios-analytics-outline',
            'ion-ios-bookmarks-outline',
            'ion-ios-paper-outline',
            'ion-ios-speedometer-outline',
            'ion-ios-barcode-outline',
            'ion-ios-people-outline']
        
        let uslugeText = [
            'Their services were very good and accurate!',
            'I love their communication skills!',
            'They were on point with their ideas!',
            'Everything was as described!',
            'We are making responsive designes!',
            'We also make desktop apps!'
        ]

        let usluge = $("#usluge")

        let html = ''

        let uslugeCount = uslugeNaslov.length    

        for(let i = 0; i < uslugeCount; i++){

            html += ` <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                        <div class="icon"><i class="${uslugeIkonica[i]}"></i></div>
                        <h4 class="title"><a href="">${uslugeNaslov[i]}</a></h4>
                        <p class="description">${uslugeText[i]}</p>
                    </div>`
        }

        usluge.html(html)
    }

    function onama(){

        let onamaNaslov = ['Our Mission', 'Our Plan', 'Our Vision']

        let onamaIkonica = [
            'ion-ios-speedometer-outline',
            'ion-ios-list-outline',
            'ion-ios-eye-outline'
        ]

        let onamaImg = [
            'img/about-mission.jpg',
            'img/about-plan.jpg',
            'img/about-vision.jpg'
        ]
        
        let onamaText = [
            'Our Mission is to make your dreams come true! Here you can find thing you need the most for your business and contact us!',
            'Our Plan is to evolve our business on world wide scale, briging in new interesting people and working on interesting projects!',
            'Our Vision is to grow as company that will succeed even the likes of Google! We are very ambitious!'
        ]

        let onama = $("#onama")

        let html = ''

        let onamaCount = onamaNaslov.length    

        for(let i = 0; i < onamaCount; i++){

            html += `<div class="col-md-4 wow fadeInUp">
                        <div class="about-col">
                        <div class="img">
                            <img src="${onamaImg[i]}" alt="${onamaNaslov[i]}" class="img-fluid">
                            <div class="icon"><i class="${onamaIkonica[i]}"></i></div>
                        </div>
                        <h2 class="title"><a href="#">${onamaNaslov[i]}</a></h2>
                        <p>
                        ${onamaText[i]}
                        </p>
                        </div>
                    </div>`
        }

        onama.html(html)
    }

    function kontaktInfo(){

        let kontaktInfoNaslov = ['ADDRESS', 'subject NUMBER', 'EMAIL']

        let kontaktInfoIkonica = [
            'ion-ios-location-outline',
            'ion-ios-telesubject-outline',
            'ion-ios-email-outline'
        ]
        
        let kontaktInfoText = [
            '<address>A108 Adam Street, NY 535022, USA</address>',
            '<p><a href="tel:+155895548855">+1 5589 55488 55</a></p>',
            '<p><a href="mailto:info@example.com">info@example.com</a></p>'
        ]

        let kontaktInfo = $("#kontaktInfo")

        let html = ''

        let kontaktInfoCount = kontaktInfoNaslov.length    

        for(let i = 0; i < kontaktInfoCount; i++){

            html += ` <div class="col-md-4">
                        <div class="contact-address">
                        <i class="${kontaktInfoIkonica[i]}"></i>
                        <h3>${kontaktInfoNaslov[i]}</h3>
                        ${kontaktInfoText[i]}
                        </div>
                    </div>`
        }

        kontaktInfo.html(html)
    }

    function proveraForme(e){
        e.preventDefault()
        
        let name = $("#name")
        let markerName = 0

        let email = $("#email")
        let markerEmail = 0

        let subject = $("#subject")
        let markersubject = 0

        let message = $("#message")
        let markerMessage = 0

        let nameReg = /^[A-zšđčćž]{3,}$/
        let emailReg = /^\w([\.-]?\w+\d*)*@\w+\.\w{2,6}$/

        if(name.val() == ''){
            name.css({
                'border': '4px solid #fc3728'
            })
            name.val('')
            name.attr('placeholder', 'Name must be filled in!')
        } else if(!nameReg.test(name.val())){
            name.css({
                'border': '4px solid #fc3728'
            })
            name.val('')
            name.attr('placeholder', 'Name must have atleast 3 letters(Joe, Ana)')
        } else{
            name.css({
                'border': 'none'
            })
            markerName = 1
            name.attr('placeholder', 'Your name')
        }
        
        if(email.val() == ''){
            email.css({
                'border' : '4px solid #fc3728'
            })
            email.val('')
            email.attr('placeholder', 'Email must be filled in!')
        } else if(!emailReg.test(email.val())){
            email.css({
                'border': '4px solid #fc3728'
            })
            email.val('')
            email.attr('placeholder', 'Email not in good format(email@gmail.com)')
        } else{
            email.css({
                'border': 'none'
            })
            markerEmail = 1
            email.attr('placeholder', 'Your email')
        }

        if(subject.val() == ''){
            subject.css({
                'border' : '4px solid #fc3728'
            })
            subject.val('')
            subject.attr('placeholder', 'Subject must be filled in!')
        } else if(!nameReg.test(subject.val())){
            subject.css({
                'border': '4px solid #fc3728'
            })
            subject.val('')
            subject.attr('placeholder', 'Subject must have atleast 3 letters!')
        } else{
            subject.css({
                'border': 'none'
            })
            markersubject = 1
            subject.attr('placeholder', 'Subject')
        }

        if(message.val() == ''){
            message.css({
                'border' : '4px solid #fc3728'
            })
            message.val('')
            message.attr('placeholder', 'Message must be filled in!')
        } else{
            message.css({
                'border': 'none'
            })
            markerMessage = 1
            message.attr('placeholder', 'Message')
        }

        if(markerName != 0 && markerEmail != 0 && markersubject != 0 && markerMessage != 0){
            $("#sendmessage").fadeIn()
            name.val('')
            email.val('')
            subject.val('')
            message.val('')
        }
    }

})