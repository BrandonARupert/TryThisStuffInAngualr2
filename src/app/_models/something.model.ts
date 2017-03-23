export class Something{
    constructor(  private id: number, public checked : boolean  , public weekday : string   ){}
    equals( other : Something) : boolean { 
        return ( other == null ? false : ( this.id===other.id ) && ( this.checked===other.checked   ) &&(this.weekday == other.weekday) ) ; 
    }
    changeCheck() : void {
        this.checked = ( ! this.checked ) ; 
    }
    getId() : number {
        return this.id ; 
    }
    
    
    
}

