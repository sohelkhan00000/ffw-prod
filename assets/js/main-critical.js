var jsLoad=(r,e,t,s)=>{let a=!1;var l;document.querySelectorAll("script").forEach(e=>{if(e.src==r)return!(a=!0)}),a?s(!0,"Script file already exist"):((l=document.createElement("script")).src=r,l.defer=e,l.onload=()=>{s(!0,"Script loaded successfuly")},l.onerror=()=>{s(!1,"Error occurred while loading script")},document[t].appendChild(l))},cssLoad=(r,e,t)=>{let s=!1;var a;document.querySelectorAll("link").forEach(e=>{if(e.href==r)return!(s=!0)}),s?t(!0,"Style file already exist"):((a=document.createElement("link")).href=r,a.rel="stylesheet",a.type="text/css",a.as="style",a.onload=()=>{t(!0,"Style loaded successfuly")},a.onerror=()=>{t(!1,"Error occurred while loading style")},document[e].appendChild(a))},loadGA=()=>{jsLoad("https://www.googletagmanager.com/gtag/js?id=G-HXL5BF20G0",!0,"head",(e,r)=>{function t(){dataLayer.push(arguments)}e&&(window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","G-HXL5BF20G0"))})},lAll=()=>{loadGA(),cssLoad(server.serverPath+"/assets/plugins/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css","head",(e,r)=>{e&&cssLoad(server.serverPath+"/assets/style/main"+server.serverStyle,"head",(e,r)=>{e&&("/fuel-bills"==server.serverPage?cssLoad(server.serverPath+"/assets/style/fuel-receipt"+server.serverStyle,"head",(e,r)=>{}):"/"!=server.serverPage&&"/rent-receipt"!=server.serverPage||cssLoad(server.serverPath+"/assets/style/generate-receipt"+server.serverStyle,"head",(e,r)=>{}))})}),jsLoad("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",!0,"body",(e,r)=>{e&&jsLoad(server.serverPath+"/assets/js/main-page"+server.serverScript,!0,"body",(e,r)=>{e&&("/fuel-bills"==server.serverPage?jsLoad(server.serverPath+"/assets/js/fuel-receipt"+server.serverScript,!0,"body",(e,r)=>{}):"/"==server.serverPage||"/rent-receipt"==server.serverPage?jsLoad(server.serverPath+"/assets/js/generate-receipt"+server.serverScript,!0,"body",(e,r)=>{}):"/contact"==server.serverPage&&jsLoad(server.serverPath+"/assets/js/contact-us"+server.serverScript,!0,"body",(e,r)=>{}))})})},REle=(r,e,t)=>{document.querySelectorAll([e]).forEach(e=>{if(e.href==r)return e.remove(),t(!0,"file removed"),!1;t(!1,"file not found")})},addMeta=e=>{server.serverPage=window.location.pathname,"/"==server.serverPage||"/rent-receipt"==server.serverPage?(document.querySelector('meta[name="keywords"]').setAttribute("content","free rent receipts, rent receipts, free rent slips, rent slips"),document.querySelector('meta[name="description"]').setAttribute("content","Download free rent receipts PDF without login and email."),document.title="Free rent receipts"):"/fuel-bills"==server.serverPage?(document.querySelector('meta[name="keywords"]').setAttribute("content","free fuel bills, free petrol bills, free diesel bills, free cng bills"),document.querySelector('meta[name="description"]').setAttribute("content","Free download fuel bills pdf without login and email."),document.title="Free fuel bills"):"/contact"==server.serverPage?document.title="Contact Us":"/about"==server.serverPage?document.title="About Us":"/services"==server.serverPage&&(document.title="Services")},setSite=e=>{addMeta(),loadGA(),document.getElementById("footerEmail").href="mailto:"+server.siteEmail,document.getElementById("footerEmail").innerHTML=server.siteEmail};["focus","scroll","mousemove","touchstart","click"].forEach(e=>{document.addEventListener(e,e=>{server.serverPage=window.location.pathname,lAll()})}),window.addEventListener("load",e=>{setSite()},{once:!0});let moblNav=document.getElementById("nav-links"),linkbtn=document.getElementById("linkmblmenu");linkbtn.addEventListener("click",()=>{moblNav.classList.toggle("d-block")});