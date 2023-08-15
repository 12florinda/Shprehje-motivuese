let butoni=document.getElementById("ndrysho");

let shprehje=document.getElementById("shprehje");

let autori=document.getElementById("autori");


let shprehjet=[

    {
        sh:"Çfarëdo lloj gjëje që mendja e njeriut mund ta konceptojë dhe besojë, ajo mund edhe ta arrijë.",
        a:"Napoleon Hill "
    }, 

   {
    sh:"Shumë prej nesh nuk jemi duke jetuar ëndrrat tona, sepse jemi duke jetuar frikërat tona",
    a:"Joshua J. Marine"
   },

   {
    sh:"Përpiquni jo që të jeni një sukses, por që të jeni një vlerë",
    a:"Les Brown"
   },


   {
    sh:"Mënyra më e zakonshme që njerëzit heqin dorë nga fuqia e tyre, është duke menduar që nuk e kanë atë.",
    a:"Albert Einstein"
   }


]

butoni.onclick=function(){

    let randomN=Math.floor(Math.random()*shprehjet.length);
    shprehje.innerHTML=shprehjet[randomN].sh;
    autori.innerHTML=shprehjet[randomN].a;
}