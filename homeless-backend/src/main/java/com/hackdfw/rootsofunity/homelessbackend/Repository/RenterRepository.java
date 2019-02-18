
package com.hackdfw.rootsofunity.homelessbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Renter;

public interface RenterRepository extends JpaRepository<Renter, Long> {

}
