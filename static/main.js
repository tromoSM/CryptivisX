window.addEventListener("DOMContentLoaded",function(){
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
    let ioa=`/imim-preview?path=${encodeURIComponent(io)}`
    const dihtouchinshi=io.split('.').pop().toLowerCase()
     if(['png','jpg','jpeg','webp','bmp','gif'].includes(dihtouchinshi)){
        let yo=document.createElement('img')
        yo.src=ioa
        yo.setAttribute('tromoSM','main-prev')
        document.querySelector(`[tromoSM="input-io-main"]`).appendChild(yo)
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
        document.querySelector(`[tromoSM="input-io-main"]`).appendChild(yo)
        let yober=document.createElement('div')
        player1.setAttribute('re',`move`)
        player2.setAttribute('re',`move`)
        yober.appendChild(player1)
        yober.appendChild(player2)
        yober.setAttribute('tromoSM','playercontrols')
        document.querySelector(`[tromoSM="input-io-main"]`).appendChild(yober)
        
     }
    }
}
 document.querySelector(`[tromoSM="input-io-main"]`).addEventListener('click',function(){
    mainF()
 })
})
