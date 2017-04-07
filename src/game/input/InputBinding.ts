
interface InputBinding<EventType extends Event>{

  isTriggered(event : EventType) : boolean;
  call() : void;

}

export default InputBinding;
