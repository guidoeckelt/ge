
class RendererContext{

  constructor(){

  }

  // _drawText(text, x, y, width, height){
  //   this._context.textBaseline = 'middle';
  //   this._context.textAlign = 'center';
  //   this._context.fillStyle = '#fff';
  //   this._context.font = '20px Arial sans-serif';
  //   this._context.fillText(text, x,y, width);
  // }
  // _drawCircle(x,y,radius, backgroundColor,borderColor,borderWidth){
  //   this._context.beginPath();
  //   this._context.arc(x,y, radius, 0,2*Math.PI);
  //   this._context.closePath();
  //
  //   this._context.fillStyle = backgroundColor;
  //   this._context.fill();
  //
  //   this._context.lineWidth = borderWidth;
  //   this._context.strokeStyle = borderColor;
  //   this._context.stroke();
  // }
  // _drawTriangle(x,y,width,height, backgroundColor,borderColor,borderWidth){
  //   //original rectangle
  //   this._context.fillStyle = backgroundColor;
  //   this._context.fillRect(x,y,width,height);
  //   this._context.strokeStyle = borderColor;
  //   this._context.lineWidth = 1;
  //   this._context.strokeRect(x,y,width,height);
  //   // Triangle
  //   this._context.beginPath();               //                            3
  //   this._context.moveTo(x,y+height);//left bottom 1            offSet->.  .  .
  //   this._context.lineTo(x+width,y+height);//right bottom 2        .<--position
  //   this._context.lineTo(x+(width/2),y);//middle top 3                 1.     .2
  //   this._context.closePath();
  //
  //   this._context.fillStyle = backgroundColor;
  //   this._context.fill();
  //
  //   this._context.lineWidth = borderWidth;
  //   this._context.strokeStyle = borderColor;
  //   this._context.stroke();
  // }
  // _drawPolygon(verteces, backgroundColor,borderColor,borderWidth){
  //   let firstPoint = verteces[0];
  //   this._context.beginPath();
  //   this._context.moveTo(firstPoint.x, firstPoint.y);
  //   for(let i = verteces.length-1;i>0;i--){
  //     let point = verteces[i];
  //     this._context.lineTo(point.x,point.y);
  //   }
  //   this._context.closePath();
  //
  //   this._context.fillStyle = backgroundColor;
  //   this._context.fill();
  //
  //   this._context.lineWidth = borderWidth;
  //   this._context.strokeStyle = borderColor;
  //   this._context.stroke();
  // }

}

export default RendererContext;
