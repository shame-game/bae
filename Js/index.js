const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);

/* load */ 
window.onload = ()=>{
    vam('.loadweb').remove();
    setTimeout(()=>{
        vam('.intro').remove()
    },2500)
}; 

scroll.on('scroll', (args) => {
    if(typeof args.currentElements['libo1412a1'] === 'object') {
        let progress = args.currentElements['libo1412a1'].progress;
        let con = Math.round(progress);
        if( con === 0 ){
            let ggg = vam(".libo1412a1-box>div").style.animation;
            if(ggg == ''){
                vams(".libo1412a1-box>div").forEach((tab)=> {
                    tab.style.animation = "intrsdsd .6s .4s linear forwards";
                });
                vam(".libo1412a1-title").style.animation = "intrsdsd .5s .4s linear forwards";
            }
        }
    }
});

scroll.on('scroll', (args) => {
    if(typeof args.currentElements['intro1412c2-img-content1'] === 'object') {
        let progress = args.currentElements['intro1412c2-img-content1'].progress;
        let con = Math.round(progress);
        if( con === 0 ){
            let ggg = vam(".intro1412c2-img1_before").style.animation;
            let ggd = vam("#intro1412c2-img1_1").style.animation;
            let ggf = vam(".intro1412c2-img1_before>div").style.animation;
            if(ggg == ''){
                vam(".intro1412c2-img1_before").style.animation = "intro1412c2-img1_before .3s .5s  linear forwards";
                vam("#intro1412c2-img1_1").style.animation = "intro1412c2-img1_1 .3s .7s linear forwards";
                vam(".intro1412c2-img1_before>div").style.animation = "intro1412c2-img1_beforediv .3s .5s  linear forwards";
            }
        }
    }
});
scroll.on('scroll', (args) => {
    if(typeof args.currentElements['intro1412c2-img-content2'] === 'object') {
        let progress = args.currentElements['intro1412c2-img-content2'].progress;
        let con = Math.round(progress);
        if( con === 0 ){
            let ggg = vam("#intro1412c2-img2").style.animation;
            
            if(ggg == ''){
                vam("#intro1412c2-img2").style.animation = "intro1412c2-img2 .3s .6s linear forwards";
            }
        }
    }
});