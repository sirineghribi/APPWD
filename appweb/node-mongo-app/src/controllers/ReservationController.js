const express = require('express');
const router = express.Router();
const ReservationService = require('../services/Reservationservise');

// POST /api/reservations
router.post('/reservations', async (req, res) => {
  try {
    const newReservation = await ReservationService.createReservation(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE /api/reservations/:reservationId
router.delete('/reservations/:reservationId', async (req, res) => {
  const reservationId = req.params.reservationId;

  try {
    const deletedReservation = await ReservationService.deleteReservation(reservationId);

    if (!deletedReservation) {
      res.status(404).json({ error: 'Reservation not found' });
      return;
    }

    res.status(200).json(deletedReservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT /api/reservations/:reservationId
router.put('/reservations/:reservationId', async (req, res) => {
  const reservationId = req.params.reservationId;

  try {
    const updatedReservation = await ReservationService.updateReservation(reservationId, req.body);

    if (!updatedReservation) {
      res.status(404).json({ error: 'Reservation not found' });
      return;
    }

    res.status(200).json(updatedReservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/reservations
router.get('/reservations', async (req, res) => {
  try {
    const allReservations = await ReservationService.getAllReservations();
    res.status(200).json(allReservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes as needed

module.exports = router;