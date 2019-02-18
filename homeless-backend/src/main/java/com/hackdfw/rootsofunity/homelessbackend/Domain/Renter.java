package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Renter {

    @Id
    @GeneratedValue
    private long renterId;

    public Renter(long renterId){
        this.renterId = renterId;
    }

    private String phone;

    private String email;

    private String address;

    private String state;

    private String zipcode;

}
