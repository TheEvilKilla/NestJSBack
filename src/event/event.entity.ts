import { ScheduleEntity } from "../schedule/schedule.entity";
import { Column } from "typeorm";
import { Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";

/**
 * Entidad Event. Define los eventos de la aplicacion. Un evento es cualquier actividad ingresada
 * en la aplicacion para realizar actividades en un lugar, el cual puede o no ser un establecimiento
 * que se encuentre inscrito en la app.
 * 
 * @Entity Indica que la clase es una entidad que sera mapeada a una tabla en la base de datos.
 */
@Entity()
export class EventEntity {
    /**
     * Identificador del evento.
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /**
     * Nombre del evento.
     * 
     * @Column Indica que el atributo de la clase se mapea a una columna de la tabla en la base de datos
     */
    @Column()
    name: string;

    /**
     * Descripcion del evento.
     * 
     * @Column Indica que el atributo de la clase se mapea a una columna de la tabla en la base de datos
     */
    @Column()
    description: string;
    
    /**
     * Direccion del evento. Puede pertenecer a la direccion de un establecimiento.
     * 
     * @Column Indica que el atributo de la clase se mapea a una columna de la tabla en la base de datos
     */
    @Column()
    address: string;

    /**
     * Ciudad en la que se realizara el evento. Puede corresponder a la ciudad de 
     * un establecimiento.
     * 
     * @Column Indica que el atributo de la clase se mapea a una columna de la tabla en la base de datos
     */
    @Column()
    city: string;

    /**
     * Imagen del evento.
     * 
     * @Column Indica que el atributo de la clase se mapea a una columna de la tabla en la base de datos
     */
    @Column()
    image: string;

    /**
     * Relacion con el horario del evento. Un evento puede tener muchos horarios
     * 
     * @ManyToOne Relacion muchos a uno.
     */
    @ManyToOne(() => ScheduleEntity, schedule => schedule.event)
    schedules : ScheduleEntity[];
}
