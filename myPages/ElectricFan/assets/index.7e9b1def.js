import{p as a,a as e,o as t,c as l,b as i,F as o,r as s,d as n,t as c,w as r,e as u,f as d,g as h,h as m,_ as p,i as g,j as f,k as y}from"./vendor.ac1f9065.js";const b={data:()=>({audioElm:"",stopFlag:!1,switchItems:[{name:"关",class:"switch_0",value:0},{name:"1",class:"switch_1",value:1},{name:"2",class:"switch_2",value:2},{name:"3",class:"switch_3",value:3}],leafs:"leafs",radio:0,count:0}),beforeMount(){this.initAudioElm()},methods:{initAudioElm(){let a=new Audio;a.preload="metadata",a.src="/audio/fan.wav",a.load(),this.audioElm=a},radioChange(a){switch(this.leafs="leafs-"+a,this.count+=1,a){case 0:this.playSwitchAudio();break;default:this.stopFlag=!1,0===this.audioElm.currentTime||this.audioElm.currentTime===this.audioElm.duration?this.playFanAudio(0):this.playFanAudio()}},playSwitchAudio(){this.audioElm.ended||this.stopAudio()},playFanAudio(a=3.5){if(!this.stopFlag){this.audioElm.currentTime=a,this.audioElm.play();let e=this,t=this.audioElm.duration-this.audioElm.currentTime-1;setTimeout((function(){e.playFanAudio()}),1e3*t)}},stopAudio(){this.audioElm.currentTime=6,this.stopFlag=!0}}},v=r();a("data-v-48c88095");const w={id:"fan"},A={class:"header"},k=i("div",{class:"circle"},null,-1),E=i("div",{class:"leaf-1"},null,-1),_=i("div",{class:"leaf-2"},null,-1),F=i("div",{class:"leaf-3"},null,-1),V=i("div",{class:"neck"},null,-1),T=i("div",{class:"footer"},null,-1),C={class:"switch-btn-group"};e();const M=v(((a,e,r,d,h,m)=>{const p=u("el-radio-button"),g=u("el-radio-group");return t(),l("div",w,[i("div",A,[(t(),l("div",{key:h.count,class:h.leafs},[k,E,_,F],2))]),V,T,i("div",C,[i(g,{modelValue:h.radio,"onUpdate:modelValue":e[1]||(e[1]=a=>h.radio=a),onChange:m.radioChange},{default:v((()=>[(t(!0),l(o,null,s(h.switchItems,((a,e)=>(t(),l(p,{key:e,class:a.class,modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,label:a.value},{default:v((()=>[n(c(a.name),1)])),_:2},1032,["class","modelValue","onUpdate:modelValue","label"])))),128))])),_:1},8,["modelValue","onChange"])])])}));b.render=M,b.__scopeId="data-v-48c88095";var j=d({name:"VueAboutMe",props:{copyright:{type:Object,default:()=>({name:"Vue About Me",repo:"Vue-About-Me",author:"Aymetic",logo:"ri:cloud-line",link:"https://www.Aymetic.com",color:"#0078e7"})},links:{type:Array,default:()=>[{name:"github",color:"black",icon:"ri:github-line",label:"GitHub: Aymetic",href:"https://github.com/Aymetic"},{name:"weibo",color:"#DB2828",icon:"ri:weibo-line",label:"微博：这昵称就是用来瞎改的",href:"https://weibo.com/5682553411"},{name:"twitter",color:"#1da1f2",icon:"ri:twitter-line",label:"Twitter: YunYouJun",href:"https://twitter.com/YunYouJun"},{name:"blog",color:"#6435C9",icon:"ri:global-line",label:"博客：aymetic.com",href:"http://www.aymetic.com"}]}}});const Y={id:"vue-about-me"},I={class:"copyright"},U={key:0,target:"_blank"},J={class:"links"},S={class:"tooltip-text"},x=i("a",{href:"https://github.com/ElpsyCN/electric-fan",target:"_blank"},"©原作者仓库",-1);j.render=function(a,e,n,r,u,d){return t(),l("div",Y,[i("div",I,[a.copyright.author&&a.copyright.repo?(t(),l("a",U,c(a.copyright.name?a.copyright.name:a.copyright.repo),1)):h("",!0),i("a",{href:a.copyright.link,style:{color:a.copyright.color},target:"_blank",class:"logo"},[i("span",{class:"iconify animate-logo","data-icon":a.copyright.logo},null,8,["data-icon"])],12,["href"]),i("span",null,c(a.copyright.author),1)]),i("div",J,[(t(!0),l(o,null,s(a.links,((a,e)=>(t(),l("a",{ref:"link",class:"link-item tooltip",trigger:"hover",key:e,style:`--vam-color: ${a.color}`,href:a.href,target:"_blank"},[i("span",S,c(a.label),1),i("span",{class:"iconify","data-icon":a.icon},null,8,["data-icon"])],12,["href"])))),128))]),x])};var B=d({name:"app",data:()=>({title:"夏日清凉小风扇",description:"除了没有风，什么都好！",copyright:{name:"Electric Fan",repo:"electric-fan",author:"Aymetic",logo:"emojione:watermelon"}}),components:{Fan:b,VueAboutMe:j}});const D={id:"app"},G=i("br",null,null,-1),H={class:"footer"};B.render=function(a,e,o,s,r,d){const h=u("fan"),m=u("vue-about-me");return t(),l("div",D,[i("h3",{title:a.description},[n(c(a.title)+" ",1),G,i("small",null,c(a.description),1)],8,["title"]),i(h),i("div",H,[i(m,{copyright:a.copyright},null,8,["copyright"])])])};const N=m(B);N.use(p),N.use(g),N.use(f),N.use(y),N.mount("#app");
