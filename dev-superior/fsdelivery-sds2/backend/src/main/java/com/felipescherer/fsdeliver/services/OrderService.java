package com.felipescherer.fsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.felipescherer.fsdeliver.dto.OrderDTO;
import com.felipescherer.fsdeliver.dto.ProductDTO;
import com.felipescherer.fsdeliver.entities.Order;
import com.felipescherer.fsdeliver.entities.OrderStatus;
import com.felipescherer.fsdeliver.entities.Product;
import com.felipescherer.fsdeliver.repositories.OrderRepository;
import com.felipescherer.fsdeliver.repositories.ProductRepository;

@Service //Precisamos falar para o spring que essa classe é um serviço, pode ser feito com @Component tbm
public class OrderService {

	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrderWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), 
				dto.getLongitude(), Instant.now(), OrderStatus.Pending);
		
		for(ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = repository.getOne(id);
		order.setOrderStatus(OrderStatus.Delivered);
		order = repository.save(order);
		return new OrderDTO(order);
		
	}
}
