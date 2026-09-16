// Original 64px RGB tiles; Adobe PAT v1 / Virtual Memory Array List v3.
// Spec: https://www.adobe.com/devnet-apps/photoshop/fileformatashtml/
// Generate: node _dev/tools/build-mhk-patterns.js
const fs = require('node:fs');
const path = require('node:path');
const names = ['Grain','Weave','Coarse','Lines','Dots','Blossom','Lotus','Stars'];
function u32(value) { const b=Buffer.alloc(4); b.writeUInt32BE(value); return b; }
function u16(value) { const b=Buffer.alloc(2); b.writeUInt16BE(value); return b; }
const rect = Buffer.concat([u32(0),u32(0),u32(64),u32(64)]);
function tile(kind) {
    const pixels=Buffer.alloc(4096); let seed=1937;
    for(let y=0;y<64;y++) for(let x=0;x<64;x++) {
        seed=(Math.imul(seed,1664525)+1013904223)>>>0;
        let value=128, dx=x-32,dy=y-32;
        if(kind===0) value=105+(seed%47);
        if(kind===1) value=y%8<2?155:x%8<2?100:128;
        if(kind===2) value=85+(seed%87);
        if(kind===3) value=x%8<2?95:128;
        if(kind===4) value=Math.abs(x%16-8)+Math.abs(y%16-8)<4?85:128;
        if(kind===5 || kind===6) {
            const count=kind===5?5:8, length=kind===5?9:13;
            for(let petal=0;petal<count;petal++) {
                const a=petal*Math.PI*2/count;
                const along=dx*Math.cos(a)+dy*Math.sin(a)-12;
                const across=-dx*Math.sin(a)+dy*Math.cos(a);
                if(along*along/(length*length)+across*across/36<=1) value=petal%2?85:180;
            }
            if(dx*dx+dy*dy<10) value=210;
        }
        if(kind===7 && Math.abs(dx)<24 && Math.abs(dy)<24 && Math.abs(dx)*Math.abs(dy)<36) value=205;
        pixels[y*64+x]=value;
    }
    return pixels;
}
function pattern(name,kind) {
    const text=Buffer.from('MHK '+name+' v1\0','utf16le').swap16();
    const id=Buffer.from('7153d9a1-6e46-4cbc-a782-00000000000'+kind);
    const data=Buffer.concat([u32(8),rect,u16(8),Buffer.from([0]),tile(kind)]);
    const channel=Buffer.concat([u32(1),u32(data.length),data]);
    // Photoshop reserves 24 channels plus user/sheet masks; RGB uses the first three.
    const arrays=Buffer.concat([rect,u32(24),channel,channel,channel,Buffer.alloc(23*4)]);
    return Buffer.concat([u32(1),u32(3),u16(64),u16(64),u32(text.length/2),text,
        Buffer.from([id.length]),id,u32(3),u32(arrays.length),arrays]);
}
const file=path.resolve(__dirname,'../../jsx/pj/mhk-patterns.pat');
fs.writeFileSync(file,Buffer.concat([Buffer.from('8BPT'),u16(1),u32(names.length),...names.map(pattern)]));
console.log('Created 8 original MHK patterns: '+file);
