import MouseButton from "./MouseButton";
import InputBinding from "./InputBinding";

class MouseBinding
  implements InputBinding<MouseEvent>{

  private _mouseButton : MouseButton;
  private _callback : Function;

  constructor(_mouseButton : MouseButton, _callback : Function){
    this._mouseButton = _mouseButton;
    this._callback = _callback;
  }

  public isTriggered(event : MouseEvent) : boolean{
    let mouseButtons = MouseButton.fromEvent(event);
    // console.dir(mouseButtons);
    return this.hasMouseButton(mouseButtons);
    // if(this.hasMouseButton(mouseButtons)){
    //   return true;
    // }
    // return false;
  }
  public call(){
    this._callback();
  }
  private hasMouseButton(mouseButtons : Array<MouseButton>) : boolean{
    return mouseButtons.indexOf(this._mouseButton)!=-1;
  }
}

export default MouseBinding;
