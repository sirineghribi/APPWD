import { Component } from '@angular/core';
import { StationService } from '../Service/station.service';
import { Station } from '../Entity/Station';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-station',
  templateUrl: './back-station.component.html',
  styleUrls: ['./back-station.component.css']
})
export class BackStationComponent {
  list: Station[] = [];

  constructor(private stationService: StationService,private router:Router) {}

  ngOnInit() {
    this.stationService.getAllStations().subscribe(stations => {
      this.list = stations;
    });
  }

  ouvrirFormulaireModif(station:Station) {
    this.router.navigate(['back/modif-station', station.idstation]);
  }

  supprimer(station: Station) {
    if (station && station.idstation !== undefined) {
      this.stationService.deleteStation(station.idstation).subscribe({
        next: () => {
          this.stationService.getAllStations().subscribe(stations => {
            this.list = stations;
          });
        },
        error: (error) => {
          console.error("Error deleting station:", error);
          this.stationService.getAllStations().subscribe(stations => {
            this.list = stations;});
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
    this.stationService.getAllStations().subscribe((stations: Station[]) => {
      const dataWithAdditionalInfo = stations.map(station => {
        return {
          idStation: station.idstation,
          nomstation: station.nomstation,
          adresse: station.adresse
        };
      });

      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataWithAdditionalInfo);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      
      this.saveAsExcelFile(excelBuffer, 'list_of_stations');
    });
  }
}