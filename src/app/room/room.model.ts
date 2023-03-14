// model sobe, koji će se koristiti za čuvanje i prikaz podataka o sobama
export class Room {
    roomNumber : number;
    floor: number;
    person: number;
    
    constructor(roomNumber: number, floor: number, person: number) {
        this.roomNumber = roomNumber;
        this.floor = floor;
        this.person = person;
    }
}