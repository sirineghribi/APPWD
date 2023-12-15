export class Reservation
{
    voyage!: number;
    date:Date=new Date(Date.now());
    etat:boolean=false;
}