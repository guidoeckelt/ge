
class MouseEventType{
  protected static readonly _BUTTON_UP : string = "BUTTON_UP";
  protected static readonly _BUTTON_DOWN : string = "BUTTON_DOWN";
  protected static readonly _LEFT_BUTTON_UP : string = "LEFT_BUTTON_UP";
  protected static readonly _LEFT_BUTTON_DOWN : string = "LEFT_BUTTON_DOWN";
  protected static readonly _RIGHT_BUTTON_UP : string = "RIGHT_BUTTON_UP";
  protected static readonly _RIGHT_BUTTON_DOWN : string = "RIGHT_BUTTON_DOWN";
  protected static readonly _MOVED : string = "MOVED";

  private _name : string;

  constructor(_name : string){
    // if(!this._IsNameAvailable(name)) throw Error("BLABLA Key Name nicht da");
    this._name = _name;
  }

  private _IsNameAvailable(name : string) : boolean{
    return  (name != MouseEventType._LEFT_BUTTON_UP
          && name != MouseEventType._LEFT_BUTTON_DOWN
          && name != MouseEventType._RIGHT_BUTTON_UP
          && name != MouseEventType._RIGHT_BUTTON_DOWN
          && name != MouseEventType._MOVED);
  }
  toString() : string{
    return this._name;
  }
}
class BUTTON_UP extends MouseEventType{ constructor(){ super(MouseEventType._BUTTON_UP); } }
class BUTTON_DOWN extends MouseEventType{ constructor(){ super(MouseEventType._BUTTON_DOWN); } }
class LEFT_BUTTON_UP extends MouseEventType{ constructor(){ super(MouseEventType._LEFT_BUTTON_UP); } }
class LEFT_BUTTON_DOWN extends MouseEventType{ constructor(){ super(MouseEventType._LEFT_BUTTON_DOWN); } }
class RIGHT_BUTTON_UP extends MouseEventType{ constructor(){ super(MouseEventType._RIGHT_BUTTON_UP); } }
class RIGHT_BUTTON_DOWN extends MouseEventType{ constructor(){ super(MouseEventType._RIGHT_BUTTON_DOWN); } }
class MOVED extends MouseEventType{ constructor(){ super(MouseEventType._MOVED); } }

class MouseEventTypeStatics{

  public static readonly BUTTON_UP : MouseEventType = new BUTTON_UP();
  public static readonly BUTTON_DOWN : MouseEventType = new BUTTON_DOWN();
  public static readonly LEFT_BUTTON_UP : MouseEventType = new LEFT_BUTTON_UP();
  public static readonly LEFT_BUTTON_DOWN : MouseEventType = new LEFT_BUTTON_DOWN();
  public static readonly RIGHT_BUTTON_UP : MouseEventType = new RIGHT_BUTTON_UP();
  public static readonly RIGHT_BUTTON_DOWN : MouseEventType = new RIGHT_BUTTON_DOWN();
  public static readonly MOVED : MouseEventType = new MOVED();

}
export { MouseEventType };
export default MouseEventTypeStatics;
