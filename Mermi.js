```javascript
class Mermi {
  constructor(x, y, yon) {
    this.x = x;
    this.y = y;
    this.yon = yon;
    this.hiz = 10;
    this.en = 8;
    this.boy = 8;
  }

  hareketEt() {
    switch (this.yon) {
      case "yukari":
        this.y -= this.hiz;
        break;
      case "asagi":
        this.y += this.hiz;
        break;
      case "sol":
        this.x -= this.hiz;
        break;
      case "sag":
        this.x += this.hiz;
        break;
    }
  }

  carpismaKutusu() {
    return {
      x: this.x,
      y: this.y,
      en: this.en,
      boy: this.boy
    };
  }

  ciz(ctx) {
    ctx.fillStyle = "kirmizi";
    ctx.fillRect(this.x, this.y, this.en, this.boy);
  }
}
```