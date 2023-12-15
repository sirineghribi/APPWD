import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../Entity/Bus';
import { BusService } from '../Service/bus.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-back-bus',
  templateUrl: './back-bus.component.html',
  styleUrls: ['./back-bus.component.css']
})
export class BackBusComponent {

  list: Bus[] = [];

  constructor(private busService: BusService, private router: Router) {}

  ngOnInit() {
    this.busService.getListBus().subscribe(buses => {
      this.list = buses;
    });
  }

  ouvrirFormulaireModif(bus: Bus) {
    this.router.navigate(['back/modif-bus', bus.id]);
  }

  supprimer(bus: Bus) {
    if (bus && bus.id !== undefined) {
      this.busService.deleteBus(bus.id).subscribe({
        next: () => {
          this.busService.getListBus().subscribe(buses => {
            this.list = buses;
          });
        },
        error: (error) => {
          console.error("Error deleting bus:", error);
          this.busService.getListBus().subscribe(buses => {
            this.list = buses;
          });
        }
      });
    }
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    const url: string = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.xlsx`;
    link.click();
  }

  genererExcel() {
    this.busService.getListBus().subscribe((buses: Bus[]) => {
      const dataWithAdditionalInfo = buses.map(bus => {
        return {
          idBus: bus.id,
          marque: bus.marque,
          matricule: bus.matricule
        };
      });

      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataWithAdditionalInfo);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      
      this.saveAsExcelFile(excelBuffer, 'list_of_buses');
    });
  }

}
