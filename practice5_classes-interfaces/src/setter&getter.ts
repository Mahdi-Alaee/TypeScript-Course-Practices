class triangle {
  private _width: number = 0;
  private _height: number = 0;

  constructor(inputWidth: number, inputHeight: number) {
    this.width = inputWidth;
    this.height = inputHeight;
  }

  set width(newWidth: number) {
    if (newWidth > 0) this._width = newWidth;
    else throw "Width must be bigger than 0";
  }

  get width() {
    return this._width;
  }

  set height(newHeight: number) {
    if (newHeight > 0) this._height = newHeight;
    else throw "Height must be bigger than 0";
  }

  get height() {
    return this._height;
  }

  get area(){
    return 'area: ' + (this.width * this.height)
  }
}

const myTriangle = new triangle(3, 2);

myTriangle.width = 12;
myTriangle.height = 3;

console.log("width: " + myTriangle.width);
console.log("height: " + myTriangle.height);
console.log("height: " + myTriangle.area);
