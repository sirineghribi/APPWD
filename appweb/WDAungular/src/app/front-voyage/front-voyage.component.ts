import { Component } from '@angular/core';
import { Voyage } from '../Entity/Voyage';
import { VoyageService } from '../Service/voyage.service';
import { Reservation } from '../Entity/Reservation';
import jsPDF from 'jspdf';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-front-voyage',
  templateUrl: './front-voyage.component.html',
  styleUrls: ['./front-voyage.component.css']
})
export class FrontVoyageComponent {
  voyages:Voyage[]=[];
  reservations:Reservation[]=[];
  newReservation:Reservation=new Reservation;
  constructor(private voyageService:VoyageService){}
  ngOnInit()
  {
    this.voyageService.listVoyages().subscribe(l=>this.voyages=l);
  }

  reserver(voyage:Voyage)
  {
    if (voyage && voyage.id !== undefined)
    {
      this.newReservation.voyage=voyage.id;
      this.newReservation.date=new Date(Date.now());
      this.newReservation.etat=this.newReservation.date.valueOf()>voyage.start.valueOf();
      const res=this.newReservation;
      this.reservations.push(res);
      console.log("reservations:",this.reservations);

      const qrCodeData: string = `Numero Voyage: ${this.newReservation.voyage}`;

  // Génération du QR code
  QRCode.toDataURL(qrCodeData, (error, url) => {
    if (error) {
      console.error('Erreur lors de la génération du code QR:', error);
      return;
    }

      //////////
      const doc = new jsPDF();

      // Titre
      doc.setFontSize(18);
      doc.setTextColor(25, 25, 112); // Bleu
      doc.text('Confirmation de Réservation', 20, 30);

      // Ligne séparatrice
      doc.setLineWidth(0.5);
      doc.setDrawColor(0); // Noir
      doc.line(20, 35, 190, 35);

      // Contenu
      doc.setFontSize(12);
      doc.setTextColor(30, 30, 30); // Gris foncé
      const nomEtudiant = this.newReservation.date;
      const typeChambre = this.newReservation.voyage;
    

      const message = `Votre réservation a été confirmée.\n\nDate de reservation: ${nomEtudiant}\nNumero de voyage: ${typeChambre}`;
      doc.text(message, 20, 50);

       

    // Insertion du QR code
  
    // Insertion du QR code
    doc.addImage(url, 'JPEG', 15, 100, 50, 50); // Ajustez la position et la taille selon vos besoins

      // Sauvegarde du PDF
      doc.save('reservation.pdf');
    });
  }
  error: (erreur: any) => {
    console.error('Erreur lors de l\'ajout de la Reservation', erreur);
  }
}

}
