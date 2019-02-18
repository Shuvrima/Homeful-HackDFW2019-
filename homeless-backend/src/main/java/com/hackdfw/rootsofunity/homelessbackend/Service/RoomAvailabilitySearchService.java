package com.hackdfw.rootsofunity.homelessbackend.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import com.hackdfw.rootsofunity.homelessbackend.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Room;
import com.hackdfw.rootsofunity.homelessbackend.Domain.RoomAvailability;
import com.hackdfw.rootsofunity.homelessbackend.Repository.RoomAvailabilityRepository;

@Service
public class RoomAvailabilitySearchService {

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    private RoomAvailabilityRepository roomAvailabilityRepository;

    public Set<RoomAvailability> search(Date fromDate, Date toDate, String zipcode){
//        Set<Availability> availabilitySet = roomAvailabilityRepository.getAvailabilitiesByRoom_ZipcodeIsAndAvailableFromIsBeforeAndAvailableToAfter(zipcode,fromDate,toDate);

        Set<Room> rooms = roomRepository.findAllByZipcode(zipcode);

        Set<Long> roomIds = rooms.stream().map(each->each.getRoomId()).collect(Collectors.toSet());

        Set<Availability> availabilitySet = roomAvailabilityRepository.findAvailabilities(roomIds,fromDate,toDate);

        Map<Room,Set<Availability>> roomAvailabilityMap = new HashMap<>();
        availabilitySet.stream().forEach(each->{
            if(roomAvailabilityMap.containsKey(each.getRoom())){
                roomAvailabilityMap.get(each.getRoom()).add(each);
            }else{
                Set<Availability> availabilities = new HashSet<>();
                availabilities.add(each);
                roomAvailabilityMap.put(each.getRoom(),availabilities);
            }
        });

        roomAvailabilityMap.values().stream().forEach(list->{
            list.stream().forEach(each->each.setRoom(null));
        });

        Set<RoomAvailability> roomAvailabilitySet = roomAvailabilityMap.keySet().stream().map(each->{
            RoomAvailability roomAvailability = new RoomAvailability();
            roomAvailability.setRoom(each);
            roomAvailability.setAvailability(roomAvailabilityMap.get(each));
            return roomAvailability;
        }).collect(Collectors.toSet()) ;

        return roomAvailabilitySet;
    }

}