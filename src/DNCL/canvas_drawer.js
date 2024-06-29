// コンストラクタ
function CanvasDrawer(canvas_element) {
    this.ctx = canvas_element.getContext('2d');
    this.init();
}

// 初期化関数
CanvasDrawer.prototype.init = function() {
    let ctx = this.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2.0;
    ctx.font = "11pt Arial";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// 色設定関数
CanvasDrawer.prototype.color = function(html_color) {
    let ctx = this.ctx;
    ctx.fillStyle = html_color;
    ctx.strokeStyle = html_color;
}

// 四角形描画関数
CanvasDrawer.prototype.rect = function(x,y,width,height) {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fill();
}

// 楕円描画関数
CanvasDrawer.prototype.oval = function(x,y,radius_x, radius_y) {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.ellipse(x, y, radius_x, radius_y, 0, 0, Math.PI * 2, false);
    ctx.fill();
}

// 直線描画関数
CanvasDrawer.prototype.line = function(fill, points) {
    let ctx = this.ctx;
    if (points.length < 4) {
        return;
    }
    if (points.length%2 === 1) {
        return;
    }

    ctx.beginPath();
    ctx.moveTo(points[0], points[1]);
    for (let i = 2; i < points.length; i+=2) {
        ctx.lineTo(points[i], points[i+1]);
    }

    if (fill) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}

// フォント設定関数
CanvasDrawer.prototype.font = function(size, name) {
    let ctx = this.ctx;
    ctx.font = size + "pt " + name;
}

// テキスト描画関数
CanvasDrawer.prototype.text = function(x, y, text) {
    let ctx = this.ctx;
    ctx.fillText(text, x, y);
}
