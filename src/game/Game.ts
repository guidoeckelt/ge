import Mouse from "./input/Mouse";
import KeyBoard from "./input/KeyBoard";
import Renderer from "./render/Renderer";
// import Vector from "./metric/Vector";
import GameObject from "./GameObject";
import { NullGameObject } from "./GameObject";

abstract class Game {

  protected _canvasContainer : HTMLElement;
  protected _keyBoard : KeyBoard;
  protected _mouse : Mouse;
  protected _renderer : Renderer;
  protected _gameObjects : Array<GameObject>;

  private _process : number;

  constructor(_canvasContainerP : string | HTMLElement, renderer : Renderer){
    this._canvasContainer = this._interpreteCanvasContainerP(_canvasContainerP);
    this._keyBoard = new KeyBoard(this.canvasContainer);
    this._mouse = new Mouse(this.canvasContainer);
    this._renderer = renderer;
    this._gameObjects = new Array<GameObject>();
  }
  private _interpreteCanvasContainerP(canvasContainerP : string | HTMLElement) : HTMLElement{
    let temp = null;
    if(canvasContainerP instanceof String || typeof canvasContainerP === 'string'){
      temp = document.getElementById(canvasContainerP);
    }else if(canvasContainerP instanceof HTMLElement){
      temp = canvasContainerP;
    }else{
      temp = document.body;
    }
    return temp;
  }

  public start(){
    this._onInitStart();
    this._process = window.setInterval(this._gameLoop.bind(this), 20);
    this._renderer.start(this);
  }
  public stop(){
    window.clearInterval(this._process);
    this._renderer.stop();
  }

  public add(gameObject : GameObject){
    if(gameObject instanceof NullGameObject) return;
    this._gameObjects.push(gameObject);
  }
  public remove(gameObject : GameObject){
    let list = this._gameObjects;
    list.splice(list.indexOf(gameObject),1);
  }

  protected abstract _gameLoop() : void;
  protected abstract _onInitStart() : void;

  get gameObjects(){ return this._gameObjects; };
  get mouse(){ return this._mouse; };
  get canvasContainer(){ return this._canvasContainer; };

}

export default Game;
