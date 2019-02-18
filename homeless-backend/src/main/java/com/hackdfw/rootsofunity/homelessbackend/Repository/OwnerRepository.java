
package com.hackdfw.rootsofunity.homelessbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Owner;

public interface OwnerRepository extends JpaRepository<Owner, Long> {

}
