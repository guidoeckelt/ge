/*import CONTROL from "./specialkeys/Control";
import WINDOWS from "./specialkeys/Windows";
import ALT from "./specialkeys/Alt";
import ALT_GR from "./specialkeys/AltGr";
import SHIFT from "./specialkeys/Shift";
import CAPS from "./specialkeys/Caps";*/

class SpecialKey{
  protected static readonly _CONTROL : string = "CTRL";
  protected static readonly _WINDOWS : string = "WINDOWS";
  protected static readonly _ALT : string = "ALT";
  protected static readonly _ALT_GR : string = "ALT_GR";
  protected static readonly _SHIFT : string = "SHIFT";
  protected static readonly _CAPS : string = "CAPS";
  protected static readonly _NONE : string = "NONE";

  private _name : string;

  constructor(_name : string){
    if(!this._IsNameAvailable(name)) throw Error("BLABLA SpecialKey Name nicht da");
    this._name = _name;
  }
  private _IsNameAvailable(name : string) : boolean{
    return  (name != SpecialKey._CONTROL && name != SpecialKey._WINDOWS
          && name != SpecialKey._ALT && name != SpecialKey._ALT_GR
          && name != SpecialKey._SHIFT && name != SpecialKey._CAPS)
  }

}
class CONTROL extends SpecialKey{ constructor(){ super(SpecialKey._CONTROL); } }
class WINDOWS extends SpecialKey{ constructor(){ super(SpecialKey._WINDOWS); } }
class ALT extends SpecialKey{ constructor(){ super(SpecialKey._ALT); } }
class ALT_GR extends SpecialKey{ constructor(){ super(SpecialKey._ALT_GR); } }
class SHIFT extends SpecialKey{ constructor(){ super(SpecialKey._SHIFT); } }
class CAPS extends SpecialKey{ constructor(){ super(SpecialKey._CAPS); } }
class NONE extends SpecialKey{ constructor(){ super(SpecialKey._NONE); } }

class SpecialKeyStatics{
  public static readonly CONTROL : SpecialKey = new CONTROL();
  public static readonly WINDOWS : SpecialKey = new WINDOWS();
  public static readonly ALT : SpecialKey = new ALT();
  public static readonly ALT_GR : SpecialKey = new ALT_GR();
  public static readonly SHIFT : SpecialKey = new SHIFT();
  public static readonly CAPS : SpecialKey = new CAPS();
  public static readonly NONE : SpecialKey = new NONE();

  public static fromEvent(event : KeyboardEvent) : Array<SpecialKey>{
    let specialKeys = new Array<SpecialKey>();
    if(this._isNone(event)){
      specialKeys.push(SpecialKeyStatics.NONE);
      return specialKeys;
    }
    if(this._isControlDown(event)){
      specialKeys.push(SpecialKeyStatics.CONTROL);
    }
    if(this._isWindowsDown(event)){
      specialKeys.push(SpecialKeyStatics.WINDOWS);
    }
    if(this._isShiftDown(event)){
      specialKeys.push(SpecialKeyStatics.SHIFT);
    }
    if(this._isCapsDown(event)){
      specialKeys.push(SpecialKeyStatics.CAPS);
    }
    if(this._isAltDown(event)){
      specialKeys.push(SpecialKeyStatics.ALT);
    }
    if(this._isAltGrDown(event)){
      specialKeys.push(SpecialKeyStatics.ALT_GR);
    }
    return specialKeys;
  }
  private static _isControlDown(event : KeyboardEvent) : boolean{
    return event.ctrlKey;
  }
  private static _isWindowsDown(event : KeyboardEvent) : boolean{
    return event.metaKey;
  }
  private static _isShiftDown(event : KeyboardEvent) : boolean{
    return event.shiftKey;
  }
  private static _isCapsDown(event : KeyboardEvent) : boolean{
    return event.keyCode === 20;
  }
  private static _isAltDown(event : KeyboardEvent) : boolean{
    return event.altKey;
  }
  private static _isAltGrDown(event : KeyboardEvent) : boolean{
    return this._isAltDown(event) && this._isControlDown(event);
  }
  private static _isNone(event : KeyboardEvent) : boolean{
    return (
      !this._isControlDown(event)
      && !this._isWindowsDown(event)
      && !this._isShiftDown(event)
      && !this._isCapsDown(event)
      && !this._isAltDown(event)
      && !this._isAltGrDown(event)
    );
  }
}

export { SpecialKey }
export default SpecialKeyStatics;
