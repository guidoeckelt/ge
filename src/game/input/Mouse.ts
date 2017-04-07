import Vector from "./../metric/Vector";
import MouseEventTypeS from "./MouseEventType";
import { MouseEventType } from "./MouseEventType";
import MouseBinding from "./MouseBinding";
import InputWatcher from "./InputWatcher";

class Mouse
  extends InputWatcher<MouseEventType,MouseBinding>{

  private _position : Vector;

  constructor(_element : HTMLElement){
    super(_element)
    this._position = new Vector(-1,-1);
  }

  _watch(){
    // this._element.onkeyup = this._onKeyUp.bind(this);
    // this._element.onkeydown = this._onKeyDown.bind(this);
    this._body.addEventListener("mousemove",this._onMouseMove.bind(this));
    this._body.addEventListener("mouseup",this._onMouseDown.bind(this));
    this._body.addEventListener("mousedown",this._onMouseDown.bind(this));
    this._element.addEventListener("contextmenu",this._onContextMenu.bind(this));
  }
  private _onMouseMove(event : MouseEvent){
    let position = new Vector(event.clientX, event.clientY);
    this._position = position;
    this._checkBindings(MouseEventTypeS.MOVED, event);
    // console.dir(event);
  }
  private _onMouseUp(event : MouseEvent){
    this._checkBindings(MouseEventTypeS.BUTTON_UP, event);
    // console.dir(event);
  }
  private _onMouseDown(event : MouseEvent){
    this._checkBindings(MouseEventTypeS.BUTTON_DOWN, event);
    // console.dir(event);
  }
  private _onContextMenu(event : MouseEvent){
    event.preventDefault();
  }

  public get position() : Vector{
    let canvasOffset = new Vector(
      this._element.getBoundingClientRect().left,
      this._element.getBoundingClientRect().top);
    return this._position.add(canvasOffset);
  }
}
export default Mouse;
