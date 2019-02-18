package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Data
public class AddRoomReq {

	private Long ownerId;

	private String address;

	private String state;

	private String zipcode;

	private String availableFrom;

	private String availableTo;

	public Room toRoom(){
		Room room = Room.builder()
				.address(address)
				.state(state)
				.zipcode(zipcode)
				.owner(toOwner())
				.build();
		return room;
	}

	private Owner toOwner() {
		Owner owner = new Owner();
		owner.setOwnerId(ownerId);
		return owner;
	}

	public Availability toAvailability(){
		Availability availability = Availability.builder()
				.availableFrom(toDate(availableFrom))
				.availableTo(toDate(availableTo))
				.build();
		return availability;
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
