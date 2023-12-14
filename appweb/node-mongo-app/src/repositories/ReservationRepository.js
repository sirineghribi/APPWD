const Reservation = require('../models/Reservation');

class ReservationRepository {
  async createReservation(reservationData) {
    return Reservation.create(reservationData);
  }

  async deleteReservation(reservationId) {
    return Reservation.findByIdAndDelete(reservationId);
  }

  async updateReservation(reservationId, updatedData) {
    return Reservation.findByIdAndUpdate(reservationId, updatedData, { new: true });
  }

  async getAllReservations() {
    return Reservation.find();
  }

  // Add more methods as needed
}

module.exports = new ReservationRepository();