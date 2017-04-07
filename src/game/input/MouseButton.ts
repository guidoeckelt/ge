
class MouseButton{
  protected static readonly _LEFT : string = "LEFT";
  protected static readonly _RIGHT : string = "RIGHT";
  protected static readonly _MIDDLE : string = "MIDDLE";
  protected static readonly _NONE : string = "NONE";

  private _name : string;

  constructor(_name : string){
    // if(!this._IsNameAvailable(name)) throw Error("BLABLA Key Name nicht da");
    this._name = _name;
  }

  private _IsNameAvailable(name : string) : boolean{
    return  (name != MouseButton._LEFT
          && name != MouseButton._RIGHT
          && name != MouseButton._MIDDLE
          && name != MouseButton._NONE);
  }

  public ToString() : string{
    return this._name;
  }
}
class LEFT extends MouseButton{ constructor(){ super(MouseButton._LEFT); } }
class RIGHT extends MouseButton{ constructor(){ super(MouseButton._RIGHT); } }
class MIDDLE extends MouseButton{ constructor(){ super(MouseButton._MIDDLE); } }
class NONE extends MouseButton{ constructor(){ super(MouseButton._NONE); } }

class MouseButtonStatics{

  public static readonly LEFT : MouseButton = new LEFT();
  public static readonly RIGHT : MouseButton = new RIGHT();
  public static readonly MIDDLE : MouseButton = new MIDDLE();
  public static readonly NONE : MouseButton = new NONE();

  public static fromEvent(event : MouseEvent) : Array<MouseButton>{
    let mouseButtons = new Array<MouseButton>();
    let buttons = event.buttons;
    switch(buttons){
      case 1: mouseButtons.push(MouseButtonStatics.LEFT); break;//left click
      case 2: mouseButtons.push(MouseButtonStatics.RIGHT);break;//right click
      case 3: mouseButtons.push(MouseButtonStatics.LEFT);mouseButtons.push(MouseButtonStatics.RIGHT);break;//left+right click
      case 4: mouseButtons.push(MouseButtonStatics.MIDDLE); break;//middle click
      case 5: mouseButtons.push(MouseButtonStatics.LEFT);mouseButtons.push(MouseButtonStatics.MIDDLE); break;//left+middle click
      case 6: mouseButtons.push(MouseButtonStatics.RIGHT);mouseButtons.push(MouseButtonStatics.MIDDLE);break;//right+middle click
      case 7: mouseButtons.push(MouseButtonStatics.LEFT);mouseButtons.push(MouseButtonStatics.RIGHT);mouseButtons.push(MouseButtonStatics.MIDDLE);break;//left+middle+right click
      default: mouseButtons.push(MouseButtonStatics.NONE); //console.log("button:"+buttons);//none
    }
    return mouseButtons;
  }
}
export { MouseButton };
export default MouseButtonStatics;
