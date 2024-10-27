```javascript
class Oyuncu {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.hiz = 5;
    this.en = 32;
    this.boy = 32;
  }

  hareketEt() {
    if (tuslar["w"]) {
      this.y -= this.hiz;
    }

    if (tuslar["a"]) {
      this.x -= this.hiz;
    }

    if (tuslar["s"]) {
      this.y += this.hiz;
    }

    if (tuslar["d"]) {
      this.x += this.hiz;
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
    ctx.fillStyle = "mavi";
    ctx.fillRect(this.x, this.y, this.en, this.boy);
  }
}
```