import Webamp from './vendor/webamp.bundle.min.mjs';
const host=document.getElementById('desktop'),status=document.getElementById('status');
async function start(){
 if(!Webamp.browserIsSupported())throw new Error('Przeglądarka nie obsługuje Web Audio.');
 const webamp=new Webamp({initialSkin:{url:'./skins/base-2.91.wsz'},initialTracks:[],enableHotkeys:true,availableSkins:[{name:'Base 2.91',url:'./skins/base-2.91.wsz'}],windowLayout:{main:{position:{top:0,left:0}},equalizer:{position:{top:116,left:0}},playlist:{position:{top:232,left:0}}}});
 await webamp.renderInto(host);
 status.textContent='Weenamp · base-2.91 · Przeciągnij muzykę do playlisty. Pliki pozostają na urządzeniu.';
 document.getElementById('add').onclick=()=>document.getElementById('files').click();
 document.getElementById('files').onchange=e=>{const tracks=[...e.target.files].map(file=>({blob:file,metaData:{title:file.name}}));webamp.appendTracks(tracks);e.target.value=''};
 document.getElementById('reopen').onclick=()=>webamp.reopen();
}
start().catch(error=>{console.error(error);status.textContent='Nie udało się uruchomić odtwarzacza. Odśwież stronę lub użyj przeglądarki z Web Audio.'});
