package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
public class ReservationRequest {
    private long roomId;

    private long renterId;

    private long charityId;

    private long availabilityId;

    private String bookFrom;

    private String bookTo;

    public Reservation toReservation(){
        Reservation reservation = Reservation.builder()
                .charity(new Charity(charityId))
                .renter(new Renter(renterId))
                .room(new Room(roomId))
                .bookFrom(toDate(bookFrom))
                .bookTo(toDate(bookTo))
                .build();

        return  reservation;
    }

    private Date toDate(String dateString){
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
        Date date = null;
        try {
            date = simpleDateFormat.parse(dateString);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

}
