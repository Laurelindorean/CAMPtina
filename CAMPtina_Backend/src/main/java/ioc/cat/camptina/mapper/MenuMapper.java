package ioc.cat.camptina.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import ioc.cat.camptina.model.dto.MenuDTO;
import ioc.cat.camptina.model.entity.MenuEntity;

/**
 * Interficie per mapejar els camps de l'Entitat amb el DTO
 * 
 * @author Palmira
 */
@Mapper(componentModel = "spring")
public interface MenuMapper {

	MenuMapper INSTANCE = Mappers.getMapper(MenuMapper.class);

	MenuDTO menuEntityToMenuDTO(MenuEntity menuEntity);

	MenuEntity menuDTOToMenuEntity(MenuDTO menuDTO);

}
