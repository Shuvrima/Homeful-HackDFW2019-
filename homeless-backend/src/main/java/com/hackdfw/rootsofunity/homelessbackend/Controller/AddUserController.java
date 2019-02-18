package com.hackdfw.rootsofunity.homelessbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Charity;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Owner;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Renter;
import com.hackdfw.rootsofunity.homelessbackend.Repository.CharityRepository;
import com.hackdfw.rootsofunity.homelessbackend.Repository.OwnerRepository;
import com.hackdfw.rootsofunity.homelessbackend.Repository.RenterRepository;

@RestController
public class AddUserController {

	@Autowired
	CharityRepository charityRepo;

	@Autowired
	RenterRepository renterRepo;

	@Autowired
	OwnerRepository ownerRepo;

	@PostMapping("/addCharity")
	public ResponseEntity postAddCharity(@RequestBody Charity charity) {

		charityRepo.save(charity);
		return ResponseEntity.ok(HttpStatus.OK);
	}

	@PostMapping("/addRenter")
	public ResponseEntity postAddRenter(@RequestBody Renter renter) {

		renterRepo.save(renter);
		return ResponseEntity.ok(HttpStatus.OK);
	}

	@PostMapping("/addOwner")
	public ResponseEntity postController(@RequestBody Owner owner) {

		ownerRepo.save(owner);
		return ResponseEntity.ok(HttpStatus.OK);
	}

}
