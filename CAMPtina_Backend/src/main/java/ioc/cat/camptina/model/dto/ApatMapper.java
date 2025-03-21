/**
 * 
 */
package ioc.cat.camptina.model.dto;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import ioc.cat.camptina.model.Entity.ApatEntity;

/**
 * Mapper que ens permet convertir els camps de l'Entitat amb el DTO
 */
@Mapper(componentModel = "spring")
public interface ApatMapper {

	ApatMapper INSTANCE = Mappers.getMapper(ApatMapper.class);

	@Mapping(source="categoria.id", target="categoriaId")
	ApatDTO apatEntityToApatDto(ApatEntity apatEntity);
	
	@Mapping(source="categoriaId", target="categoria.id")
	ApatEntity apatDtoToApatEntity(ApatDTO apatDto);

	List<ApatDTO> listApatEntityToDto(List<ApatEntity> apats);
	
	List<ApatEntity> listApatDtoToEntity(List<ApatDTO> apats);
}
