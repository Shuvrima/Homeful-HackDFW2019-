package com.hackdfw.rootsofunity.homelessbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackdfw.rootsofunity.homelessbackend.Domain.AddRoomReq;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Room;
import com.hackdfw.rootsofunity.homelessbackend.Repository.AvailabilityRepository;
import com.hackdfw.rootsofunity.homelessbackend.Repository.RoomRepository;

@RestController
public class AddRoomController {

	@Autowired
	RoomRepository roomRepo;
	
	@Autowired
	AvailabilityRepository availabilityRepo;

	@PostMapping("/addRoom")
	public ResponseEntity postController(@RequestBody AddRoomReq roomReq) {

		Room room = roomReq.toRoom();
		room = roomRepo.save(room);


		Availability availability = roomReq.toAvailability();
		availability.setRoom(room);

		availabilityRepo.save(availability);

		return ResponseEntity.ok(HttpStatus.OK);
	}

}
