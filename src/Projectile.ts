import Vector from "./game/metric/Vector";
import Angle from "./game/metric/Angle";
import GameObject from "./game/GameObject";

class Projectile
  extends GameObject {


    constructor(position : Vector, width : number, height : number, angle : Angle){
      super(position, width, height, angle, 1);
      this._isMoving = true;
    }

}

export default Projectile;
