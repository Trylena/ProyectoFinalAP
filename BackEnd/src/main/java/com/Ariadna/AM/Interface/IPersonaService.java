package com.Ariadna.AM.Interface;

import com.Ariadna.AM.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer una persona
    public List<Persona> getPersona();
    
    //Guardar un objecto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar un objecto pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
}
