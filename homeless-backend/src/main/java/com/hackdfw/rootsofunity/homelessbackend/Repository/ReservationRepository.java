package com.hackdfw.rootsofunity.homelessbackend.Repository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
	
//	Set<Reservation> getReservationsByIsBookedfromAndIsBookedafter(long reserve_id, long room_id, long char_id,Date booked_from, Date booked_to);

}
