export class Reservation {
    room : number;
    nights: number;
    amount: number;
    id: number;

    constructor(room: number, nights: number, amount: number, id?: number) {
        this.room = room;
        this.nights = nights;
        this.amount = amount;
        if(id) this.id = id;
    }
}