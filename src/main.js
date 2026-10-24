import "./style.css";
import { JB } from "./data.js";
window.JB = JB;
(function(){
"use strict";
var JB = window.JB, D = document, root = D.documentElement;
var $ = function(s,c){return (c||D).querySelector(s)}, $$ = function(s,c){return Array.prototype.slice.call((c||D).querySelectorAll(s))};


/* Cloudinary: serve each image at the right size and format for the screen */
function cld(u,w){ return u.indexOf("/upload/")<0 ? u : u.replace("/upload/","/upload/f_auto,q_auto,c_limit,w_"+w+"/") }
function srcset(u){ return [600,900,1200,1600,1900].map(function(w){ return cld(u,w)+" "+w+"w" }).join(", ") }

/* ---------- build generated content (both modes) ---------- */
function svcGroup(g){
  return '<div class="svc"><span class="mono">'+String(g.i+1).padStart(2,"0")+'</span><p class="d '+(g.i%2?'b7':'t2')+'">'+g.n+'</p><ul>'+g.items.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul></div>';
}
var S = JB.services.map(function(s,i){return {i:i,n:s[0],items:s[1]}});
var posA = [["-0.36,0.13","-0.23,-0.16",".25","-.35,.1","24"],["-0.18,0.13","0.23,-0.16",".1","-.18,.15","12"],["0,0.13","-0.23,0.08","0","0,.2","0"],["0.18,0.13","0.23,0.08","-.08",".18,.15","-12"],["0.36,0.13","-0.23,0.32","-.16",".35,.1","-24"]];
S = S.filter(function(g){ return g.n!=="Packaging and Environments" }).map(function(g,i){ g.i=i; return g });
var OFF=[["-38vw","10vh"],["-18vw","18vh"],["0vw","26vh"],["18vw","18vh"],["38vw","10vh"]];
// What I do: five services scattered through space at different depths, plus a field of tiny stars
var SP=[[-0.27,-0.1,0.5,-0.16,-0.2],[0.26,0.2,0.18,0.16,0.02],[0.29,-0.24,0.85,0.2,-0.3],[-0.2,0.27,-0.12,0.0,0.22],[-0.02,0.04,1.2,-0.1,0.38]];
$(".svc-st").insertAdjacentHTML("beforeend", S.map(function(g,j){ var p=SP[j];
  return '<div class="el" data-abs="1" data-p="'+p[0]+','+p[1]+'" data-mp="'+p[3]+','+p[4]+'" data-z="'+p[2]+'" data-f="0,0"><p class="d svc-nm">'+g.n+'</p></div>' }).join("")
  + (function(){ var h="", seed=7; function r(){ seed=(seed*16807)%2147483647; return seed/2147483647 }
      for(var q=0;q<34;q++){ var x=(r()-.5)*1.3, y=(r()-.5)*1.05, z=-0.3+r()*1.9, sz=3+Math.round(r()*4);
        h+='<div class="el" data-abs="1" data-p="'+x.toFixed(3)+','+y.toFixed(3)+'" data-mp="'+(x*.8).toFixed(3)+','+y.toFixed(3)+'" data-z="'+z.toFixed(2)+'" data-f="0,0" aria-hidden="true"><i class="star" style="width:'+sz+'px;height:'+sz+'px"></i></div>' }
      return h })());


// work: play with scale, alternate sides and sizes
var WL = [
  {x:-0.22,y:-0.02,w:"clamp(260px,30vw,560px)",ar:"4/3",ax:0.05,ay:0.3},
  {x:0.21,y:0.05,w:"clamp(260px,30vw,560px)",ar:"4/3",ax:-0.02,ay:-0.3},
  {x:-0.18,y:0.0,w:"clamp(280px,34vw,640px)",ar:"16/9",ax:0.26,ay:0.34},
  {x:0.19,y:-0.04,w:"clamp(280px,34vw,640px)",ar:"16/9",ax:0.0,ay:0.32},
  {x:-0.24,y:0.03,w:"clamp(230px,25vw,460px)",ar:"3/2",ax:0.04,ay:-0.3},
  {x:0.23,y:0.0,w:"clamp(230px,25vw,460px)",ar:"3/2",ax:-0.12,ay:0.36}
];
var order = ["king-brothers-dairy","alliance-180","dlg","natroba","saint","finishline"];
var P = order.map(function(s){return JB.projects.filter(function(p){return p.slug===s})[0]});
$("#work-stops").outerHTML = P.map(function(p,i){
  var L = WL[i], side = L.x<0?1:-1;
  return '<section class="st" data-label="Work" data-gap="'+(i?1.55:2.2)+'" data-hold=".38" data-ease=".5" data-a="'+L.ax+','+L.ay+'" data-ma="'+(0.43*side)+',0.36">'+
    '<div class="el" data-p="'+L.x+','+L.y+'" data-mp="0,-0.02" data-z="0" data-f="'+(L.x<0?-.25:.25)+',0" data-r="'+(L.x<0?18:-18)+'">'+
      '<button class="card '+(L.x<0?"l":"r")+'" data-proj="'+i+'" style="width:'+L.w+'"><span class="fig" style="--ar:'+L.ar+'"><img src="'+cld(p.cover,1200)+'" srcset="'+srcset(p.cover)+'" sizes="(max-width:760px) 80vw, 36vw" alt="'+p.title+' project" loading="lazy" decoding="async"></span>'+
      '<span class="meta"><span class="mono">'+String(i+1).padStart(2,"0")+' / 06</span></span>'+
      '<span class="d '+(i%2?'t2':'b7')+'">'+p.title+'</span><span class="meta"><span class="small">'+p.category+'</span><span class="mono open">View</span></span></button>'+
    '</div></section>';
}).join("");

// split headings into characters for the converge effect
$$(".split").forEach(function(h){
  var i=0; (function walk(n){ $$("*",n); Array.prototype.slice.call(n.childNodes).forEach(function(c){
    if(c.nodeType===3){ var f=D.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach(function(wd){ if(!wd) return; if(/^\s+$/.test(wd)){f.appendChild(D.createTextNode(" "));return;} var w=D.createElement("span"); w.className="w"; wd.split("").forEach(function(ch){ var s=D.createElement("span"); s.className="c"; s.style.setProperty("--i", i++); s.textContent=ch; w.appendChild(s)}); f.appendChild(w)}); n.replaceChild(f,c) }
    else if(c.nodeType===1) walk(c);
  })})(h);
  h.setAttribute("aria-label", h.textContent);
});

/* ---------- copy email ---------- */
$("#copy").addEventListener("click", function(){
  var b=this, t=JB.email;
  function done(msg){ b.textContent=msg; setTimeout(function(){b.textContent="Copy email"},1800) }
  try{ navigator.clipboard.writeText(t).then(function(){done("Copied")}, function(){ sel(); done("Press ⌘C") }) }catch(e){ sel(); done("Press ⌘C") }
  function sel(){ var r=D.createRange(); r.selectNodeContents($("#mail")); var s=getSelection(); s.removeAllRanges(); s.addRange(r) }
});

/* ---------- remember Flash? ---------- */
var fx=$("#fx"), fctx=fx.getContext&&fx.getContext("2d"), parts=[], fxOn=false, EMO=["😄","👍","😎","🙌","✨","😄","👍"];
function fxLoop(){
  var w=innerWidth,h=innerHeight; fctx.clearRect(0,0,w,h);
  parts=parts.filter(function(p){ return p.life<120 && p.y<h+80 });
  parts.forEach(function(p){ p.vy+=0.42; p.vx*=0.99; p.x+=p.vx; p.y+=p.vy; p.r+=p.vr; p.life++;
    fctx.save(); fctx.globalAlpha=Math.max(0,1-p.life/120); fctx.translate(p.x,p.y); fctx.rotate(p.r); fctx.font=p.s+"px serif"; fctx.textAlign="center"; fctx.textBaseline="middle"; fctx.fillText(p.e,0,0); fctx.restore() });
  if(parts.length) requestAnimationFrame(fxLoop); else { fxOn=false; fctx.clearRect(0,0,w,h) }
}
var thumbs=$("#thumbs");
if(thumbs && fctx) thumbs.addEventListener("click",function(){
  var d=Math.min(devicePixelRatio||1,2); fx.width=innerWidth*d; fx.height=innerHeight*d; fctx.setTransform(d,0,0,d,0,0);
  var r=thumbs.getBoundingClientRect(), x=r.left+r.width/2, y=r.top+r.height/2;
  for(var n=0;n<54;n++){ var a=Math.random()*Math.PI*2, v=6+Math.random()*13; parts.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-7,r:Math.random()*6.3,vr:(Math.random()-.5)*.3,s:20+Math.random()*30,e:EMO[n%EMO.length],life:0}) }
  if(!fxOn){ fxOn=true; requestAnimationFrame(fxLoop) }
  thumbs.classList.remove("pop"); void thumbs.offsetWidth; thumbs.classList.add("pop");
  setTimeout(function(){ thumbs.classList.remove("pop") },600);
  $("#thumbtt").textContent="Ha. You remember. Respect.";
});
var NOPE=["Ah, a youngster. Ask your parents about Skip Intro buttons.","Let me guess. You were born after Flash died.","OK, zoomer. Back to your 9 second videos.","No Flash? You never waited 4 minutes for a website. Lucky you."], nopeI=0, tdn=$("#thumbsdn");
if(tdn) tdn.addEventListener("click",function(){
  $("#thumbtt").textContent=NOPE[nopeI++ % NOPE.length];
  tdn.classList.remove("nope"); void tdn.offsetWidth; tdn.classList.add("nope");
});

