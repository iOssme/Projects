const fs = require('fs');

const images = [
  "https://images.unsplash.com/photo-1600100397608-f010f41cb8e1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518998053401-b33c411a0519?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1580837119756-563d608dc11c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551041777-ed277b8dd348?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1596727147705-611529ea0f22?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1568283096545-b5f1cd73d069?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1594939023772-e1d51edfb02a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1616422285623-1463be4ff28a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1542152648-93661beffec6?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1579290076751-246e6a17b0d2?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1590846665790-205128ff0e3d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1563242045-81643c7b60e8?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1580219602517-7cc7b4fcb512?auto=format&fit=crop&q=80&w=600"
];

let html = fs.readFileSync('./index.html', 'utf8');

// We will replace each "id: X," with "id: X,\n        image: 'url',"
let count = 0;
html = html.replace(/id:\s*\d+,/g, (match) => {
  const replacement = `${match}\n        image: "${images[count % images.length]}",`;
  count++;
  return replacement;
});

fs.writeFileSync('./index.html', html);
console.log("Updated data with images.");
