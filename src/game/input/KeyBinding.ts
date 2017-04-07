import Key from "./Key";
import SpecialKey from "./SpecialKey";
import KeyCombination from "./KeyCombination";
import KeyEventType from "./KeyEventType";
import InputBinding from "./InputBinding";

class KeyBinding
  implements InputBinding<KeyboardEvent>{

  private _keyCombination : KeyCombination;
  private _callback : Function;
  private _eventType : KeyEventType;

  constructor(_keyCombination : KeyCombination, _callback : Function){
    this._keyCombination = _keyCombination;
    this._callback = _callback;
  }

  public isTriggered(event : KeyboardEvent) : boolean{
    let specialKeys = SpecialKey.fromEvent(event);
    if(this.hasSpecialKeys(specialKeys)){
      let keys = Key.fromEvent(event);
      if(this.hasKeys(keys)){
        return true;
      }
    }
    return false;
  }
  public call(){
    this._callback();
  }

  private hasSpecialKeys(specialKeys : Array<SpecialKey>) : boolean{
    for(let specialKey of specialKeys){
      if(!this._keyCombination.hasSpecialKey(specialKey)){
        return false;
      }
    }
    return true;
  }
  private hasKeys(keys : Array<Key>) : boolean{
    for(let key of keys){
      if(!this._keyCombination.hasKey(key)){
        return false;
      }
    }
    return true;
  }

}

export default KeyBinding;
