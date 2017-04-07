import InputBinding from "./InputBinding";
// import HashMap from "../HashTable";

abstract class InputWatcher<EventType extends Object, Binding extends InputBinding<Event>>{

  protected _element : Element;
  protected _body : HTMLElement;
  protected _bindingMap : Object;
  // private _bindingMap : HashMap = new HashMap();

  constructor(_element : HTMLElement){
    this._element = _element;
    this._body = document.getElementsByTagName("body")[0];
    this._bindingMap = {};
    this._watch();
  }

  public addBinding(eventType : EventType, binding : Binding){
    // if(!this._bindingMap.containsKey(eventType)){
    //   this._bindingMap.put(eventType, new Array<KeyBinding>());
    // }
    // this._bindingMap.get(eventType).push(keyBinding);
    if(this._bindingMap[eventType.toString()] == null){
      this._bindingMap[eventType.toString()] = new Array<Binding>();
    }
    this._bindingMap[eventType.toString()].push(binding);
  }
  public removeBinding(eventType : EventType, binding : Binding){
    // let list = this._bindingMap.get(eventType);
    // if(list == null) return;
    // list.splice(list.indexOf(keyBinding),1);
    let list = this._bindingMap[eventType.toString()];
    if(list == null) return;
    list.splice(list.indexOf(binding),1);
  }

  protected abstract _watch() : void;
  protected _checkBindings(eventType : EventType, event : Event){
    // let list = this._bindingMap.get(eventType);
    // if(list == null) return;
    // for(let keyBinding of list){
    //   this._callKeyBindingIfTriggered(keyBinding, event);
    // }
    let bindingList = this._bindingMap[eventType.toString()];
    if(bindingList == null) return;
    for(let binding of bindingList){
      this._callBindingIfTriggered(binding, event);
    }
  }
  private _callBindingIfTriggered(binding : Binding, event : Event){
    if(binding.isTriggered(event)){
      binding.call();
      // console.log("event dispatched");
      event.preventDefault();
    }
  }
}

export default InputWatcher;
