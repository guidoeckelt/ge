import Game from "./game/Game";
import Util from "./game/Util";
import Key from "./game/input/Key";
import SpecialKey from "./game/input/SpecialKey";
import KeyBinding from "./game/input/KeyBinding";
import KeyCombination from "./game/input/KeyCombination";
import KeyEventType from "./game/input/KeyEventType";
import MouseBinding from "./game/input/MouseBinding";
import MouseButton from "./game/input/MouseButton";
import MouseEventType from "./game/input/MouseEventType";
import Vector from "./game/metric/Vector";
import Angle from "./game/metric/Angle";
import GameObject from "./game/GameObject";
import Shuttle from "./Shuttle";
import Projectile from "./Projectile";
import Asteroid from "./Asteroid";
import AsteroidsRenderer from "./graphic/AsteroidsRenderer";

class Asteroids
  extends Game {

  private _shuttle : Shuttle;
  private _startShootBinding : MouseBinding;
  private _stopShootBinding : MouseBinding;
  private _startShootBinding2 : KeyBinding;
  private _stopShootBinding2 : KeyBinding;

  constructor(canvasContainerId : string){
    super(canvasContainerId, new AsteroidsRenderer());
  }

  _onInitStart(){
    this._createAndAddInitialObjects();
  }
  private _createAndAddInitialObjects(){
    this._createAndAddShuttle();
    for(let i=1; i<=5; i++){
      this._createAndAddRandomAsteroid();
    }
  }
  private _createAndAddShuttle(){
    var position = new Vector(this._renderer.canvas.width/2,this._renderer.canvas.height/2);
    this._shuttle = new Shuttle(position);
    this.add(this._shuttle);
    this._addBindingsForShuttle();
  }
  private _addBindingsForShuttle(){
    this._startShootBinding = new MouseBinding(MouseButton.LEFT, this._shuttle.startShooting);
    this._mouse.addBinding(MouseEventType.BUTTON_DOWN, this._startShootBinding);
    this._stopShootBinding = new MouseBinding(MouseButton.NONE, this._shuttle.stopShooting);
    this._mouse.addBinding(MouseEventType.BUTTON_UP, this._stopShootBinding);

    this._startShootBinding2 = new KeyBinding(new KeyCombination(Key.Y), this._shuttle.startShooting);
    this._keyBoard.addBinding(KeyEventType.DOWN, this._startShootBinding2);
    this._stopShootBinding2 = new KeyBinding(new KeyCombination(Key.X), this._shuttle.stopShooting);
    this._keyBoard.addBinding(KeyEventType.UP, this._stopShootBinding2);
  }
  private _createAndAddRandomAsteroid(){
    let x = Util.randomNumberBetween(0,this._renderer.canvas.width);
    let y = Util.randomNumberBetween(0,this._renderer.canvas.height);
    let size = Util.randomNumberBetween(40,60);
    let angle = Util.randomNumberBetween(0,360);
    let speed = Util.randomNumberBetween(3,6);
    this.add(new Asteroid(new Vector(x,y), size, new Angle(angle, Angle.DEGREE), speed));
  }

  _gameLoop(){
    let removed = new Array<GameObject>();
    for(let i = this._gameObjects.length-1; i >= 0; i--){
      let gameObject = this._gameObjects[i];
      gameObject.move();
    }
    this._shuttleShoots();
    // console.log('asteroids gameLoop finished');
  }
  private _shuttleShoots(){
    let projectile = this._shuttle.shoot();
    this.add(projectile);
  }

}

export default Asteroids;
