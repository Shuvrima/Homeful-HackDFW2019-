package com.hackdfw.rootsofunity.homelessbackend.Domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue
    private long reservationId;

    @DateTimeFormat(pattern="dd-MM-yyyy")
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date bookFrom;

    @DateTimeFormat(pattern="dd-MM-yyyy")
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date bookTo;

    @OneToOne
    @JoinColumn(name = "roomId")
    private Room room;

    @OneToOne
    @JoinColumn(name = "renterId")
    private Renter renter;

    @OneToOne
    @JoinColumn(name = "charityId")
    private Charity charity;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "paymentId")
    private Payment payment;


}
