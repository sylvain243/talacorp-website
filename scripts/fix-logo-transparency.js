/**
 * Supprime le fond noir des logos (JPEG déguisés en PNG ou fond noir opaque).
 * Préserve les traits noirs du pictogramme (connectés au contenu coloré).
 */
const sharp = require("sharp");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

function isDark(r, g, b, threshold = 50) {
  return r < threshold && g < threshold && b < threshold;
}

function isColored(r, g, b) {
  return r > 55 || g > 55 || b > 55;
}

function removeBlackBackground(data, width, height) {
  const idx = (x, y) => (y * width + x) * 4;
  const visited = new Uint8Array(width * height);
  const queue = [];

  const push = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const pi = y * width + x;
    if (visited[pi]) return;
    const i = idx(x, y);
    if (!isDark(data[i], data[i + 1], data[i + 2])) return;
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
      push(nx, ny);
    }
  }

  // Traits noirs internes (circuit) : garder si voisin d'une couleur
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = idx(x, y);
      if (data[i + 3] === 0) continue;
      if (!isDark(data[i], data[i + 1], data[i + 2])) continue;

      let nearColor = false;
      for (let dy = -2; dy <= 2 && !nearColor; dy++) {
        for (let dx = -2; dx <= 2 && !nearColor; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          const j = idx(nx, ny);
          if (data[j + 3] > 0 && isColored(data[j], data[j + 1], data[j + 2])) {
            nearColor = true;
          }
        }
      }
      if (!nearColor) data[i + 3] = 0;
    }
  }
}

async function processLogo(filename) {
  const input = path.join(publicDir, filename);
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  removeBlackBackground(data, info.width, info.height);

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 1 })
    .png()
    .toFile(input);

  const { data: out, info: outInfo } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let transparent = 0;
  for (let i = 3; i < out.length; i += 4) if (out[i] === 0) transparent++;
  console.log(
    `${filename}: ${outInfo.width}x${outInfo.height}, ${transparent}/${outInfo.width * outInfo.height} px transparents`
  );
}

async function main() {
  await processLogo("logo-color.png");
  await processLogo("logo-white.png");
}

main().catch(console.error);
