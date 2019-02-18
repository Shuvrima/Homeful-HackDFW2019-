package com.hackdfw.rootsofunity.homelessbackend.Service;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Payment;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Reservation;
import com.hackdfw.rootsofunity.homelessbackend.Repository.AvailabilityRepository;
import com.hackdfw.rootsofunity.homelessbackend.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    AvailabilityRepository availabilityRepository;

    public void makeReservation(Reservation reservation, long availabilityId){

        Availability oldAvailability = availabilityRepository.findAvailabilityByAvailabilityId(availabilityId);

        Availability availabilityFrom = new Availability();
        availabilityFrom.setRoom(reservation.getRoom());
        availabilityFrom.setAvailableFrom(oldAvailability.getAvailableFrom());
        availabilityFrom.setAvailableTo(reservation.getBookFrom());

        Availability availabilityTo = new Availability();
        availabilityTo.setRoom(reservation.getRoom());
        availabilityTo.setAvailableFrom(reservation.getBookTo());
        availabilityTo.setAvailableTo(oldAvailability.getAvailableTo());

        availabilityRepository.delete(oldAvailability);

        insertIfValid(availabilityTo,availabilityTo);

        makePayment(reservation);

        reservationRepository.save(reservation);


    }

    private void makePayment(Reservation reservation) {
        Payment payment = new Payment();
        payment.setAmount(10);
        reservation.setPayment(payment);
    }

    private boolean checkValidAvailability(Availability availability) {
        if(availability.getAvailableTo().after(availability.getAvailableFrom())){
            return true;
        }
        return false;
    }

    private void insertIfValid(Availability ...availabilities){
        for(Availability availability:availabilities){
            if (checkValidAvailability(availability)) {
                availabilityRepository.save(availability);
            }
        }
    }

}
