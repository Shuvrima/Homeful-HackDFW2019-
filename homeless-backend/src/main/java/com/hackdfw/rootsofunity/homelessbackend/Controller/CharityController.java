package com.hackdfw.rootsofunity.homelessbackend.Controller;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Charity;
import com.hackdfw.rootsofunity.homelessbackend.Repository.CharityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public class CharityController {

	@Autowired
	CharityRepository charityRepo;

	@RequestMapping("/searchCharity")
	public List<Charity> postController(@RequestParam String zip) {

		List<Charity> charityList = null;
//		= charityRepo.findAllByZipcode(zip);

		return charityList;
	}
}
