import sharp from 'sharp';
import fs from 'node:fs/promises';
const root=process.argv[2]; if(!root) throw new Error('Provide a source image directory ending in / as the first argument.');
const sheets=[['exec-4349d2c9-5d5b-4e1f-83d2-b7fff0739c40.png',[0,256,496,738,967,1220,1536]],['exec-ae85d780-49d1-4afa-a04f-e157ebc0dead.png',[0,253,508,760,1016,1270,1536]],['exec-d588f1b6-41bb-4d35-a93a-020588c822df.png',[0,258,502,736,971,1220,1536]],['exec-15334a4e-14a1-42a6-92d3-359ec70ad993.png',[0,253,509,762,1012,1230,1536]]];
for(let s=0;s<sheets.length;s++){const[file,ys]=sheets[s],xs=[0,341,683,1024];for(let r=0;r<6;r++)for(let c=0;c<3;c++){const id=s*18+r*3+c+1;await sharp(root+file).extract({left:xs[c],top:ys[r],width:xs[c+1]-xs[c],height:ys[r+1]-ys[r]}).resize(640,640,{fit:'contain',background:'#f6f1e6'}).webp({quality:90}).toFile(`public/images/product-${id}.webp`);}}
console.log('72 individual WebP product assets saved');

