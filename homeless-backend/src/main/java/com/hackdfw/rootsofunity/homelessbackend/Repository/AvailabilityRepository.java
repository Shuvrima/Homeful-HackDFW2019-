
package com.hackdfw.rootsofunity.homelessbackend.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;

public interface AvailabilityRepository  extends JpaRepository<Availability, Long> {

    Availability findAvailabilityByAvailabilityId(Long availabilityId);

//    Availability findAvailabilityByRoom_RoomIdIsAnd

}
