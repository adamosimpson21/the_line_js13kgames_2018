
import { FarmHouse } from '../entities/static-entities/farm-house';
import { Garden } from '../entities/static-entities/garden/garden';
import { Monster } from '../entities/creatures/monsters/monster';
import gameConstants from '../../constants/game-constants';
import { SpatialGrid } from '../entities/collision/spatial-grid';

let counter = 0;

export class World {
    constructor(handler) {
        this.handler = handler;
        this.entityManager = handler.createEntityManager();
        this.monsterManager = handler.createMonsterManager();

        this.spatialGrid = new SpatialGrid(
            gameConstants.GAME_WIDTH,
            gameConstants.GAME_HEIGHT,
            64
        );
    }

    tick(deltaTime) {
        counter++;

        if (counter >= (gameConstants.FPS / 2)) {
            counter = 0;

            this.monsterManager.spawnMonster();
        }

        this.entityManager.tick(deltaTime);
    }

    render(graphics) {
        this.drawBackground(graphics);

        // this.spatialGrid.render(graphics);
        this.entityManager.render(graphics);
    }

    init() {
        this.loadEntities();
    }

    drawBackground(graphics) {
        graphics.fillStyle = 'green';
        graphics.fillRect(0, 0, gameConstants.GAME_WIDTH, gameConstants.GAME_HEIGHT);
    }

    loadEntities() {
        const ySpawn = 90;

        this.entityManager.addEntity(new FarmHouse(this.handler, 0, ySpawn));
        this.entityManager.addEntity(Garden.create(this.handler, 101, ySpawn));
    }

    getSpatialGrid() {
        return this.spatialGrid;
    }
}