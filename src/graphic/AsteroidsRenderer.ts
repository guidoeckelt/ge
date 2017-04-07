import Renderer from "../game/render/Renderer";
import Game from "./../game/Game";
import GameObject from "./../game/GameObject";
import Vector from "./../game/metric/Vector";
import Shuttle from "./../Shuttle";
import Projectile from "./../Projectile";
import Asteroid from "./../Asteroid";

class AsteroidsRenderer
  extends Renderer{

  constructor(){
    super();
    console.log("fdd");
  }

  protected _drawGameObject(gameObject : GameObject){
    if(gameObject instanceof Shuttle){
      this._drawShuttle(gameObject);
    }else if(gameObject instanceof Projectile){
      this._drawProjectile(gameObject);
    }else if(gameObject instanceof Asteroid){
      this._drawAsteroid(gameObject);
    }
  }

    private _drawShuttle(shuttle : Shuttle){
      var offsetX = - (shuttle.width/2);
      var offsetY = - (shuttle.height/2);

      this._context.translate(shuttle.position.x,shuttle.position.y);
      this._context.rotate(shuttle.direction.radians - Math.PI/2);
      this._context.translate(offsetX,offsetY);
      //Hitbox
      this._drawCircle(new Vector(-offsetX, -offsetY),shuttle.width, null,'#fff',1);
      //Shuttle
      this._drawTriangle(new Vector(0, 0),shuttle.width,shuttle.height, null,'#fff',2);
    //   //ShuttleGun
    //   this._context.translate(shuttle.gun.position.x,shuttle.gun.position.y);
    //   this._drawCircle(0,0,4, '#000','#fff',1);
    //
    //   // if(shuttle.gun.direction>0){
    //   //   this._context.translate(0-(shuttle.gun.width/2),0);
    //   // }else{
    //   //   this._context.translate(0+(shuttle.gun.width/2),0);
    //   // }
    //   this._context.rotate(-(shuttle.direction));
    //   this._context.translate(0,0);
    //   this._context.rotate(shuttle.gun.direction+Math.PI);
    //   this._context.fillStyle = '#fff';
    //   this._context.fillRect(0,0,shuttle.gun.width,shuttle.gun.height);
    //   this._context.strokeStyle = '#fff';
    //   this._context.strokeRect(0,0,shuttle.gun.width,shuttle.gun.height);
    }
    private _drawAsteroid(asteroid : Asteroid){
      this._context.translate(asteroid.position.x, asteroid.position.y);
      //Hitbox
      this._drawCircle(new Vector(0, 0),asteroid.size, null,'#fff',1);
      //Asteroid
      this._drawPolygon(asteroid.verteces, '#000','#fff',2);
      // HP
      // let textX = -(asteroid.width/2);
      // let textY = -(asteroid.height/2);
      // this._drawText(asteroid.hp, new Vector(0, 0), asteroid.width, asteroid.height);
    }
    private _drawProjectile(projectile : Projectile){
      // context.rotate(projectile.direction);
      this._context.fillStyle = '#fff';
      this._context.fillRect(projectile.position.x,projectile.position.y,projectile.width,projectile.height);
      this._context.strokeStyle = null;
      this._context.strokeRect(projectile.position.x,projectile.position.y,projectile.width,projectile.height);
    }

}

export default AsteroidsRenderer;
