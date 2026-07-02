/**
 * Les logos envoyés via le chat Cursor sont souvent convertis en JPEG
 * (extension .png mais contenu JPEG = pas de transparence).
 * Ce script restaure un vrai PNG transparent sans modifier le design.
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const assetsDir =
  "C:\\Users\\sluta\\.cursor\\projects\\c-wamp64-www-talacorp-new-website\\assets";
const publicDir = path.join(__dirname, "..", "public");

function removeEdgeBlack(data, width, height) {
  const visited = new Uint8Array(width * height);
  const queue = [];
  const idx = (x, y) => (y * width + x) * 4;
  const isBlack = (i) => data[i] < 55 && data[i + 1] < 55 && data[i + 2] < 55;

  const push = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const pi = y * width + x;
    if (visited[pi]) return;
    const i = idx(x, y);
    if (!isBlack(i)) return;
    visited[pi] = 1;
    queue.push([x, y]);
  };

  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  while (queue.length) {
    const [x, y] = queue.shift();
    data[idx(x, y) + 3] = 0;
    for (const [nx, ny] of [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ]) {
      if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
      const pi = ny * width + nx;
      if (visited[pi]) continue;
      const i = idx(nx, ny);
      if (!isBlack(i)) continue;
      visited[pi] = 1;
      queue.push([nx, ny]);
    }
  }
}

async function jpegToTransparentPng(input, output) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  removeEdgeBlack(data, info.width, info.height);
  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(output);
}

async function copyTruePng(input, output) {
  await sharp(input).png().toFile(output);
}

async function main() {
  const colorJpeg = path.join(
    assetsDir,
    "c__Users_sluta_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Tala_png-eb048502-ff85-4cfa-beae-37289eb5c6d4.png"
  );
  const whiteJpeg = path.join(
    assetsDir,
    "c__Users_sluta_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Tala_large_blanc-0e26f09e-76fd-4c90-ad93-c2c8ff28be14.png"
  );
  const colorPngCrop = path.join(
    assetsDir,
    "c__Users_sluta_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-6f624607-fa4f-4653-9179-56831dd0756b.png"
  );

  await jpegToTransparentPng(colorJpeg, path.join(publicDir, "logo-color.png"));
  console.log("logo-color.png (JPEG → PNG transparent)");

  await jpegToTransparentPng(whiteJpeg, path.join(publicDir, "logo-white.png"));
  console.log("logo-white.png (JPEG → PNG transparent)");

  // Vérification : compter pixels transparents
  for (const file of ["logo-color.png", "logo-white.png"]) {
    const { data, info } = await sharp(path.join(publicDir, file))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    let t = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] === 0) t++;
    console.log(file, info.width + "x" + info.height, "transparent:", t);
  }
}

main().catch(console.error);
