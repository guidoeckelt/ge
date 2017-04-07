
class KeyEventType{
  protected static readonly _UP : string = "UP";
  protected static readonly _DOWN : string = "DOWN";

  private _name : string;

  constructor(_name : string){
    // if(!this._IsNameAvailable(name)) throw Error("BLABLA Key Name nicht da");
    this._name = _name;
  }

  private _IsNameAvailable(name : string) : boolean{
    return  (name != KeyEventType._UP && name != KeyEventType._DOWN);
  }

  public ToString() : string{
    return this._name;
  }
}
class DOWN extends KeyEventType{ constructor(){ super(KeyEventType._UP); } }
class UP extends KeyEventType{ constructor(){ super(KeyEventType._DOWN); } }

class KeyEventTypeStatics{

  public static readonly UP : KeyEventType = new UP();
  public static readonly DOWN : KeyEventType = new DOWN();

}
export { KeyEventType };
export default KeyEventTypeStatics;
