 let options = {
    rootMargin: '50px',
    threshold: 0.00000000001
    };
        
let callback = (entries, observer)=>{
    entries.forEach(entry => {
            if(entry.isIntersecting && entry.target.className === 'gallery-img'){
                let imageUrl = entry.target.getAttribute('data-src');
                if(imageUrl){
                    entry.target.src = imageUrl;
                    observer.unobserve(entry.target);
                }
            }
        });
    }
        
let observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('#Img016'));
observer.observe(document.querySelector('#Img017'));
observer.observe(document.querySelector('#Img018'));
observer.observe(document.querySelector('#Img019'));
observer.observe(document.querySelector('#Img020'));
observer.observe(document.querySelector('#Img021'));
observer.observe(document.querySelector('#Img022'));
observer.observe(document.querySelector('#Img023'));
observer.observe(document.querySelector('#Img024'));
observer.observe(document.querySelector('#Img025'));
observer.observe(document.querySelector('#Img026'));
observer.observe(document.querySelector('#Img027'));
observer.observe(document.querySelector('#Img028'));
observer.observe(document.querySelector('#Img029'));
observer.observe(document.querySelector('#Img030'));
observer.observe(document.querySelector('#Img031'));
observer.observe(document.querySelector('#Img032'));
observer.observe(document.querySelector('#Img033'));
observer.observe(document.querySelector('#Img034'));
observer.observe(document.querySelector('#Img035'));
observer.observe(document.querySelector('#Img036'));
observer.observe(document.querySelector('#Img037'));
observer.observe(document.querySelector('#Img038'));
observer.observe(document.querySelector('#Img039'));
observer.observe(document.querySelector('#Img040'));
observer.observe(document.querySelector('#Img041'));
observer.observe(document.querySelector('#Img042'));
observer.observe(document.querySelector('#Img043'));
observer.observe(document.querySelector('#Img044'));
observer.observe(document.querySelector('#Img045'));
observer.observe(document.querySelector('#Img046'));
observer.observe(document.querySelector('#Img047'));
observer.observe(document.querySelector('#Img048'));
observer.observe(document.querySelector('#Img049'));
observer.observe(document.querySelector('#Img050'));
observer.observe(document.querySelector('#Img051'));
observer.observe(document.querySelector('#Img052'));
observer.observe(document.querySelector('#Img053'));
observer.observe(document.querySelector('#Img054'));
observer.observe(document.querySelector('#Img055'));
observer.observe(document.querySelector('#Img056'));
observer.observe(document.querySelector('#Img057'));
observer.observe(document.querySelector('#Img058'));
observer.observe(document.querySelector('#Img059'));
observer.observe(document.querySelector('#Img060'));
observer.observe(document.querySelector('#Img061'));
observer.observe(document.querySelector('#Img062'));
observer.observe(document.querySelector('#Img063'));
observer.observe(document.querySelector('#Img064'));
observer.observe(document.querySelector('#Img065'));
observer.observe(document.querySelector('#Img066'));
observer.observe(document.querySelector('#Img067'));
observer.observe(document.querySelector('#Img068'));
observer.observe(document.querySelector('#Img069'));
observer.observe(document.querySelector('#Img070'));
observer.observe(document.querySelector('#Img071'));
observer.observe(document.querySelector('#Img072'));
observer.observe(document.querySelector('#Img073'));
observer.observe(document.querySelector('#Img074'));
observer.observe(document.querySelector('#Img075'));
observer.observe(document.querySelector('#Img076'));
observer.observe(document.querySelector('#Img077'));
observer.observe(document.querySelector('#Img078'));
observer.observe(document.querySelector('#Img079'));
observer.observe(document.querySelector('#Img080'));
observer.observe(document.querySelector('#Img081'));
observer.observe(document.querySelector('#Img082'));
observer.observe(document.querySelector('#Img083'));
observer.observe(document.querySelector('#Img084'));
observer.observe(document.querySelector('#Img085'));
observer.observe(document.querySelector('#Img086'));
observer.observe(document.querySelector('#Img087'));
observer.observe(document.querySelector('#Img088'));
observer.observe(document.querySelector('#Img089'));
observer.observe(document.querySelector('#Img090'));
observer.observe(document.querySelector('#Img091'));
observer.observe(document.querySelector('#Img092'));
observer.observe(document.querySelector('#Img093'));
observer.observe(document.querySelector('#Img094'));
observer.observe(document.querySelector('#Img095'));
observer.observe(document.querySelector('#Img096'));
observer.observe(document.querySelector('#Img097'));
observer.observe(document.querySelector('#Img098'));