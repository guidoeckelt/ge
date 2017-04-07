// import A from "./keys/A";
// import B from "./keys/B";
// import ARROW_UP from "./keys/ARROW_UP";

class Key{

  protected static readonly _A : string = "A";
  protected static readonly _B : string = "B";
  protected static readonly _C : string = "C";
  protected static readonly _D : string = "D";
  protected static readonly _E : string = "E";
  protected static readonly _F : string = "F";
  protected static readonly _G : string = "G";
  protected static readonly _H : string = "H";
  protected static readonly _I : string = "I";
  protected static readonly _J : string = "J";
  protected static readonly _K : string = "K";
  protected static readonly _L : string = "L";
  protected static readonly _M : string = "M";
  protected static readonly _N : string = "N";
  protected static readonly _O : string = "O";
  protected static readonly _P : string = "P";
  protected static readonly _Q : string = "Q";
  protected static readonly _R : string = "R";
  protected static readonly _S : string = "S";
  protected static readonly _T : string = "T";
  protected static readonly _U : string = "U";
  protected static readonly _V : string = "V";
  protected static readonly _W : string = "W";
  protected static readonly _X : string = "X";
  protected static readonly _Y : string = "Y";
  protected static readonly _Z : string = "Z";
  protected static readonly _ARROW_UP : string = "ARROW_UP";
  protected static readonly _ARROW_DOWN : string = "ARROW_DOWN";
  protected static readonly _ARROW_LEFT : string = "ARROW_LEFT";
  protected static readonly _ARROW_RIGHT : string = "ARROW_RIGHT";
  protected static readonly _NONE : string = "NONE";

  private _name : string;

  constructor(_name : string){
    // if(!this._IsNameAvailable(name)) throw Error("BLABLA Key Name nicht da");
    this._name = _name;
  }

  private _IsNameAvailable(name : string) : boolean{
    return  (name != Key._W && name != Key._A
          && name != Key._S && name != Key._D
          && name != Key._ARROW_UP && name != Key._ARROW_DOWN
          && name != Key._ARROW_LEFT && name != Key._ARROW_RIGHT);
  }

}
class A extends Key{ constructor(){ super(Key._A); } }
class B extends Key{ constructor(){ super(Key._B); } }
class C extends Key{ constructor(){ super(Key._C); } }
class D extends Key{ constructor(){ super(Key._D); } }
class E extends Key{ constructor(){ super(Key._E); } }
class F extends Key{ constructor(){ super(Key._F); } }
class G extends Key{ constructor(){ super(Key._G); } }
class H extends Key{ constructor(){ super(Key._H); } }
class I extends Key{ constructor(){ super(Key._I); } }
class J extends Key{ constructor(){ super(Key._J); } }
class K extends Key{ constructor(){ super(Key._K); } }
class L extends Key{ constructor(){ super(Key._L); } }
class M extends Key{ constructor(){ super(Key._M); } }
class N extends Key{ constructor(){ super(Key._N); } }
class O extends Key{ constructor(){ super(Key._O); } }
class P extends Key{ constructor(){ super(Key._P); } }
class Q extends Key{ constructor(){ super(Key._Q); } }
class R extends Key{ constructor(){ super(Key._R); } }
class S extends Key{ constructor(){ super(Key._S); } }
class T extends Key{ constructor(){ super(Key._T); } }
class U extends Key{ constructor(){ super(Key._U); } }
class V extends Key{ constructor(){ super(Key._V); } }
class W extends Key{ constructor(){ super(Key._W); } }
class X extends Key{ constructor(){ super(Key._X); } }
class Y extends Key{ constructor(){ super(Key._Y); } }
class Z extends Key{ constructor(){ super(Key._Z); } }
class ARROW_UP extends Key{ constructor(){ super(Key._ARROW_UP); } }
class ARROW_DOWN extends Key{ constructor(){ super(Key._ARROW_DOWN); } }
class ARROW_LEFT extends Key{ constructor(){ super(Key._ARROW_LEFT); } }
class ARROW_RIGHT extends Key{ constructor(){ super(Key._ARROW_RIGHT); } }
class NONE extends Key{ constructor(){ super(Key._NONE); } }

