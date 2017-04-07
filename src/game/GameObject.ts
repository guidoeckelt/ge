import Vector from "./metric/Vector";
import Angle from "./metric/Angle";

abstract class GameObject {

  protected _position : Vector;
  protected _width : number;
  protected _height : number;

  protected _isMoving : boolean = false;
  protected _movingDirection : Angle;
  protected _movingSpeed : number;

  constructor(_position : Vector, _width : number, _height : number, _movingDirection : Angle, _movingSpeed : number){
    this._position = _position;
    this._width = _width;
    this._height = _height;
    this._movingDirection = _movingDirection;
    this._movingSpeed = _movingSpeed;
  }

  public move(){
    if(!this._isMoving){
      return;
    }
    let oldPosition = this._position;
    let directionVector = Vector.directionVectorFromAngle(this._movingDirection.radians);
    let amplifiedDirectionVector = directionVector.multiplyByScalar(this._movingSpeed);
    this._position = this.position.substract(amplifiedDirectionVector);
  }

  get position(){ return this._position; }
  get width(){ return this._width; }
  get height(){ return this._height; }
  get direction(){ return this._movingDirection; }

}
class NullGameObject
  extends GameObject{

  constructor(){
    super(new Vector(0,0), 0,0, new Angle(0, Angle.DEGREE),0);
  }

}

export { NullGameObject };
export default GameObject;
