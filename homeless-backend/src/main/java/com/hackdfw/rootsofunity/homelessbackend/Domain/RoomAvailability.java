package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
public class RoomAvailability {

    private Room room;

    private Set<Availability> availability;

}
