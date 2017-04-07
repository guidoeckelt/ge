
class Vector{

  private _x : number;
  private _y : number;
  private _z : number;

  constructor(_x : number, _y : number, _z : number = 0){
    this._x = _x;
    this._y = _y;
    this._z = _z;
  }

  public length() : number{
    return Math.sqrt(Math.pow(this._x,2)+Math.pow(this._y,2)+Math.pow(this._z,2));
  }
  public normalize() : Vector{
    var length = this.length();
    return new Vector(this._x/length, this._y/length, this._z/length);
  }
// Operator Functions
  public add(other : Vector) : Vector{
    if (!(other instanceof Vector)) {
        // TODO ExceptionContext
        // ExceptionContext.throw(new Exception("Object is not a Vector"));
        return;
    }
    return new Vector(this._x+other.x, this._y+other.y, this._z+other.z);
  }
  public substract(other : Vector) : Vector{
    if (!(other instanceof Vector)) {
        // TODO ExceptionContext
        // ExceptionContext.throw(new Exception("Object is not a Vector"));
        return;
    }
    return new Vector(this._x-other.x, this._y-other.y, this._z-other.z);
  }
  public multiplyByScalar(scalar : number) : Vector{
    // if (!(scalar instanceof Number)) {
    //     // TODO ExceptionContext
    //     // ExceptionContext.throw(new Exception("Object is not a Vector"));
    //     return;
    // }
    return new Vector(this._x*scalar, this._y*scalar, this._z*scalar);
  }
  public dot(vector2 : Vector) : Vector {
    return new Vector(0,0);
  }

  // Angle Functions
  //TODO z-component for 3D
  static radiansBetweenVectors(vector1 : Vector, vector2 : Vector){
    return (Math.atan2(vector1.y,vector1.x) - Math.atan2(vector2.y,vector2.x));
  }
  static directionVectorFromAngle(angle : number){
    return new Vector(Math.cos(angle),Math.sin(angle));
  }
  static angleFromDirectionVector(headingDirection : Vector){
    return Math.atan2(headingDirection.y,headingDirection.x);
  }


  get x (){ return this._x; }
  get y (){ return this._y; }
  get z (){ return this._z; }

}

export default Vector;
