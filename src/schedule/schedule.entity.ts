import { Column, OneToMany } from "typeorm";
import { Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { EventEntity } from "../event/event.entity";
import { EstablishmentEntity } from "../establishment/establishment.entity";


/**
 * Entidad Event. Define los eventos de la aplicacion. Un evento es cualquier actividad ingresada
 * en la aplicacion para realizar actividades en un lugar, el cual puede o no ser un establecimiento
 * que se encuentre inscrito en la app.
 * 
 * @Entity Indica que la clase es una entidad que sera mapeada a una tabla en la base de datos.
 */
@Entity()
export class ScheduleEntity {
    /**
     * Identificador del horario.
     * 
     * @PrimaryGeneratedColumn  Indica que el atributo id es la llave primaria de la clase Schedule.
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /**
     * Hora en la que inicia el horario.
     * 
     * @Column Indica que el atributo de la clase se mapea a una columna de la tabla en la base de datos
     */
    @Column()
    openHour: string;

    /**
     * Hora en la que cierra el horario.
     * 
     * @Column Indica que el atributo de la clase se mapea a una columna de la tabla en la base de datos
     */
    @Column()
    closeHour: string;

    /**
    * Dias del horario. Hacen referencia a los dias que dura el evento
    * 
    * @Column Indica que el atributo de la clase se mapea a una columna de la tabla en la base de datos
    */
    @Column()
    days: string;

    /**
     * Evento al que pertenece el horario.
     * 
     * @OneToMany Relacion uno a muchos.
     */
    @OneToMany(() => EventEntity, event => event.schedules)
    event: EventEntity;

    /**
     * Establecimientos en los que se puede desarrollar un evento.
     * 
     * @OneToMany Relacion uno a muchos.
     */
    @OneToMany(() => EstablishmentEntity, establishment => establishment.event)
    establishments: EstablishmentEntity[];
}
