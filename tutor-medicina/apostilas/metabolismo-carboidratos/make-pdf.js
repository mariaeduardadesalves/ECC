const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage();
await p.goto('file://'+path.join(__dirname,'out','apostila.html'));
await p.pdf({path:path.join(__dirname,'out','apostila-metabolismo-carboidratos.pdf'),format:'A4',printBackground:true,margin:{top:'16mm',bottom:'18mm',left:'15mm',right:'15mm'},displayHeaderFooter:true,
headerTemplate:'<div style="font-size:7pt;color:#777;width:100%;text-align:center;font-family:Arial">Apostila de revisão — Metabolismo energético e dos carboidratos</div>',
footerTemplate:'<div style="font-size:8pt;color:#777;width:100%;text-align:center;font-family:Arial">Página <span class="pageNumber"></span> de <span class="totalPages"></span></div>'});
await b.close();console.log('pdf ok')})();
