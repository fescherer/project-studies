package com.felipescherer.fsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.felipescherer.fsdeliver.dto.ProductDTO;
import com.felipescherer.fsdeliver.entities.Product;
import com.felipescherer.fsdeliver.repositories.ProductRepository;

@Service //Precisamos falar para o spring que essa classe é um serviço, pode ser feito com @Component tbm
public class ProductService {

	@Autowired
	private ProductRepository repository;
	
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll(){
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
}
