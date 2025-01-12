class ParkingLot {
    slots=[];
    constructor(parkingSize){
        this.slots=new Array(parkingSize).fill(null);
    }
    park(cardId){
        if(this.slots.every((slot)=>slot!==null)){
            return false;
        }
        for (let i=0; i<=this.slots.length;i++){
            const slot = this.slots[i];
            if (slot===null){
                this.slots[i]=cardId;
                return true;
            }
        }
    }
    getSlots(){
        return this.slots;
    }
    remove(cardId){
        if(this.slots.every((slot)=>slot!==cardId)){
            return false;
        }
        for (let i=0; i<=this.slots.length;i++){
            const slot = this.slots[i];
            if (slot===cardId){
                this.slots[i]=null;
                return true;
            }
        }
    }
}