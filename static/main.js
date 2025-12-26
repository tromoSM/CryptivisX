window.addEventListener("DOMContentLoaded",function(){
let audio$voulume
if(localStorage.getItem("options-audio-volume")){
audio$voulume=localStorage.getItem("options-audio-volume")
}
else{audio$voulume=0.7}
  const orgAud=this.window.Audio
  window.Audio=function(...args){
  const audio=new orgAud(...args)
  audio.volume=audio$voulume
  return audio
}
if(localStorage.getItem("option-theme")){
 if(localStorage.getItem('option-theme')=="dark"){
    document.documentElement.setAttribute("data-yo");
    document.querySelector(`[toggle=appearence]`).setAttribute('selectedtoggle','true')
}
else{
    document.documentElement.removeAttribute("data-yo");
    document.querySelector(`[toggle=appearence]`).setAttribute('selectedtoggle','false')
}
}

document.querySelectorAll(`[setting]`).forEach(yo=>{
   let yoo=yo.getAttribute("setting")
   let te=document.createElement('p')
   yo.appendChild(te)
   let yooo=document.createElement('div')
   yooo.setAttribute("tromoSM",'toggle$0')
   yooo.setAttribute('toggle',yoo)
   let yoooo=document.createElement("div")
   yoooo.setAttribute("tromoSM",'toggle$inside')
   yooo.appendChild(yoooo)
   yo.appendChild(yooo)
   if(yoo=="appearence"){
   te.innerHTML="Dark mode"
   te.setAttribute('tr-refresh','ascii')
   }
   te.addEventListener('click',function(){
      if(yoo=="appearence"){
         document.documentElement.toggleAttribute("data-yo");
      }
   })
   
})
document.querySelectorAll(`[tromoSM='toggle$0']`).forEach(yo=>{
   yo.addEventListener('click',function(){
   if(yo.getAttribute('selectedtoggle')=='true'){
      yo.setAttribute('selectedtoggle','false')
      yo.closest('[setting]').querySelector('[tr-refresh=ascii]').click()
      localStorage.setItem("option-theme",'light')
      
   }
   else{
      yo.setAttribute('selectedtoggle','true')
      yo.closest('[setting]').querySelector('[tr-refresh=ascii]').click()
      localStorage.setItem("option-theme",'dark')
   }
   })
})

document.querySelector(`[tromoSM=flex-full-backdrop-event]`).addEventListener('click',function(){
      document.querySelector(`[tromoSM="flex-full-backdrop"]`).style.display="none"
   })
   window.addEventListener('keydown',function(dih){
     if(dih.key=="Escape"){
      document.querySelector(`[tromoSM="flex-full-backdrop"]`).style.display="none"
     }
   })
   document.querySelector(`[action="qrKEY1"]`).addEventListener('click',function(){
      document.querySelector(`[tromoSM="flex-full-backdrop"]`).style.display="flex"
   })
   document.querySelectorAll(`[updateAFTER="opening"]`).forEach(yo=>{
      yo.style.display="none"
    })
      document.querySelectorAll(`[updateAFTER="encrypt"]`).forEach(yo=>{
      yo.style.display="none"
    })
   const i=document.querySelectorAll(`[tromoSM=each-loader]`)
let ist=0
i.forEach((is,ii)=>{
   is.style.animationDelay=`-${(ii/i.length)*2}s`
   ist+=0.5
   const lest=(360/i.length)*ii
   is.style.transform=`rotate(${lest}deg) translate(7px) rotate(-90deg)`})
document.querySelector("MINIMIZE").addEventListener("click",function(){
  window.pywebview.api.min({})
 })
 document.querySelector("CLOSE").addEventListener("click",function(){
    window.pywebview.api.close({})
 })
n=0 
 document.querySelector("RESTORE").addEventListener("click",function(){
 if(n==0){
    window.pywebview.api.max({})
    n=67
 }
 else{
    window.pywebview.api.res({})
    n=0
 }
 })
async function mainF(){
         document.querySelectorAll(`[onerr=true]`).forEach(yo=>{
         yo.remove()
      })
    const io=await window.pywebview.api.mainf(null);
    if(io){

    if(document.querySelectorAll('[tromoSM=main-prev]')){
     document.querySelectorAll('[tromoSM=main-prev]').forEach(yo=>{
        yo.remove()
     })
    }
    document.querySelectorAll('video').forEach(yo=>{
        yo.remove()
     })
    if(document.querySelectorAll('[tromoSM=main-prev]')){
    document.querySelectorAll('[re=move]').forEach(yo=>{
     yo.remove()
    })}
    const nggg=await window.pywebview.api.mainI()
    document.querySelectorAll(`[updateAFTER="opening"]`).forEach(yo=>{
      yo.style.display="block"
    })


    document.querySelector('[fill="fullpath1"]').innerHTML=nggg[0]
    document.querySelector('[fill="filename1"]').innerHTML=nggg[1]
    document.querySelector('[fill="filesize1"]').innerHTML=`${nggg[2]}mb`
    document.querySelector(`[fill=state1]`).innerHTML="Not encrypted"
    let ioa=`/imim-preview?path=${encodeURIComponent(io)}`
    const dihtouchinshi=io.split('.').pop().toLowerCase()
     if(['png','jpg','jpeg','webp','bmp','gif'].includes(dihtouchinshi)){
        let yo=document.createElement('img')
        yo.src=ioa
        yo.setAttribute('tromoSM','main-prev')
        document.querySelector(`[input="encode"]`).appendChild(yo)
     }
     if(['mp4','mov','avi','mkv','webm'].includes(dihtouchinshi)){
        let yo=document.createElement('video')
        yoo=document.createElement('source')
        yoo.src=ioa
        yo.autoplay=true
        yo.muted=true
        yo.appendChild(yoo)
        let player1=document.createElement('button')
        let player2=document.createElement('button')
        player2.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg fill="#ffffffff" width="24px" height="24px" viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M7.676 4.938v9.63c0 .61-.353.756-.784.325l-2.896-2.896H2.02A1.111 1.111 0 0 1 .911 10.89V8.618a1.112 1.112 0 0 1 1.108-1.109h1.977l2.896-2.896c.43-.43.784-.284.784.325zm7.251 6.888a.554.554 0 1 1-.784.784l-2.072-2.073-2.073 2.073a.554.554 0 1 1-.784-.784l2.073-2.073L9.214 7.68a.554.554 0 0 1 .784-.783L12.07 8.97l2.072-2.073a.554.554 0 0 1 .784.783l-2.072 2.073z"/></svg>`
        player1.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z" fill="#ffffffff"/></svg>`

        muteinf=1
        player2.addEventListener('click',function(gurtyo){
            gurtyo.stopPropagation() 
            if(muteinf==1){
                yo.muted=true
                muteinf=61
                player2.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg fill="#ffffffff" width="24px" height="24px" viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M7.676 4.938v9.63c0 .61-.353.756-.784.325l-2.896-2.896H2.02A1.111 1.111 0 0 1 .911 10.89V8.618a1.112 1.112 0 0 1 1.108-1.109h1.977l2.896-2.896c.43-.43.784-.284.784.325zm7.251 6.888a.554.554 0 1 1-.784.784l-2.072-2.073-2.073 2.073a.554.554 0 1 1-.784-.784l2.073-2.073L9.214 7.68a.554.554 0 0 1 .784-.783L12.07 8.97l2.072-2.073a.554.554 0 0 1 .784.783l-2.072 2.073z"/></svg>`
            }
            else{
                player2.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg fill="#ffffffff" width="24px" height="24px" viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M7.098 4.769v9.63c0 .61-.353.756-.784.325L3.42 11.828H1.442A1.112 1.112 0 0 1 .333 10.72V8.448A1.112 1.112 0 0 1 1.442 7.34h1.977l2.895-2.896c.431-.43.784-.285.784.325zm2.076 7.474a.553.553 0 0 0 .392-.163 3.53 3.53 0 0 0 0-4.992.554.554 0 1 0-.784.784 2.422 2.422 0 0 1 0 3.425.554.554 0 0 0 .392.946zm2.184 1.629a6.059 6.059 0 0 0 0-8.575.554.554 0 0 0-.784.783 4.955 4.955 0 0 1 0 7.008.554.554 0 0 0 .784.784zm1.79 1.79a8.59 8.59 0 0 0 0-12.157.554.554 0 0 0-.783.784 7.481 7.481 0 0 1 0 10.59.554.554 0 1 0 .784.784z"/></svg>`
                muteinf=1
                yo.muted=false
                
            }
        })
        playinf=1
        player1.addEventListener('click',function(gurt){
        gurt.stopPropagation() 
        if(playinf==1){
                yo.pause()
                playinf=67
        player1.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#ffffffff"/></svg>`

        }
        else{
                yo.play()
                playinf=1
        player1.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z" fill="#ffffffff"/></svg>`
        }
            })
        
        player1.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#ffffffff"/></svg>`
        document.querySelector(`[input="encode"]`).appendChild(yo)
        let yober=document.createElement('div')
        player1.setAttribute('re',`move`)
        player2.setAttribute('re',`move`)
        yober.appendChild(player1)
        yober.appendChild(player2)
        yober.setAttribute('tromoSM','playercontrols')
        document.querySelector(`[input="encode"]`).appendChild(yober)
        
     }
         document.querySelector(`[tromoSM=main-prev]`).onerror=()=>{
    yo=document.createElement(`div`)
    yo.setAttribute('onerr','true')
    yo.innerHTML=`<svg width="49.328125px" height="52.400390625px" direction="ltr" xmlns="http://www.w3.org/2000/svg" version="1.1"><g fill-rule="nonzero" transform="scale(1,-1) translate(0,-52.400390625)"><path fill-opacity="1.0" d="     M 24.6640625,5.37109375     C 36.115234375,5.37109375 45.482421875,14.73828125 45.482421875,26.2109375     C 45.482421875,37.662109375 36.115234375,47.029296875 24.6640625,47.029296875     C 13.212890625,47.029296875 3.845703125,37.662109375 3.845703125,26.2109375     C 3.845703125,14.73828125 13.212890625,5.37109375 24.6640625,5.37109375     Z     M 24.6640625,22.21484375     C 24.212890625,22.21484375 23.890625,22.623046875 23.890625,23.181640625     L 23.71875,35.40625     C 23.740234375,36.0078125 24.083984375,36.373046875 24.6640625,36.373046875     C 25.265625,36.373046875 25.609375,36.0078125 25.609375,35.40625     L 25.4375,23.181640625     C 25.4375,22.623046875 25.115234375,22.21484375 24.6640625,22.21484375     Z     M 24.6640625,15.984375     C 23.826171875,15.984375 23.181640625,16.693359375 23.181640625,17.48828125     C 23.181640625,18.26171875 23.826171875,18.970703125 24.6640625,18.970703125     C 25.501953125,18.970703125 26.16796875,18.26171875 26.16796875,17.48828125     C 26.16796875,16.693359375 25.501953125,15.984375 24.6640625,15.984375     Z " stroke-width="0" style="color: #ff3535;" fill="#ff3535" stroke="#ff3535"/></g></svg>media failed to preview (probably encrypted)`
    document.querySelector(`[input="encode"]`).appendChild(yo)}
    }
}

///////////////////
async function retrF(){
     window.pywebview.api.retrJS(document.querySelector(`[tromoSM='input-in-de']`).value)
    const io=await window.pywebview.api.retrf(null);
    
}
document.querySelectorAll(`main-page`).forEach(yo=>{
   if(yo.getAttribute("main")!=="true"){
    yo.style.display="none"
  }
})
document.querySelectorAll(`[click]`).forEach(yo=>{
   yo.addEventListener("click",function(){
      document.querySelectorAll(`[click][selected]`).forEach(a=>{
      a.removeAttribute("selected")
   })
   yo.setAttribute('selected','true-a-acc')
      if(yo.getAttribute("click")=="encrypt-pg"){
         document.querySelector(`[num="encrypt-pg"]`).style.display="flex"
         document.querySelector(`[num="decrypt-pg"]`).style.display="none"
         document.querySelector(`[num="about-pg"]`).style.display="none"
      }
      if(yo.getAttribute("click")=="decrypt-pg"){
         document.querySelector(`[num="encrypt-pg"]`).style.display="none"
         document.querySelector(`[num="about-pg"]`).style.display="none"
         document.querySelector(`[num="decrypt-pg"]`).style.display="flex"
      }
      if(yo.getAttribute("click")=="about-pg"){
         document.querySelector(`[num="encrypt-pg"]`).style.display="none"
         document.querySelector(`[num="about-pg"]`).style.display="flex"
         document.querySelector(`[num="decrypt-pg"]`).style.display="none"
      }
   })
})
document.querySelector(`[f="input-in-de$$focus"]`).addEventListener('click',function(){
   document.querySelector(`[tromoSM="input-in-de"]`).focus()
})
document.querySelector(`[tromoSM="input-in-de"]`).addEventListener('input',function(){
   document.querySelector(`[tromoSM="input-in-de-ux"]`).style.opacity="1"
if(document.querySelector(`[tromoSM='input-in-de']`).value.length>=65){
   document.querySelector(`[t=after]`).style.transform="scale(1) rotate(0deg)"
   document.querySelector(`[t=flow]`).style.transform="scale(0) rotate(-20deg)"
   document.querySelector(`[tromoSM="input-in-de-ux"]`).setAttribute('green','typeshitc')
}
else{
   document.querySelector(`[t=after]`).style.transform="scale(0) rotate(20deg)"
   document.querySelector(`[t=flow]`).style.transform="scale(1) rotate(0deg)"
   document.querySelector(`[tromoSM="input-in-de-ux"]`).removeAttribute('green')
}
})
let yoyong="error"
document.querySelector('[default=a]')?.click()
document.querySelector(`[tromoSM=input-io-en]`).addEventListener('click',async function(){
   document.querySelector(`[tromoSM="load"]`).style.display="flex"
   try{      
      const ngg=await window.pywebview.api.mainE()
      yoyong=ngg
      document.querySelectorAll(`[fill="key1"]`).forEach(yo=>{
         yo.innerHTML=`<p>${ngg}</p>`+`<div tromoSM="gradient-end-key"></div>` 
      })
      document.querySelectorAll(`[fill="key2"]`).forEach(yo=>{
         yo.innerHTML=ngg
      })
      document.querySelector(`[fill=state1]`).innerHTML="Encrypted"
      document.querySelectorAll(`[removeAFTER="encrypt"]`).forEach(yowhat=>{
       yowhat.style.display='none'
      
      })
      document.querySelectorAll(`[updateAFTER="encrypt"]`).forEach(yo=>{
      yo.style.display="flex"
      document.querySelector(`[tromoSM=qr-fill-each-refresh]`).src=`static/tempQR.svg?v=${Date.now()}`
   })
}
   
   
   catch(dih){
    document.querySelector(`[fill=state1]`).innerHTML=`Failed to encrypt : ${dih} `
      alert(`Error : ${dih}`)
   }
   finally{
   document.querySelector(`[tromoSM="load"]`).style.display="none"
  if(yoyong!=="error"){
   await navigator.clipboard.writeText(yoyong)
   imim$NOTIFF$small=document.createElement(`div`)
   imim$NOTIFF$small$inside=document.createElement(`div`)
   imim$NOTIFF$small.setAttribute(`tromoSM`,'notifi-wrap-small')
   imim$NOTIFF$small$inside.setAttribute(`tromoSM`,'notification')
   imim$NOTIFF$small.appendChild(imim$NOTIFF$small$inside)
   document.body.appendChild(imim$NOTIFF$small)
   imim$NOTIFF$small$inside.innerHTML=`<svg viewBox="0 0 47 52" direction="ltr" xmlns="http://www.w3.org/2000/svg" version="1.1"><g fill-rule="nonzero" transform="scale(1,-1) translate(0,-52.958984375)"><path fill="white" stroke="white" fill-opacity="1.0" d="     M 23.955078125,5.779296875     C 24.470703125,5.779296875 25.0078125,6.05859375 25.373046875,6.2734375     C 37.0390625,13.470703125 40.541015625,15.533203125 40.541015625,22.04296875     L 40.541015625,38.15625     C 40.541015625,40.541015625 39.9609375,41.3359375 37.662109375,42.216796875     C 33.55859375,43.763671875 29.60546875,45.41796875 25.501953125,46.857421875     C 24.943359375,47.05078125 24.4921875,47.1796875 23.955078125,47.1796875     C 23.439453125,47.1796875 22.98828125,47.05078125 22.4296875,46.857421875     C 18.34765625,45.310546875 14.3515625,43.763671875 10.26953125,42.216796875     C 7.970703125,41.37890625 7.390625,40.541015625 7.390625,38.15625     L 7.390625,22.04296875     C 7.390625,15.533203125 11.0,13.62109375 22.55859375,6.2734375     C 22.923828125,6.05859375 23.4609375,5.779296875 23.955078125,5.779296875     Z     M 16.091796875,19.228515625     L 16.091796875,28.294921875     C 16.091796875,30.078125 16.88671875,30.8515625 18.51953125,30.8515625     L 18.51953125,34.07421875     C 18.51953125,37.533203125 20.7109375,39.83203125 23.955078125,39.83203125     C 27.220703125,39.83203125 29.412109375,37.533203125 29.412109375,34.07421875     L 29.412109375,30.8515625     C 31.044921875,30.8515625 31.83984375,30.078125 31.83984375,28.294921875     L 31.83984375,19.228515625     C 31.83984375,17.4453125 31.044921875,16.671875 29.43359375,16.671875     L 18.498046875,16.671875     C 16.88671875,16.671875 16.091796875,17.4453125 16.091796875,19.228515625     Z     M 19.59375,30.8515625     L 28.337890625,30.8515625     L 28.337890625,34.052734375     C 28.337890625,36.888671875 26.576171875,38.7578125 23.955078125,38.7578125     C 21.35546875,38.7578125 19.59375,36.888671875 19.59375,34.052734375     Z " stroke-width="0.1"/></g></svg>encryption successful`
   notiff$osund=new Audio(`static/pulse.mp3`)
   notiff$osund.play()
   await sleep(2100)
      alert(ngg)
   imim$NOTIFF$small.remove()
  }   
  else{
    await navigator.clipboard.writeText(yoyong)
   imim$NOTIFF$small=document.createElement(`div`)
   imim$NOTIFF$small$inside=document.createElement(`div`)
   imim$NOTIFF$small.setAttribute(`tromoSM`,'notifi-wrap-small')
   imim$NOTIFF$small$inside.setAttribute(`tromoSM`,'notification')
   imim$NOTIFF$small.appendChild(imim$NOTIFF$small$inside)
   imim$NOTIFF$small$inside.style.color="#ff3535"
   document.body.appendChild(imim$NOTIFF$small)
   imim$NOTIFF$small$inside.innerHTML=`<svg viewBox="0 0 47 52" direction="ltr" xmlns="http://www.w3.org/2000/svg" version="1.1"><g fill-rule="nonzero" transform="scale(1,-1) translate(0,-52.958984375)"><path fill="#ff3535" stroke="#ff3535" fill-opacity="1.0" d="     M 23.955078125,5.779296875     C 24.470703125,5.779296875 25.0078125,6.05859375 25.373046875,6.2734375     C 37.0390625,13.470703125 40.541015625,15.533203125 40.541015625,22.04296875     L 40.541015625,38.15625     C 40.541015625,40.541015625 39.9609375,41.3359375 37.662109375,42.216796875     C 33.55859375,43.763671875 29.60546875,45.41796875 25.501953125,46.857421875     C 24.943359375,47.05078125 24.4921875,47.1796875 23.955078125,47.1796875     C 23.439453125,47.1796875 22.98828125,47.05078125 22.4296875,46.857421875     C 18.34765625,45.310546875 14.3515625,43.763671875 10.26953125,42.216796875     C 7.970703125,41.37890625 7.390625,40.541015625 7.390625,38.15625     L 7.390625,22.04296875     C 7.390625,15.533203125 11.0,13.62109375 22.55859375,6.2734375     C 22.923828125,6.05859375 23.4609375,5.779296875 23.955078125,5.779296875     Z     M 16.091796875,19.228515625     L 16.091796875,28.294921875     C 16.091796875,30.078125 16.88671875,30.8515625 18.51953125,30.8515625     L 18.51953125,34.07421875     C 18.51953125,37.533203125 20.7109375,39.83203125 23.955078125,39.83203125     C 27.220703125,39.83203125 29.412109375,37.533203125 29.412109375,34.07421875     L 29.412109375,30.8515625     C 31.044921875,30.8515625 31.83984375,30.078125 31.83984375,28.294921875     L 31.83984375,19.228515625     C 31.83984375,17.4453125 31.044921875,16.671875 29.43359375,16.671875     L 18.498046875,16.671875     C 16.88671875,16.671875 16.091796875,17.4453125 16.091796875,19.228515625     Z     M 19.59375,30.8515625     L 28.337890625,30.8515625     L 28.337890625,34.052734375     C 28.337890625,36.888671875 26.576171875,38.7578125 23.955078125,38.7578125     C 21.35546875,38.7578125 19.59375,36.888671875 19.59375,34.052734375     Z " stroke-width="0.1"/></g></svg>encryption failed`
   notiff$osund=new Audio(`static/funk.mp3`)
   notiff$osund.play()
   await sleep(2100)
      alert(ngg)
   imim$NOTIFF$small.remove()
  }
}
})
document.querySelector(`[action="PASTEkey"]`).addEventListener('click',async function(){
document.querySelector(`[tromoSM="input-in-de"]`).value=await navigator.clipboard.readText()
})
function sleep(dih){
   return new Promise(resolve=>setTimeout(resolve,dih))
}
document.querySelector(`[action="copyKEY1"]`).addEventListener('click',async function(){
try{
   await navigator.clipboard.writeText(yoyong)
   imim$NOTIFF$small=document.createElement(`div`)
   imim$NOTIFF$small$inside=document.createElement(`div`)
   imim$NOTIFF$small.setAttribute(`tromoSM`,'notifi-wrap-small')
   imim$NOTIFF$small$inside.setAttribute(`tromoSM`,'notification')
   imim$NOTIFF$small.appendChild(imim$NOTIFF$small$inside)
   document.body.appendChild(imim$NOTIFF$small)
   imim$NOTIFF$small$inside.innerHTML=`<svg viewBox="0 0 55 55" direction="ltr" xmlns="http://www.w3.org/2000/svg" version="1.1"><g fill-rule="nonzero" transform="scale(1,-1) translate(0,-55.4296875)"><path fill="white" d="     M 13.70703125,34.93359375     C 13.70703125,39.552734375 16.134765625,41.958984375 20.75390625,41.958984375     L 39.939453125,41.958984375     L 39.939453125,43.849609375     C 39.939453125,47.416015625 38.02734375,49.37109375 34.41796875,49.37109375     L 11.0,49.37109375     C 7.390625,49.37109375 5.478515625,47.458984375 5.478515625,43.849609375     L 5.478515625,20.58203125     C 5.478515625,16.994140625 7.390625,15.08203125 11.0,15.08203125     L 13.70703125,15.08203125     Z     M 20.861328125,6.05859375     L 44.279296875,6.05859375     C 47.888671875,6.05859375 49.80078125,7.9921875 49.80078125,11.537109375     L 49.80078125,34.826171875     C 49.80078125,38.37109375 47.888671875,40.34765625 44.279296875,40.34765625     L 20.861328125,40.34765625     C 17.251953125,40.34765625 15.33984375,38.435546875 15.33984375,34.826171875     L 15.33984375,11.55859375     C 15.33984375,7.970703125 17.251953125,6.05859375 20.861328125,6.05859375     Z " stroke="white" fill-opacity="1" stroke-width="0"/></g></svg> key copied to your clipboard`
   notiff$osund=new Audio(`static/funk.mp3`)
   notiff$osund.play()
   await sleep(2100)
   imim$NOTIFF$small.remove()
}
catch(dih){
   notiff$osund=new Audio(`static/payment_failure.mp3`)
   notiff$osund.play()
   alert("Error : ",dih)
   console.error("ERROR ",dih)
}

})
document.querySelector(`[tromoSM=input-io-de]`).addEventListener('click',async function(){
   document.querySelector(`[tromoSM="load"]`).style.display="flex"
   try{
      const ngg=await window.pywebview.api.retrJS(document.querySelector(`[tromoSM='input-in-de']`).value)
      const nagg=await window.pywebview.api.mainD()
   document.querySelector(`[tromoSM="load"]`).style.display="none"
   imim$NOTIFF$small=document.createElement(`div`)
   imim$NOTIFF$small$inside=document.createElement(`div`)
   imim$NOTIFF$small.setAttribute(`tromoSM`,'notifi-wrap-small')
   imim$NOTIFF$small$inside.setAttribute(`tromoSM`,'notification')
   imim$NOTIFF$small.appendChild(imim$NOTIFF$small$inside)
   document.body.appendChild(imim$NOTIFF$small)
   imim$NOTIFF$small$inside.innerHTML=`<svg viewBox="0 0 47 52" direction="ltr" xmlns="http://www.w3.org/2000/svg" version="1.1"><g fill-rule="nonzero" transform="scale(1,-1) translate(0,-52.958984375)"><path fill="white" stroke="white" fill-opacity="1.0" d="     M 23.955078125,5.779296875     C 24.470703125,5.779296875 25.0078125,6.05859375 25.373046875,6.2734375     C 37.0390625,13.470703125 40.541015625,15.533203125 40.541015625,22.04296875     L 40.541015625,38.15625     C 40.541015625,40.541015625 39.9609375,41.3359375 37.662109375,42.216796875     C 33.55859375,43.763671875 29.60546875,45.41796875 25.501953125,46.857421875     C 24.943359375,47.05078125 24.4921875,47.1796875 23.955078125,47.1796875     C 23.439453125,47.1796875 22.98828125,47.05078125 22.4296875,46.857421875     C 18.34765625,45.310546875 14.3515625,43.763671875 10.26953125,42.216796875     C 7.970703125,41.37890625 7.390625,40.541015625 7.390625,38.15625     L 7.390625,22.04296875     C 7.390625,15.533203125 11.0,13.62109375 22.55859375,6.2734375     C 22.923828125,6.05859375 23.4609375,5.779296875 23.955078125,5.779296875     Z     M 16.091796875,19.228515625     L 16.091796875,28.294921875     C 16.091796875,30.078125 16.88671875,30.8515625 18.51953125,30.8515625     L 18.51953125,34.07421875     C 18.51953125,37.533203125 20.7109375,39.83203125 23.955078125,39.83203125     C 27.220703125,39.83203125 29.412109375,37.533203125 29.412109375,34.07421875     L 29.412109375,30.8515625     C 31.044921875,30.8515625 31.83984375,30.078125 31.83984375,28.294921875     L 31.83984375,19.228515625     C 31.83984375,17.4453125 31.044921875,16.671875 29.43359375,16.671875     L 18.498046875,16.671875     C 16.88671875,16.671875 16.091796875,17.4453125 16.091796875,19.228515625     Z     M 19.59375,30.8515625     L 28.337890625,30.8515625     L 28.337890625,34.052734375     C 28.337890625,36.888671875 26.576171875,38.7578125 23.955078125,38.7578125     C 21.35546875,38.7578125 19.59375,36.888671875 19.59375,34.052734375     Z " stroke-width="0.1"/></g></svg>decryption successful`
   notiff$osund=new Audio(`static/pulse.mp3`)
   notiff$osund.play()
   await sleep(2100)
   imim$NOTIFF$small.remove()
   }
   catch(dih){
   document.querySelector(`[tromoSM="load"]`).style.display="none"
   imim$NOTIFF$small=document.createElement(`div`)
   imim$NOTIFF$small$inside=document.createElement(`div`)
   imim$NOTIFF$small.setAttribute(`tromoSM`,'notifi-wrap-small')
   imim$NOTIFF$small$inside.setAttribute(`tromoSM`,'notification')
   imim$NOTIFF$small.appendChild(imim$NOTIFF$small$inside)
   imim$NOTIFF$small$inside.style.color="#ff3535"
   document.body.appendChild(imim$NOTIFF$small)
   imim$NOTIFF$small$inside.innerHTML=`<svg viewBox="0 0 47 52" direction="ltr" xmlns="http://www.w3.org/2000/svg" version="1.1"><g fill-rule="nonzero" transform="scale(1,-1) translate(0,-52.958984375)"><path fill="#ff3535" stroke="#ff3535" fill-opacity="1.0" d="     M 23.955078125,5.779296875     C 24.470703125,5.779296875 25.0078125,6.05859375 25.373046875,6.2734375     C 37.0390625,13.470703125 40.541015625,15.533203125 40.541015625,22.04296875     L 40.541015625,38.15625     C 40.541015625,40.541015625 39.9609375,41.3359375 37.662109375,42.216796875     C 33.55859375,43.763671875 29.60546875,45.41796875 25.501953125,46.857421875     C 24.943359375,47.05078125 24.4921875,47.1796875 23.955078125,47.1796875     C 23.439453125,47.1796875 22.98828125,47.05078125 22.4296875,46.857421875     C 18.34765625,45.310546875 14.3515625,43.763671875 10.26953125,42.216796875     C 7.970703125,41.37890625 7.390625,40.541015625 7.390625,38.15625     L 7.390625,22.04296875     C 7.390625,15.533203125 11.0,13.62109375 22.55859375,6.2734375     C 22.923828125,6.05859375 23.4609375,5.779296875 23.955078125,5.779296875     Z     M 16.091796875,19.228515625     L 16.091796875,28.294921875     C 16.091796875,30.078125 16.88671875,30.8515625 18.51953125,30.8515625     L 18.51953125,34.07421875     C 18.51953125,37.533203125 20.7109375,39.83203125 23.955078125,39.83203125     C 27.220703125,39.83203125 29.412109375,37.533203125 29.412109375,34.07421875     L 29.412109375,30.8515625     C 31.044921875,30.8515625 31.83984375,30.078125 31.83984375,28.294921875     L 31.83984375,19.228515625     C 31.83984375,17.4453125 31.044921875,16.671875 29.43359375,16.671875     L 18.498046875,16.671875     C 16.88671875,16.671875 16.091796875,17.4453125 16.091796875,19.228515625     Z     M 19.59375,30.8515625     L 28.337890625,30.8515625     L 28.337890625,34.052734375     C 28.337890625,36.888671875 26.576171875,38.7578125 23.955078125,38.7578125     C 21.35546875,38.7578125 19.59375,36.888671875 19.59375,34.052734375     Z " stroke-width="0.1"/></g></svg>decryption failed`
   notiff$osund=new Audio(`static/funk.mp3`)
   notiff$osund.play()
   await sleep(2100)
   imim$NOTIFF$small.remove()
   }
   finally{
   document.querySelector(`[tromoSM="load"]`).style.display="none"
   }
})

 document.querySelector(`[input="encode"]`).addEventListener('click',function(){
    mainF()
 })
  document.querySelector(`[input="decode"]`).addEventListener('click',function(){
    retrF()
 })
    document.querySelector(`[tromoSM="input-io-choosean"]`).addEventListener("click",function(){
      document.querySelector(`[input="encode"]`).click()
   })
  document.querySelectorAll(`[help]`).forEach(yo=>{
      yoo=yo.getAttribute('help')
      yo.addEventListener('click',function(){
    notiff$osund=new Audio(`static/pulse.mp3`)
   notiff$osund.play()
      if(yoo=="qr"){
         alert("Help\n\nYou can share the one time key via this qr by scaning this qr code saving you time when sharing this code to someone.")
      }
      })
   })
})
