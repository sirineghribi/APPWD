export class Voyage {
     id: number | undefined;
     start: Date = new Date();
     end: Date = new Date();
     depart: string = '';
     destination: string = '';
     bus: string = ''; // Add this property
   }