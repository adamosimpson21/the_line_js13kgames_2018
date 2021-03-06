import { PlayerCursor } from '../input/player-cursor';
import { Rectangle } from './collision/rectangle';

export class EntityManager {
    constructor(handler) {
        this.handler = handler;
        this.cursor = new PlayerCursor();
        this.entities = [];
    }

    tick(deltaTime) {
        for (let i = 0; i < this.entities.length; i += 1) {
            this.entities[i].tick(deltaTime);
        }
    }

    render(graphics) {
        for (let i = 0; i < this.entities.length; i += 1) {
            this.entities[i].render(graphics);
        }

        // if (this.cursor.x && this.cursor.y) {
        //     this.cursor.render(graphics);
        // }
    }

    addEntity(entity) {
        this.entities.push(entity);

        const rectangle = new Rectangle(
            entity.x + entity.bounds.x, entity.y + entity.bounds.y, entity.bounds.width, entity.bounds.height
        );

        this.handler.getWorld().getSpatialGrid().insert(rectangle, entity);
    }

    removeEntity(entity) {
        let index = this.entities.indexOf(entity);

        this.handler.getWorld().getSpatialGrid().remove(
            new Rectangle(
                entity.x + entity.bounds.x, entity.y + entity.bounds.y, entity.bounds.width, entity.bounds.height,
            ), entity
        );

        this.entities.splice(index, 1);
      }

    mouseClick(data) {
        //
    }

    mouseMove(data) {
        this.cursor.x = data.x;
        this.cursor.y = data.y;
    }

    getEntitiesByType(type) {
        return this.entities.filter(entity => entity.type == type);
    }
}