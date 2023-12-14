const ReservationRepository = require('../repositories/ReservationRepository');

class ReservationService {
  async createReservation(reservationData) {
    // Additional business logic can be added here before calling the repository
    // For example, validate reservationData or perform other checks

    // Call the repository to create a reservation
    return ReservationRepository.createReservation(reservationData);
  }

  async deleteReservation(reservationId) {
    // Additional business logic can be added here before calling the repository
    // For example, check if the reservation exists or if the user has permission to delete

    // Call the repository to delete a reservation
    return ReservationRepository.deleteReservation(reservationId);
  }

  async updateReservation(reservationId, updatedData) {
    // Additional business logic can be added here before calling the repository
    // For example, validate updatedData or perform other checks

    // Call the repository to update a reservation
    return ReservationRepository.updateReservation(reservationId, updatedData);
  }

  async getAllReservations() {
    // Additional business logic can be added here before calling the repository
    // For example, filter reservations based on certain criteria

    // Call the repository to get all reservations
    return ReservationRepository.getAllReservations();
  }

  // Add more methods as needed
}

module.exports = new ReservationService();