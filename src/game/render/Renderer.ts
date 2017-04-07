import Game from "./../Game";
import GameObject from "./../GameObject";
import Vector from "./../metric/Vector";

abstract class Renderer{

  protected _game : Game;
  protected _canvas : HTMLCanvasElement;
  protected _context : CanvasRenderingContext2D;

  private _drawProcess : number;
  private _drawDelay : number;
  private _isShowingInterface : boolean;

  constructor(){
    this._canvas = document.createElement('canvas');
    this._context = this._canvas.getContext('2d');
    this._drawProcess = null;
    this._isShowingInterface = false;
    this._drawDelay = 5;

    this._sizeAndStyleCanvas();
  }
  private _sizeAndStyleCanvas(){
    this._canvas.id = 'canvas';
    this._canvas.style.cursor = 'none';
    this._canvas.width = 1200;
    this._canvas.height = 800;
  }
  private _appendCanvasIfNessacary(){
    if(this._game.canvasContainer==document.body && this._game.canvasContainer.childNodes.length>0){
      this._game.canvasContainer.insertBefore(this._canvas,this._game.canvasContainer.childNodes[0]);
    }else{
      this._game.canvasContainer.appendChild(this._canvas);
    }
  }

  public start(game : Game){
    this._game = game;
    this._appendCanvasIfNessacary();
    this._drawLoop();
    this._drawProcess = window.setInterval(this._drawLoop.bind(this), this._drawDelay);
  }
  public stop(){
    window.clearInterval(this._drawProcess);
  }

  private _drawLoop(){
    var objects = this._game.gameObjects;
    this._clear();
    this._draw('background');
    for(var i=objects.length-1;i>=0;i--){
      var object = objects[i];
      this._draw(object);
    }
    this._draw('interface');
    this._draw('pointer');
    // console.log('drawLoop finished');
  }
  private _draw(object : string | GameObject){
      this._context.save();
      if(object instanceof GameObject){
        this._drawGameObject(object);
      }else if(object == 'pointer'){
        this._pointer();
      }else if(object == 'interface'){
        this._interface();
      }else if(object == 'background'){
        this._background();
      }
      this._context.restore();
  }
  protected _drawGameObject(gameObject : GameObject){
    console.log("gameObject drawn "+typeof gameObject);

  }

  private _clear(){
    this._context.clearRect(0,0,this._canvas.width,this._canvas.height);
  }
  private _background(){
    this._context.fillStyle = '#000';
    this._context.fillRect(0,0,this._canvas.width,this._canvas.height);
    this._context.strokeStyle = null;
    this._context.strokeRect(0,0,this._canvas.width,this._canvas.height);
  }
  private _interface(){
    // console.log("fdsfd");
  }
  private _pointer(){
    this._context.beginPath();
    this._context.arc(this._game.mouse.position.x,this._game.mouse.position.y,2,0,2*Math.PI);
    this._context.closePath();
    this._context.fillStyle = '#fff';
    this._context.fill();
  }

  protected _drawText(text : string, position : Vector, width : number, height : number){
    this._context.textBaseline = 'middle';
    this._context.textAlign = 'center';
    this._context.fillStyle = '#fff';
    this._context.font = '20px Arial sans-serif';
    this._context.fillText(text, position.x, position.y, width);
  }
  protected _drawRectangle(position : Vector, width : number, height : number, backgroundColor : string , borderColor : string , borderWidth : number){
    this._context.fillStyle = backgroundColor;
    // this._context.fillRect(position.x,position.y,width,height);
    this._context.strokeStyle = borderColor;
    this._context.lineWidth = borderWidth;
    this._context.strokeRect(position.x,position.y,width,height);
  }
  protected _drawCircle(position : Vector, radius : number, backgroundColor : string , borderColor : string , borderWidth : number){
    this._context.beginPath();
    this._context.arc(position.x,position.y, radius, 0,2*Math.PI);
    this._context.closePath();

    this._context.fillStyle = backgroundColor;
    this._context.fill();

    this._context.lineWidth = borderWidth;
    this._context.strokeStyle = borderColor;
    this._context.stroke();
  }
  protected _drawTriangle(position : Vector, width : number, height : number, backgroundColor : string , borderColor : string , borderWidth : number){
    //original rectangle
    this._drawRectangle(position, width,height, backgroundColor,borderColor,1);
    // Triangle
    this._context.beginPath();               //                            3
    this._context.moveTo(position.x,position.y+height);//left bottom 1            offSet->.  .  .
    this._context.lineTo(position.x+width,position.y+height);//right bottom 2        .<--position
    this._context.lineTo(position.x+(width/2),position.y);//middle top 3                 1.     .2
    this._context.closePath();

    this._context.fillStyle = backgroundColor;
    this._context.fill();

    this._context.lineWidth = borderWidth;
    this._context.strokeStyle = borderColor;
    this._context.stroke();
  }
  protected _drawPolygon(verteces : Array<Vector>, backgroundColor : string , borderColor : string , borderWidth : number){
    let firstPoint = verteces[0];
    this._context.beginPath();
    this._context.moveTo(firstPoint.x, firstPoint.y);
    for(let i = verteces.length-1;i>0;i--){
      let vertex = verteces[i];
      this._context.lineTo(vertex.x,vertex.y);
    }
    this._context.closePath();

    this._context.fillStyle = backgroundColor;
    this._context.fill();

    this._context.lineWidth = borderWidth;
    this._context.strokeStyle = borderColor;
    this._context.stroke();
  }

  set game(value : Game){ this._game = value; }
  get canvas() : HTMLCanvasElement{ return this._canvas;  }

}
export default Renderer;
