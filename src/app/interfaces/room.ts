// model sobe, koji će se koristiti za čuvanje i prikaz podataka o sobama
export interface Room {
    roomNumber : number;
    floor: number;
    person: number;
    id: number;
    
    // constructor(roomNumber: number, floor: number, person: number, id?: number) {
    //     this.roomNumber = roomNumber;
    //     this.floor = floor;
    //     this.person = person;
    //     if(id) this.id = id;
    // }
}