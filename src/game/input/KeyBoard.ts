import KeyEventTypeS from "./KeyEventType";
import { KeyEventType } from "./KeyEventType";
import KeyBinding from "./KeyBinding";
import InputWatcher from "./InputWatcher";

class KeyBoard
  extends InputWatcher<KeyEventType,KeyBinding>{

  constructor(_element : HTMLElement){
    super(_element);
  }

  _watch(){
    // this._element.onkeyup = this._onKeyUp.bind(this);
    // this._element.onkeydown = this._onKeyDown.bind(this);
    this._body.addEventListener("keyup",this._onKeyUp.bind(this));
    this._body.addEventListener("keydown",this._onKeyDown.bind(this));
  }
  private _onKeyUp(event : KeyboardEvent){
    this._checkBindings(KeyEventTypeS.UP, event);
    // console.dir(event);
  }
  private _onKeyDown(event : KeyboardEvent){
    this._checkBindings(KeyEventTypeS.DOWN, event);
    // console.dir(event);
  }

}

export default KeyBoard;
