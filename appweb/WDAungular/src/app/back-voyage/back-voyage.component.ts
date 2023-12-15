import { Component } from '@angular/core';
import { VoyageService } from '../Service/voyage.service';
import { Voyage } from '../Entity/Voyage';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-voyage',
  templateUrl: './back-voyage.component.html',
  styleUrls: ['./back-voyage.component.css']
})
export class BackVoyageComponent {
  list:Voyage[]=[]
  voyageService: any;
  constructor(private vs:VoyageService,private router:Router){}
  ngOnInit()
  {
    this.vs.listVoyages().subscribe( l =>{
      this.list=l;
    } );
  }


  ouvrirFormulaireModif(voyage:Voyage) {
    this.router.navigate(['back/modif-voyage', voyage.id]);
  }

  supprimer(voyage: Voyage) {
    if (voyage && voyage.id !== undefined) {
      this.vs.deleteVoyage(voyage.id).subscribe(
        {
          next: () => {
            // Si la suppression est réussie, mettre à jour la liste des chambres
            this.vs.listVoyages().subscribe(voyages => {
              this.list = voyages;
            });
          },
          error: (error) => {
            // Gérer l'erreur, si nécessaire
            console.error("Erreur lors de la suppression de la chambre :", error);
          }
        }
      );
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
    // Retrieve the list of voyages
    this.vs.listVoyages().subscribe((voyages: Voyage[]) => {
      // Manipulate the data to include additional information
      const dataWithAdditionalInfo = voyages.map(voyage => {
        return {
          idVoyage: voyage.id,
          depart: voyage.depart,
          destination: voyage.destination,
          start:voyage.start,
          end:voyage.end,
          bus: voyage.bus // Add the name of the bloc if it exists, otherwise an empty string
          // Add other voyage properties here if necessary
        };
      });

      // Create the Excel sheet
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataWithAdditionalInfo);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      
      // Save the Excel file
      this.saveAsExcelFile(excelBuffer, 'list_of_voyages');
    });
  }

}