/* ---------- Distinkt teaser player ---------- */
(function(){
  var v=$("#dkvid"), fig=$("#dkfig"); if(!v) return;
  var pp=$("#dkpp"), big=$("#dkbig"), seek=$("#dkseek"), tm=$("#dktime"), snd=$("#dksnd");
  function fmt(t){ t=Math.max(0,Math.floor(t||0)); return Math.floor(t/60)+":"+String(t%60).padStart(2,"0") }
  function toggle(){ if(v.paused){ var pr=v.play(); if(pr&&pr.catch) pr.catch(function(){}) } else v.pause() }
  big.addEventListener("click",toggle); pp.addEventListener("click",toggle); v.addEventListener("click",toggle);
  v.addEventListener("play",function(){ fig.classList.add("playing"); pp.setAttribute("aria-label","Pause") });
  v.addEventListener("pause",function(){ fig.classList.remove("playing"); pp.setAttribute("aria-label","Play") });
  function upd(){ var d=v.duration||0, p=d? v.currentTime/d : 0; seek.value=Math.round(p*1000); seek.style.setProperty("--pct",(p*100).toFixed(2)+"%"); tm.textContent=fmt(v.currentTime)+" / "+fmt(d) }
  v.addEventListener("timeupdate",upd); v.addEventListener("loadedmetadata",upd); v.addEventListener("ended",function(){ v.currentTime=0; upd() });
  seek.addEventListener("input",function(){ if(v.duration){ v.currentTime=seek.value/1000*v.duration; upd() } });
  snd.addEventListener("click",function(){ v.muted=!v.muted; snd.setAttribute("aria-pressed",String(!v.muted)); snd.setAttribute("aria-label",v.muted?"Unmute":"Mute") });
})();

/* ---------- menu ---------- */
var burger=$("#burger");
function setMenu(o){ root.classList.toggle("menu-open",o); burger.setAttribute("aria-expanded",o) }
burger.addEventListener("click",function(){ setMenu(!root.classList.contains("menu-open")) });

/* ---------- project view ---------- */
var proj=$("#proj"), pvx=$("#pvx"), cur=-1, lastCard=null;
// browser history: opening, switching and closing projects are real steps, so back and forward work
function setPath(i, push){ var u = i<0 ? "/" : "/projects/"+P[i].slug; if(location.pathname===u) return;
  try{ history[push?"pushState":"replaceState"]({proj:i},"",u) }catch(e){} }
