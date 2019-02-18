package com.hackdfw.rootsofunity.homelessbackend.Controller;

import com.hackdfw.rootsofunity.homelessbackend.Domain.RoomAvailability;
import com.hackdfw.rootsofunity.homelessbackend.Service.RoomAvailabilitySearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.Set;

@RestController
@RequestMapping(value = "/room/search")
public class AvailabilitySearchController {


    @Autowired
    RoomAvailabilitySearchService roomAvailabilitySearchService;

    @CrossOrigin(origins = "http://ec2-3-82-226-163.compute-1.amazonaws.com:3000")
    @RequestMapping(value = "")
    public Set<RoomAvailability> getAvailableRooms(@RequestParam @DateTimeFormat(pattern="dd-MM-yyyy")Date fromDate, @RequestParam @DateTimeFormat(pattern="dd-MM-yyyy") Date toDate, @RequestParam String zipcode){
        Set<RoomAvailability> results = roomAvailabilitySearchService.search(fromDate, toDate, zipcode);
        return results;
    }

}