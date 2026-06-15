const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const logoPath = 'public/images/logo.png';

async function generateFavicons() {
  console.log('Generating favicons from:', logoPath);

  // 1. Generate PNGs
  const png16 = await sharp(logoPath).resize(16, 16).png().toBuffer();
  const png32 = await sharp(logoPath).resize(32, 32).png().toBuffer();
  const png48 = await sharp(logoPath).resize(48, 48).png().toBuffer();
  const png180 = await sharp(logoPath).resize(180, 180).png().toBuffer();

  // Write the individual PNGs
  fs.writeFileSync('public/favicon-16x16.png', png16);
  fs.writeFileSync('public/favicon-32x32.png', png32);
  fs.writeFileSync('public/apple-touch-icon.png', png180);
  console.log('Generated individual PNG icons.');

  // 2. Generate ICO file containing 16x16, 32x32, 48x48
  const icoBuffer = makeIco([
    { width: 16, height: 16, data: png16 },
    { width: 32, height: 32, data: png32 },
    { width: 48, height: 48, data: png48 },
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  console.log('Generated favicon.ico successfully.');
}

function makeIco(images) {
  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type (1 = ICO)
  header.writeUInt16LE(images.length, 4); // Number of images

  const entries = [];
  const datas = [];
  let offset = 6 + images.length * 16;

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width, 0);
    entry.writeUInt8(img.height, 1);
    entry.writeUInt8(0, 2); // Colors (0 = no palette)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.data.length, 8); // Image data size
    entry.writeUInt32LE(offset, 12); // Offset

    entries.push(entry);
    datas.push(img.data);

    offset += img.data.length;
  }

  return Buffer.concat([header, ...entries, ...datas]);
}

generateFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
