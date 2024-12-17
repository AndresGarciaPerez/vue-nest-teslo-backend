import{d as b,p as c,V as w,f as m,I as x,h as g,o as v,c as y,b as o,a0 as l,af as u,ag as k,ah as I,a as M,w as R,l as V,F as C,m as S}from"./index-Cw5eDq-b.js";const L={class:"mb-4"},U={class:"mb-4"},B={class:"mb-4 flex items-center"},F={class:"mt-6 text-blue-500 text-center"},h=b({__name:"LoginView",setup(N){const d=c(),f=w(),n=m(null),i=m(null),t=x({email:"",password:"",rememberMe:!1}),p=async()=>{var e,a;if(t.email==="")return(e=n.value)==null?void 0:e.focus();if(t.password.length<6)return(a=i.value)==null?void 0:a.focus();t.rememberMe?localStorage.setItem("email",t.email):localStorage.removeItem("email"),!await d.login(t.email,t.password)&&f.error("Usuario o contraseña invalida")};return g(()=>{const r=localStorage.getItem("email");r&&(t.email=r,t.rememberMe=!0)}),(r,e)=>{const a=S("RouterLink");return v(),y(C,null,[e[9]||(e[9]=o("h1",{class:"text-2xl font-semibold mb-4"},"Login",-1)),o("form",{onSubmit:I(p,["prevent"])},[o("div",L,[e[3]||(e[3]=o("label",{for:"email",class:"block text-gray-600"},"Correo",-1)),l(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.email=s),ref_key:"emailInputRef",ref:n,type:"text",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,t.email]])]),o("div",U,[e[4]||(e[4]=o("label",{for:"password",class:"block text-gray-600"},"Contraseña",-1)),l(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>t.password=s),ref_key:"passwordInputRef",ref:i,type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,t.password]])]),o("div",B,[l(o("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>t.rememberMe=s),type:"checkbox",id:"remember",name:"remember",class:"text-blue-500"},null,512),[[k,t.rememberMe]]),e[5]||(e[5]=o("label",{for:"remember",class:"text-gray-600 ml-2"},"Recordar usuario",-1))]),e[6]||(e[6]=o("div",{class:"mb-6 text-blue-500"},[o("a",{href:"#",class:"hover:underline"},"Olvide mi contraseña?")],-1)),e[7]||(e[7]=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Ingresar ",-1))],32),o("div",F,[M(a,{to:{name:"register"},class:"hover:underline"},{default:R(()=>e[8]||(e[8]=[V("Registrate aqui")])),_:1})])],64)}}});export{h as default};