class KeyStatics{

  public static readonly A : Key = new A();
  public static readonly B : Key = new B();
  public static readonly C : Key = new C();
  public static readonly D : Key = new D();
  public static readonly E : Key = new E();
  public static readonly F : Key = new F();
  public static readonly G : Key = new G();
  public static readonly H : Key = new H();
  public static readonly I : Key = new I();
  public static readonly J : Key = new J();
  public static readonly K : Key = new K();
  public static readonly L : Key = new L();
  public static readonly M : Key = new M();
  public static readonly N : Key = new N();
  public static readonly O : Key = new O();
  public static readonly P : Key = new P();
  public static readonly Q : Key = new Q();
  public static readonly R : Key = new R();
  public static readonly S : Key = new S();
  public static readonly T : Key = new T();
  public static readonly U : Key = new U();
  public static readonly V : Key = new V();
  public static readonly W : Key = new W();
  public static readonly X : Key = new X();
  public static readonly Y : Key = new Y();
  public static readonly Z : Key = new Z();
  public static readonly ARROW_UP : Key = new ARROW_UP();
  public static readonly ARROW_DOWN : Key = new ARROW_DOWN();
  public static readonly ARROW_LEFT : Key = new ARROW_LEFT();
  public static readonly ARROW_RIGHT : Key = new ARROW_RIGHT();
  public static readonly NONE : Key = new NONE();

  public static fromEvent(event : KeyboardEvent) : Array<Key>{
    let keys = new Array<Key>();
    if(this._isNone(event)){
      keys.push(KeyStatics.NONE);
      return keys;
    }
    if(this._isADown(event)){
      keys.push(KeyStatics.A);
    }
    if(this._isBDown(event)){
      keys.push(KeyStatics.B);
    }
    if(this._isCDown(event)){
      keys.push(KeyStatics.C);
    }
    if(this._isDDown(event)){
      keys.push(KeyStatics.D);
    }
    if(this._isEDown(event)){
      keys.push(KeyStatics.E);
    }
    if(this._isFDown(event)){
      keys.push(KeyStatics.F);
    }
    if(this._isGDown(event)){
      keys.push(KeyStatics.G);
    }
    if(this._isHDown(event)){
      keys.push(KeyStatics.H);
    }
    if(this._isIDown(event)){
      keys.push(KeyStatics.I);
    }
    if(this._isJDown(event)){
      keys.push(KeyStatics.J);
    }
    if(this._isKDown(event)){
      keys.push(KeyStatics.K);
    }
    if(this._isLDown(event)){
      keys.push(KeyStatics.L);
    }
    if(this._isMDown(event)){
      keys.push(KeyStatics.M);
    }
    if(this._isNDown(event)){
      keys.push(KeyStatics.N);
    }
    if(this._isODown(event)){
      keys.push(KeyStatics.O);
    }
    if(this._isPDown(event)){
      keys.push(KeyStatics.P);
    }
    if(this._isQDown(event)){
      keys.push(KeyStatics.Q);
    }
    if(this._isRDown(event)){
      keys.push(KeyStatics.R);
    }
    if(this._isSDown(event)){
      keys.push(KeyStatics.S);
    }
    if(this._isTDown(event)){
      keys.push(KeyStatics.T);
    }
    if(this._isUDown(event)){
      keys.push(KeyStatics.U);
    }
    if(this._isVDown(event)){
      keys.push(KeyStatics.V);
    }
    if(this._isWDown(event)){
      keys.push(KeyStatics.W);
    }
    if(this._isXDown(event)){
      keys.push(KeyStatics.X);
    }
    if(this._isYDown(event)){
      keys.push(KeyStatics.Y);
    }
    if(this._isZDown(event)){
      keys.push(KeyStatics.Z);
    }
    if(this._isArrowUpDown(event)){
      keys.push(KeyStatics.ARROW_UP);
    }
    if(this._isArrowDownDown(event)){
      keys.push(KeyStatics.ARROW_DOWN);
    }
    if(this._isArrowLeftDown(event)){
      keys.push(KeyStatics.ARROW_LEFT);
    }
    if(this._isArrowRightDown(event)){
      keys.push(KeyStatics.ARROW_RIGHT);
    }
    return keys;
  }

