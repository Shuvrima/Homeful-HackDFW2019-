package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Room {

    @Id
    @GeneratedValue
    private long roomId;

    public Room(long roomId){
        this.roomId = roomId;
    }

    @OneToOne
    @JoinColumn(name = "ownerId")
    private Owner owner;

    private String address;

    private String state;

    private String zipcode;

//    @OneToMany(mappedBy="room",cascade = CascadeType.ALL)
//    private Availability availabilityList;

//    public void addAvailability(Availability availability) {
//        if (availability != null) {
//            if (availabilityList == null) {
//                availabilityList = new ArrayList<Availability>();
//            }
//            availabilityList.add(availability);
//            availability.setRoom(this);
//        }
//    }

}
