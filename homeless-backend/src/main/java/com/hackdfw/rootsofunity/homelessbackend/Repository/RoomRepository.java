
package com.hackdfw.rootsofunity.homelessbackend.Repository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface RoomRepository  extends JpaRepository<Room, Long> {

    Set<Room> findAllByZipcode(String zipcode);

}
