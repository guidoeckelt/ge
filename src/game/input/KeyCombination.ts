import Key from "./Key";
import SpecialKey from "./SpecialKey";

class KeyCombination{

  private _key : Key;
  private _specialKeys : Array<SpecialKey>;

  constructor(_key : Key = Key.NONE, _specialKeyP : SpecialKey | Array<SpecialKey> = SpecialKey.NONE){
    this._key = _key;
    this.specialKeys = _specialKeyP instanceof Array ?  _specialKeyP : new Array(_specialKeyP);
  }

  set specialKeys(value : Array<SpecialKey>){
    if(value instanceof SpecialKey){
      this._specialKeys = new Array(value);
    }else{
      this._specialKeys = value;
    }
  }
  get key() : Key{ return this._key; }
  get specialKeys() : Array<SpecialKey>{ return this._specialKeys; }

  public hasSpecialKey(specialKey : SpecialKey) : boolean{
    return this._specialKeys.includes(specialKey);
  }
  public hasKey(key : Key) : boolean{
    return this._key === key;
  }
}

export default KeyCombination;
