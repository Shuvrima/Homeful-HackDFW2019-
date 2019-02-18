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
public class Availability {

    @Id
    @GeneratedValue
    private long availabilityId;

    @DateTimeFormat(pattern="dd-MM-yyyy")
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date availableFrom;

    @DateTimeFormat(pattern="dd-MM-yyyy")
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date availableTo;

    @OneToOne
    @JoinColumn(name = "roomId")
    private Room room;

}
