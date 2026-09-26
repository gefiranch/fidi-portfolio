// EDIT YOUR PROJECTS HERE. Replace image paths and links with your own work.
// Empty images intentionally use blue visual placeholders. These are concept projects.
const projects = [
 {title:'Nexa Finance',description:'A personal-finance dashboard focused on clearer everyday decisions.',category:['Product Design','UI/UX'],year:'2026',image:'',link:'',visual:'dashboard',color:'#b7cff1'},
 {title:'Forma Studio',description:'A considered digital identity for an independent creative studio.',category:['Branding','Web Design'],year:'2026',image:'',link:'',visual:'poster',color:'#1256c3'},
 {title:'Still — Mindful Living',description:'A quieter space to pause, build habits, and find a little balance.',category:['UI/UX','Mobile App'],year:'2026',image:'',link:'',visual:'type',color:'#c7ddeb'},
 {title:'Orbit Workspace',description:'Bringing projects, people, and the next step into one clear view.',category:['Product Design','Dashboard'],year:'2026',image:'',link:'',visual:'dashboard',color:'#1e3f77'},
 {title:'Fieldnotes',description:'An editorial home for curious minds and meaningful stories.',category:['Web Design','Front-end'],year:'2026',image:'',link:'',visual:'type',color:'#879dbe'},
 {title:'Aether Design System',description:'A flexible visual language for consistent digital experiences.',category:['Design Systems','UI Kit'],year:'2026',image:'',link:'',visual:'poster',color:'#092f63'}
];
// EDIT YOUR APP COLLECTION HERE. Logo sources are recorded in assets/logos/sources.json.
const appLogos = {"Figma": {"file": "figma.svg", "mono": false}, "Framer": {"file": "framer.svg", "mono": true}, "Sketch": {"file": "sketch.svg", "mono": false}, "Photoshop": {"file": "photoshop.svg", "mono": false}, "Illustrator": {"file": "illustrator.svg", "mono": false}, "After Effects": {"file": "aftereffects.svg", "mono": false}, "Blender": {"file": "blender.svg", "mono": false}, "Canva": {"file": "canva.svg", "mono": false}, "VS Code": {"file": "vscode.svg", "mono": false}, "GitHub": {"file": "github.svg", "mono": true}, "Git": {"file": "git.svg", "mono": false}, "Vercel": {"file": "vercel.svg", "mono": true}, "Netlify": {"file": "netlify.svg", "mono": false}, "CodePen": {"file": "codepen.svg", "mono": true}, "Postman": {"file": "postman.svg", "mono": false}, "Docker": {"file": "docker.svg", "mono": false}, "Notion": {"file": "notion.svg", "mono": true}, "Linear": {"file": "linear.svg", "mono": true}, "Slack": {"file": "slack.svg", "mono": false}, "Discord": {"file": "discord.svg", "mono": true}, "Miro": {"file": "miro.svg", "mono": true}, "Trello": {"file": "trello.svg", "mono": false}, "Obsidian": {"file": "obsidian.svg", "mono": true}, "Arc": {"file": "arc.svg", "mono": true}};
const appGroups = [
 {category:'Design & create',apps:[['Figma','Fi','#7c61ff'],['Framer','Fr','#267bff'],['Sketch','Sk','#c08a24'],['Photoshop','Ps','#2676a5'],['Illustrator','Ai','#b97622'],['After Effects','Ae','#7166c7'],['Blender','Bl','#c47836'],['Canva','Ca','#318c9e']]},
 {category:'Build & develop',apps:[['VS Code','VS','#287caf'],['GitHub','GH','#637389'],['Git','Gi','#be624e'],['Vercel','Ve','#62758a'],['Netlify','Ne','#2c938d'],['CodePen','Cp','#6d7796'],['Postman','Po','#c37854'],['Docker','Do','#337faa']]},
 {category:'Think & collaborate',apps:[['Notion','N','#66768b'],['Linear','Li','#6f6abb'],['Slack','Sl','#94608f'],['Discord','Di','#6776c9'],['Miro','Mi','#ae9327'],['Trello','Tr','#377bb2'],['Obsidian','Ob','#8965bd'],['Arc','Ar','#b96c83']]}
];
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function placeholder(p,i){if(p.visual==='dashboard')return `<div class="visual mockup" aria-hidden="true"><div class="mockup-head">${i===0?'nexa.':'orbit.'}<span>Workspace ↗</span></div><div class="mockup-body"><div><div class="mock-label">${i===0?'Total balance':'Project overview'}</div><div class="mock-value">${i===0?'$24,850':'In motion.'}</div><span class="mock-chip">${i===0?'↗ Your month at a glance':'Your next big idea'}</span></div><div><div class="mock-label">${i===0?'Balance over time':'Progress this week'}</div><div class="bars">${[30,50,43,67,57,80,96].map(h=>`<i style="height:${h}%"></i>`).join('')}</div></div></div></div>`;if(p.visual==='poster')return `<div class="visual poster" aria-hidden="true"><div class="poster-symbol">${i===1?'✳':'✦'}</div><div class="poster-name">${i===1?'forma.':'aether'}</div><div class="poster-sub">${i===1?'INDEPENDENT MINDS. SHARED VISION.':'A LANGUAGE FOR WHAT’S NEXT.'}</div></div>`;return `<div class="visual type-card" aria-hidden="true"><div class="mock-label">${i===2?'STILL / A MOMENT FOR YOU':'FIELDNOTES / ISSUE 001'}</div><br><b>${i===2?'Less noise.<br>More now.':'Stay curious.<br>Look closer.'}</b><div class="type-foot"><span>${i===2?'Find your quiet':'Stories worth your time'}</span><span>↗</span></div></div>`}
document.querySelector('#project-grid').innerHTML=projects.map((p,i)=>`<article class="project reveal"><div class="project-top"><span>0${i+1}</span><h3>${escapeHTML(p.title)}</h3></div><button class="project-media" data-project="${i}" aria-label="View ${escapeHTML(p.title)}" style="--project-bg:${p.color}">${p.image?`<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)} project preview" loading="lazy">`:placeholder(p,i)}</button><p class="project-desc">${escapeHTML(p.description)}</p><div class="project-meta">${p.category.map(c=>`<span class="tag">${escapeHTML(c)}</span>`).join('')}<span class="year">${p.year}</span><button class="project-arrow" data-project="${i}" aria-label="View ${escapeHTML(p.title)}">↗</button></div></article>`).join('');
document.querySelectorAll('.project-media img').forEach((img)=>img.addEventListener('error',()=>{const i=Number(img.parentElement.dataset.project);img.outerHTML=placeholder(projects[i],i)}));
document.querySelector('#skill-groups').innerHTML=appGroups.map((g,i)=>`<div class="app-group"><h3 class="reveal"><span>0${i+1}</span>${escapeHTML(g.category)}</h3><ul class="app-grid">${g.apps.map(([name,initial,color],j)=>`<li class="app-tile reveal" style="--reveal-delay:${(j%4)*55}ms"><span class="app-badge" style="--app-color:${color}" aria-hidden="true"><img class="app-logo${appLogos[name].mono?' monochrome':''}" src="assets/logos/${appLogos[name].file}" alt="" width="29" height="29" loading="lazy"></span><span>${escapeHTML(name)}</span></li>`).join('')}</ul></div>`).join('');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
// Every hero component reveals independently, on first arrival and every return.
const heroPieces=[...document.querySelectorAll('.hero-inner > .status,.hero-line,.hero-sentence,.hero-inner > .button')];
heroPieces.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${1050+i*85}ms`)});
setTimeout(()=>heroPieces.forEach((el,i)=>el.style.setProperty('--reveal-delay',`${i*85}ms`)),2800);
// Reveal each About text block independently; reveal each project row left, then right.
const aboutBlocks=document.querySelectorAll('.about-copy > .eyebrow,.about-copy > h2,.about-copy > p,.about-copy dl > div,.about-downloads');
aboutBlocks.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${i*65}ms`)});
// Each contact element has its own reveal, without a hidden parent.
document.querySelectorAll('.contact-panel > .eyebrow,.contact-line,.contact-panel > p,.contact-panel > a,.contact-action,.socials > a').forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${i*75}ms`)});
if(!reduced.matches){
 document.body.classList.add('motion');
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('is-visible',e.isIntersecting)),{threshold:0.08});
 document.querySelectorAll('.reveal:not(.project)').forEach(el=>observer.observe(el));
 const cards=[...document.querySelectorAll('.project')];
 const narrow=matchMedia('(max-width:767px)');
 const desktop=matchMedia('(min-width:1024px)');
 let projectObserver;
 function watchProjects(){
  projectObserver?.disconnect();
  const columns=narrow.matches?1:desktop.matches?3:2;
  cards.forEach((el,i)=>el.style.setProperty('--reveal-delay',`${(i%columns)*150}ms`));
  projectObserver=new IntersectionObserver(entries=>entries.forEach(e=>{
   const index=cards.indexOf(e.target);
   for(let offset=0;offset<columns;offset++)cards[index+offset]?.classList.toggle('is-visible',e.isIntersecting);
  }),{threshold:0.08});
  cards.forEach((el,i)=>{if(i%columns===0)projectObserver.observe(el)});
 }
 watchProjects();narrow.addEventListener('change',watchProjects);desktop.addEventListener('change',watchProjects);
}
const themeButton=document.querySelector('.theme-toggle');
function themeLabel(){const dark=document.documentElement.dataset.theme==='dark',id=document.documentElement.lang==='id';themeButton.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${dark?'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>':'<path d="M20.7 13A9 9 0 0 1 11 3.3 9 9 0 1 0 20.7 13Z"/>'}</svg>`;themeButton.setAttribute('aria-label',id?`Ganti ke mode ${dark?'terang':'gelap'}`:`Switch to ${dark?'light':'dark'} theme`)}themeLabel();
themeButton.addEventListener('click',e=>{const apply=()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('fyra-theme',theme)}catch{}themeLabel()};if(!document.startViewTransition||reduced.matches){apply();return}const rect=themeButton.getBoundingClientRect(),x=rect.x+rect.width/2,y=rect.y+rect.height/2;const t=document.startViewTransition(apply);t.ready.then(()=>document.documentElement.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${Math.hypot(innerWidth,innerHeight)}px at ${x}px ${y}px)`]},{duration:550,easing:'ease-in-out',pseudoElement:'::view-transition-new(root)'}))});
const header=document.querySelector('header');let ticking=false;function scrollUpdate(){header.classList.toggle('scrolled',scrollY>70);header.classList.remove('dock-exiting');if(!reduced.matches&&innerWidth>767)document.querySelectorAll('[data-parallax]').forEach(el=>{const r=el.parentElement.getBoundingClientRect();const movement=Math.max(-25,Math.min(25,(innerHeight/2-r.top-r.height/2)*Number(el.dataset.parallax)));el.style.transform=`translateY(${movement}px)`});ticking=false}addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(scrollUpdate);ticking=true}},{passive:true});scrollUpdate();
const navLinks=[...document.querySelectorAll('nav a')];
let navClickUntil=0;
function selectNav(id){navLinks.forEach(a=>{const active=a.hash==='#'+id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}
navLinks.forEach(a=>a.addEventListener('click',()=>{navClickUntil=performance.now()+1100;selectNav(a.hash.slice(1))}));
const navObserver=new IntersectionObserver(entries=>{if(performance.now()<navClickUntil)return;entries.forEach(e=>{if(e.isIntersecting)selectNav(e.target.id)})},{rootMargin:'-20% 0px -55% 0px'});
document.querySelectorAll('#home,#about,#projects,#contact').forEach(s=>navObserver.observe(s));
// Pointer-driven portrait tilt, separate from the image's scroll parallax.
const portrait=document.querySelector('.portrait');
const tiltAllowed=matchMedia('(hover:hover) and (pointer:fine) and (min-width:768px)');
let tiltFrame;
portrait.addEventListener('pointermove',e=>{
 if(reduced.matches||!tiltAllowed.matches)return;
 const r=portrait.parentElement.getBoundingClientRect();
 const x=Math.max(-1,Math.min(1,((e.clientX-r.left)/r.width-.5)*2));
 const y=Math.max(-1,Math.min(1,((e.clientY-r.top)/r.height-.5)*2));
 cancelAnimationFrame(tiltFrame);tiltFrame=requestAnimationFrame(()=>{
  portrait.style.setProperty('--tilt-x',`${-y*7}deg`);portrait.style.setProperty('--tilt-y',`${x*8}deg`);portrait.style.setProperty('--portrait-spin',`${x*22-y*10}deg`);
  portrait.style.setProperty('--shine-x',`${(x+1)*50}%`);portrait.style.setProperty('--shine-y',`${(y+1)*50}%`);
  portrait.classList.add('is-tilted');
 });
});
function resetTilt(){cancelAnimationFrame(tiltFrame);portrait.classList.remove('is-tilted');portrait.style.setProperty('--tilt-x','0deg');portrait.style.setProperty('--tilt-y','0deg');portrait.style.setProperty('--portrait-spin','0deg')}
portrait.addEventListener('pointerleave',resetTilt);portrait.addEventListener('pointercancel',resetTilt);
reduced.addEventListener('change',resetTilt);tiltAllowed.addEventListener('change',resetTilt);
document.querySelectorAll('.project-media').forEach(card=>card.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=card.getBoundingClientRect();card.style.setProperty('--x',`${e.clientX-r.left}px`);card.style.setProperty('--y',`${e.clientY-r.top}px`)}));
const dialog=document.querySelector('#project-dialog');document.querySelectorAll('[data-project]').forEach(btn=>btn.addEventListener('click',()=>{const p=projects[Number(btn.dataset.project)];if(p.link&&p.link!=='#'){window.open(p.link,'_blank','noopener,noreferrer');return}document.querySelector('#project-detail').innerHTML=`<div class="eyebrow">CONCEPT PROJECT / ${p.year}</div><h2>${escapeHTML(p.title)}</h2><p>${escapeHTML(p.description)}</p><p>${p.category.map(escapeHTML).join(' · ')}</p><p>This is a portfolio placeholder. The full project will be available here once it has been added.</p>`;dialog.showModal()}));document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});

// The hover target stays in place while the square follows a looping soft bounce.
const square=document.querySelector('.blue-square');
const squareHit=document.querySelector('.shape-hit');
let squareAnimation;
const squareFrames=[
 {transform:'translateY(0) rotate(-12deg) scale(1)',offset:0,easing:'ease-in-out'},
 {transform:'translateY(2px) rotate(-12deg) scale(1.055,.945)',offset:.13,easing:'cubic-bezier(.2,.65,.3,1)'},
 {transform:'translateY(-18px) rotate(-6deg) scale(.985,1.015)',offset:.43,easing:'cubic-bezier(.55,0,.85,.45)'},
 {transform:'translateY(1px) rotate(-12deg) scale(1.055,.945)',offset:.73,easing:'ease-out'},
 {transform:'translateY(-2px) rotate(-13deg) scale(.995,1.005)',offset:.85,easing:'ease-in-out'},
 {transform:'translateY(0) rotate(-12deg) scale(1)',offset:1}
];
function bounceSquare(loop){
 if(reduced.matches)return;
 squareAnimation?.cancel();
 squareAnimation=square.animate(squareFrames,{duration:1550,iterations:loop?Infinity:1,easing:'linear'});
}
function settleSquare(){
 if(!squareAnimation)return;
 const current=getComputedStyle(square).transform;squareAnimation.cancel();
 squareAnimation=square.animate([{transform:current},{transform:'translate(0,0) rotate(-12deg) scale(1)'}],{duration:reduced.matches?0:420,easing:'cubic-bezier(.22,1,.36,1)'});
}
squareHit.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')bounceSquare(true)});
squareHit.addEventListener('pointerleave',settleSquare);
squareHit.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')bounceSquare(false)});
reduced.addEventListener('change',()=>squareAnimation?.cancel());

// Drag speed drives angular velocity; a short exponential coast smooths each pause.
const flower=document.querySelector('.asterisk');
let flowerPointer=null,flowerStartX=0,flowerStartY=0,flowerLastX=0,flowerLastY=0;
let flowerX=0,flowerY=0,flowerAngle=0,flowerFrame=0,flowerReturn;
let flowerVelocity=0,flowerLastMove=0,flowerLastTick=0;
let flowerHover=null,flowerHovered=false;
function startFlowerHover(){
 if(reduced.matches||flowerPointer!==null||!flowerHovered)return;
 flowerReturn?.cancel();flowerHover?.cancel();
 flowerHover=flower.animate([
  {transform:'rotate(0deg) scale(1)',offset:0,easing:'ease-in-out'},
  {transform:'rotate(-12deg) scale(1.10,.88)',offset:.12,easing:'cubic-bezier(.12,.75,.2,1)'},
  {transform:'rotate(300deg) scale(.94,1.06)',offset:.47,easing:'ease-out'},
  {transform:'rotate(360deg) scale(1.045,.96)',offset:.70,easing:'ease-in-out'},
  {transform:'rotate(360deg) scale(1)',offset:.84,easing:'linear'},
  {transform:'rotate(360deg) scale(1)',offset:1}
 ],{duration:1950,iterations:Infinity});
}
flower.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'){flowerHovered=true;startFlowerHover()}});
flower.addEventListener('pointerleave',()=>{
 flowerHovered=false;
 if(flowerPointer!==null)return;
 const current=getComputedStyle(flower).transform;
 flowerHover?.cancel();flowerHover=null;
 flowerReturn?.cancel();
 flowerReturn=flower.animate([{transform:current},{transform:'rotate(0deg)'}],{duration:reduced.matches?0:500,easing:'cubic-bezier(.2,.8,.2,1)'});
});
reduced.addEventListener('change',()=>{flowerHover?.cancel();flowerVelocity=0});
function coastFlower(now){
 const dt=Math.min(40,Math.max(0,now-flowerLastTick));flowerLastTick=now;
 if(flowerPointer===null||reduced.matches){flowerVelocity=0;flowerFrame=0;drawFlower();return}
 flowerAngle+=flowerVelocity*dt;
 if(now-flowerLastMove>24)flowerVelocity*=Math.exp(-dt/120);
 drawFlower();
 if(Math.abs(flowerVelocity)>.006)flowerFrame=requestAnimationFrame(coastFlower);
 else{flowerVelocity=0;flowerFrame=0}
}
function drawFlower(){flower.style.transform=`translate3d(${flowerX}px,${flowerY}px,0) rotate(${flowerAngle}deg)`;flowerFrame=0}
function returnFlower(){
 const pointerToRelease=flowerPointer;flowerPointer=null;flowerVelocity=0;
 if(pointerToRelease!==null&&flower.hasPointerCapture(pointerToRelease))flower.releasePointerCapture(pointerToRelease);cancelAnimationFrame(flowerFrame);flowerFrame=0;
 flower.classList.remove('is-dragging');
 const from=getComputedStyle(flower).transform;
 flowerReturn?.cancel();flower.style.transform='translate3d(0,0,0) rotate(0deg)';
 flowerReturn=flower.animate([{transform:from},{transform:'translate3d(0,0,0) rotate(0deg)'}],{duration:reduced.matches?0:700,easing:'cubic-bezier(.2,.85,.25,1)'});
 flowerX=flowerY=flowerAngle=0;
 flowerReturn.onfinish=()=>{if(flowerHovered&&flower.matches(':hover'))startFlowerHover()};
}
flower.addEventListener('pointerdown',e=>{
 if(e.button!==0||flowerPointer!==null)return;
 e.preventDefault();flowerHover?.cancel();flowerHover=null;flowerReturn?.cancel();
 flowerVelocity=0;flowerLastMove=flowerLastTick=performance.now();
 flowerX=flowerY=flowerAngle=0;flowerStartX=flowerLastX=e.clientX;flowerStartY=flowerLastY=e.clientY;
 flowerPointer=e.pointerId;flower.classList.add('is-dragging');flower.setPointerCapture(e.pointerId);drawFlower();
});
flower.addEventListener('pointermove',e=>{
 if(e.pointerId!==flowerPointer)return;
 const dx=e.clientX-flowerLastX,dy=e.clientY-flowerLastY;
 flowerX=e.clientX-flowerStartX;flowerY=e.clientY-flowerStartY;
 const now=performance.now();
 const distance=Math.hypot(dx,dy);
 if(distance>.05){
  const dt=Math.max(8,now-flowerLastMove);
  const speed=distance/dt;
  // A broad nonlinear range makes a slow pull and a fast flick visibly different.
  const target=Math.sign(dx||dy)*Math.min(8,Math.pow(speed,1.4)*1.2);
  if(!reduced.matches)flowerVelocity=flowerVelocity*.2+target*.8;
  flowerLastMove=now;
 }
 flowerLastX=e.clientX;flowerLastY=e.clientY;
 // Position follows the hand immediately; rotation keeps a small amount of momentum.
 flower.style.transform=`translate3d(${flowerX}px,${flowerY}px,0) rotate(${flowerAngle}deg)`;
 if(!flowerFrame){flowerLastTick=now;flowerFrame=requestAnimationFrame(coastFlower)}
});
flower.addEventListener('pointerup',e=>{if(e.pointerId===flowerPointer)returnFlower()});
flower.addEventListener('pointercancel',e=>{if(e.pointerId===flowerPointer)returnFlower()});
flower.addEventListener('lostpointercapture',()=>{if(flowerPointer!==null)returnFlower()});
flower.addEventListener('keydown',e=>{
 const directions={ArrowLeft:[-12,0],ArrowRight:[12,0],ArrowUp:[0,-12],ArrowDown:[0,12]};
 if(directions[e.key]){e.preventDefault();flowerReturn?.cancel();flowerX+=directions[e.key][0];flowerY+=directions[e.key][1];if(!reduced.matches)flowerAngle+=directions[e.key][0]||directions[e.key][1];drawFlower()}
 else if(['Escape','Enter',' '].includes(e.key)){e.preventDefault();returnFlower()}
});
flower.addEventListener('keyup',e=>{if(e.key.startsWith('Arrow'))returnFlower()});
addEventListener('blur',()=>{if(flowerPointer!==null||flowerX||flowerY)returnFlower();settleSquare()});
// A quiet pointer glow; holding the right mouse button for 800 milliseconds opens a spotlight.
const cursorLight=document.querySelector('.cursor-light');
const spotlightShade=document.querySelector('.spotlight-shade');
function positionSpotlight(){spotlightShade.style.setProperty('--spot-x',`${lightX}px`);spotlightShade.style.setProperty('--spot-y',`${lightY}px`)}
const finePointer=matchMedia('(hover:hover) and (pointer:fine)');
let lightFrame=0,holdTimer=0,rightHeld=false,suppressMenuUntil=0;
let pointerX=0,pointerY=0,lightX=0,lightY=0,hasPointer=false;
function lightEnabled(){return finePointer.matches&&!reduced.matches}
let lightLastFrame=0;
function renderLight(now){
 const elapsed=lightLastFrame?Math.min(40,now-lightLastFrame):16.67;lightLastFrame=now;
 const follow=1-Math.exp(-elapsed/95);
 lightX+=(pointerX-lightX)*follow;lightY+=(pointerY-lightY)*follow;
 cursorLight.style.transform=`translate3d(${lightX}px,${lightY}px,0)`;positionSpotlight();
 lightFrame=(Math.abs(pointerX-lightX)+Math.abs(pointerY-lightY)>.35)?requestAnimationFrame(renderLight):0;
 if(!lightFrame)lightLastFrame=0;
}
function stopSpotlight(){
 clearTimeout(holdTimer);holdTimer=0;rightHeld=false;
 if(cursorLight.classList.contains('is-spotlight'))suppressMenuUntil=performance.now()+500;
 cursorLight.classList.remove('is-spotlight');spotlightShade.classList.remove('is-active');
}
function hideLight(){stopSpotlight();cursorLight.classList.remove('is-present');cancelAnimationFrame(lightFrame);lightFrame=0;lightLastFrame=0;hasPointer=false}
addEventListener('pointermove',e=>{
 if(e.pointerType!=='mouse'||!lightEnabled())return;
 pointerX=e.clientX;pointerY=e.clientY;
 if(!hasPointer){lightX=pointerX;lightY=pointerY;hasPointer=true}
 cursorLight.classList.add('is-present');
 if(!lightFrame)lightFrame=requestAnimationFrame(renderLight);
 if(rightHeld&&!(e.buttons&2))stopSpotlight();
},{passive:true});
addEventListener('pointerdown',e=>{
 if(e.button!==2||e.pointerType!=='mouse'||!lightEnabled()||e.shiftKey)return;
 stopSpotlight();rightHeld=true;
 pointerX=e.clientX;pointerY=e.clientY;lightX=pointerX;lightY=pointerY;
 cursorLight.style.transform=`translate3d(${lightX}px,${lightY}px,0)`;positionSpotlight();
 cursorLight.classList.add('is-present');
 holdTimer=setTimeout(()=>{if(rightHeld&&lightEnabled()){cursorLight.classList.add('is-spotlight');spotlightShade.classList.add('is-active')}},800);
});
addEventListener('pointerup',e=>{if(e.button===2)stopSpotlight()});
addEventListener('contextmenu',e=>{
 // Shift + right-click keeps the browser's normal context menu available.
 if(!e.shiftKey&&lightEnabled()&&(rightHeld||performance.now()<suppressMenuUntil))e.preventDefault();
});
addEventListener('pointercancel',hideLight);addEventListener('blur',hideLight);
document.documentElement.addEventListener('pointerleave',hideLight);
document.addEventListener('visibilitychange',()=>{if(document.hidden)hideLight()});
addEventListener('keydown',e=>{if(e.key==='Escape')hideLight()});
finePointer.addEventListener('change',hideLight);reduced.addEventListener('change',hideLight);

// A flat radial color wave begins exactly where the pointer enters each button.
document.querySelectorAll('.button,nav a,.theme-toggle,.project-arrow,.close-dialog').forEach(button=>{
 if(button.disabled)return;
 button.classList.add('color-wave');
 // Give pill buttons an explicit paint layer below their label in both themes.
 if(button.classList.contains('button')){
  const content=document.createElement('span');content.className='button-content';
  while(button.firstChild)content.append(button.firstChild);
  const ink=document.createElement('span');ink.className='button-wave';ink.setAttribute('aria-hidden','true');
  button.append(ink,content);
 }
 function origin(x,y){
  const r=button.getBoundingClientRect();
  const px=Math.max(0,Math.min(r.width,x-r.left)),py=Math.max(0,Math.min(r.height,y-r.top));
  const diameter=2*Math.hypot(r.width,r.height);
  button.style.setProperty('--wave-x',`${px}px`);button.style.setProperty('--wave-y',`${py}px`);button.style.setProperty('--wave-size',`${diameter}px`);
 }
 button.addEventListener('pointerenter',e=>origin(e.clientX,e.clientY));
 button.addEventListener('pointerleave',e=>origin(e.clientX,e.clientY));
 button.addEventListener('focus',()=>{const r=button.getBoundingClientRect();origin(r.left+r.width/2,r.top+r.height/2)});
});

// Set these to the actual PDF URLs when the files are supplied.
const downloadFiles={cv:'',portfolio:''};
document.querySelectorAll('[data-download]').forEach(button=>button.addEventListener('click',()=>{
 const kind=button.dataset.download,url=downloadFiles[kind];
 const note=document.querySelector('#download-note');
 if(!url){note.textContent=kind==='cv'?"The CV file hasn't been added yet.":"The portfolio file hasn't been added yet.";return}
 note.textContent='';
 const link=document.createElement('a');link.href=url;link.download=kind==='cv'?'Fidi-CV.pdf':'Fidi-Portfolio.pdf';document.body.append(link);link.click();link.remove();
}));

// App tiles only illuminate near the pointer; they neither lift nor capture the cursor.
const appField=document.querySelector('#skill-groups');
const glowTiles=[...appField.querySelectorAll('.app-tile')].map(el=>({el,rect:null}));
const appGlowAllowed=matchMedia('(hover:hover) and (pointer:fine)');
function measureGlowTiles(){glowTiles.forEach(t=>{const r=t.el.getBoundingClientRect();t.rect={left:r.left+scrollX,top:r.top+scrollY,width:r.width,height:r.height}})}
function clearAppGlow(){glowTiles.forEach(t=>t.el.style.setProperty('--near-glow','0'))}
appField.addEventListener('pointerenter',measureGlowTiles);
appField.addEventListener('pointermove',e=>{
 if(e.pointerType!=='mouse'||!appGlowAllowed.matches)return;
 const x=e.clientX+scrollX,y=e.clientY+scrollY;
 glowTiles.forEach(t=>{
  if(!t.rect)return;
  const r=t.rect,dx=x-r.left,dy=y-r.top;
  const d=Math.hypot(Math.max(0,-dx,dx-r.width),Math.max(0,-dy,dy-r.height));
  const strength=Math.max(0,1-d/140);
  t.el.style.setProperty('--near-glow',strength.toFixed(3));
  t.el.style.setProperty('--glow-x',`${dx}px`);t.el.style.setProperty('--glow-y',`${dy}px`);
 });
},{passive:true});
appField.addEventListener('pointerleave',clearAppGlow);appField.addEventListener('pointercancel',clearAppGlow);
addEventListener('blur',clearAppGlow);addEventListener('resize',()=>{measureGlowTiles();clearAppGlow()});

// The cursor morphs around interactive targets, leaving a seven-pixel breathing space.
const cursorRing=document.querySelector('.custom-cursor');
const cursorLiquid=document.createElement('span');cursorLiquid.className='cursor-liquid';cursorRing.append(cursorLiquid);
let liquidLastX=0,liquidLastY=0,liquidLastTime=0,liquidSettle=0,liquidAngle=0;
function deformLiquid(e){
 const now=performance.now();
 if(liquidLastTime){
  const dx=e.clientX-liquidLastX,dy=e.clientY-liquidLastY;
  const speed=Math.hypot(dx,dy)/Math.max(8,now-liquidLastTime);
  if(Math.hypot(dx,dy)>.2){
   const angle=Math.atan2(dy,dx)*180/Math.PI;
   // Choose the equivalent nearest angle so direction changes don't cause full turns.
   liquidAngle+=(((angle-liquidAngle+180)%360+360)%360)-180;
   // Movement inflates the blob first, then stretches it along the travel direction.
   // The outer cursor position is still updated directly, so this adds no tracking lag.
   const swell=Math.min(1.15,speed*.42);
   const stretch=Math.min(.38,speed*.1);
   cursorLiquid.style.setProperty('--liquid-angle',`${liquidAngle}deg`);
   cursorLiquid.style.setProperty('--liquid-x',`${1+swell+stretch}`);
   cursorLiquid.style.setProperty('--liquid-y',`${1+swell*.78-stretch*.22}`);
   cursorLiquid.style.setProperty('--liquid-strength',`${Math.min(1,speed*.5)}`);
  }
 }
 liquidLastX=e.clientX;liquidLastY=e.clientY;liquidLastTime=now;
 clearTimeout(liquidSettle);
 liquidSettle=setTimeout(()=>{cursorLiquid.style.setProperty('--liquid-x','1');cursorLiquid.style.setProperty('--liquid-y','1');cursorLiquid.style.setProperty('--liquid-strength','0');liquidLastTime=0},90);
}
const cursorMedia=matchMedia('(hover:hover) and (pointer:fine)');
const cursorTargets='a,button,[role="button"],.portrait';
let cursorTarget=null,cursorRAF=0,cursorX=0,cursorY=0,cursorDrawX=0,cursorDrawY=0,cursorSeen=false;
function cursorEnabled(){return cursorMedia.matches&&!reduced.matches}
function paintCursor(){
 let x=cursorX-14,y=cursorY-14,width=28,height=28,radius=14;
 if(cursorTarget?.isConnected){
  const r=cursorTarget.getBoundingClientRect(),gap=7;
  x=r.left-gap;y=r.top-gap;width=r.width+gap*2;height=r.height+gap*2;
  const style=getComputedStyle(cursorTarget);
  radius=Math.min(Math.min(width,height)/2,Math.max(6,parseFloat(style.borderTopLeftRadius)||0)+gap);
 }
 cursorDrawX=x;cursorDrawY=y;
 cursorRing.style.transform=`translate3d(${cursorDrawX}px,${cursorDrawY}px,0)`;
 cursorRing.style.width=`${width}px`;cursorRing.style.height=`${height}px`;cursorRing.style.borderRadius=`${radius}px`;
 cursorRing.classList.toggle('is-attached',!!cursorTarget);
 const moving=Math.abs(cursorDrawX-x)+Math.abs(cursorDrawY-y)>.1;
 cursorRAF=(cursorTarget||moving)?requestAnimationFrame(paintCursor):0;
}
function hideCustomCursor(){
 cancelAnimationFrame(cursorRAF);cursorRAF=0;cursorTarget=null;cursorSeen=false;clearTimeout(liquidSettle);liquidLastTime=0;cursorLiquid.style.setProperty('--liquid-x','1');cursorLiquid.style.setProperty('--liquid-y','1');cursorLiquid.style.setProperty('--liquid-strength','0');
 cursorRing.classList.remove('is-visible');document.documentElement.classList.remove('custom-cursor-on');
}
addEventListener('pointermove',e=>{
 if(e.pointerType!=='mouse'||!cursorEnabled()){hideCustomCursor();return}
 cursorX=e.clientX;cursorY=e.clientY;deformLiquid(e);
 const target=e.target instanceof Element?e.target.closest(cursorTargets):null;
 cursorTarget=target&&!target.matches(':disabled')?target:null;
 if(!cursorSeen){cursorDrawX=cursorX-14;cursorDrawY=cursorY-14;cursorSeen=true}
 document.documentElement.classList.add('custom-cursor-on');cursorRing.classList.add('is-visible');
 cancelAnimationFrame(cursorRAF);cursorRAF=0;paintCursor();
},{passive:true});
addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')cursorRing.classList.add('is-pressed')});
addEventListener('pointerup',()=>cursorRing.classList.remove('is-pressed'));
addEventListener('pointercancel',()=>{cursorRing.classList.remove('is-pressed');hideCustomCursor()});
addEventListener('blur',hideCustomCursor);
document.documentElement.addEventListener('pointerleave',hideCustomCursor);
document.addEventListener('visibilitychange',()=>{if(document.hidden)hideCustomCursor()});
cursorMedia.addEventListener('change',hideCustomCursor);reduced.addEventListener('change',hideCustomCursor);
// Re-evaluate the target when scrolling under a stationary pointer.
addEventListener('scroll',()=>{
 if(!cursorSeen||!cursorEnabled())return;
 const under=document.elementFromPoint(cursorX,cursorY);
 const target=under?.closest(cursorTargets);
 cursorTarget=target&&!target.matches(':disabled')?target:null;
 cancelAnimationFrame(cursorRAF);cursorRAF=0;paintCursor();
},{passive:true});

// Cursor proximity creates a spring wave across the app tiles, independent of reveals.
const waveTiles=[...appField.querySelectorAll('.app-tile')].map(el=>({el,x:0,y:0,lift:0,velocity:0,target:0}));
const appWaveAllowed=matchMedia('(hover:hover) and (pointer:fine)');
let appWaveFrame=0,appWaveTime=0,appPointerTime=0,appPointerX=0,appPointerY=0;
function measureAppTiles(){waveTiles.forEach(t=>{const r=t.el.getBoundingClientRect();t.x=r.left+scrollX+r.width/2;t.y=r.top+scrollY+r.height/2+t.lift})}
function animateAppWave(now){
 const step=Math.min(2,(now-(appWaveTime||now-16.67))/16.67);appWaveTime=now;
 let moving=false;
 waveTiles.forEach(t=>{
  t.velocity+=(t.target-t.lift)*.12*step;t.velocity*=Math.pow(.72,step);t.lift+=t.velocity*step;
  if(Math.abs(t.target-t.lift)<.015&&Math.abs(t.velocity)<.015){t.lift=t.target;t.velocity=0}else moving=true;
  t.el.style.translate=`0 ${-t.lift.toFixed(3)}px`;
 });
 appWaveFrame=moving?requestAnimationFrame(animateAppWave):0;
 if(!moving)appWaveTime=0;
}
function startAppWave(){if(!appWaveFrame)appWaveFrame=requestAnimationFrame(animateAppWave)}
function resetAppWave(){waveTiles.forEach(t=>t.target=0);appPointerTime=0;startAppWave()}
appField.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')measureAppTiles()});
appField.addEventListener('pointermove',e=>{
 if(e.pointerType!=='mouse'||!appWaveAllowed.matches||reduced.matches)return;
 const now=performance.now(),x=e.clientX+scrollX,y=e.clientY+scrollY;
 const speed=appPointerTime?Math.hypot(x-appPointerX,y-appPointerY)/Math.max(8,now-appPointerTime):0;
 const height=9+Math.min(7,speed*3);
 waveTiles.forEach(t=>{const d=Math.hypot(x-t.x,y-t.y);t.target=d<240?height*Math.exp(-(d*d)/(2*85*85))*(.85+.15*Math.cos(d/32)):0});
 appPointerTime=now;appPointerX=x;appPointerY=y;startAppWave();
},{passive:true});
appField.addEventListener('pointerleave',resetAppWave);
appField.addEventListener('pointercancel',resetAppWave);
addEventListener('blur',resetAppWave);addEventListener('resize',()=>{measureAppTiles();resetAppWave()});
reduced.addEventListener('change',()=>{cancelAnimationFrame(appWaveFrame);appWaveFrame=0;waveTiles.forEach(t=>{t.lift=t.target=t.velocity=0;t.el.style.translate='none'})});

// Multi-language selector. Exact text matching preserves icons and markup.
const languageToggle=document.querySelector('.language-toggle');
const languagePicker=document.querySelector('.language-picker');
const languageMenu=document.querySelector('.language-menu');
const translations={
 'Skip to content':'Lewati ke konten','Building the experience':'Menyiapkan pengalaman',
 'Home':'Beranda','About':'Tentang','Project':'Proyek','Get in touch':'Hubungi',
 'Ready to turn ideas into real impact':'Siap mengubah ide menjadi dampak nyata',
 'I create':'Saya menciptakan','thoughtful':'yang bermakna','digital experiences':'pengalaman digital','that feel':'yang terasa','human':'manusiawi',
 'Turning complex ideas into clear, useful experiences.':'Mengubah ide kompleks menjadi pengalaman yang jelas dan berguna.',
 'A little curiosity. A lot of intention.':'Sedikit rasa ingin tahu. Banyak ketelitian.',
 "Let's connect":'Mari terhubung','Scroll to explore':'Gulir untuk menjelajah','BASED IN INDONESIA':'BERBASIS DI INDONESIA',
 'A LITTLE ABOUT ME':'SEDIKIT TENTANG SAYA','Designing with clarity.':'Merancang dengan kejelasan.','Building with intention.':'Membangun dengan tujuan.',
 'I’m Fidi. I enjoy working at the intersection of design and technology. I care about how a product looks, but even more about how it works for the people using it.':'Saya Fidi. Saya senang bekerja di pertemuan antara desain dan teknologi. Saya memperhatikan tampilan produk, tetapi lebih peduli pada cara produk bekerja bagi penggunanya.',
 'From the first sketch to the final interaction, I turn complex ideas into something clear, useful, and a little unexpected.':'Dari sketsa pertama hingga interaksi terakhir, saya mengubah ide kompleks menjadi sesuatu yang jelas, berguna, dan sedikit tak terduga.',
 'FOCUS':'FOKUS','BASED IN':'BERDOMISILI DI','STATUS':'STATUS','Open to collaborate':'Terbuka untuk kolaborasi',
 'Download CV':'Unduh CV','Download Portfolio':'Unduh Portofolio',"The CV file hasn't been added yet.":'File CV belum ditambahkan.',"The portfolio file hasn't been added yet.":'File portofolio belum ditambahkan.',
 'Always curious.':'Selalu ingin tahu.','Always creating.':'Selalu berkarya.',
 'SELECTED WORK':'KARYA PILIHAN','Ideas made':'Ide yang menjadi','tangible.':'nyata.','A few directions worth exploring.':'Beberapa arah yang layak dijelajahi.','Six concept projects, ready to make your own.':'Enam proyek konsep, siap kamu kembangkan.',
 'A personal-finance dashboard focused on clearer everyday decisions.':'Dasbor keuangan pribadi untuk membantu keputusan harian yang lebih jelas.',
 'A considered digital identity for an independent creative studio.':'Identitas digital yang terarah untuk studio kreatif independen.',
 'A quieter space to pause, build habits, and find a little balance.':'Ruang yang lebih tenang untuk berhenti sejenak, membangun kebiasaan, dan menemukan keseimbangan.',
 'Bringing projects, people, and the next step into one clear view.':'Menyatukan proyek, orang, dan langkah berikutnya dalam satu tampilan yang jelas.',
 'An editorial home for curious minds and meaningful stories.':'Ruang editorial bagi pikiran yang ingin tahu dan cerita yang bermakna.',
 'A flexible visual language for consistent digital experiences.':'Bahasa visual fleksibel untuk pengalaman digital yang konsisten.',
 'MY TOOLKIT':'PERANGKAT SAYA','Thought meets':'Gagasan bertemu','craft.':'keterampilan.','The tools change.':'Perangkat dapat berubah.','The intention stays the same.':'Tujuannya tetap sama.',
 'Design & create':'Desain & kreasi','Build & develop':'Bangun & kembangkan','Think & collaborate':'Berpikir & berkolaborasi',
 "LET'S MAKE SOMETHING GOOD":'MARI MEMBUAT SESUATU YANG BAIK','Have something':'Punya sesuatu','worth building?':'yang layak diwujudkan?',
 'I’m open to thoughtful collaborations,':'Saya terbuka untuk kolaborasi yang bermakna,','product work, and creative digital projects.':'pekerjaan produk, dan proyek digital kreatif.',
 'say hello':'sapa saya','Back to top ↑':'Kembali ke atas ↑','@2026 Fidi. All rights reserved.':'@2026 Fidi. Hak cipta dilindungi.',
 'View':'Lihat','CONCEPT PROJECT':'PROYEK KONSEP','This is a portfolio placeholder. The full project will be available here once it has been added.':'Ini adalah placeholder portofolio. Proyek lengkap akan tersedia di sini setelah ditambahkan.'
};
const reverseTranslations=Object.fromEntries(Object.entries(translations).map(([en,id])=>[id,en]));
const essentials={
 ja:{'Home':'ホーム','About':'私について','Project':'プロジェクト','Get in touch':'お問い合わせ','Ready to turn ideas into real impact':'アイデアを本当のインパクトへ','I create':'私は','thoughtful':'思いやりのある','digital experiences':'デジタル体験を','that feel':'人らしく','human':'感じるように創ります','Turning complex ideas into clear, useful experiences.':'複雑なアイデアを、明快で役立つ体験に。','A little curiosity. A lot of intention.':'少しの好奇心と、たくさんの意図。',"Let's connect":'つながりましょう','Scroll to explore':'スクロールして見る','A LITTLE ABOUT ME':'私について','Designing with clarity.':'明快にデザイン。','Building with intention.':'意図を持って構築。','FOCUS':'専門','BASED IN':'拠点','STATUS':'状況','Open to collaborate':'コラボレーション受付中','Download CV':'履歴書をダウンロード','Download Portfolio':'ポートフォリオをダウンロード','SELECTED WORK':'選ばれた作品','Ideas made':'アイデアを','tangible.':'かたちに。','MY TOOLKIT':'使用ツール','Thought meets':'思考と','craft.':'技術。',"LET'S MAKE SOMETHING GOOD":'一緒に良いものを','Have something':'一緒につくる','worth building?':'価値のあるものは？','say hello':'こんにちは 👋','Back to top ↑':'トップへ ↑'},
 ko:{'Home':'홈','About':'소개','Project':'프로젝트','Get in touch':'연락하기','Ready to turn ideas into real impact':'아이디어를 진짜 영향력으로','I create':'저는','thoughtful':'사려 깊고','digital experiences':'디지털 경험을','that feel':'사람답게','human':'만듭니다','Turning complex ideas into clear, useful experiences.':'복잡한 아이디어를 명확하고 유용한 경험으로 만듭니다.','A little curiosity. A lot of intention.':'작은 호기심, 깊은 의도.',"Let's connect":'함께 이야기해요','Scroll to explore':'스크롤해서 보기','A LITTLE ABOUT ME':'저를 소개합니다','Designing with clarity.':'명확하게 디자인하고.','Building with intention.':'의도를 담아 만듭니다.','FOCUS':'전문 분야','BASED IN':'활동 지역','STATUS':'상태','Open to collaborate':'협업 가능합니다','Download CV':'이력서 다운로드','Download Portfolio':'포트폴리오 다운로드','SELECTED WORK':'주요 작업','Ideas made':'아이디어를','tangible.':'현실로.','MY TOOLKIT':'사용 도구','Thought meets':'생각과','craft.':'기술.','LET\'S MAKE SOMETHING GOOD':'멋진 것을 함께 만들어요','Have something':'함께 만들','worth building?':'가치가 있나요?','say hello':'인사하기 👋','Back to top ↑':'맨 위로 ↑'},
 zh:{'Home':'首页','About':'关于我','Project':'项目','Get in touch':'联系我','Ready to turn ideas into real impact':'让创意产生真实影响','I create':'我创造','thoughtful':'有温度的','digital experiences':'数字体验','that feel':'让它更','human':'人性化','Turning complex ideas into clear, useful experiences.':'将复杂想法转化为清晰实用的体验。','A little curiosity. A lot of intention.':'一点好奇，十分用心。',"Let's connect":'与我联系','Scroll to explore':'滚动探索','A LITTLE ABOUT ME':'关于我','Designing with clarity.':'清晰地设计。','Building with intention.':'有目的地构建。','FOCUS':'专长','BASED IN':'所在地','STATUS':'状态','Open to collaborate':'开放合作','Download CV':'下载简历','Download Portfolio':'下载作品集','SELECTED WORK':'精选作品','Ideas made':'让想法','tangible.':'成为现实。','MY TOOLKIT':'我的工具','Thought meets':'思考遇见','craft.':'技艺。',"LET'S MAKE SOMETHING GOOD":'一起创造好作品','Have something':'有值得实现的','worth building?':'想法吗？','say hello':'打个招呼 👋','Back to top ↑':'返回顶部 ↑'},
 es:{'Home':'Inicio','About':'Sobre mí','Project':'Proyectos','Get in touch':'Contacto','Ready to turn ideas into real impact':'Ideas listas para crear impacto real','I create':'Creo','thoughtful':'experiencias','digital experiences':'digitales cuidadas','that feel':'que se sienten','human':'humanas','Turning complex ideas into clear, useful experiences.':'Convierto ideas complejas en experiencias claras y útiles.','A little curiosity. A lot of intention.':'Un poco de curiosidad. Mucha intención.',"Let's connect":'Hablemos','Scroll to explore':'Desliza para explorar','A LITTLE ABOUT ME':'SOBRE MÍ','Designing with clarity.':'Diseñar con claridad.','Building with intention.':'Crear con intención.','FOCUS':'ENFOQUE','BASED IN':'UBICACIÓN','STATUS':'ESTADO','Open to collaborate':'Disponible para colaborar','Download CV':'Descargar CV','Download Portfolio':'Descargar portafolio','SELECTED WORK':'TRABAJOS SELECTOS','Ideas made':'Ideas hechas','tangible.':'realidad.','MY TOOLKIT':'MIS HERRAMIENTAS','Thought meets':'Ideas y','craft.':'oficio.','LET\'S MAKE SOMETHING GOOD':'HAGAMOS ALGO BUENO','Have something':'¿Tienes algo','worth building?':'que valga crear?','say hello':'salúdame 👋','Back to top ↑':'Volver arriba ↑'},
 fr:{'Home':'Accueil','About':'À propos','Project':'Projets','Get in touch':'Contact','Ready to turn ideas into real impact':'Transformer les idées en impact réel','I create':'Je crée des','thoughtful':'expériences','digital experiences':'numériques soignées','that feel':'qui restent','human':'humaines','Turning complex ideas into clear, useful experiences.':'Je transforme les idées complexes en expériences claires et utiles.','A little curiosity. A lot of intention.':'Un peu de curiosité. Beaucoup d’intention.',"Let's connect":'Échangeons','Scroll to explore':'Faites défiler','A LITTLE ABOUT ME':'À PROPOS DE MOI','Designing with clarity.':'Concevoir avec clarté.','Building with intention.':'Créer avec intention.','FOCUS':'SPÉCIALITÉ','BASED IN':'BASÉE EN','STATUS':'STATUT','Open to collaborate':'Disponible pour collaborer','Download CV':'Télécharger le CV','Download Portfolio':'Télécharger le portfolio','SELECTED WORK':'PROJETS CHOISIS','Ideas made':'Des idées','tangible.':'concrètes.','MY TOOLKIT':'MES OUTILS','Thought meets':'La pensée et','craft.':'le savoir-faire.','LET\'S MAKE SOMETHING GOOD':'CRÉONS QUELQUE CHOSE DE BIEN','Have something':'Un projet','worth building?':'à réaliser ?','say hello':'dites bonjour 👋','Back to top ↑':'Retour en haut ↑'},
 de:{'Home':'Start','About':'Über mich','Project':'Projekte','Get in touch':'Kontakt','Ready to turn ideas into real impact':'Ideen in echte Wirkung verwandeln','I create':'Ich gestalte','thoughtful':'durchdachte','digital experiences':'digitale Erlebnisse','that feel':'die sich','human':'menschlich anfühlen','Turning complex ideas into clear, useful experiences.':'Ich verwandle komplexe Ideen in klare, nützliche Erlebnisse.','A little curiosity. A lot of intention.':'Ein wenig Neugier. Viel Absicht.',"Let's connect":'Lass uns reden','Scroll to explore':'Scrollen zum Entdecken','A LITTLE ABOUT ME':'ÜBER MICH','Designing with clarity.':'Klar gestalten.','Building with intention.':'Bewusst entwickeln.','FOCUS':'FOKUS','BASED IN':'STANDORT','STATUS':'STATUS','Open to collaborate':'Offen für Zusammenarbeit','Download CV':'Lebenslauf herunterladen','Download Portfolio':'Portfolio herunterladen','SELECTED WORK':'AUSGEWÄHLTE ARBEITEN','Ideas made':'Ideen werden','tangible.':'greifbar.','MY TOOLKIT':'MEINE TOOLS','Thought meets':'Gedanke trifft','craft.':'Handwerk.','LET\'S MAKE SOMETHING GOOD':'LASS UNS GUTES SCHAFFEN','Have something':'Etwas, das es','worth building?':'zu bauen lohnt?','say hello':'Hallo sagen 👋','Back to top ↑':'Nach oben ↑'},
 ar:{'Home':'الرئيسية','About':'عني','Project':'المشاريع','Get in touch':'تواصل معي','Ready to turn ideas into real impact':'لنحوّل الأفكار إلى أثر حقيقي','I create':'أصمم','thoughtful':'تجارب رقمية','digital experiences':'مدروسة','that feel':'بطابع','human':'إنساني','Turning complex ideas into clear, useful experiences.':'أحوّل الأفكار المعقدة إلى تجارب واضحة ومفيدة.','A little curiosity. A lot of intention.':'قليل من الفضول، وكثير من القصد.',"Let's connect":'لنتواصل','Scroll to explore':'مرّر للاستكشاف','A LITTLE ABOUT ME':'نبذة عني','Designing with clarity.':'تصميم بوضوح.','Building with intention.':'وبناء بقصد.','FOCUS':'التخصص','BASED IN':'الموقع','STATUS':'الحالة','Open to collaborate':'متاحة للتعاون','Download CV':'تحميل السيرة الذاتية','Download Portfolio':'تحميل معرض الأعمال','SELECTED WORK':'أعمال مختارة','Ideas made':'أفكار تصبح','tangible.':'واقعاً.','MY TOOLKIT':'أدواتي','Thought meets':'الفكرة تلتقي','craft.':'بالحرفة.',"LET'S MAKE SOMETHING GOOD":'لنصنع شيئاً جميلاً','Have something':'هل لديك فكرة','worth building?':'تستحق البناء؟','say hello':'قل مرحباً 👋','Back to top ↑':'العودة للأعلى ↑'}
};
const languageMaps={id:translations,...essentials};
function translateTree(root,map){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){
  const parent=node.parentElement;
  return parent&&!parent.closest('script,style,.language-toggle')&&node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
 }});
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(node=>{
  const raw=node.nodeValue,key=raw.trim(),translated=map[key];
  if(translated)node.nodeValue=raw.replace(key,translated);
 });
}
let currentLanguage='en';
function applyLanguage(language,persist=true){
 const lang=languageMaps[language]?language:'en';
 if(currentLanguage!=='en')translateTree(document.body,Object.fromEntries(Object.entries(languageMaps[currentLanguage]).map(([en,value])=>[value,en])));
 if(lang!=='en')translateTree(document.body,languageMaps[lang]);
 currentLanguage=lang;
 document.documentElement.lang=lang;
 languageToggle.querySelector('span').textContent=lang.toUpperCase();
 document.documentElement.dir='ltr';
 languageToggle.setAttribute('aria-label','Choose language');
 languageMenu.querySelectorAll('[data-lang]').forEach(option=>option.setAttribute('aria-selected',String(option.dataset.lang===lang)));
 themeLabel();
 if(persist)try{localStorage.setItem('fidi-language',lang)}catch{}
}
function closeLanguageMenu(){languagePicker.classList.remove('is-open');languageToggle.setAttribute('aria-expanded','false')}
languageToggle.addEventListener('click',()=>{const open=!languagePicker.classList.contains('is-open');languagePicker.classList.toggle('is-open',open);languageToggle.setAttribute('aria-expanded',String(open));if(open)languageMenu.querySelector('[aria-selected=true]')?.focus()});
languageMenu.addEventListener('click',e=>{const option=e.target.closest('[data-lang]');if(!option)return;applyLanguage(option.dataset.lang);closeLanguageMenu();languageToggle.focus()});
document.addEventListener('pointerdown',e=>{if(!languagePicker.contains(e.target))closeLanguageMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLanguageMenu()});
const savedLanguage=(()=>{try{return localStorage.getItem('fidi-language')}catch{return null}})();
applyLanguage(savedLanguage||'en',false);
const languageObserver=new MutationObserver(records=>{
 if(currentLanguage==='en')return;
 records.forEach(record=>record.addedNodes.forEach(node=>{if(node.nodeType===Node.ELEMENT_NODE)translateTree(node,languageMaps[currentLanguage]);else if(node.nodeType===Node.TEXT_NODE&&node.parentElement)translateTree(node.parentElement,languageMaps[currentLanguage])}));
});
languageObserver.observe(document.querySelector('#project-dialog'),{childList:true,subtree:true});
