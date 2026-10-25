// Figuras SVG da apostila. Cada função devolve uma string <svg>.
const C={carb:'#2e86c1',lip:'#d4ac0d',prot:'#27ae60',atp:'#c0392b',glu:'#16a085',ins:'#8e44ad',gray:'#555',ink:'#1b1b1b',
 carbL:'#d6eaf8',lipL:'#fcf3cf',protL:'#d5f5e3',atpL:'#fadbd8',gluL:'#d1f2eb',insL:'#e8daef',grayL:'#eef1f3',orL:'#fdebd0'};
const esc=s=>s;
const T=(x,y,s,o={})=>`<text x="${x}" y="${y}" text-anchor="${o.a||'middle'}" font-size="${o.sz||12}" font-weight="${o.w||'normal'}" fill="${o.c||C.ink}"${o.i?' font-style="italic"':''}>${s}</text>`;
const TL=(x,y,lines,o={})=>lines.map((s,i)=>T(x,y+i*(o.lh||15),s,o)).join('');
const R=(x,y,w,h,f,s,rx=8,sw=1.5)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}" stroke="${s||'none'}" stroke-width="${sw}"/>`;
const Ci=(x,y,r,f,s)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${s||'none'}" stroke-width="1.5"/>`;
const ar=(x1,y1,x2,y2,c=C.gray,w=2,d='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" ${d?`stroke-dasharray="${d}"`:''} marker-end="url(#ah${c.slice(1)})"/>`;
const pa=(d,c=C.gray,w=2,dash='')=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" ${dash?`stroke-dasharray="${dash}"`:''} marker-end="url(#ah${c.slice(1)})"/>`;
const mk=()=>{const cs=[C.carb,C.lip,C.prot,C.atp,C.glu,C.ins,C.gray,'#000000'];return '<defs>'+cs.map(c=>`<marker id="ah${c.slice(1)}" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto"><path d="M0,1 L11,6 L0,11 z" fill="${c}"/></marker>`).join('')+'</defs>'};
const S=(w,h,inner,alt)=>`<svg class="fig" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${alt||''}" font-family="Arial, Helvetica, sans-serif">${mk()}${inner}</svg>`;
const bead=(x,y,c,r=8)=>Ci(x,y,r,c,'#fff');

const F={};

/* ---------- F0: classes de carboidratos ---------- */
F.classes=()=>{let o='';
 o+=T(360,22,'Carboidratos: do açúcar simples ao polímero',{sz:14,w:'bold'});
 // monossacarideos
 o+=R(15,40,210,150,C.grayL,'#b0b8bf')+T(120,60,'MONOSSACARÍDEOS',{w:'bold'})+T(120,76,'(1 unidade; únicos absorvidos)',{sz:10});
 [['Glicose',C.carb,60],['Frutose',C.lip,120],['Galactose',C.prot,180]].forEach(([n,c,x])=>{o+=bead(x,115,c,16)+T(x,148,n,{sz:11})});
 o+=T(120,172,'glicose ≥ 80% do que é absorvido',{sz:10,i:1});
 // dissacarideos
 o+=R(240,40,225,150,C.grayL,'#b0b8bf')+T(352,60,'DISSACARÍDEOS',{w:'bold'})+T(352,76,'(2 unidades)',{sz:10});
 [['Sacarose',C.carb,C.lip,'cana'],['Lactose',C.carb,C.prot,'leite'],['Maltose',C.carb,C.carb,'amido digerido']].forEach(([n,a,b,s],i)=>{const y=98+i*30;o+=bead(280,y,a)+bead(298,y,b)+T(312,y+4,n+' — '+s,{a:'start',sz:10.5})});
 o+=T(352,182,'sacarose = glicose + frutose',{sz:9.5,i:1});
 // polissacarideos
 o+=R(480,40,225,150,C.grayL,'#b0b8bf')+T(592,60,'POLISSACARÍDEOS',{w:'bold'})+T(592,76,'(muitas unidades)',{sz:10});
 for(let i=0;i<10;i++)o+=bead(500+i*16,100,C.carb,6);o+=T(500,122,'Amido (vegetais) · digerível',{a:'start',sz:10.5});
 for(let i=0;i<6;i++)o+=bead(500+i*14,142,C.carb,5);for(let i=0;i<4;i++)o+=bead(512+i*12,156,C.carb,4);o+=T(610,148,'Glicogênio (ramificado)',{a:'start',sz:10.5});o+=T(500,176,'Celulose: NÃO digerida (sem enzima humana)',{a:'start',sz:10,c:C.atp});
 o+=T(360,215,'A digestão (hidrólise) separa as unidades; só monossacarídeos atravessam o epitélio intestinal.',{sz:11,i:1});
 return S(720,228,o,'Classes de carboidratos');};

/* ---------- F1: mapa integrado ---------- */
F.mapa=()=>{let o='';
 o+=R(10,20,150,60,C.carbL,C.carb)+TL(85,45,['Alimento','amido · sacarose · lactose'],{sz:11});
 o+=ar(160,50,200,50,C.carb);
 o+=R(200,20,150,60,C.carbL,C.carb)+TL(275,45,['Digestão e absorção','(boca → intestino)'],{sz:11});
 o+=ar(350,50,390,50,C.carb);
 o+=R(390,10,170,80,C.gluL,C.glu,40)+TL(475,42,['GLICOSE NO SANGUE','glicemia ≈ 80–90 mg/dL','(jejum)'],{sz:11,w:'bold'});
 // hormonios
 o+=R(580,14,130,72,C.insL,C.ins)+TL(645,34,['Insulina ↑ após refeição','Glucagon ↑ no jejum','(+ adrenalina, cortisol)'],{sz:10.5});
 // destinos
 o+=ar(430,92,150,160,C.glu);o+=ar(475,92,360,160,C.glu);o+=ar(520,92,580,160,C.glu);
 o+=R(30,160,240,92,C.orL,'#b9770e')+TL(150,182,['ARMAZENAR COMO GLICOGÊNIO','fígado (5–6% do peso) e músculo (2–3%)','glicogênese ⇄ glicogenólise'],{sz:11});
 o+=R(250,160,200,92,C.lipL,C.lip)+TL(350,182,['CONVERTER EM GORDURA','excesso de glicose → ácidos graxos','→ triglicerídeos no tecido adiposo'],{sz:11});
 o+=R(470,160,240,92,C.atpL,C.atp)+TL(590,182,['OXIDAR PARA OBTER ATP','glicólise → acetil-CoA → Krebs','→ cadeia respiratória (mitocôndria)'],{sz:11});
 o+=T(590,242,'≈ 38 ATP/glicose (máx. teórico no Guyton)',{sz:10,w:'bold'});
 // gliconeogenese
 o+=R(150,282,420,56,C.grayL,'#8e979e')+TL(360,304,['GLICONEOGÊNESE (jejum): lactato, aminoácidos e glicerol → glicose (fígado)','Glicogenólise hepática: glicogênio → glicose → sangue'],{sz:11});
 o+=pa('M360,282 L360,262 L480,262 L480,98',C.gray,2,'5 4');
 o+=T(360,360,'Objetivo central: manter a glicemia estável e fornecer glicose ao cérebro e às hemácias.',{sz:11,i:1});
 return S(720,372,o,'Mapa do metabolismo dos carboidratos');};

/* ---------- F2: energia por grama e dieta ---------- */
F.energia=()=>{let o='';
 o+=T(190,20,'Energia fisiologicamente disponível (kcal/g)',{sz:13,w:'bold'});
 [['Carboidratos',4,C.carb],['Proteínas',4,C.prot],['Lipídios',9,C.lip]].forEach(([n,v,c],i)=>{const y=40+i*46;o+=T(10,y+20,n,{a:'start',sz:12})+R(110,y,v*28,28,c,null,4)+T(110+v*28+8,y+19,v+' kcal/g',{a:'start',sz:12,w:'bold'})});
 o+=T(560,20,'Dieta típica (EUA, Guyton)',{sz:13,w:'bold'});
 let x=430;[['Carbo 45%',45,C.carb],['Gordura 40%',40,C.lip],['Prot. 15%',15,C.prot]].forEach(([n,v,c])=>{o+=R(x,40,v*2.4,40,c,'#fff',0)+T(x+v*1.2,65,n,{sz:v>20?11:9,c:'#fff',w:'bold'});x+=v*2.4});
 o+=T(560,100,'% da energia da dieta',{sz:10,i:1});
 o+=TL(560,125,['Em muitos países não ocidentais, os','carboidratos fornecem bem mais que isso.'],{sz:10.5});
 o+=T(360,190,'Valores do Guyton & Hall, 14ª ed., cap. 72 (energia dos alimentos).',{sz:9.5,i:1,c:C.gray});
 return S(720,200,o,'Energia por grama e composição da dieta');};

/* ---------- F3: ciclo ATP ---------- */
F.atp=()=>{let o='';
 o+=R(10,40,210,110,C.carbL,C.carb)+TL(115,66,['CATABOLISMO','degrada moléculas grandes','(glicose, ácidos graxos, aminoácidos)','LIBERA energia'],{sz:11.5,w:'bold'});
 o+=R(500,40,210,110,C.insL,C.ins)+TL(605,66,['ANABOLISMO + TRABALHO','sintetiza moléculas (glicogênio,','gordura, proteínas), contração,','transporte ativo: GASTA energia'],{sz:11.5,w:'bold'});
 o+=R(270,60,180,70,C.atpL,C.atp,35)+TL(360,88,['ATP','"moeda de energia"'],{sz:13,w:'bold'});
 o+=pa('M220,80 Q245,70 270,80',C.atp,3)+T(245,66,'ADP + Pi → ATP',{sz:10,c:C.atp});
 o+=pa('M450,80 Q475,70 500,80',C.atp,3)+T(475,66,'ATP → ADP + Pi',{sz:10,c:C.atp});
 o+=pa('M500,120 Q360,175 220,120',C.gray,2,'5 4')+T(360,172,'ADP e Pi voltam a ser "recarregados" (ciclo)',{sz:10.5,i:1});
 o+=TL(360,200,['Ligação fosfato de alta energia ≈ 12.000 cal/mol nas condições do corpo','(≈ 7.300 cal/mol em condições padrão)  ·  Oxidação completa de 1 mol de glicose libera 686.000 cal'],{sz:10.5,lh:14});
 return S(720,228,o,'Ciclo ATP-ADP entre catabolismo e anabolismo');};

/* ---------- F4: digestão dos carboidratos ---------- */
F.digestao=()=>{let o='';
 const col=(x,t,l,f,s)=>R(x,30,165,150,f,s)+T(x+82,52,t,{w:'bold',sz:12.5})+TL(x+82,72,l,{sz:10.5,lh:14});
 o+=col(8,'1. BOCA',['Amilase salivar (ptialina)','α-amilase, sobretudo da parótida','amido → maltose + polímeros','de 3 a 9 glicoses','Pouco tempo: ≤ 5% do amido','hidrolisado ao engolir'],C.orL,'#b9770e');
 o+=col(184,'2. ESTÔMAGO',['A amilase continua no bolo','até o ácido penetrar','(inativa com pH < ~4)','Antes da mistura com o suco','gástrico: ~30–40% do amido','já hidrolisado (maltose)'],C.atpL,C.atp);
 o+=col(360,'3. DUODENO',['Amilase pancreática','(mesma função, mais potente)','em 15–30 min quase todo o','amido vira maltose e outros','pequenos polímeros','de glicose'],C.carbL,C.carb);
 o+=col(536,'4. BORDA EM ESCOVA',['Enzimas do enterócito:','lactase · sacarase','maltase · α-dextrinase','→ monossacarídeos','(glicose, galactose, frutose)','solúveis → sangue portal'],C.gluL,C.glu);
 [173,349,525].forEach(x=>o+=ar(x,105,x+11,105,C.gray,2.5));
 o+=R(8,200,704,70,C.grayL,'#9aa3aa')+TL(360,220,['Lactose → glicose + galactose   ·   Sacarose → glicose + frutose   ·   Maltose e polímeros → glicose + glicose + ...','Produto final: glicose > 80% · galactose e frutose ≤ ~10% cada (dieta comum)'],{sz:11,lh:18});
 o+=T(360,290,'Celulose não é digerida (não há enzima humana) e funciona como fibra.',{sz:10.5,i:1});
 return S(720,300,o,'Digestão dos carboidratos ao longo do tubo digestório');};

/* ---------- F5: absorção no enterócito ---------- */
F.absorcao=()=>{let o='';
 o+=R(10,10,700,78,C.orL,'#b9770e')+T(360,30,'LÚMEN INTESTINAL',{w:'bold',sz:13})+T(360,46,'glicose · galactose · frutose · Na⁺',{sz:10.5});
 o+=R(10,88,700,142,C.gluL,C.glu,2)+T(668,106,'ENTERÓCITO',{sz:11,w:'bold',c:C.glu});
 o+=R(10,230,700,62,C.atpL,C.atp)+T(360,254,'ESPAÇO PARACELULAR → CAPILAR → VEIA PORTA → FÍGADO',{w:'bold',sz:12})+T(360,274,'a glicose é a "via comum final"; frutose e galactose são convertidas em glicose no fígado',{sz:10.5});
 // apical transporters (borda em escova) em y=82..98
 o+=R(105,80,80,18,C.carb,null,4)+T(145,93,'SGLT1',{sz:10.5,c:'#fff',w:'bold'});
 o+=R(335,80,80,18,C.lip,null,4)+T(375,93,'GLUT5',{sz:10.5,c:'#fff',w:'bold'});
 o+=T(60,66,'Na⁺ + glicose (ou galactose)',{a:'start',sz:10.5})+ar(125,70,125,80,C.carb,2.5);
 o+=T(300,66,'frutose (difusão facilitada)',{a:'start',sz:10.5})+ar(375,70,375,80,C.lip,2.5);
 o+=ar(145,98,145,128,C.carb,2.5)+ar(375,98,375,128,C.lip,2.5);
 o+=Ci(145,142,12,C.carb,'#fff')+T(165,146,'glicose',{a:'start',sz:10})+Ci(375,142,12,C.lip,'#fff')+T(395,146,'frutose',{a:'start',sz:10});
 // basolateral
 o+=R(105,214,80,18,C.carb,null,4)+T(145,227,'GLUT2',{sz:10.5,c:'#fff',w:'bold'});
 o+=R(335,214,80,18,C.carb,null,4)+T(375,227,'GLUT2',{sz:10.5,c:'#fff',w:'bold'});
 o+=ar(145,156,145,212,C.carb,2.5)+ar(375,156,375,212,C.lip,2.5);
 o+=R(520,160,170,52,C.atpL,C.atp)+TL(605,178,['Na⁺/K⁺-ATPase basolateral','(gasta ATP; mantém o Na⁺','baixo dentro da célula)'],{sz:10,lh:12});
 o+=pa('M520,190 L440,190 L412,214',C.atp,2,'4 3');
 o+=TL(560,125,['O gradiente de Na⁺ ("transporte ativo','secundário") puxa a glicose para dentro.','Sem Na⁺, quase não há absorção de glicose.'],{sz:10,i:1,lh:13});
 return S(720,302,o,'Absorção intestinal de glicose, galactose e frutose');};

/* ---------- F6: glicose nas células ---------- */
F.glicose_celula=()=>{let o='';
 o+=R(10,10,700,40,C.carbL,C.carb)+T(360,35,'SANGUE / LÍQUIDO EXTRACELULAR: glicose (peso molecular 180, não passa pelos poros: precisa de carreador)',{sz:11});
 o+=R(10,60,700,16,'#c9a66b',null,0)+T(360,72,'membrana celular',{sz:9.5,c:'#fff'});
 // insulin receptor and GLUT4
 o+=R(60,48,50,34,C.ins,null,6)+T(85,69,'Insulina',{sz:9.5,c:'#fff',w:'bold'}) ;
 o+=R(150,52,60,26,C.carb,null,5)+T(180,69,'GLUT4',{sz:10.5,c:'#fff',w:'bold'});
 o+=R(260,52,60,26,C.carb,null,5)+T(290,69,'GLUT',{sz:10.5,c:'#fff',w:'bold'});
 o+=ar(180,88,180,115,C.carb,3)+T(240,100,'difusão facilitada',{a:'start',sz:10.5});
 o+=TL(470,98,['Insulina: ↑ nº de GLUT4 na membrana','(músculo, tecido adiposo)','Exercício também recruta GLUT4','Cérebro e hemácias: captam sem insulina'],{sz:10.5,lh:14});
 o+=R(10,120,700,200,C.grayL,'#9aa3aa',6)+T(660,138,'CITOPLASMA',{sz:10,w:'bold'});
 o+=R(130,125,150,30,C.glu,null,15)+T(205,145,'Glicose-6-fosfato',{c:'#fff',w:'bold',sz:12});
 o+=T(300,138,'hexoquinase (maioria das células)',{a:'start',sz:10})+T(300,152,'glicoquinase (fígado) · quase irreversível',{a:'start',sz:10});
 o+=ar(205,155,95,210,C.glu,2.5)+ar(205,155,205,210,C.glu,2.5)+ar(205,155,330,210,C.glu,2.5)+ar(205,155,455,210,C.glu,2.5);
 o+=R(20,210,150,68,C.orL,'#b9770e')+TL(95,230,['Glicogênio','(glicogênese)','reserva'],{sz:11});
 o+=R(130,210,150,68,C.atpL,C.atp)+TL(205,230,['Glicólise','→ ATP','(via principal)'],{sz:11});
 o+=R(290,210,150,68,C.lipL,C.lip)+TL(365,230,['Via das pentoses','NADPH → síntese','de lipídios'],{sz:11});
 o+=R(450,210,150,68,C.lipL,C.lip)+TL(525,230,['Gordura','(excesso, via','acetil-CoA)'],{sz:11});
 o+=TL(360,305,['Fosforilar prende a glicose na célula. Só fígado, rim e epitélio intestinal têm glicose-fosfatase,','que reverte a reação e permite devolver glicose ao sangue.'],{sz:10.5,i:1,lh:14});
 return S(720,330,o,'Entrada e destinos da glicose na célula');};

/* ---------- F7: glicólise ---------- */
F.glicolise=()=>{let o='';
 const box=(y,t,f=C.carbL,s=C.carb)=>R(210,y,200,28,f,s,14)+T(310,y+19,t,{sz:12,w:'bold'});
 o+=box(10,'Glicose (6C)')+T(430,28,'(citoplasma)',{a:'start',sz:10,i:1});
 o+=ar(310,38,310,58,C.gray,2.5)+R(430,40,170,22,C.atpL,C.atp,5)+T(515,56,'− 1 ATP (hexoquinase)',{sz:10.5,c:C.atp})+ar(430,51,410,51,C.atp,1.5);
 o+=box(60,'Glicose-6-fosfato')+ar(310,88,310,108,C.gray,2.5);
 o+=box(108,'Frutose-6-fosfato')+ar(310,136,310,158,C.gray,2.5)+R(430,140,200,36,C.atpL,C.atp,5)+TL(530,155,['− 1 ATP: FOSFOFRUTOQUINASE','(etapa-chave regulada)'],{sz:10.5,c:C.atp,lh:13})+ar(430,158,410,158,C.atp,1.5);
 o+=box(158,'Frutose-1,6-difosfato')+ar(310,186,310,206,C.gray,2.5);
 o+=R(150,206,320,28,C.carbL,C.carb,14)+T(310,225,'2 × gliceraldeído-3-fosfato (3C)',{sz:12,w:'bold'});
 o+=ar(310,234,310,262,C.gray,2.5)+R(430,240,220,40,C.protL,C.prot,5)+TL(540,255,['+ 2 NADH (carregam H)','+ 4 ATP no total (2 etapas)'],{sz:10.5,lh:13,c:'#1e6b3a'})+ar(430,258,400,258,C.prot,1.5);
 o+=R(190,262,240,28,C.atpL,C.atp,14)+T(310,281,'2 × piruvato (ácido pirúvico, 3C)',{sz:12,w:'bold'});
 o+=R(10,305,700,48,C.grayL,'#9aa3aa')+TL(360,324,['SALDO LÍQUIDO: 2 ATP (4 formados − 2 gastos) + 2 NADH + 2 piruvato','Eficiência da glicólise ≈ 43%: o restante (≈ 57%) vira calor. Não precisa de O₂.'],{sz:11,lh:17,w:'bold'});
 o+=TL(60,40,['10 reações,','cada uma com','uma enzima','específica'],{sz:10,lh:13,i:1});
 return S(720,365,o,'Glicólise: etapas, investimento e rendimento');};

/* ---------- F8: mitocôndria ---------- */
F.mito=()=>{let o='';
 o+=`<ellipse cx="360" cy="195" rx="345" ry="170" fill="#fdf2e9" stroke="#b9770e" stroke-width="3"/>`;
 o+=`<path d="M70,215 Q70,100 180,100 L560,100 Q650,100 650,215 Q650,330 560,330 L180,330 Q70,330 70,215 Z" fill="#fef9e7" stroke="#8e6b00" stroke-width="3"/>`;
 o+=T(360,20,'Mitocôndria (esquema)',{w:'bold',sz:14});
 o+=T(360,42,'ESPAÇO INTERMEMBRANAS (muito H⁺ acumulado)',{sz:10.5,w:'bold',c:'#8a5a00'});
 // cadeia
 const cx=[190,260,330,400,470];const nm=['NADH-\ndesid.\n(FMN, FeS)','Q','Cit b/c1','Cit c','Cit a/a3\n(oxidase)'];
 cx.forEach((x,i)=>{o+=R(x-28,78,56,50,C.carbL,C.carb,10)+TL(x,98,nm[i].split('\n'),{sz:9.5,lh:11,w:'bold'})});
 [0,1,2,3].forEach(i=>o+=ar(cx[i]+28,103,cx[i+1]-28,103,C.carb,2));
 o+=T(330,146,'CADEIA TRANSPORTADORA DE ELÉTRONS (membrana interna)',{sz:10.5,w:'bold'});
 o+=T(515,100,'e⁻',{a:'start',sz:11,c:C.carb,w:'bold'});
 [190,330,470].forEach(x=>o+=ar(x,78,x,54,'#000000',2));
 o+=T(205,66,'H⁺',{a:'start',sz:10});
 // O2
 o+=ar(470,128,470,168,C.atp,2.5)+TL(470,182,['½ O₂ + 2H⁺ + 2e⁻','→ H₂O'],{sz:10.5,lh:13,c:C.atp,w:'bold'});
 // ATP sintase
 o+=R(572,78,56,40,C.atpL,C.atp,8)+T(600,95,'ATP',{sz:11,w:'bold',c:C.atp})+T(600,109,'sintase',{sz:9,c:C.atp});
 o+=ar(600,52,600,76,'#000000',2)+T(612,66,'H⁺',{a:'start',sz:10});
 o+=T(600,138,'ADP + Pi → ATP',{sz:9.5,c:C.atp,w:'bold'});
 // NADH
 o+=Ci(150,235,13,C.prot,'#fff')+T(172,239,'NADH + H⁺ (da glicólise, do piruvato e do Krebs)',{a:'start',sz:10.5});
 o+=ar(155,222,185,130,C.prot,2.5);
 // Krebs
 o+=`<circle cx="300" cy="285" r="26" fill="none" stroke="${C.lip}" stroke-width="10"/>`+T(300,289,'KREBS',{sz:10,w:'bold'});
 o+=TL(345,278,['por volta: 2 CO₂ + 3 NADH','+ 1 FADH₂ + 1 ATP'],{a:'start',sz:10,lh:13});
 o+=ar(285,262,166,248,C.gray,2);
 o+=TL(95,285,['piruvato → acetil-CoA','(libera CO₂ e NADH)'],{a:'start',sz:9.5,lh:12,i:1});
 o+=ar(205,288,270,287,C.gray,2);
 o+=T(360,322,'MATRIZ MITOCONDRIAL',{w:'bold',sz:12});
 return S(720,372,o,'Cadeia respiratória e fosforilação oxidativa');};

/* ---------- F9: balanco de ATP ---------- */
F.balanco=()=>{let o='';
 o+=T(360,20,'Rendimento máximo de ATP por glicose (Guyton)',{sz:13,w:'bold'});
 const seg=[['Glicólise',2,C.carb],['Ciclo de Krebs',2,C.lip],['Fosforilação oxidativa — 20 H (via NAD⁺)',30,C.atp],['4 H (via FAD)',4,C.prot]];
 let x=20;const sc=17;seg.forEach(([n,v,c])=>{o+=R(x,40,v*sc,44,c,'#fff',0)+T(x+v*sc/2,67,v,{c:'#fff',w:'bold',sz:14});x+=v*sc});
 o+=T(20,105,'2 + 2 + 30 + 4 = 38 ATP',{a:'start',sz:13,w:'bold'});
 o+=TL(20,130,['• Quase 90% do ATP vem da oxidação dos átomos de hidrogênio (fosforilação oxidativa), não da glicólise nem do Krebs.','• Hidrogênios liberados: 4 (glicólise) + 4 (piruvato → acetil-CoA) + 16 (Krebs) = 24.','• Energia: 686.000 cal liberadas por mol; 456.000 cal armazenadas em ATP → eficiência máxima ≈ 66%; ≈ 34% vira calor.'],{a:'start',sz:11,lh:18});
 o+=R(20,195,680,38,C.atpL,C.atp)+T(360,219,'Atenção: textos mais recentes costumam adotar ≈ 30–32 ATP por glicose (estimativa revisada). Use o valor do seu professor.',{sz:10.5});
 return S(720,245,o,'Balanço de ATP');};

/* ---------- F10: anaerobia e lactato ---------- */
F.lactato=()=>{let o='';
 o+=R(10,20,130,50,C.carbL,C.carb)+T(75,50,'Glicose',{w:'bold'});
 o+=ar(140,45,190,45,C.carb)+R(190,20,150,50,C.carbL,C.carb)+TL(265,40,['2 piruvato','+ 2 ATP, 2 NADH'],{sz:11});
 o+=ar(340,35,420,15,C.atp)+R(420,0,0,0,'none');o+=R(425,5,285,52,C.atpL,C.atp)+TL(567,22,['COM O₂: mitocôndria','acetil-CoA → Krebs → cadeia respiratória (~38 ATP)'],{sz:10.5,lh:15});
 o+=ar(340,55,420,95,C.gray)+R(425,75,285,50,C.orL,'#b9770e')+TL(567,93,['SEM O₂ (ou O₂ insuficiente)','piruvato + NADH → ÁCIDO LÁCTICO (lactato)'],{sz:10.5,lh:15});
 o+=TL(360,150,['Glicólise anaeróbica rende só ≈ 24.000 cal em ATP (≈ 3% da energia da glicose), mas é rápida e salva vidas por alguns minutos.','O lactato é um "sumidouro": remove piruvato e NADH acumulados e deixa a glicólise continuar.'],{sz:10.5,lh:15});
 o+=R(10,185,700,50,C.grayL,'#9aa3aa')+TL(360,205,['Quando o O₂ volta: lactato → piruvato (+ NADH) → oxidado para ATP, ou reconvertido em glicose (sobretudo no fígado).','O coração consegue usar o lactato como fonte de energia.'],{sz:10.5,lh:15});
 return S(720,245,o,'Glicólise anaeróbica e lactato');};

/* ---------- F11: glicogenio figado x musculo ---------- */
F.glicogenio=()=>{let o='';
 const panel=(x,t,sub,f,s)=>R(x,10,345,285,f,s)+T(x+172,32,t,{w:'bold',sz:14})+T(x+172,48,sub,{sz:10.5,i:1});
 o+=panel(10,'FÍGADO','tampão da glicemia (≈ 100 g, até 5–6% do peso)',C.orL,'#b9770e');
 o+=panel(365,'MÚSCULO','reserva para o próprio músculo (1–3% do peso)',C.carbL,C.carb);
 // liver
 o+=R(25,65,100,34,C.glu,null,17)+T(75,87,'Glicose',{c:'#fff',w:'bold'})+ar(125,82,165,82,C.glu,2.5)+R(165,65,105,34,C.glu,null,17)+T(217,87,'Glicose-6-P',{c:'#fff',w:'bold',sz:11});
 o+=ar(217,99,217,140,C.ins,3)+R(150,140,140,34,C.lip,null,8)+T(220,162,'GLICOGÊNIO',{c:'#fff',w:'bold'});
 o+=T(228,128,'glicogênese (insulina ↑)',{a:'start',sz:9.5,c:C.ins,w:'bold'});
 o+=pa('M150,160 Q95,140 130,105',C.atp,3)+T(30,138,'glicogenólise',{a:'start',sz:10,c:C.atp,w:'bold'})+T(30,152,'(glucagon, adrenalina)',{a:'start',sz:9,c:C.atp});
 o+=R(30,195,310,45,C.protL,C.prot)+TL(185,212,['Glicose-fosfatase (só fígado, rim e intestino):','G6P → glicose livre → sai para o SANGUE'],{sz:10.5,lh:14});
 o+=T(185,262,'Entre refeições o fígado devolve glicose ao sangue.',{sz:10.5,w:'bold'})+T(185,278,'Cerca de 60% da glicose da refeição passa por essa reserva.',{sz:10,i:1});
 // muscle
 o+=R(380,65,100,34,C.glu,null,17)+T(430,87,'Glicose',{c:'#fff',w:'bold'})+ar(480,82,520,82,C.glu,2.5)+R(520,65,105,34,C.glu,null,17)+T(572,87,'Glicose-6-P',{c:'#fff',w:'bold',sz:11});
 o+=ar(572,99,572,140,C.ins,3)+R(505,140,140,34,C.lip,null,8)+T(575,162,'GLICOGÊNIO',{c:'#fff',w:'bold'});
 o+=pa('M505,160 Q455,140 485,105',C.atp,3)+T(380,138,'glicogenólise',{a:'start',sz:10,c:C.atp,w:'bold'})+T(380,152,'(adrenalina; contração)',{a:'start',sz:9,c:C.atp});
 o+=R(385,195,310,45,C.atpL,C.atp)+TL(540,212,['SEM glicose-fosfatase: a glicose-6-P não sai.','Segue para glicólise → ATP (e lactato, se anaeróbio)'],{sz:10.5,lh:14});
 o+=T(540,262,'O glicogênio muscular NÃO eleva a glicemia.',{sz:10.5,w:'bold'})+T(540,278,'GLUT4: insulina e contração muscular.',{sz:10,i:1});
 return S(720,305,o,'Glicogênio hepático e muscular');};

/* ---------- F12: excesso -> gordura ---------- */
F.lipogenese=()=>{let o='';
 const b=(x,y,w,t,f,s)=>R(x,y,w,48,f,s,10)+TL(x+w/2,y+20,t,{sz:10.5,lh:13});
 o+=T(360,18,'Excesso de carboidratos → gordura (fígado e tecido adiposo)',{sz:13,w:'bold'});
 o+=b(10,35,110,['Glicose em','excesso'],C.gluL,C.glu)+ar(120,59,140,59,C.gray,2.5);
 o+=b(140,35,130,['Glicogênio satura','(5–6% do fígado)'],C.orL,'#b9770e')+ar(270,59,290,59,C.gray,2.5);
 o+=b(290,35,120,['Glicólise →','piruvato → acetil-CoA'],C.carbL,C.carb)+ar(410,59,430,59,C.gray,2.5);
 o+=b(430,35,135,['Citrato/isocitrato ↑','ativa acetil-CoA','carboxilase → malonil-CoA'],C.atpL,C.atp)+ar(565,59,585,59,C.gray,2.5);
 o+=b(585,35,125,['ÁCIDOS GRAXOS','(síntese hepática)'],C.lipL,C.lip);
 o+=T(500,108,'NADPH (via das pentoses) fornece o hidrogênio',{sz:10,i:1,c:C.gray});
 o+=ar(647,83,647,125,C.gray,2.5);
 o+=b(560,125,150,['Triglicerídeos em VLDL','(lipoproteínas)'],C.lipL,C.lip)+ar(560,149,500,149,C.gray,2.5);
 o+=b(340,125,160,['Lipase lipoproteica','(ativada pela insulina)','nos capilares do tecido adiposo'],C.insL,C.ins)+ar(340,149,300,149,C.gray,2.5);
 o+=b(120,125,180,['ADIPÓCITO: ácidos graxos +','α-glicerol-fosfato → triglicerídeos','(armazenados)'],C.lipL,C.lip);
 o+=R(10,200,700,56,C.grayL,'#9aa3aa')+TL(360,220,['Insulina: ↑ lipogênese, ↑ captação de glicose no adipócito e INIBE a lipase hormônio-sensível (não libera gordura).','≈ 9,3 kcal de excesso → ≈ 1 g de gordura armazenada.'],{sz:10.5,lh:17});
 return S(720,268,o,'Conversão do excesso de glicose em gordura');};

/* ---------- F13: regulacao do apetite ---------- */
F.apetite=()=>{let o='';
 o+=R(230,30,260,130,C.insL,C.ins,14)+T(360,50,'HIPOTÁLAMO — núcleo arqueado',{w:'bold',sz:12});
 o+=R(245,62,112,58,C.protL,C.prot,8)+TL(301,82,['POMC / CART','(α-MSH)','anorexígeno'],{sz:10.5,lh:13});
 o+=R(363,62,112,58,C.atpL,C.atp,8)+TL(419,82,['AgRP / NPY','orexígeno'],{sz:10.5,lh:14});
 o+=T(360,142,'melanocortina (MCR-3/4) · núcleos paraventriculares',{sz:9.5,i:1});
 o+=R(10,20,170,60,C.lipL,C.lip)+TL(95,40,['LEPTINA (adipócito)','↑ com mais gordura;','inibe AgRP/NPY, ativa POMC'],{sz:10,lh:13});
 o+=R(10,95,170,50,C.carbL,C.carb)+TL(95,115,['INSULINA, CCK, PYY, GLP-1','(pós-refeição)'],{sz:10.5});
 o+=R(540,20,170,60,C.atpL,C.atp)+TL(625,42,['GRELINA (estômago)','↑ no jejum'],{sz:10.5});
 o+=ar(180,50,245,85,C.prot,2.5)+ar(180,115,245,100,C.prot,2.5)+ar(180,52,363,85,C.atp,2,'4 3');
 o+=ar(540,55,475,85,C.atp,2.5);
 o+=R(60,190,260,52,C.protL,C.prot)+TL(190,208,['POMC ativo:','↓ ingestão · ↑ gasto energético (simpático)'],{sz:10.5,lh:15});
 o+=R(400,190,260,52,C.atpL,C.atp)+TL(530,208,['AgRP/NPY ativo:','↑ ingestão · ↓ gasto energético'],{sz:10.5,lh:15});
 o+=ar(301,120,190,188,C.prot,2.5)+ar(419,120,530,188,C.atp,2.5);
 o+=T(360,266,'Na obesidade, a leptina costuma estar ALTA (resistência à leptina), e mutações em POMC e MCR-4 são causas monogênicas.',{sz:10,i:1});
 return S(720,276,o,'Regulação hipotalâmica da ingestão alimentar');};

/* ---------- F14: alimentado x jejum ---------- */
F.estados=()=>{let o='';
 const panel=(x,t,sub,f,s)=>R(x,8,350,330,f,s,12)+T(x+175,30,t,{w:'bold',sz:14})+T(x+175,46,sub,{sz:10.5,i:1});
 o+=panel(5,'ESTADO ALIMENTADO (absortivo)','insulina ↑ · glucagon ↓ · glicemia ≈ 120–140 mg/dL',C.carbL,C.carb);
 o+=panel(365,'JEJUM (pós-absortivo)','insulina ↓ · glucagon ↑ · glicemia ≈ 80–90 mg/dL',C.atpL,C.atp);
 const org=(x,y,t,l)=>R(x,y,160,56,'#fff','#8e979e',8)+T(x+80,y+16,t,{w:'bold',sz:11})+TL(x+80,y+30,l,{sz:9.5,lh:11});
 // fed
 o+=org(15,62,'FÍGADO',['glicogênese · lipogênese','capta glicose (↓ gliconeog.)']);
 o+=org(185,62,'MÚSCULO',['↑ GLUT4 · usa glicose','armazena glicogênio · ↑ proteína']);
 o+=org(15,138,'TECIDO ADIPOSO',['captura glicose e AG (lipase','lipoproteica) → armazena TG']);
 o+=org(185,138,'CÉREBRO',['glicose (sem insulina)','sempre']);
 o+=R(15,214,330,56,C.grayL,'#8e979e')+TL(180,234,['Sangue: ~2/3 da glicose absorvida vai ao glicogênio hepático;','o fígado converte o excesso em gordura (VLDL).'],{sz:10,lh:14});
 o+=R(15,278,330,50,C.protL,C.prot)+TL(180,296,['RQ ≈ 1 logo após refeição com carboidratos','(quase só carboidrato é oxidado)'],{sz:10,lh:14});
 // fasting
 o+=org(375,62,'FÍGADO',['glicogenólise · gliconeogênese','libera glicose (glicose-fosfatase)']);
 o+=org(545,62,'MÚSCULO',['usa ácidos graxos · ↓ glicose','libera aminoácidos/lactato (precursores)']);
 o+=org(375,138,'TECIDO ADIPOSO',['lipase hormônio-sensível','↑ ácidos graxos livres e glicerol']);
 o+=org(545,138,'CÉREBRO',['glicose; em jejum longo','↑ corpos cetônicos (~2/3 da energia)']);
 o+=R(375,214,330,56,C.grayL,'#8e979e')+TL(540,234,['Gliconeogênese ≈ 25% da produção hepática de glicose','no jejum; rins também produzem no jejum prolongado.'],{sz:10,lh:14});
 o+=R(375,278,330,50,C.orL,'#b9770e')+TL(540,296,['RQ ≈ 0,7 após ~8–10 h','(metabolismo quase só de gordura)'],{sz:10,lh:14});
 return S(720,348,o,'Estados alimentado e de jejum');};

/* ---------- F15: linha do tempo do jejum ---------- */
F.tempo=()=>{let o='';
 o+=T(360,18,'Da refeição ao jejum prolongado (esquema didático baseado em dados do Guyton)',{sz:12.5,w:'bold'});
 const seg=[[10,150,'0–2 h','absorção: glicemia sobe a 120–140 e volta em ≈ 2 h; fígado armazena glicogênio',C.carbL,C.carb],[160,150,'~3–4 h','glicemia ≈ 90 mg/dL; fígado libera glicose (glicogenólise)',C.gluL,C.glu],[310,140,'~8–10 h','RQ ≈ 0,7: oxidação sobretudo de gordura',C.lipL,C.lip],[450,130,'12–24 h','reserva de glicogênio do corpo se esgota (≈ meio dia a 1 dia)',C.orL,'#b9770e'],[580,130,'dias','↑ gliconeogênese, cetose; cérebro usa corpos cetônicos',C.atpL,C.atp]];
 seg.forEach(([x,w,t,d,f,s])=>{o+=R(x,40,w,38,f,s,6)+T(x+w/2,64,t,{w:'bold',sz:12});o+=R(x,84,w,90,'#fff',s,6)+TL(x+w/2,102,wrap(d,w===150?22:19),{sz:9.5,lh:12})});
 o+=ar(10,195,710,195,C.gray,2)+T(360,213,'tempo após a última refeição',{sz:10,i:1});
 o+=T(360,236,'Os intervalos são aproximações para estudo: variam com a refeição, o indivíduo e o gasto energético.',{sz:9.5,i:1,c:C.gray});
 return S(720,246,o,'Linha do tempo do jejum');};
function wrap(s,n){const w=s.split(' ');const ls=[];let c='';w.forEach(x=>{if((c+' '+x).trim().length>n){ls.push(c.trim());c=x}else c+=' '+x});ls.push(c.trim());return ls}

/* ---------- F16: radicais livres ---------- */
F.ros=()=>{let o='';
 o+=R(10,20,200,70,C.carbL,C.carb)+TL(110,42,['CADEIA RESPIRATÓRIA','elétrons (e⁻) passam por','transportadores'],{sz:10.5,lh:13,w:'bold'});
 o+=ar(210,45,260,45,C.prot,2.5)+T(235,38,'~100%',{sz:9});
 o+=R(260,20,170,50,C.protL,C.prot)+TL(345,40,['Citocromo oxidase:','O₂ → H₂O (normal)'],{sz:10.5,lh:14});
 o+=pa('M110,90 Q110,130 160,130',C.atp,2.5,'5 3')+T(30,125,'"escape" de e⁻ (pequena fração)',{a:'start',sz:9.5,c:C.atp});
 o+=R(160,110,150,40,C.atpL,C.atp,20)+T(235,135,'O₂•⁻ superóxido',{sz:11.5,w:'bold',c:C.atp});
 o+=ar(310,130,350,130,C.gray,2.5)+T(330,120,'SOD',{sz:10,w:'bold',c:C.prot});
 o+=R(350,110,150,40,C.atpL,C.atp,20)+T(425,135,'H₂O₂ peróxido',{sz:11.5,w:'bold',c:C.atp});
 o+=ar(500,130,540,130,C.gray,2.5)+T(520,120,'catalase /',{sz:9,w:'bold',c:C.prot})+T(520,108,'peroxidase',{sz:9,w:'bold',c:C.prot});
 o+=R(540,110,170,40,C.protL,C.prot,20)+T(625,135,'H₂O + O₂ (neutralizado)',{sz:10.5,w:'bold'});
 o+=R(10,180,700,76,'#fff','#c0392b')+T(360,200,'Se a produção supera as defesas = ESTRESSE OXIDATIVO',{w:'bold',sz:12,c:C.atp});
 o+=TL(360,220,['oxidação de ácidos graxos poli-insaturados das membranas · oxidação de enzimas · lesão do DNA (conhecimento geral)','tecido nervoso é especialmente suscetível (muito lipídico) — Guyton, cap. 45'],{sz:10.5,lh:16});
 o+=T(360,276,'SOD = superóxido dismutase. Etapas e frações são esquemáticas.',{sz:9.5,i:1,c:C.gray});
 return S(720,286,o,'Produção e remoção de radicais livres');};

module.exports=F;
