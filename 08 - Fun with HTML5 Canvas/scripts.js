const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //where we do all related to drawing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// window.addEventListener('resize', function(e){
//     canvas.width = this.innerWidth;
//     canvas.height = this.innerHeight;
// });

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
ctx.globalCompositeOperation = 'xor';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return; //stop function when not clicking down

    // ctx.lineWidth = 50;
    ctx.strokeStyle = `hsl(${hue},100% , 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    // lastX = e.offsetX;
    // lastY = e.offsetY;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 2) {
        direction = !direction;
    }
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; //on mousedown we update the line origin
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
