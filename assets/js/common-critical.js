var globalData={appData:""},allFilesLoadded={ga:!1,css:!1,js:!1,menu:!1,isGATagReady:!1},isSiteReady=!1,isPageFound=!1,pageFinder=r=>{try{var s=window.location.pathname;let e=s;if("index.html"==(e=e.split("/").pop()))e=(e=s).split("/"),server.pageName=e[e.length-2];else if(""==e){if((e=(e=s).split("/"))[e.length-2]==window.location.host)return 0;server.pageName=e[e.length-2]}else server.pageName=e;isPageFound=!0,r&&r(!0,"Page finder succeed")}catch(e){r&&(r(!0,"Page finder failed error is : "+e),saveLogs("error",{id:"00",pageName:""+server.pageName,eventName:"pageFinder",msg:""+e,metaData:""}))}},jsLoad=(r,e,s,a)=>{let t=!1;var o;document.querySelectorAll("script").forEach(e=>{if(e.src==r)return!(t=!0)}),t?a&&a(!0,"Script file already exist"):((o=document.createElement("script")).src=r,o.defer=e,o.onload=()=>{a&&a(!0,"Script loaded successfuly")},o.onerror=()=>{a&&a(!1,"Error occurred while loading script")},document[s].appendChild(o))},cssLoad=(r,e,s)=>{let a=!1;var t;document.querySelectorAll("link").forEach(e=>{if(e.href==r)return!(a=!0)}),a?s&&s(!0,"Style file already exist"):((t=document.createElement("link")).href=r,t.rel="stylesheet",t.type="text/css",t.as="style",t.onload=()=>{s&&s(!0,"Style loaded successfuly")},t.onerror=()=>{s&&s(!1,"Error occurred while loading style")},document[e].appendChild(t))},loadGA=()=>{"freeforonline.com"!=window.location.host&&"dev.freeforonline.com"!=window.location.host||jsLoad("https://www.googletagmanager.com/gtag/js?id=G-HXL5BF20G0",!0,"head",(e,r)=>{e&&(allFilesLoadded.ga=!0,allFilesLoadded.isGATagReady||customGATag("Activate GA Tag"))})},customGATag=(e,r,s)=>{allFilesLoadded.isGATagReady?allFilesLoadded.isGATagReady&&this.gtag("event",""+e,{[""+r]:""+s}):(window.dataLayer=window.dataLayer||[],this.gtag=function(){dataLayer.push(arguments)},this.gtag("js",new Date),this.gtag("config","G-HXL5BF20G0"),allFilesLoadded.isGATagReady=!0)},saveLogs=(e,r,s)=>{var a={};let t;"error"==e?(t="errorSave",r&&(a={id:r.id,pageName:r.pageName,eventName:r.eventName,msg:r.msg,metaData:r.metaData})):"download"==e?(t="downloadSave",r&&(a={id:r.id,pageName:r.pageName,template:r.template,metaData:r.metaData})):"feedback"==e&&(t="feedbackSave",r)&&(a={id:r.id,userName:r.userName,userEmail:r.userEmail,msg:r.msg,img:r.img,metaData:r.metaData}),a=JSON.stringify(a);e=`https://script.google.com/macros/s/${server.apiToken}/exec?route=${t}&requestData=`+a;fetch(e).then(e=>{if(e.ok)return e.json();throw new Error("Error: "+e.status)}).then(e=>{s&&s(!0,JSON.stringify(e))}).catch(e=>{s&&s(!1,e)})},lAll=()=>{allFilesLoadded.ga||loadGA(),cssLoad(server.serverPath+"/assets/plugins/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css","head",(e,r)=>{e&&(cssLoad("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css","head",(e,r)=>{}),cssLoad(server.serverPath+"/assets/style/main"+server.serverStyle,"head",(e,r)=>{e&&("/fuel-bills"==server.serverPage||"/fuel-bills/"==server.serverPage||"/fuel-bills/index.html"==server.serverPage||"/tools/petrol-bill"==server.serverPage||"/tools/petrol-bill/"==server.serverPage||"/tools/petrol-bill/index.html"==server.serverPage?(server.pageName="fuel-bills",activeMenu(server.pageName),cssLoad(`${server.cssPath}/${server.pageName}.css`,"head")):"/tools/rent-receipt"==server.serverPage||"/tools/rent-receipt/"==server.serverPage||"/tools/rent-receipt/index.html"==server.serverPage?cssLoad(`${server.cssPath}/${server.pageName}.css`,"head"):"/tools/driver-salary"==server.serverPage?cssLoad(server.cssPath+"/driver-salary.css","head",(e,r)=>{}):"/tools/lta/red-bus"==server.serverPage?cssLoad(server.cssPath+"/lta-bill.css","head",(e,r)=>{}):"/tools/internet-invoice/airtel"==server.serverPage?cssLoad(server.cssPath+"/internet-invoice.css","head",(e,r)=>{}):"/tools/book-invoice"==server.serverPage?cssLoad(server.cssPath+"/book-invoice.css","head",(e,r)=>{}):"/tools/helper-bill"==server.serverPage?cssLoad(server.cssPath+"/helper-bill.css","head",(e,r)=>{}):"/tools/restaurant-bill"==server.serverPage?cssLoad(server.cssPath+"/restaurant-bill.css","head",(e,r)=>{}):"/tools/delivery-invoice"==server.serverPage||"/tools/delivery-invoice/index.html"==server.serverPage?cssLoad(server.cssPath+"/delivery-invoice.css","head",(e,r)=>{}):"/tester"==server.serverPage&&cssLoad(server.cssPath+"/tester.css","head",(e,r)=>{}),allFilesLoadded.css=!0)}))}),jsLoad(server.serverPath+"/assets/plugins/bootstrap-5.3.0-alpha1-dist/js/bootstrap.min.js",!0,"body",(e,r)=>{}),jsLoad("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",!0,"body",(e,r)=>{e&&jsLoad(server.jsPath+"/common.js",!0,"body",(e,r)=>{jsLoad(server.jsPath+"/app.js",!0,"body",(e,r)=>{e&&("/"==server.serverPage?jsLoad(server.jsPath+"/home.js",!0,"body",(e,r)=>{}):"/fuel-bills"==server.serverPage||"/fuel-bills/"==server.serverPage||"/fuel-bills/index.html"==server.serverPage||"/tools/petrol-bill"==server.serverPage||"/tools/petrol-bill/"==server.serverPage||"/tools/petrol-bill/index.html"==server.serverPage?(server.pageName="fuel-bills",jsLoad(`${server.jsPath}/${server.pageName}.js`,!0,"body")):"/tools/rent-receipt"==server.serverPage||"/tools/rent-receipt/"==server.serverPage||"/tools/rent-receipt/index.html"==server.serverPage?jsLoad(`${server.jsPath}/${server.pageName}.js`,!0,"body"):"/contact"==server.serverPage?jsLoad(server.serverPath+"/assets/js/contact-us"+server.serverScript,!0,"body",(e,r)=>{}):"/about"==server.serverPage?jsLoad(server.serverPath+"/assets/js/about-us"+server.serverScript,!0,"body",(e,r)=>{}):"/tools/driver-salary"==server.serverPage?jsLoad(server.jsPath+"/driver-salary.js",!0,"body",(e,r)=>{}):"/tools/lta/red-bus"==server.serverPage?jsLoad(server.jsPath+"/lta-bill.js",!0,"body",(e,r)=>{}):"/tools/internet-invoice/airtel"==server.serverPage?jsLoad(server.jsPath+"/internet-invoice.js",!0,"body",(e,r)=>{}):"/tools/book-invoice"==server.serverPage?jsLoad(server.jsPath+"/book-invoice.js",!0,"body",(e,r)=>{}):"/tools/helper-bill"==server.serverPage?jsLoad(server.jsPath+"/helper-bill.js",!0,"body",(e,r)=>{}):"/tools/restaurant-bill"==server.serverPage?jsLoad(server.jsPath+"/restaurant-bill.js",!0,"body",(e,r)=>{}):"/tools/delivery-invoice"==server.serverPage||"/tools/delivery-invoice/index.html"==server.serverPage?jsLoad(server.jsPath+"/delivery-invoice.js",!0,"body",(e,r)=>{}):"/tester"==server.serverPage&&jsLoad(server.jsPath+"/tester.js",!0,"body",(e,r)=>{}),allFilesLoadded.js=!0)})})})},REle=(r,e,s)=>{document.querySelectorAll([e]).forEach(e=>{if(e.href==r)return e.remove(),s(!0,"file removed"),!1;s(!1,"file not found")})},setSite=()=>{try{let o=0,l=setInterval(()=>{let r=document.getElementById("nav-links");var e=document.getElementById("linkmblmenu"),s=document.querySelector("#linkmblsearch");let a=document.querySelector("#search-warp"),t=document.querySelector("#sb-search");r&&e&&s&&a&&t&&(clearInterval(l),1<++o&&saveLogs("error",{id:"00",pageName:""+server.pageName,eventName:"setSite",msg:`setMenu function called ${o} Times at page : `+server.pageName,metaData:""}),e.addEventListener("click",()=>{r.classList.toggle("d-block")}),r.addEventListener("click",e=>{r.classList.toggle("d-block")}),s.addEventListener("click",e=>{a.classList.toggle("d-none"),a.classList.contains("d-none")||t.focus()}),window.addEventListener("click",e=>{e.target.attributes["data-nav"]||"nav-mobile"==e.target.classList[0]||r.classList.remove("d-block"),"nav-search"!=e.target.classList[0]&&"sb-search"!=e.target.id&&a.classList.add("d-none")}),allFilesLoadded.menu=!0)},800)}catch(e){saveLogs("error",{id:"00",pageName:""+server.pageName,eventName:"setSite",msg:""+e,metaData:""})}},activeMenu=e=>{document.querySelector(`[data-nav="${e}"]`)&&document.querySelector(`[data-nav="${e}"]`).classList.add("active")};setSite(),pageFinder(),["focus","scroll","mousemove","touchstart","click"].forEach(e=>{document.addEventListener(e,e=>{isPageFound&&lAll()})}),window.addEventListener("load",e=>{pageFinder(),isPageFound&&activeMenu(server.pageName),server.serverPage=window.location.pathname,document.querySelectorAll("*").forEach(e=>{e.addEventListener("error",e=>{saveLogs("error",{id:"02",pageName:""+server.pageName,eventName:"windows load",msg:"On windows load event  "+e.currentTarget.nodeName,metaData:'{"server" : '+server.serverPath})})})},{once:!0}),document.querySelectorAll("*").forEach(e=>{e.addEventListener("error",e=>{saveLogs("error",{id:"03",pageName:""+server.pageName,eventName:"windows load",msg:"On windows load event  "+e.currentTarget.nodeName,metaData:'{"server" : '+server.serverPath})})});