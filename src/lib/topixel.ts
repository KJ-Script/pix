
export default function toPixel (file : HTMLImageElement) {

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = file.width
    canvas.height = file.height

    ctx?.drawImage(file, 0, 0);

    const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height)
    if(!imageData) return
    const {data, width, height} = imageData
    console.log("testing something", data)

    const pixels = [];
    for (let y = 0; y < height; y++) {
      const row = []; // Create an array for each row
      for (let x = 0; x < width; x++) {
        const index = (y * width + x) * 4; // Calculate pixel index
        const red = data[index];
        const green = data[index + 1];
        const blue = data[index + 2];
        const alpha = data[index + 3];
        row.push({ x, y, red, green, blue, alpha }); // Push pixel object into the row
      }
      pixels.push(row); // After each row is processed, push it into the main pixels array
    }
    console.log("is this being executed", pixels.length)
    return pixels
}