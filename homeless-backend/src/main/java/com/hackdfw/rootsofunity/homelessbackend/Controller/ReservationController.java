package com.hackdfw.rootsofunity.homelessbackend.Controller;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Renter;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Reservation;
import com.hackdfw.rootsofunity.homelessbackend.Domain.ReservationRequest;
import com.hackdfw.rootsofunity.homelessbackend.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reserve")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @PostMapping("")
    public ResponseEntity postAddRenter(@RequestBody ReservationRequest reservationRequest) {
        Reservation reservation = reservationRequest.toReservation();
        reservationService.makeReservation(reservation, reservationRequest.getAvailabilityId());
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
