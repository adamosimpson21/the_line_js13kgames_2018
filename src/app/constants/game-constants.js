export default {
    FONT_SIZE: 32,

    FPS: 60,

    // Iphone 7 in Landscape mode
    GAME_HEIGHT: 551,
    GAME_WIDTH: 980,

    SPRITE_HEIGHT: 80,
    SPRITE_WIDTH: 80,

    CREATURE_SPEED: 100,

    SPATIAL_GRID_SIZE: 96,

    TYPES: {
        MONSTER: 'monster',
        HOUSE: 'house',
        LANE: 'lane',
    },

    rndIndex: (arr) => arr[Math.floor(Math.random() * (arr.length))],

    BASE_PATH: window.location.href,
}