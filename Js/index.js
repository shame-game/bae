const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);

/* load */ 
window.onload = ()=>{
    vam('.loadweb').remove();
}; 

/* #c661412b2 */ 
vam('#c661412b2-iframe_click').addEventListener('click', () => {
    vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
    vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
    vam('.main').removeAttribute('data-scroll-container')
    var c661412b2Iframe = `<iframe  class="c661412b2-iframe" src="https://www.youtube.com/embed/2rq6Vph2Sfc?si=xLhapCgHCTZxgnuT" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
    vam('.c661412b2-background_click').addEventListener('click', () => {
        vam('.c661412b2-background_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe').remove()
    })
})
/* #c661412b1 */ 
vam('.c661412b1button-click').addEventListener('click', () => {
    vam('.c661412b1-background_click').setAttribute('style', 'display:flex')
    vam('.c661412b1-iframe_click').setAttribute('style', 'display:flex')
    var c661412b1Iframe = `<iframe  class="c661412b1-iframe" src="https://www.youtube.com/embed/-BTOYVIdgr0?si=H5GXRph-jhJ6i7dM" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    vam('.c661412b1-iframe_click').innerHTML = c661412b1Iframe
    vam('.c661412b1-background_click').addEventListener('click', () => {
        vam('.c661412b1-background_click').setAttribute('style', 'display:none')
        vam('.c661412b1-iframe_click').setAttribute('style', 'display:none')
        vam('.c661412b1-iframe').remove()
    })
})
