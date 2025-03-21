/**
 * 
 */
package ioc.cat.camptina.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.entity.ApatEntity;

/**
 * 
 */
@Repository
public interface ApatRepository extends JpaRepository<ApatEntity, Integer>{
	
	List<ApatEntity> findByCategoriaId(int categoriaId);
	Optional<ApatEntity> findById(int id);
	
}
