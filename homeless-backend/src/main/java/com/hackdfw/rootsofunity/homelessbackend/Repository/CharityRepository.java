package com.hackdfw.rootsofunity.homelessbackend.Repository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Charity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CharityRepository extends JpaRepository<Charity, Long> {

//    List<Charity> findAllByZipcode(String zipcode);
}
