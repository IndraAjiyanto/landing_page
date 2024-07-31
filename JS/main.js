const home = document.querySelector('.home')
function klikBeranda(){
    const beranda = document.querySelector('.content')
    if (beranda){
    beranda.scrollIntoView({ behavior: 'smooth'})
}
}
function mouseBeranda(){
    home.style.opacity = '50%'
}
function keluarBeranda(){
    home.style.opacity = '100%'
}



const caraBeli = document.querySelector('.caraBeli')
function klikCaraBeli(){
    const tutorial = document.querySelector('.content1')
    if (tutorial){
    tutorial.scrollIntoView({ behavior: 'smooth'})
}
}
function mouseCaraBeli(){
    caraBeli.style.opacity = '50%'
}
function keluarCaraBeli(){
    caraBeli.style.opacity = '100%'
}




const biodata = document.querySelector('.biodata')
function klikBiodata(){
    const dataDiri = document.querySelector('.content3')
    if (dataDiri){
        dataDiri.scrollIntoView({behavior: 'smooth'})
    }
}
function mouseBiodata(){
    biodata.style.opacity = '50%'
}
function keluarBiodata(){
    biodata.style.opacity = '100%'
}


const pesan = document.querySelector('.submit')
function klikPesan(){
    const form = document.querySelector('.content2')
    if (form){
        form.scrollIntoView({behavior:'smooth'})
    }
    pesan.style.border = '1px solid #ef8809' 
    pesan.style.background = 'aliceblue' 
    pesan.style.color = '#ef8809' 
}
function mousePesan(){
    pesan.style.border = '1px solid #ef8809' 
    pesan.style.background = 'aliceblue' 
    pesan.style.color = '#ef8809' 
}
function keluarPesan(){
    pesan.style.border = '1px solid #ef8809' 
    pesan.style.background = '#ef8809' 
    pesan.style.color = 'aliceblue' 
}





const pesan1 = document.querySelector('.pesan')
function klikPesan1(){
    const form1 = document.querySelector('.content2')
    if (form1){
        form1.scrollIntoView({behavior:'smooth'})
    }
    pesan1.style.border = '1px solid #ef8809' 
    pesan1.style.background = 'aliceblue' 
    pesan1.style.color = '#ef8809' 
}
function mousePesan1(){
    pesan1.style.border = '1px solid #ef8809' 
    pesan1.style.background = ' #2E4374 ' 
    pesan1.style.color = '#ef8809' 
}
function keluarPesan1(){
    pesan1.style.border = '1px solid #ef8809' 
    pesan1.style.background = '#ef8809' 
    pesan1.style.color = 'aliceblue' 
}





const beli = document.querySelector('.beli')
function klikBeli(){
    beli.style.border = '2px solid #ef8809' 
    beli.style.background = 'aliceblue' 
    beli.style.color = '#ef8809' 
}
function mouseBeli(){
    beli.style.border = '2px solid #ef8809' 
    beli.style.background = ' aliceblue ' 
    beli.style.color = '#ef8809' 
}
function keluarBeli(){
    beli.style.border = '2px solid #ef8809' 
    beli.style.background = '#2E4374' 
    beli.style.color = 'aliceblue' 
}