import{_ as w,g as h}from"./get-products.action-CraNPrRP.js";import{u as m,a as v}from"./get-product-image.action-DqDgPMC3.js";import{d as p,o as r,c as a,a as g,w as y,b as e,t as c,u as o,R as _,F as x,r as k,e as f,f as b,g as B,h as C,i as F,j as V}from"./index-Dml1KxfO.js";const j={class:"rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"},z={class:"relative flex items-end overflow-hidden rounded-xl justify-center"},H=["src","alt"],$={class:"mt-1 p-2"},q={class:"text-slate-700"},L={class:"mt-1 text-sm text-slate-400 capitalize"},M={class:"mt-3 flex items-end justify-between"},N={class:"text-lg font-bold text-blue-500"},P=p({__name:"ProductCard",props:{product:{}},setup(d){return(t,s)=>(r(),a("article",j,[g(o(_),{to:`/detail/${t.product.id}`},{default:y(()=>[e("div",z,[e("img",{src:t.product.images[0],alt:t.product.title,class:"h-[250px] object-cover"},null,8,H)]),e("div",$,[e("h2",q,c(t.product.title),1),e("p",L,c(t.product.gender),1),e("div",M,[e("p",N,"$"+c(t.product.price)+".00",1),s[0]||(s[0]=e("div",{class:"flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF"},[e("path",{d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})]),e("button",{class:"text-sm"},"Ver mas")],-1))])])]),_:1},8,["to"])]))}}),E={class:"py-10 bg-gray-100"},Q={class:"mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},R=p({__name:"ProductList",props:{products:{}},setup(d){return(t,s)=>(r(),a("section",E,[e("div",Q,[(r(!0),a(x,null,k(t.products,n=>(r(),f(P,{key:n.id,product:n},null,8,["product"]))),128))])]))}}),K={key:0,class:"text-center h-[500]"},D=p({__name:"HomeView",setup(d){const t=V(),s=b(Number(t.query.page||1)),n=m(),{data:l}=v({queryKey:["products",{page:s}],queryFn:()=>h(s.value),staleTime:1e3*60});return B(()=>t.query.page,u=>{s.value=Number(u||1),window.scrollTo({top:0,behavior:"smooth"})}),C(()=>{n.prefetchQuery({queryKey:["products",{page:s.value+1}],queryFn:()=>h(s.value+1)})}),(u,i)=>(r(),a(x,null,[i[1]||(i[1]=F('<div class="pt-24 bg-white"><h1 class="text-center text-2xl font-bold text-gray-800">Mis Productos</h1></div><div class="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-8 justify-center bg-white text-gray-800"><a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg><span>Balenciaga</span></a><a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg><span>Versace</span></a><a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><span>Louis Vuitton</span></a><a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg><span>Gucci</span></a></div>',2)),o(l)?(r(),f(R,{key:1,products:o(l)},null,8,["products"])):(r(),a("div",K,i[0]||(i[0]=[e("h1",{class:"text-xl"},"Cargando Productos",-1),e("p",null,"Espere por favor...",-1)]))),g(w,{page:s.value,"has-more-data":!!o(l)&&o(l).length<10},null,8,["page","has-more-data"])],64))}});export{D as default};