  private static _isADown(event : KeyboardEvent) : boolean{
    return event.which === 65;
  }
  private static _isBDown(event : KeyboardEvent) : boolean{
    return event.which === 66;
  }
  private static _isCDown(event : KeyboardEvent) : boolean{
    return event.which === 67;
  }
  private static _isDDown(event : KeyboardEvent) : boolean{
    return event.which === 68;
  }
  private static _isEDown(event : KeyboardEvent) : boolean{
    return event.which === 69;
  }
  private static _isFDown(event : KeyboardEvent) : boolean{
    return event.which === 70;
  }
  private static _isGDown(event : KeyboardEvent) : boolean{
    return event.which === 71;
  }
  private static _isHDown(event : KeyboardEvent) : boolean{
    return event.which === 72;
  }
  private static _isIDown(event : KeyboardEvent) : boolean{
    return event.which === 73;
  }
  private static _isJDown(event : KeyboardEvent) : boolean{
    return event.which === 74;
  }
  private static _isKDown(event : KeyboardEvent) : boolean{
    return event.which === 75;
  }
  private static _isLDown(event : KeyboardEvent) : boolean{
    return event.which === 76;
  }
  private static _isMDown(event : KeyboardEvent) : boolean{
    return event.which === 77;
  }
  private static _isNDown(event : KeyboardEvent) : boolean{
    return event.which === 78;
  }
  private static _isODown(event : KeyboardEvent) : boolean{
    return event.which === 79;
  }
  private static _isPDown(event : KeyboardEvent) : boolean{
    return event.which === 80;
  }
  private static _isQDown(event : KeyboardEvent) : boolean{
    return event.which === 81;
  }
  private static _isRDown(event : KeyboardEvent) : boolean{
    return event.which === 82;
  }
  private static _isSDown(event : KeyboardEvent) : boolean{
    return event.which === 83;
  }
  private static _isTDown(event : KeyboardEvent) : boolean{
    return event.which === 84;
  }
  private static _isUDown(event : KeyboardEvent) : boolean{
    return event.which === 85;
  }
  private static _isVDown(event : KeyboardEvent) : boolean{
    return event.which === 86;
  }
  private static _isWDown(event : KeyboardEvent) : boolean{
    return event.keyCode === 87;
  }
  private static _isXDown(event : KeyboardEvent) : boolean{
    return event.which === 88;
  }
  private static _isYDown(event : KeyboardEvent) : boolean{
    return event.which === 89;
  }
  private static _isZDown(event : KeyboardEvent) : boolean{
    return event.which === 90;
  }
  private static _isArrowUpDown(event : KeyboardEvent) : boolean{
    return event.which === 38;
  }
  private static _isArrowDownDown(event : KeyboardEvent) : boolean{
    return event.which === 40;
  }
  private static _isArrowLeftDown(event : KeyboardEvent) : boolean{
    return event.which === 37;
  }
  private static _isArrowRightDown(event : KeyboardEvent) : boolean{
    return event.which === 39;
  }
  private static _isNone(event : KeyboardEvent) : boolean{
    return (
      !this._isADown(event)
      && !this._isBDown(event)
      && !this._isCDown(event)
      && !this._isDDown(event)
      && !this._isEDown(event)
      && !this._isFDown(event)
      && !this._isGDown(event)
      && !this._isHDown(event)
      && !this._isIDown(event)
      && !this._isJDown(event)
      && !this._isKDown(event)
      && !this._isLDown(event)
      && !this._isMDown(event)
      && !this._isNDown(event)
      && !this._isODown(event)
      && !this._isPDown(event)
      && !this._isQDown(event)
      && !this._isRDown(event)
      && !this._isSDown(event)
      && !this._isTDown(event)
      && !this._isUDown(event)
      && !this._isVDown(event)
      && !this._isWDown(event)
      && !this._isXDown(event)
      && !this._isYDown(event)
      && !this._isZDown(event)
      && !this._isArrowUpDown(event)
      && !this._isArrowDownDown(event)
      && !this._isArrowLeftDown(event)
      && !this._isArrowRightDown(event)
    );
  }
}
export { Key }
export default KeyStatics;
