(this["webpackJsonpsite-base"]=this["webpackJsonpsite-base"]||[]).push([[0],{85:function(e,t,n){"use strict";n.r(t);var i,o,r,a,s,A,c,p,d,l,h,b=n(1),x=n.n(b),j=n(39),m=n.n(j),g=n(8),u=n(3),O=n(4),f=n(13),v=n(26),y=n(86),w=n(61),C=n(87),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.4,t=Object(C.a)(),n=Object(w.a)({threshold:e}),i=Object(g.a)(n,2),o=i[0],r=i[1];return r?t.start("show"):t.start("hidden"),[o,t]},k={hidden:{y:-100,opacity:0},show:{y:1,opacity:1,transition:{type:"spring",stiffness:2e3,duration:2,delay:.2}}},S={hidden:{y:"-30vh",opacity:0,scale:0},show:{y:1,opacity:1,scale:1,transition:{type:"tween",duration:1,delay:.2}}},U={hidden:{opacity:0,scale:0},show:{opacity:.7,scale:1,transition:{duration:3,delay:.7}}},E=Object(O.c)(i||(i=Object(u.a)(["\n  25% { transform: translateY(-50px) }\n  50% { transform: translateY(-100px) }\n  75% { transform: translateY(-150px) }\n  100% { transform: translateY(-200px) }\n"]))),Q={hidden:{x:-100,opacity:0},show:{x:-1,opacity:1,transition:{duration:1,delay:.2}}},R={hidden:{scale:1.3,opacity:0},show:{scale:1,opacity:1,transition:{duration:2,delay:.2}}},F={hidden:{x:50,opacity:0},show:{x:0,opacity:1,transition:{duration:2,delay:.2}}},L={hidden:{},show:{transition:{delay:1,when:"beforeChildren",staggerChildren:.4}}},V={hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{duration:2}}},B={hidden:{y:100,opacity:0},show:{y:0,opacity:1,transition:{duration:1}}},M={hidden:{x:100,opacity:0},show:{x:0,opacity:1,transition:{duration:3,delay:.7,type:"spring",stiffness:1e3}}},K={hidden:{y:-20,opacity:0},show:{y:1,opacity:1,transition:{duration:2,delay:1.5}}},D={hidden:{y:20,opacity:0},show:{y:1,opacity:1,transition:{duration:2,delay:1.5}}},J=Object(O.c)(o||(o=Object(u.a)(["\n    0%, 100% { opacity: 1 }\n    50% { opacity: 0 }\n"]))),Y=function(e){return Object(O.a)(r||(r=Object(u.a)(["\n    @media only screen and (max-width: 660px) {\n      ","\n    }\n  "])),e)},N=n(2),P=Object(O.b)(y.a.div)(a||(a=Object(u.a)(["\n    background: ",";\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 25px;   \n    position: fixed;\n    width: 100%;\n    z-index: 1;\n"])),(function(e){return e.scrollNav?"black":"transparent"})),Z=O.b.img(s||(s=Object(u.a)(["\n    width: 150px;\n    left: 0;\n    border-radius: 10px;\n    cursor: pointer;\n    &:hover { opacity: 0.7 }\n"]))),G=O.b.ul(A||(A=Object(u.a)(["\n    display: flex; \n    list-style: none;\n"]))),I=Object(O.b)(v.Link)(c||(c=Object(u.a)(["\n    margin: 25px;\n    color: white; \n    font-size: 25px;\n    cursor: pointer;\n    &:hover { color: grey }\n    &.active {border-bottom: 2px solid red }\n    ","\n"])),Y({display:"none"})),T=O.b.a(p||(p=Object(u.a)(["\n    display: none;\n    color: white;\n    cursor: pointer; \n    font-size: 25px;\n    ","\n"])),Y({display:"fixed"}));function H(e){var t=e.open,n=e.alternate,i=Object(b.useState)(!1),o=Object(g.a)(i,2),r=o[0],a=o[1],s=function(){window.scrollY>=80?a(!0):a(!1)};Object(b.useEffect)((function(){window.addEventListener("scroll",s)}),[]);var A=z(),c=Object(g.a)(A,2),p=c[0],d=c[1];return Object(N.jsxs)(P,{scrollNav:r,ref:p,variants:k,animate:d,children:[Object(N.jsx)(Z,{src:"data:image/png;base64,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",onClick:function(){v.animateScroll.scrollToTop()}}),Object(N.jsxs)(G,{children:[Object(N.jsx)(I,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Empresa "}),Object(N.jsx)(I,{to:"slider",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Servi\xe7os "}),Object(N.jsx)(I,{to:"advertsL",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Seguros "}),Object(N.jsx)(I,{to:"gallery",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Galeria"}),Object(N.jsx)(I,{to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Contato "})]}),Object(N.jsx)(T,{open:t,onClick:n,children:Object(N.jsx)(f.c,{})})]})}var q=O.b.div(d||(d=Object(u.a)(["\n    text-align: center;\n    justify-content: center;\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    background: black;\n    display: grid;\n    align-items: center;\n    transition: 0.3s ease-in-out;\n    opacity: ","; \n    top: ","; \n"])),(function(e){return e.open?"100%":"0"}),(function(e){return e.open?"0%":"-100%"})),W=O.b.ul(l||(l=Object(u.a)(["\n    display: grid;\n"]))),X=Object(O.b)(v.Link)(h||(h=Object(u.a)(["\n    margin: 15px;\n    color: white; \n    font-size: 20px;\n    cursor: pointer;\n    &:hover { \n        color: grey \n    }\n    &.active {\n        border-bottom: 2px solid red \n    }\n"])));function $(e){var t=e.open,n=e.alternate;return Object(N.jsx)(q,{open:t,alternate:n,onClick:n,children:Object(N.jsxs)(W,{children:[Object(N.jsx)(X,{onClick:n,to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Empresa "}),Object(N.jsx)(X,{onClick:n,to:"slider",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Servicos "}),Object(N.jsx)(X,{onClick:n,to:"advertsL",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Planos "}),Object(N.jsx)(X,{onClick:n,to:"gallery",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Galeria "}),Object(N.jsx)(X,{onClick:n,to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Contato "})]})})}var _,ee,te,ne,ie,oe,re,ae=n.p+"static/media/back.7320204a.mp4",se=O.b.div(_||(_=Object(u.a)(["\n    height: 100vh;\n"]))),Ae=O.b.video(ee||(ee=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    filter: brightness(0.3);\n    -o-object-fit:cover;\n    object-fit: cover;\n"]))),ce=O.b.div(te||(te=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 25px;\n    color: white;\n    "," \n"])),Y({top:"20%",height:"60%"})),pe=Object(O.b)(y.a.div)(ne||(ne=Object(u.a)(["\n    position: absolute;\n    left:0;\n    right:0;\n    margin-bottom: 150px;\n    font-size: 60px;\n    text-shadow: 2px 2px 2px #000;\n    "," \n"])),Y({fontSize:"30px"})),de=Object(O.b)(y.a.div)(ie||(ie=Object(u.a)(["\n    position: absolute;\n    height: 50px;\n    display: flex;\n    overflow: hidden;\n    top: 55%;\n    right: 45%;\n"]))),le=Object(O.b)(y.a.div)(oe||(oe=Object(u.a)(["\n    height: 100%;\n    animation: "," 10s infinite;\n"])),E),he=O.b.div(re||(re=Object(u.a)(["\n    height: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    color: red;\n    display: flex;\n    align-items: center;\n    text-transform: uppercase;\n    text-shadow: 1px 1px 2px white;\n    "," \n"])),Y({fontSize:"20px"}));function be(){var e=z(),t=Object(g.a)(e,2),n=t[0],i=t[1];return Object(N.jsxs)(se,{ref:n,children:[Object(N.jsx)(Ae,{autoPlay:!0,loop:!0,muted:!0,src:ae}),Object(N.jsx)(ce,{children:Object(N.jsx)(pe,{variants:S,animate:i,children:"Seguradora Automotive"})}),Object(N.jsx)(de,{variants:U,animate:i,children:Object(N.jsxs)(le,{children:[Object(N.jsx)(he,{children:"Seguradora"}),Object(N.jsx)(he,{children:"Revendedora"}),Object(N.jsx)(he,{children:"Locadora"}),Object(N.jsx)(he,{children:"Transportadora"})]})})]})}var xe,je,me,ge,ue,Oe=n.p+"static/media/clients.a6515cd7.jpg",fe=O.b.div(xe||(xe=Object(u.a)(["\n    height: 90vh;\n    background: #e1e1e1;\n    display: flex;\n    align-items: center;\n    padding: 60px;\n    overflow: hidden;\n    "," \n"])),Y({display:"grid"})),ve=Object(O.b)(y.a.div)(je||(je=Object(u.a)(["\n    margin: 40px;\n    text-align: center;\n    "," \n"])),Y({marginBottom:"10px"})),ye=O.b.h1(me||(me=Object(u.a)(["\n    font-size: 40px;\n    "," \n"])),Y({fontSize:"25px",marginTop:"-80px",marginBottom:"25px"})),we=O.b.p(ge||(ge=Object(u.a)(["\n    font-size: 26px;\n    padding: 30px;\n    ","\n"])),Y({fontSize:"14px",padding:"0"})),Ce=Object(O.b)(y.a.img)(ue||(ue=Object(u.a)(["\n    height: 450px;    \n    width: 650px;\n    border-radius: 10px;\n    ","\n"])),Y({height:"260px",width:"360px"}));function ze(){var e=z(),t=Object(g.a)(e,2),n=t[0],i=t[1];return Object(N.jsxs)(fe,{id:"about",ref:n,children:[Object(N.jsxs)(ve,{variants:Q,animate:i,children:[Object(N.jsx)(ye,{children:"Quem Somos"}),Object(N.jsx)(we,{children:"A seguradora Automotive tem o seguro ideal para o seu ve\xedculo. Al\xe9m de assist\xeancia de qualidade, voc\xea pode contar com atendimento 24h e benef\xedcios exclusivos. N\xe3o importa em que lugar esteja, estaremos l\xe1. Confira as melhores condi\xe7\xf5es para voc\xea renovar o seguro do seu ve\xedculo, seja ele carro, moto, pick up ou caminh\xe3o."})]}),Object(N.jsx)(Ce,{src:Oe,variants:R,animate:i})]})}var ke,Se,Ue,Ee,Qe,Re,Fe,Le,Ve,Be,Me,Ke,De,Je,Ye=[{title:"Seguro de carros",price:" 129,99",imageUrl:"https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Seguro de motocicletas",price:" 99,99",imageUrl:"https://images.pexels.com/photos/1231692/pexels-photo-1231692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Seguro de pick ups",price:" 119.99",imageUrl:"https://images.pexels.com/photos/5864151/pexels-photo-5864151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{title:"Seguro de \xf4nibus",price:"199,99",imageUrl:"https://images.pexels.com/photos/1345717/pexels-photo-1345717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}],Ne=[{title:"Conhe\xe7a nossos seguros",desc:"Conhe\xe7a o seguro mais completo do pa\xeds",imageUrl:"https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Seguro para todas as linhas de ve\xedculos",desc:"Cuidamos de seu carro, moto, utilit\xe1rio e caminh\xe3o",imageUrl:"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Veja nossa galeria de assegurados",desc:"Temos o seguro certo para seu tipo de ve\xedculo",imageUrl:"https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Entre em contato e torne-se cliente",desc:"Nosso atendimento funciona 24 horas por dia",imageUrl:"https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}],Pe=[{imageUrl:"https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/1149070/pexels-photo-1149070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/1149140/pexels-photo-1149140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/3065602/pexels-photo-3065602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/7245319/pexels-photo-7245319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/2658987/pexels-photo-2658987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}],Ze=O.b.div(ke||(ke=Object(u.a)(["\n    height: 90vh;\n    background-color: black;\n    display: flex;\n    position: relative; \n    overflow: hidden;\n    ","\n"])),Y({height:"45vh"})),Ge=O.b.a(Se||(Se=Object(u.a)(["\n    width: 50px;\n    height: 50px;\n    background-color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    cursor: pointer;\n    opacity: 0.5;\n    z-index: 1;\n    left: ",";\n    right: ",";\n    ","\n"])),(function(e){return"left"===e.direction&&"10px"}),(function(e){return"right"===e.direction&&"10px"}),Y({width:"20px",height:"20px"})),Ie=O.b.div(Ue||(Ue=Object(u.a)(["\n    display: flex;\n    position: aboslute;\n    justify-content: center;\n    text-align: center;\n    transition: all 1.5s ease;\n    color: white;\n    transform: translateX(","vw);\n"])),(function(e){return-100*e.slideIndex})),Te=Object(O.b)(y.a.img)(Ee||(Ee=Object(u.a)(["\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 90vh;    \n    object-fit: cover;\n    background-color: black;\n    ","   \n"])),Y({height:"45vh"})),He=Object(O.b)(y.a.div)(Qe||(Qe=Object(u.a)(["\n    position: absolute;\n    top: 10px;\n    margin-left: 100px;\n    font-size: 45px;\n    text-shadow: 10px 10px 10px black;\n    ","\n"])),Y({fontSize:"24px",marginLeft:"1rem",top:"30px"})),qe=Object(O.b)(y.a.div)(Re||(Re=Object(u.a)(["\n    position: absolute;\n    bottom: 60px;\n    margin-left: 100px;\n    font-size: 35px;\n    text-shadow: 10px 10px 10px black;\n    ","\n"])),Y({fontSize:"15px",marginLeft:"1rem"}));function We(){var e=Object(b.useState)(0),t=Object(g.a)(e,2),n=t[0],i=t[1],o=function(e){i("left"===e?n>0?n-1:3:n<3?n+1:0)},r=z(),a=Object(g.a)(r,2),s=a[0],A=a[1];return Object(N.jsxs)(Ze,{id:"slider",ref:s,children:[Object(N.jsx)(Ge,{direction:"left",onClick:function(){return o("left")},children:Object(N.jsx)(f.a,{})}),Object(N.jsx)(Ie,{slideIndex:n,children:Ne.map((function(e,t){return Object(N.jsxs)("div",{children:[Object(N.jsx)(Te,{src:e.imageUrl}),Object(N.jsx)(He,{variants:F,animate:A,children:e.title}),Object(N.jsx)(qe,{variants:F,animate:A,children:e.desc})]},t)}))}),Object(N.jsx)(Ge,{direction:"right",onClick:function(){return o("right")},children:Object(N.jsx)(f.b,{})})]})}var Xe,$e,_e,et=O.b.div(Fe||(Fe=Object(u.a)(["\n    height: 90vh;\n    background: black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    ","\n"])),Y({height:"600px"})),tt=Object(O.b)(y.a.div)(Le||(Le=Object(u.a)(["\n    display: flex;   \n    justify-content: center;\n    ","\n"])),Y({display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"-100px"})),nt=Object(O.b)(y.a.div)(Ve||(Ve=Object(u.a)(["\n    margin: 20px 0 20px 0;\n    &:hover { \n        opacity: 0.7; \n        transform: scale(1.08); \n        transition: all 0.3s ease \n    } \n"]))),it=Object(O.b)(y.a.img)(Be||(Be=Object(u.a)(["\n    height: 440px;\n    width: 280px;\n    object-fit: cover;\n    margin: 20px;\n    border-radius: 30px;\n    ","\n"])),Y({height:"220px",width:"160px",margin:"30px"})),ot=Object(O.b)(y.a.div)(Me||(Me=Object(u.a)(["\n    text-align: center;\n    margin-top: -160px;\n"]))),rt=O.b.h1(Ke||(Ke=Object(u.a)(["\n    color: white;\n    font-size: 20px;\n    ","\n"])),Y({fontSize:"16px"})),at=O.b.p(De||(De=Object(u.a)(["\n    color: white;\n"]))),st=O.b.button(Je||(Je=Object(u.a)(["\n    background: darkred;\n    font-size: 14px;\n    color: white;\n    padding: 5px;\n    margin: 10px;\n    border-radius: 10px;\n    cursor: pointer;\n    ","\n"])),Y({fontSize:"10px",padding:"4px"}));function At(){var e=z(),t=Object(g.a)(e,2),n=t[0],i=t[1];return Object(N.jsx)(et,{id:"advertsL",ref:n,children:Object(N.jsx)(tt,{variants:L,animate:i,children:Ye.map((function(e,t){return Object(N.jsx)("div",{children:Object(N.jsxs)(nt,{whileHover:{transition:{scale:1.1,type:"tween",ease:"easeOut"}},children:[Object(N.jsx)(it,{src:e.imageUrl,variants:B}),Object(N.jsxs)(ot,{variants:V,children:[Object(N.jsx)(rt,{children:e.title}),Object(N.jsx)(at,{children:"A partir de"}),Object(N.jsxs)(st,{children:["R$",e.price]})]})]})},t)}))})})}var ct=O.b.div(Xe||(Xe=Object(u.a)(["\n    background: black;\n    .model {\n        width: 100%;\n        height: 100vh;\n        position: fixed;\n        top: 0px;\n        left: 0px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #000;\n        transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out; \n        visibility: hidden;\n        opacity: 0;\n        transform: scale(0);\n        overflow: hidden;\n        z-index: 999;\n    }\n    .model.open {\n        top: 10px;\n        visibility: visible;\n        opacity: 1;\n        transform: scale(1);\n    }\n    .model img {\n        width: auto;\n        max-width: 100%;\n        height: auto;\n        max-height: 100%;\n        display: block;\n        line-height: 0;\n        box-sizing: border-box;\n        padding: 20px 0 20px;\n        margin: 0 auto;\n   }\n   .model.open svg {\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 2rem;\n        height: 2rem;\n        padding: 5px;\n        color: white;\n        cursor: pointer;\n"]))),pt=O.b.div($e||($e=Object(u.a)(["\n    -webkit-column-count: 3;   \n    -moz-column-count: 3;\n    column-count: 3;\n    -webkit-column-width: 33%;\n    -moz-column-width: 33%;\n    column-width: 33%;\n    padding: 0 12px;\n    ","\n"])),Y({webkitColumnCount:2,mozColumnCount:2,columnCount:2})),dt=O.b.img(_e||(_e=Object(u.a)(["\n    margin-top: 10px; \n    border-radius: 10px;\n    width: 100%;\n    max-width: 600px;\n    cursor: pointer;\n    transition: transform .2s; \n    filter: opacity(.7);\n    &:hover{ \n        filter: opacity(1);\n        transform: scale(1.05)\n    }\n"])));function lt(){var e=Object(b.useState)(!1),t=Object(g.a)(e,2),n=t[0],i=t[1],o=Object(b.useState)(""),r=Object(g.a)(o,2),a=r[0],s=r[1];return Object(N.jsxs)(ct,{id:"gallery",children:[Object(N.jsxs)("div",{className:n?"model open":"model",children:[Object(N.jsx)(dt,{src:a}),Object(N.jsx)(f.f,{onClick:function(){return i(!1)}})]}),Object(N.jsx)(pt,{children:Pe.map((function(e){return Object(N.jsx)(dt,{onClick:function(){return t=e.imageUrl,s(t),void i(!0);var t},src:e.imageUrl})}))})]})}var ht,bt,xt,jt,mt,gt,ut,Ot,ft,vt,yt,wt,Ct=n.p+"static/media/contacts.a76a1068.jpg",zt=O.b.div(ht||(ht=Object(u.a)(["\n    position: relative;\n    height: 63vh;\n    background:url(",");\n    background-size: cover;\n    background-position: center;\n    overflow: hidden;\n    ","\n"])),Ct,Y({height:"50vh"})),kt=Object(O.b)(y.a.div)(bt||(bt=Object(u.a)(["\n    background: rgba(0, 0, 0, 0.3);\n    width: 400px;\n    height: 350px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top:0;\n    left: 0;\n    right:0;\n    bottom: 0;\n    margin: auto;\n    border-radius: 20px;   \n    ","\n"])),Y({width:"350px",height:"280px"})),St=O.b.div(xt||(xt=Object(u.a)(["\n    color: white;\n    margin: 10px;\n    font-size: 20px;\n    ","\n"])),Y({fontSize:"15px"})),Ut=O.b.input(jt||(jt=Object(u.a)(["\n    width: 350px;\n    height: 35x;\n    margin: 10px;\n    padding: 10px;\n    border-radius: 10px;\n    ","\n"])),Y({width:"250px",height:"30px"})),Et=O.b.textarea(mt||(mt=Object(u.a)(["\n    width: 350px;\n    height: 150px;\n    padding: 10px;\n    border-radius: 10px;\n    margin: 10px;\n    ","\n"])),Y({width:"250px",height:"100px"})),Qt=O.b.button(gt||(gt=Object(u.a)(["\n    background: red;\n    color: white;\n    width: 90px;\n    height: 30px;\n    border-radius: 10px;\n    cursor: pointer;\n    margin-bottom: 10px;\n    &:hover{background: darkred;}\n    ","\n"])),Y({width:"70px",height:"25px"}));function Rt(){var e=z(),t=Object(g.a)(e,2),n=t[0],i=t[1];return Object(N.jsx)(zt,{id:"contact",ref:n,children:Object(N.jsxs)(kt,{variants:M,animate:i,children:[Object(N.jsx)(St,{children:"Entre em Contato"}),Object(N.jsx)(Ut,{placeholder:"Nome"}),Object(N.jsx)(Ut,{placeholder:"Email"}),Object(N.jsx)(Et,{placeholder:"Escreva sua Menssagem"}),Object(N.jsx)(Qt,{children:"Enviar"})]})})}var Ft=O.b.div(ut||(ut=Object(u.a)(["\n    padding: 15px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    "," \n"])),Y({padding:"10px",gridTemplateColumns:"repeat(2, 1fr)"})),Lt=O.b.div(Ot||(Ot=Object(u.a)(["\n    padding: 0 2rem;    \n    h1 {\n        font-size: 25px; \n        margin-bottom: 1rem; \n        color: #f26e2e \n    }\n    p { \n        color: red; \n        animation: "," 3s infinite \n    }\n    "," \n"])),J,Y({marginLeft:"15px"})),Vt=Object(O.b)(y.a.div)(ft||(ft=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-item: flex-start;\n    padding: 0 2rem;\n    ","  \n"])),Y({padding:"0 3rem"})),Bt=O.b.div(vt||(vt=Object(u.a)(["\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 1rem;\n    ","\n"])),Y({fontSize:"12px"})),Mt=O.b.div(yt||(yt=Object(u.a)(["\n    text-decoration: none;\n    margin-bottom: 0.5rem;\n    font-size: 14px;\n    cursor: pointer;\n    &:hover { color:  #f26e2e }\n    "," \n"])),Y({fontSize:"12px"})),Kt=O.b.a(wt||(wt=Object(u.a)(["\n    font-size: 20px;\n    cursor: pointer;    \n    &:hover { \n        color:  \n    #f26e2e }\n    ","\n"])),Y({fontSize:"16px"}));function Dt(){var e=z(),t=Object(g.a)(e,2),n=t[0],i=t[1];return Object(N.jsxs)(Ft,{ref:n,children:[Object(N.jsxs)(Lt,{children:[Object(N.jsx)(y.a.h1,{variants:K,animate:i,children:"Explorar"}),Object(N.jsx)(y.a.p,{variants:K,animate:i,children:"Conhe\xe7a melhor a nossa p\xe1gina"})]}),Object(N.jsxs)(Vt,{variants:D,animate:i,children:[Object(N.jsx)(Bt,{children:"Contate-nos"}),Object(N.jsx)(Mt,{to:"/",children:"Contato"}),Object(N.jsx)(Mt,{to:"/",children:"Suporte"}),Object(N.jsx)(Mt,{to:"/",children:"Qualifica\xe7\xf5es"}),Object(N.jsx)(Mt,{to:"/",children:"Premia\xe7\xf5es"})]}),Object(N.jsxs)(Vt,{variants:K,animate:i,children:[Object(N.jsx)(Bt,{children:"Parcerias"}),Object(N.jsx)(Mt,{to:"/",children:"RedCar"}),Object(N.jsx)(Mt,{to:"/",children:"SuperVe\xedculos"}),Object(N.jsx)(Mt,{to:"/",children:"SegurosVida"}),Object(N.jsx)(Mt,{to:"/",children:"MegaRoda"})]}),Object(N.jsxs)(Vt,{variants:D,animate:i,children:[Object(N.jsx)(Bt,{children:"Redes Sociais"}),Object(N.jsx)(Kt,{children:Object(N.jsx)(f.d,{})}),Object(N.jsx)(Kt,{children:Object(N.jsx)(f.e,{})}),Object(N.jsx)(Kt,{children:Object(N.jsx)(f.g,{})}),Object(N.jsx)(Kt,{children:Object(N.jsx)(f.h,{})})]})]})}function Jt(){var e=Object(b.useState)(!1),t=Object(g.a)(e,2),n=t[0],i=t[1],o=function(){i(!n)};return Object(N.jsxs)(y.a.div,{initial:"hidden",animation:"show",children:[Object(N.jsx)(H,{alternate:o}),Object(N.jsx)($,{open:n,alternate:o}),Object(N.jsx)(be,{}),Object(N.jsx)(ze,{}),Object(N.jsx)(We,{}),Object(N.jsx)(At,{}),Object(N.jsx)(lt,{}),Object(N.jsx)(Rt,{}),Object(N.jsx)(Dt,{})]})}n(84);m.a.render(Object(N.jsx)(x.a.StrictMode,{children:Object(N.jsx)(Jt,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.4df23e69.chunk.js.map