package com.hackdfw.rootsofunity.homelessbackend.Repository;

import java.util.Date;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;
import org.springframework.data.jpa.repository.Query;

public interface RoomAvailabilityRepository extends JpaRepository<Availability, Long> {

    Set<Availability> getAvailabilitiesByRoom_ZipcodeIsAndAvailableFromIsBeforeAndAvailableToAfter(String zipcode,Date fromDate, Date toDate);


    @Query(value = "SELECT * FROM availability a WHERE  a.room_id in (?1)  and  a.available_from <= ?2 and a.available_to >= ?3"
            ,nativeQuery = true)
    Set<Availability> findAvailabilities(Set<Long> roomIds, Date fromDate, Date toDate);

//    Set<Availability> findAvailabilities(String zipcode,Date fromDate, Date toDate){
//        Query q = em.createNativeQuery("SELECT a.id, a.version, a.firstname, a.lastname FROM Author a", Author.class);
//        List<Author> authors = q.getResultList();
//
//        for (Author a : authors) {
//            System.out.println("Author "
//                    + a.getFirstName()
//                    + " "
//                    + a.getLastName());
//        }
//    }



}