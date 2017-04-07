import Util from "./game/Util";
import Vector from "./game/metric/Vector";
import Angle from "./game/metric/Angle";
import GameObject from "./game/GameObject";

class AsteroidVertex{

  private _originalPosition : Vector;
  private _offsetVector : Vector;
  private _sumVector : Vector;

  constructor(_originalPosition : Vector , _offsetVector : Vector){
    this._originalPosition = _originalPosition;
    this._offsetVector = _offsetVector;
    this._calculateSumVector();
  }
  private _calculateSumVector(){
    this._sumVector = this._originalPosition.add(this._offsetVector);
  }
  get x() : number { return this._sumVector.x; }
  get y() : number { return this._sumVector.y; }

}

class Asteroid
  extends GameObject {

  protected _size : number;
  protected _pointNumber : number = Util.randomNumberBetween(10,20);
  protected _verteces : Array<AsteroidVertex> = new Array<AsteroidVertex>();

  constructor(position : Vector, size : number, angle : Angle, speed : number){
    super(position, size, size, angle, speed);
    this._size = size;
    this._generatePoints();
    this._isMoving = true;
  }

  private _generatePoints(){
    let increment = Math.PI*2/this._pointNumber;
    let min = -this._size/4;
    let max = this._size/4;
    for(let i = -Math.PI;i<Math.PI;i+=increment){
      let x  = (this._size * Math.cos(i));
      let y  = (this._size * Math.sin(i));
      let randomizer = Util.randomNumberBetween(min, max);
      let offsetVector = Vector.directionVectorFromAngle(i);
      let randomizedOffsetVector = offsetVector.multiplyByScalar(randomizer);
      this._verteces.push(new AsteroidVertex(new Vector(x, y), randomizedOffsetVector));
    }
  }

  get size(){ return this._size; }
  get verteces() : Array<Vector>{ return this._verteces.map(vertex => new Vector(vertex.x,vertex.y)); }

}

export default Asteroid;
