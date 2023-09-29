(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('semJava');
    $body.classList.add('comJava')
    
    var slide = new Carousel({
        container: '.menu-slider .imagens-slide',
        itens: 'img',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    function Carousel(config){
        this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container ;
        this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens ;
        this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev ;
        this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext ;
        var _this = this;
        var _currentSlide = 0;
        
        iniciarCarousel()
    
        function iniciarCarousel(){
            var mostrar = _this.container.querySelectorAll('.show');
            
            Array.prototype.forEach.call(mostrar, function(el){
                el.classList.remove('show')
            })
            _this.itens[0].classList.add('show');
            _this.btnPrev.removeAttribute('style')
            _this.btnNext.removeAttribute('style')
    
            addListeners()
        }
        function addListeners(){
            _this.btnNext.addEventListener('click', showNextSlide);
            _this.btnPrev.addEventListener('click', showPrevSlide);
        }
        function showNextSlide(){
            _currentSlide++;
            showSlide()
        }
        function showPrevSlide(){
            _currentSlide--;
            showSlide()
        }
        function showSlide(){
            var qtd = _this.itens.length;
            var slide = _currentSlide % qtd; 
            slide = Math.abs(slide);
            _this.container.querySelector('.show').classList.remove('show');
            _this.itens[slide].classList.add('show');
        }
        intervaloslide()
        function intervaloslide(){
        setarintevalo = setInterval(function(){
            showNextSlide()
        }, 4000)}

        this.container.addEventListener('mouseover', function(){
            clearTimeout(setarintevalo);
        })
        this.container.addEventListener('mouseout', function(){
            intervaloslide();
        });
    }
//mouseover apartamentos
var $apt = document.querySelector('.cards');

})();