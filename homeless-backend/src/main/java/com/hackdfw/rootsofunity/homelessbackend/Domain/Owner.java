package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Owner {

	@Id
	@GeneratedValue
	private long ownerId;

	private String phone;

	private String email;

	private String address;

	private String state;

	private String zipcode;

}
