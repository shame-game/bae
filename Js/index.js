const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);

window.onload = () => {
    vam('.loadweb').remove();
    vam('#mainintro').innerHTML = intromain
    setTimeout(() => {
        vam('.intro').remove()
    }, 2500)
};
console.log(
    vam('.home').getAttribute('class')
);
vams('.template').forEach((tab) =>{
    tab.addEventListener('click', () => {  
        if(vam('.template').getAttribute('class') === 'template'){
            vam('#mainintro').innerHTML = intro;
            vam('.intrologo-hidenTemplate>h2').innerText = 'Template'
            vam('.intrologo-hidenTemplate>p').innerText = 'Landing'
            vam('.intrologo-hidenTemplate>span').innerText = 'Pages'
            vam('.header1412a1-list>.acc').classList.remove('acc');
            vam('.template').classList.add('acc');
            vams('.main>section').forEach((tab)=>{
                tab.remove()
            })
            vam('.main').innerHTML =  list1412a1 + dot;
            scroll.update()
        } 
    })
})

vams('.create').forEach((tab)=>{
    tab.addEventListener('click', () => {   
    if(vam('.create').getAttribute('class') == ''){
        vam('#mainintro').innerHTML = intro;
        vam('.intrologo-hidenTemplate>h2').innerText = 'Template'
        vam('.intrologo-hidenTemplate>p').innerText = 'Landing'
        vam('.intrologo-hidenTemplate>span').innerText = 'Pages'
        vam('.header1412a1-list>.acc').classList.remove('acc');
        vam('.create').classList.add('acc');
        vams('.main>section').forEach((tab)=>{
            tab.remove()
        })
        vam('.main').innerHTML =  libo1412a1 + intro1412c2;
        scroll.update()
    } 
})
})

vam('.home').addEventListener('click', () => {
    if(vam('.home').getAttribute('class') === 'home'){
        vam('#mainintro').innerHTML = intro;
        vam('.intrologo-hidenTemplate>h2').innerText = 'Home'
        vam('.intrologo-hidenTemplate>p').innerText = 'Page'
        vam('.intrologo-hidenTemplate>span').innerText = 'Vamnaone'
        vam('.header1412a1-list>.acc').classList.remove('acc');
        vam('.home').classList.add('acc');
        location.reload()
    } 
})