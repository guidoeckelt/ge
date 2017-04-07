import Vector from "./game/metric/Vector";
import Angle from "./game/metric/Angle";
import GameObject from "./game/GameObject";
import { NullGameObject } from "./game/GameObject";
import Projectile from "./Projectile";

class Shuttle
  extends GameObject {

  private _isShooting : boolean;
  private _isReloading : boolean;
  private _reloadTimeInMs : number;

  constructor(position : Vector){
    super(position, 30, 50, new Angle(0, Angle.DEGREE), 8);
    this._isShooting = false;
    this._isReloading = false;
    this._reloadTimeInMs = 500;
    this.startShooting = this.startShooting.bind(this);
    this.stopShooting = this.stopShooting.bind(this);
  }

  public startShooting(){ console.log("is Shooting");this._isShooting = true; }
  public stopShooting(){ console.log("is not Shooting");this._isShooting = false; }
  public shoot() : Projectile{
    if(!this._isShooting){
      return new NullGameObject();
    }
    if(this._isReloading){
      return new NullGameObject();
    }
    let projectile = new Projectile(this._position, 5,5, this._movingDirection);
    this._reloading();
    return projectile;
  }

  private _reloading(){
    this._isReloading = true;
    window.setTimeout((function(){
      this._isReloading = false;
    }).bind(this),this._reloadTimeInMs);
  }

}

export default Shuttle;