function pathIndex(){ var m=location.pathname.match(/^\/projects\/([^\/]+)/), k=-1; if(m) P.forEach(function(p,j){ if(p.slug===m[1]) k=j }); return k }
var PV_SIZES="(max-width:760px) 100vw, 58vw";
function preload(i,n){ return Promise.all(P[i].images.slice(0,n||2).map(function(u){ var im=new Image(); im.sizes=PV_SIZES; im.srcset=srcset(u); im.src=cld(u,1600); return im.decode ? im.decode().catch(function(){}) : Promise.resolve() })) }
function renderProj(i, quiet){
  var p=P[i], n=P[(i+1)%P.length];
  var paras=p.description.split("\n").filter(Boolean).map(function(t){return "<p>"+t+"</p>"}).join("");
  var imgs=p.images.map(function(s,k){return '<figure><img src="'+cld(s,1600)+'" srcset="'+srcset(s)+'" sizes="'+PV_SIZES+'" alt="'+p.title+' image '+(k+1)+'"'+(k>1?' loading="lazy" decoding="async"':'')+'></figure>'}).join("");
  proj.innerHTML='<div class="pv"><div class="pv-l"><span class="mono">'+String(i+1).padStart(2,"0")+' / 06</span><h2 class="d b9">'+p.title+'</h2>'+
  '<div><span class="mono">Overview</span><div style="margin-top:12px">'+paras+'</div></div>'+
  '<dl class="pv-dl"><dt>Client</dt><dd>'+p.client+'</dd><dt>Services</dt><dd>'+p.services.join(", ")+'</dd></dl>'+
  '<button class="pv-next" id="pvn"><span class="mono">Next project</span><span class="d t1">'+n.title+'</span></button></div>'+
  '<div class="pv-r">'+imgs+'</div></div>';
  proj.scrollTop=0;
  $("#pvn").addEventListener("click",function(){ swap((i+1)%P.length) });
  setTimeout(function(){ preload((i+1)%P.length) },1200);
  if(proj.animate && !quiet) $$(".pv-r figure, .pv-l > *",proj).forEach(function(e,k){ e.animate([{opacity:0,transform:"translateY(40px)"},{opacity:1,transform:"none"}],{duration:900,delay:120+k*60,easing:"cubic-bezier(.2,.8,.2,1)",fill:"backwards"}) });
}
function openProj(i, card, fromHistory){
  if(!fromHistory) setPath(i, true);
  cur=i; lastCard=card; renderProj(i);
  var r=card.getBoundingClientRect(), W=innerWidth, H=innerHeight;
  var from="inset("+Math.max(0,r.top)+"px "+Math.max(0,W-r.right)+"px "+Math.max(0,H-r.bottom)+"px "+Math.max(0,r.left)+"px)";
  proj.classList.add("show"); root.style.overflow="hidden";
  if(proj.animate && !reduce) proj.animate([{clipPath:from},{clipPath:"inset(0px 0px 0px 0px)"}],{duration:900,easing:"cubic-bezier(.7,0,.2,1)",fill:"forwards"});
  else proj.style.clipPath="inset(0)";
  pvx.focus({preventScroll:true});
}
var wipe=$("#wipe"), wpath=$("#wpath"), wtitle=$("#wtitle"), wnum=$("#wnum"), busy=false;
function swap(i, fromHistory){
  if(!wipe.animate||reduce){ cur=i; if(!fromHistory) setPath(i, true); renderProj(i); return }
  if(busy) return; busy=true;
  var p=P[i], k=0, ready=preload(i), t0w=Date.now();
  wnum.textContent="Next project · "+String(i+1).padStart(2,"0")+" / 06";
  wtitle.innerHTML=p.title.split("").map(function(ch){ return ch===" "?" ":'<span class="c">'+ch+'</span>' }).join("");
  wipe.style.visibility="visible";
  wtitle.style.fontSize=""; var tw=wtitle.scrollWidth, mw=innerWidth*0.9; if(tw>mw) wtitle.style.fontSize=(parseFloat(getComputedStyle(wtitle).fontSize)*mw/tw).toFixed(1)+"px";
  if(wpath.getAnimations) wpath.getAnimations().forEach(function(a){ a.cancel() });
  if(wipe.getAnimations) wipe.getAnimations().forEach(function(a){ a.cancel() });
  var L=wpath.getTotalLength(); wpath.style.strokeDasharray=L; wpath.style.strokeDashoffset=L;
  // the line holds hidden (fill both) until the black panel is up, then draws once
  wpath.animate([{strokeDashoffset:L+"px"},{strokeDashoffset:"0px"}],{duration:1000,delay:650,easing:"cubic-bezier(.6,0,.2,1)",fill:"both"});
  wipe.animate([{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)"}],{duration:650,easing:"cubic-bezier(.7,0,.2,1)",fill:"forwards"}).onfinish=function(){
    wipe.classList.add("on");
    $$(".c",wtitle).forEach(function(c,j){ c.animate([{transform:"translateY(110%) rotate(6deg)",opacity:0},{transform:"none",opacity:1}],{duration:750,delay:60+j*38,easing:"cubic-bezier(.2,.8,.2,1)",fill:"both"}) });
    setTimeout(function(){ Promise.race([ready, new Promise(function(r){ setTimeout(r,2500) })]).then(reveal) },1250);
    function reveal(){
      cur=i; if(!fromHistory) setPath(i, true); renderProj(i, true);
      var a=wipe.animate([{clipPath:"inset(0 0 0% 0)"},{clipPath:"inset(0 0 100% 0)"}],{duration:750,easing:"cubic-bezier(.7,0,.2,1)",fill:"forwards"});
      a.onfinish=function(){ wipe.style.visibility="hidden"; wipe.classList.remove("on"); busy=false };
    }
  };
}
function closeProj(fromKey, fromHistory){
  if(cur<0) return;
  if(!fromHistory) setPath(-1, true);
  // land the main page on the project being viewed
  var card=D.querySelector('[data-proj="'+cur+'"]');
  if(card){ lastCard=card;
    root.style.overflow="";
    if(go3d && ST.length){ var e=EL.filter(function(x){ return x.el.contains(card) })[0];
      if(e){ var y=e.st.sHold+2; scrollTo(0,y); sCam=y; } }
    else card.scrollIntoView({block:"center"});
    root.style.overflow="hidden";
  }
  var fin=function(){ proj.classList.remove("show"); proj.innerHTML=""; root.style.overflow=""; cur=-1; if(lastCard && fromKey===true) lastCard.focus({preventScroll:true}) };
  if(proj.animate && !reduce){ var a=proj.animate([{clipPath:"inset(0px 0px 0px 0px)"},{clipPath:"inset(50% 50% 50% 50%)"}],{duration:700,easing:"cubic-bezier(.7,0,.2,1)",fill:"forwards"}); a.onfinish=fin } else fin();
}
pvx.addEventListener("click",function(){ closeProj(false) });
addEventListener("popstate",function(){
  var k=pathIndex();
  if(k<0){ if(cur>=0) closeProj(false, true); return }
  if(cur<0){ var card=D.querySelector('[data-proj="'+k+'"]'); if(card) openProj(k, card, true) }
  else if(cur!==k){ if(busy){ cur=k; renderProj(k, true) } else swap(k, true) }
});
D.addEventListener("keydown",function(e){ if(e.key==="Escape"){ if(cur>=0) closeProj(true); else setMenu(false) } });
D.addEventListener("click",function(e){ var c=e.target.closest&&e.target.closest("[data-proj]"); if(c){ openProj(+c.dataset.proj, c) } });

/* ---------- 3D journey ---------- */
var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
var go3d = !reduce && !!window.requestAnimationFrame && !!D.createElement("canvas").getContext;
D.addEventListener("click",function(e){
  var g=e.target.closest&&e.target.closest("[data-go]"); if(!g) return;
  e.preventDefault(); setMenu(false);
  var id=g.dataset.go;
  if(!go3d){ var t=$("#"+(id==="distinkt"?"distinkt":id)); if(t) t.scrollIntoView({behavior:"smooth"}); return }
  var st=ST.filter(function(s){return s.id===id || (id==="distinkt"&&s.dk)})[0]; if(st) { scrollTo(0, st.sHold + (st.dk? st.holdPx*0.45 : 2)); }
});
if(!go3d) return;
root.classList.add("is3d");
try{ if("scrollRestoration" in history) history.scrollRestoration="manual" }catch(e){}
scrollTo(0,0);
addEventListener("pageshow",function(){ scrollTo(0,0) });

var cv=$("#cv"), ctx=cv.getContext("2d"), spacer=$("#spacer"), dk=$("#distinkt"), panel=$(".panel",dk);
var flyEls=$$(".fly",dk), dkIn=$(".dk-in",dk);
var W,H,F,mob,DPR,ST=[],EL=[],KEYS=[],PTS=[],zEnd=0,dkSt=null,total=0;
var sCam=0, lead=0, t0=performance.now();

function num(v,d){ v=parseFloat(v); return isNaN(v)?d:v }
function pair(s){ var a=(s||"0,0").split(","); return [num(a[0],0),num(a[1],0)] }
function clamp(v,a,b){ return v<a?a:v>b?b:v }
function sm(t){ t=clamp(t,0,1); return t*t*t*(t*(t*6-15)+10) }

var lastLayoutW=0, hProbe=null;
function stableH(){
  if(!hProbe){ hProbe=D.createElement("div"); hProbe.style.cssText="position:fixed;left:0;top:0;width:1px;height:100vh;height:100lvh;visibility:hidden;pointer-events:none"; D.body.appendChild(hProbe) }
  return Math.max(innerHeight, hProbe.offsetHeight||0);
}
function layout(){
  var prog = total? clamp(scrollY/total,0,1) : 0;
  W=innerWidth; H=stableH(); mob = W<760; lastLayoutW=W;
  F = mob ? 900 : clamp(W*0.8, 900, 1400);
  DPR=Math.min(devicePixelRatio||1,2);
  cv.width=W*DPR; cv.height=H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
  // fit giant one-line type to the screen
  $$(".el .d").forEach(function(d){
    if(getComputedStyle(d).whiteSpace!=="nowrap") return;
    d.style.fontSize=""; var w=d.offsetWidth, max=W*(mob?0.9:0.9);
    if(w>max){ d.style.fontSize=(parseFloat(getComputedStyle(d).fontSize)*max/w).toFixed(1)+"px" }
  });
  ST=[]; EL=[];
  var z=0;
  $$(".st").forEach(function(sec,i){
    var gap=num(sec.dataset.gap,3); if(i) z+=gap*F;
    var a=pair(mob&&sec.dataset.ma?sec.dataset.ma:sec.dataset.a);
    var st={sec:sec,id:sec.id,label:sec.dataset.label||"",z:z,gap:gap,hold:num(sec.dataset.hold,.6),ease:num(sec.dataset.ease,1),ax:a[0],ay:a[1],dk:!!sec.dataset.dk,end:!!sec.dataset.end,nodes:$$(".node",sec)};
    ST.push(st);
    $$(".el",sec).forEach(function(el){
      var p=pair(mob&&el.dataset.mp?el.dataset.mp:el.dataset.p), f=pair(el.dataset.f);
      var zo=num(el.dataset.z,0);
      el.style.visibility="hidden";
      EL.push({abs:num(el.dataset.abs,0),el:el,st:st,x:p[0],y:p[1],zo:zo,z:z+zo*F,ff:Math.min(1.7, Math.max(1.0, st.gap*0.82))*F, fx:mob?f[0]*0.5:f[0],fy:f[1],r:mob?0:num(el.dataset.r,0),vis:false,node:el.querySelector(".node")});
      el.classList.toggle("far", zo>0.2);
    });
    if(st.dk) dkSt=st;
  });
  // camera keyframes in scroll pixels
  KEYS=[]; var s=0, trav=mob?0.52:0.46;
  ST.forEach(function(st,i){
    var zc=st.z-F;
    if(i){ s+=st.gap*trav*H; }
    var c = st.dk ? 0 : (i===0 ? 0 : 0.11), hp = st.dk ? st.hold*H : st.hold*H*0.55;
    KEYS.push({s:s,zc:zc-c*F,ease:i?st.ease*0.45:0}); st.sHold=s; st.holdPx=hp;
    s+=hp; KEYS.push({s:s,zc:zc+(st.dk?0:(i===0?0.18:0.11))*F,ease:0});
  });
  total=s; spacer.style.height=(total+H)+"px";
  // line knots: through every stop's anchor, swinging out wide into empty space between big gaps
  var K=[{z:ST[0].z, x:ST[0].ax*W, y:ST[0].ay*H}], side=1;
  for(var i=1;i<ST.length;i++){
    var A=ST[i-1], B=ST[i];
    if(B.gap>=2.2){
      side=-side;
      K.push({z:A.z+(B.z-A.z)*0.5, x:side*(mob?0.85:1.05)*W, y:(side>0?-0.42:0.46)*H});
    }
    K.push({z:B.z, x:B.ax*W, y:B.ay*H});
  }
  zEnd=K[K.length-1].z;
  // sample: x,y as smooth functions of z (Catmull-Rom)
  PTS=[];
  var n=K.length, mx=[], my=[];
  for(var k=0;k<n;k++){
    var a0=K[Math.max(0,k-1)], a1=K[Math.min(n-1,k+1)], dzz=Math.max(1,a1.z-a0.z);
    mx[k]=(k===0||k===n-1)?0:(a1.x-a0.x)/dzz; my[k]=(k===0||k===n-1)?0:(a1.y-a0.y)/dzz;
  }
  for(var k=0;k<n-1;k++){
    var p1=K[k], p2=K[k+1], h=Math.max(1,p2.z-p1.z), N=Math.max(24,Math.round(h/F*40));
    for(var j=0;j<N;j++){
      var t=j/N, t2=t*t, t3=t2*t, h00=2*t3-3*t2+1, h10=t3-2*t2+t, h01=-2*t3+3*t2, h11=t3-t2;
      PTS.push({z:p1.z+h*t, x:h00*p1.x+h10*h*mx[k]+h01*p2.x+h11*h*mx[k+1], y:h00*p1.y+h10*h*my[k]+h01*p2.y+h11*h*my[k+1]});
    }
  }
  PTS.push({z:zEnd,x:K[K.length-1].x,y:K[K.length-1].y});
  // shrink the Distinkt panel to fit short screens, so nothing slides under the header
  if(dkIn){ dkIn.style.transform=""; var ph=dkIn.offsetHeight, av=H-(mob?126:160); dkIn.style.transform = ph>av ? "scale("+(av/ph).toFixed(3)+")" : "" }
  // keep the visitor at the same point of the journey after a resize
  sCam = prog*total; if(prog>0 && cur<0) scrollTo(0, sCam);
}

function zAt(s){
  if(s<=KEYS[0].s) return KEYS[0].zc;
  for(var i=1;i<KEYS.length;i++){
    var a=KEYS[i-1], b=KEYS[i];
    if(s<=b.s){ var t=(s-a.s)/Math.max(1,b.s-a.s); var e=b.ease; t = t*(1-e) + sm(t)*e; return a.zc+(b.zc-a.zc)*t }
  }
  return KEYS[KEYS.length-1].zc;
}

function mix(c1,c2,t){ return "rgb("+Math.round(c1[0]+(c2[0]-c1[0])*t)+","+Math.round(c1[1]+(c2[1]-c1[1])*t)+","+Math.round(c1[2]+(c2[2]-c1[2])*t)+")" }
var BLUE=[34,52,224], ORANGE=[244,121,32], LIGHTBLUE=[124,138,255];

function drawLine(zc){
  ctx.clearRect(0,0,W,H);
  var cx=W/2, cy=H/2, near=0.1*F, zHead=Math.min(zc+lead, zEnd), prev=null, headP=null;
  ctx.lineCap="butt"; ctx.lineJoin="round"; ctx.miterLimit=1; ctx.strokeStyle=mix(BLUE,LIGHTBLUE,DARK); var run=null;
  for(var i=0;i<PTS.length;i++){
    var p=PTS[i]; if(p.z<zc+near) { prev=null; continue }
    if(p.z>zHead){ if(prev){ var q=PTS[i-1]; var t=(zHead-q.z)/Math.max(1,p.z-q.z); p={z:zHead,x:q.x+(p.x-q.x)*t,y:q.y+(p.y-q.y)*t} } else break; }
    var dz=p.z-zc, s=F/dz, X=cx+p.x*s, Y=cy+p.y*s;
    var cur={X:X,Y:Y,dz:dz,z:p.z};
    if(prev && p.z<zHead && Math.abs(X-prev.X)+Math.abs(Y-prev.Y)<1.2) continue;
    if(prev){
      var w=clamp(2.4*s,0.5,7), fog=(1-0.82*sm((dz-1.2*F)/(lead-1.2*F)))*sm((dz-near)/(0.3*F));
      var qa=Math.round(fog*40)/40, qw=Math.round(w*4)/4;
      if(qa<=0){ if(run){ ctx.stroke(); run=null } prev=cur; continue }
      if(!run || run.a!==qa || run.w!==qw){
        if(run) ctx.stroke();
        run={a:qa,w:qw}; ctx.globalAlpha=qa; ctx.lineWidth=qw; ctx.beginPath(); ctx.moveTo(prev.X,prev.Y);
      }
      ctx.lineTo(X,Y);
    } else if(run){ ctx.stroke(); run=null }
    prev=cur; headP=cur;
    if(p.z>=zHead) break;
  }
  if(run) ctx.stroke();
  ctx.globalAlpha=1;
  if(headP){
    var hs=F/headP.dz, r=clamp(5*hs,2.5,14), isEnd = zHead>=zEnd-1;
    var o2=0;
    ctx.fillStyle=mix(BLUE,LIGHTBLUE,DARK);
    ctx.beginPath(); ctx.arc(headP.X,headP.Y,isEnd? clamp(11*hs,6,22): r,0,Math.PI*2); ctx.fill();
    if(!isEnd){ ctx.globalAlpha=.18; ctx.beginPath(); ctx.arc(headP.X,headP.Y,r*2.6,0,Math.PI*2); ctx.fill(); ctx.globalAlpha=1 }
  }
}

function place(zc){
  var cx=W/2, cy=H/2;
  for(var i=0;i<EL.length;i++){
    var e=EL[i], dz=e.z-zc, base=F*(1+e.zo), u=dz-base;
    if(dz<0.16*F || u>2.7*F){ if(e.vis){ e.el.style.visibility="hidden"; e.vis=false } continue }
    var s=(e.abs? F*e.abs : base)/dz, k=u>0? sm(u/(1.9*F)) : 0;
    var x=(e.x+e.fx*k)*W, y=(e.y+e.fy*k)*H;
    var X=cx+x*s, Y=cy+y*s;
    var ff=e.ff, op = u>0 ? 1-sm((u-0.45*ff)/(0.55*ff)) : 1-sm((-u-0.22*F)/(0.42*F));
    if(op<0.01){ if(e.vis){ e.el.style.visibility="hidden"; e.vis=false } continue }
    if(!e.vis){ e.el.style.visibility="visible"; e.vis=true }
    e.el.style.opacity=op.toFixed(3);
    e.el.style.transform="translate3d("+X.toFixed(1)+"px,"+Y.toFixed(1)+"px,0) translate(-50%,-50%) perspective(1100px) rotateY("+(e.r*k).toFixed(2)+"deg) scale("+s.toFixed(4)+")";
    e.el.style.setProperty("--k", k.toFixed(3));
    e.el.style.setProperty("--fp", clamp((0.55*F-u)/(0.65*F),0,1).toFixed(3));
    e.el.style.setProperty("--dp", sm((-u-0.03*F)/(0.38*F)).toFixed(3));
    // --sp: like --dp, but keeps easing outward (slower) instead of stopping
    var tsp=Math.max(0,(-u-0.03*F)/(0.38*F)), sp = tsp<1 ? (3*tsp*tsp-2*tsp*tsp*tsp) + 0.35*(tsp*tsp*tsp-tsp*tsp) : 1+0.35*(tsp-1);
    e.el.style.setProperty("--sp", sp.toFixed(3));
    if(e.pose===undefined) e.pose=[].slice.call(e.el.querySelectorAll(".pose img"));
    if(e.pose.length){
      var pf=Math.round(clamp((-u+0.04*F)/(0.42*F),0,1)*(e.pose.length-1));
      if(pf!==e.pf){ if(e.pf!=null) e.pose[e.pf].classList.remove("on"); else e.pose[0].classList.remove("on"); e.pose[pf].classList.add("on"); e.pf=pf; }
    }
    if(e.runner===undefined) e.runner=e.el.querySelector(".runner");
    if(e.runner){
      var rf=clamp((0.55*F-u)/(0.65*F),0,1), rt=clamp((-u-0.1*F)/(0.42*F),0,1);
      var rx=rf*96 + rt*26, ry=-1.5*rt + 2.9*rt*rt;
      e.runner.style.left=rx.toFixed(2)+"%";
      var hp=e.runner.parentNode, hw=hp.offsetWidth;
      if(e.jw!==hw){ e.jw=hw; e.jc=[].slice.call(hp.querySelectorAll(".c")).map(function(c){ var l=0,n=c; while(n&&n!==hp){ l+=n.offsetLeft; n=n.offsetParent; } return [c,l/hw*100,c.offsetWidth/hw*100]; }); e.jx=null }
      var fx=Math.min(rx,100);
      if(e.jx!==fx){ e.jx=fx; e.jc.forEach(function(q){ q[0].style.setProperty("--cf",(clamp((fx-q[1])/q[2],0,1)*100).toFixed(1)+"%") }) }
      e.runner.style.transform="translate(-50%,"+ry.toFixed(3)+"em) rotate("+(rt*24).toFixed(1)+"deg)";
      var pose = rt>0.01 ? "pj" : "run";
      if(e.runner._p!==pose){ e.runner.classList.remove("run","pj"); e.runner.classList.add(pose); e.runner._p=pose }
      if(pose==="run" && e.runner._ph!==rf){ e.runner._ph=rf; rig(e.runner, rf*7*Math.PI*2) }
    }
    if(e.spr===undefined) e.spr=e.el.querySelector(".spray");
    if(e.spr) spray(e.spr, clamp((clamp((0.55*F-u)/(0.65*F),0,1)-0.25)/0.7,0,1));
    if(e.ctw===undefined) e.ctw=e.el.querySelector(".ct-wrap");
    if(e.ctw) para(e.ctw, clamp((sCam-(e.st.sHold-0.4*H))/(0.4*H+e.st.holdPx*0.95),0,1));
    e.el.style.pointerEvents = op>0.6 && s<1.6 ? "auto" : "none";
    if(e.node) e.node.classList.toggle("on", u<0.05*F);
  }
}

function distinkt(s){
  if(!dkSt){ return }
  var a=dkSt.sHold, h=dkSt.holdPx;
  var r = sm((s-(a-0.75*H))/(1.05*H));          // circle grows out of the line
  var qIn = (s-(a+0.05*H))/(0.95*H);            // content flies in
  var ex = sm((s-(a+h-1.05*H))/(1.0*H));        // panel shrinks back into space
  if(r<=0 || ex>=1){ if(dk.style.visibility!=="hidden"){ dk.style.visibility="hidden"; dk.style.pointerEvents="none" } return }
  dk.style.visibility="visible";
  var R=Math.hypot(W,H)*0.62*r+1;
  panel.style.clipPath="circle("+R.toFixed(1)+"px at "+(W/2+dkSt.ax*W)+"px "+(H/2+dkSt.ay*H)+"px)";
  var sc=1-0.84*ex;
  panel.style.transform="perspective(1200px) translate3d(0,"+(-ex*H*0.04)+"px,0) rotateX("+(ex*14)+"deg) scale("+sc.toFixed(4)+")";
  panel.style.borderRadius=(ex*36)+"px";
  panel.style.opacity = (1-sm((ex-0.7)/0.3)).toFixed(3);
  flyEls.forEach(function(f,i){ var q=1-sm(qIn*1.6 - i*0.13); f.style.setProperty("--q", q.toFixed(3)) });
  dk.style.pointerEvents = (r>0.98 && ex<0.2) ? "auto" : "none";
  var vid=$("#dkvid"); if(vid && !vid.paused && !(r>0.9 && ex<0.85)) vid.pause();
}

var countEl=$("#count"), counted=false, DARK=0, lastDark=-1, cAnim=0;
if(countEl) countEl.textContent="0";
var TOK={bg:[[236,234,226],[11,12,11]],ink:[[18,20,19],[241,241,238]],muted:[[94,99,96],[154,160,156]],hair:[[211,208,198],[44,47,45]],line:[[34,52,224],[124,138,255]]};
function numbers(zc){
  var ds=ST.filter(function(x){return x.sec.dataset.dark}); if(!ds.length) return;
  DARK=0; ds.forEach(function(d){ var uu=d.z-zc-F; DARK=Math.max(DARK, Math.min(1-sm((uu-0.45*F)/(0.85*F)), 1-sm((-uu-0.6*F)/(0.65*F)))) });
  var st=ds[0], u=st.z-zc-F;
  if(Math.abs(DARK-lastDark)>0.003){ lastDark=DARK;
    for(var k in TOK){ root.style.setProperty("--"+k, mix(TOK[k][0],TOK[k][1],DARK)) }
  }
  if(!counted && u<0.5*F && u>-0.8*F){ counted=true; var t0c=performance.now(), my=++cAnim;
    (function tick(n){ if(my!==cAnim) return; var t=clamp((n-t0c)/1100,0,1), e=1-Math.pow(1-t,3); countEl.textContent=Math.round(250*e); if(t<1) requestAnimationFrame(tick) })(t0c);
  }
  if(counted && u>1.4*F){ counted=false; cAnim++; countEl.textContent="0" }
}

/* scroll-driven run cycle: legs and arms swing in opposition */
/* Beyond design: the spray can paints a stroke onto the page as it lands, and un-paints on the way back */
function spray(svg,p){
  if(svg._p===p) return; svg._p=p;
  var path=svg.querySelector(".spray-p"), mist=svg.querySelector(".spray-mist");
  if(!svg._L){
    svg._L=path.getTotalLength(); path.style.strokeDasharray=svg._L;
    var g=svg.querySelector(".spray-dots"), seed=11, h="";
    function r(){ seed=(seed*16807)%2147483647; return seed/2147483647 }
    svg._dots=[];
    for(var q=0;q<90;q++){ var t=r(), pt=path.getPointAtLength(t*svg._L), a=r()*Math.PI*2, d=9+Math.pow(r(),1.6)*26;
      h+='<circle cx="'+(pt.x+Math.cos(a)*d).toFixed(1)+'" cy="'+(pt.y+Math.sin(a)*d).toFixed(1)+'" r="'+(0.7+r()*2).toFixed(1)+'" opacity="0"/>'; svg._dots.push(t) }
    g.innerHTML=h; svg._dc=[].slice.call(g.children);
  }
  path.style.strokeDashoffset=(svg._L*(1-p)).toFixed(1);
  svg._dc.forEach(function(c,k){ var t=svg._dots[k]; c.setAttribute("opacity", p>t ? (0.35+0.5*((k*37)%10)/10).toFixed(2) : 0) });
  mist.style.opacity = (p>0.01 && p<0.99 ? 1 : 0);
  // the mist rides along with the tip of the stroke
  var tip=path.getPointAtLength(Math.max(0.001,p)*svg._L); mist.setAttribute("cx",tip.x.toFixed(1)); mist.setAttribute("cy",tip.y.toFixed(1));
}

function para(w,p){
  if(w._p===p) return; w._p=p;
  if(!w._k) w._k={h:w.querySelector("h2"),pa:w.querySelector(".para"),cs:[].slice.call(w.querySelectorAll(".c"))};
  var K=w._k, Wd=w.offsetWidth, fs=parseFloat(getComputedStyle(K.h).fontSize);
  if(K.sig!==Wd+"|"+fs){ K.sig=Wd+"|"+fs;
    K.home=K.cs.map(function(c){ var l=0,t=0,n=c; while(n&&n!==w){ l+=n.offsetLeft; t+=n.offsetTop; n=n.offsetParent } return [l+c.offsetWidth/2, t+c.offsetHeight/2] });
    K.sw=Math.max(0.8*fs,52); K.pa.style.width=K.sw+"px";
  }
  var r=w.getBoundingClientRect(), sc=r.width/Math.max(1,Wd), scrL=-r.left/sc, scrR=(innerWidth-r.left)/sc, scrT=-r.top/sc;
  var n=K.cs.length, k=K.sw/60, capTop=K.home[0][1]-0.35*fs, step=0.15*fs, ss=0.3, gap=0.18*fs;
  var pa=0.04, pb=0.9, x0=scrL-K.sw, x1=scrR+K.sw;
  function gx(q){ return x0+(x1-x0)*clamp((q-pa)/(pb-pa),0,1) }
  function relP(x){ return pa+(pb-pa)*(x-x0)/(x1-x0) }
  var X=gx(p), FALL=0.07, rem=0, i;
  // which letters are still in his hands
  var rel=K.home.map(function(h){ return relP(h[0]-0.04*fs) });
  for(i=0;i<n;i++) if(p<rel[i]) rem++;
  // hands height: stack bottom stays just above the words, so he sinks as the stack shrinks; extra lift on entry
  var entry=1-sm(clamp((p-pa)/0.25,0,1));
  var stackH=function(m){ return m*step+0.12*fs };
  var remS=0; for(i=0;i<n;i++){ var t0=clamp((p-rel[i]+0.02)/0.06,0,1); remS+= 1-t0 }
  var Y=capTop-gap-stackH(remS)-entry*(innerHeight*0.6/sc), sway=Math.sin(p*22);
  if(p>=pb-0.12){ Y-=sm((p-(pb-0.12))/0.12)*fs*0.8 }
  var j=0;
  for(i=0;i<n;i++){
    var c=K.cs[i], h=K.home[i], tx,ty,s2,ro;
    if(p<rel[i]){
      var rank=rem-1-j; j++; // 0 = top of stack
      var slot=n-1-i; // later letters sit higher
      tx=X+((i%2)?1:-1)*0.035*fs+sway*0.02*fs*(rank/n); ty=Y+0.06*fs+ (rem-1-(rem-1-rank))*0+ (rank)*step + step*0.5;
      s2=ss; ro=((i%3)-1)*6+sway*2;
    } else {
      var t=clamp((p-rel[i])/FALL,0,1), sx=gx(rel[i])+((i%2)?1:-1)*0.035*fs, sy=Y+0.06*fs+step*(rem+0.5);
      var tt=t*t; var bo= t<1? 0 : 0;
      tx=sx+(h[0]-sx)*sm(t); ty=sy+(h[1]-sy)*tt; s2=ss+(1-ss)*sm(Math.min(1,t*1.6)); ro=((i%3)-1)*6*(1-t);
      if(t>=1){ var bt=clamp((p-rel[i]-FALL)/0.03,0,1); ty-=Math.sin(Math.PI*bt)*0.05*fs }
      sy=0;
    }
    var key=(tx-h[0]).toFixed(1)+","+(ty-h[1]).toFixed(1)+","+s2.toFixed(3)+","+ro.toFixed(1);
    if(c._t!==key){ c._t=key; c.style.transform= (Math.abs(tx-h[0])<0.05&&Math.abs(ty-h[1])<0.05&&s2>0.999&&Math.abs(ro)<0.05) ? "none" : "translate("+(tx-h[0]).toFixed(1)+"px,"+(ty-h[1]).toFixed(1)+"px) rotate("+ro.toFixed(1)+"deg) scale("+s2.toFixed(3)+")" }
  }
  K.pa.style.visibility = p>pa && p<pb ? "visible" : "hidden";
  K.pa.style.transform="translate("+(X-30*k).toFixed(1)+"px,"+(Y-74*k).toFixed(1)+"px) rotate("+(sway*5).toFixed(2)+"deg)";
}

function rig(r, ph){
  if(!r._k){ r._k={}; $$("[data-k]",r).forEach(function(n){ r._k[n.dataset.k]=n }) }
  var K=r._k, R=Math.PI/180, bob=Math.abs(Math.sin(ph))*1.1;
  var hx=17, hy=25.5-bob, sx=19.6, sy=14.2-bob;
  function v(a,l){ return [Math.sin(a*R)*l, Math.cos(a*R)*l] }
  function leg(p){ var th=40*Math.sin(p), fl=12+78*Math.max(0,Math.cos(p))*Math.max(0,Math.cos(p)*0.6+0.5);
    var k=v(th,8.6), f=v(th-fl,8.8); return "M"+hx+" "+hy+"l"+k[0].toFixed(2)+" "+k[1].toFixed(2)+"l"+f[0].toFixed(2)+" "+f[1].toFixed(2) }
  function arm(p){ var a=-52*Math.sin(p)+4, e=v(a,6.4), h=v(a+78,5.6); return "M"+sx+" "+sy+"l"+e[0].toFixed(2)+" "+e[1].toFixed(2)+"l"+h[0].toFixed(2)+" "+h[1].toFixed(2) }
  K.lf.setAttribute("d",leg(ph)); K.lb.setAttribute("d",leg(ph+Math.PI));
  K.af.setAttribute("d",arm(ph+Math.PI)); K.ab.setAttribute("d",arm(ph));
  K.tor.setAttribute("d","M"+hx+" "+hy+"L"+(sx+0.4)+" "+(sy-1.2));
  K.hd.setAttribute("cx",21.4); K.hd.setAttribute("cy",(6.4-bob).toFixed(2));
}
$$(".runner").forEach(function(r){ rig(r,0) });

var hudn=$("#hudn"), hudl=$("#hudl"), hudEl=$("#hud"), ticks=$("#ticks"), lastLab="", tickSig="";
function hud(s){
  var cur=ST[0], idx=0, big=0;
  ST.forEach(function(st){ if(st.gap>=2.2||st===ST[0]){ if(s>=st.sHold-0.6*H){ cur=st; idx=big } big++ } });
  if(cur.label!==lastLab){ lastLab=cur.label; hudl.textContent=cur.label; hudn.textContent=String(idx+1).padStart(2,"0") }
  var p=clamp(s/total,0,1); hudEl.style.setProperty("--p", p.toFixed(4));
  var sig=total+"|"+H;
  if(sig!==tickSig){ tickSig=sig; ticks.innerHTML=ST.filter(function(st,i){return i===0||st.gap>=2.2}).map(function(st){ return '<i class="tk" data-s="'+st.sHold+'" style="top:'+(st.sHold/total*100).toFixed(2)+'%"></i>' }).join("") }
  $$(".tk",ticks).forEach(function(t){ t.classList.toggle("on", +t.dataset.s<=s+2) });
}

var last=performance.now(), lastZc=null, lastS=null, lastLead=-1, dirty=true;
function frame(now){
  var dt=Math.min(0.05,(now-last)/1000); last=now;
  var target=scrollY, d=target-sCam;
  sCam += d*(1-Math.exp(-dt*(Math.abs(d)>3*H?9:5.5)));
  if(Math.abs(d)<0.3) sCam=target;
  var it=clamp((now-t0-250)/1700,0,1); lead=(mob?3.0:3.3)*F*sm(it);
  var zc=zAt(sCam);
  // only redraw when something actually moved, so an idle page costs nothing
  if(zc!==lastZc || sCam!==lastS || lead!==lastLead || dirty){ lastZc=zc; lastS=sCam; lastLead=lead; dirty=false; numbers(zc); drawLine(zc); place(zc); distinkt(sCam); hud(sCam); }
  requestAnimationFrame(frame);
}
// Phones show and hide the address bar while scrolling, which fires resize events.
// Laying everything out again mid scroll causes a stutter, so on touch screens we only
// re-layout when the width changes (rotation), and size the stage to the tallest viewport.
var coarse = matchMedia("(pointer: coarse)").matches;
var rt; addEventListener("resize",function(){
  if(coarse && innerWidth===lastLayoutW) return;
  clearTimeout(rt); rt=setTimeout(function(){ layout(); dirty=true },150) });
layout(); scrollTo(0,0); requestAnimationFrame(frame);
// deep links from the old site, like /projects/dlg, open that project
(function(){ var m=location.pathname.match(/^\/projects\/([^\/]+)/); if(!m) return;
  var di=-1; P.forEach(function(p,k){ if(p.slug===m[1]) di=k });
  if(di<0){ setPath(-1); return }
  setTimeout(function(){ var card=D.querySelector('[data-proj="'+di+'"]'); if(!card) return;
    var e=EL.filter(function(x){ return x.el.contains(card) })[0];
    if(e){ var y=e.st.sHold+2; scrollTo(0,y); sCam=y; dirty=true }
    openProj(di,card,true) },700) })();
if(D.fonts&&D.fonts.ready) D.fonts.ready.then(function(){ layout(); dirty=true });
})();
