// Ainda tem bastante para "arrumar" neste arquivo

//Contador de imagens
let imageCount = 0;

// level object responsible for loading the map
// TODO: Refactor this engine to be possible and easy to create/load maps
let level = {
    floor: {
        // Mapping the floor
        prefix: "dttool/output/1/",
        map: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 756, 756, 756, 756, 756, 756, 0, 0, 0],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 1140, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 660, 660, 372, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 1908, 756, 756, 756, 756, 756, 756, 756],
            [0, 756, 756, 756, 756, 756, 756, 756, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        header: {
            372: false,
            660: false,
            756: false,
            1140: false,
            1908: false,
        }
    },
    wall: {
        // Mapping walls
        prefix: "dttool/output/0/",
        map: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 948, 372, 372, 372, 948, 372, 2100, 0, 0],
            [0, 948, 1140, 0, 0, 0, 468, 0, 2004, 372, 948, 372, 372, 372, 372, 2100],
            [0, 468, 0, 0, 0, 0, 1524, 0, 0, 0, 468, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 1428, 0, 0, 0, 468, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 468, 0, 0, 0, 468, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 468, 0, 0, 0, 1524, 0, 0, 0, 0, 468],
            [0, 948, 372, 372, 372, 372, 1140, 0, 0, 0, 1428, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 468, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 468, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 468, 0, 0, 0, 0],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 468, 0, 0, 0, 0],
            [0, 2004, 2100, 0, 0, 0, 0, 0, 948, 372, 2004, 0, 0, 0, 0],
            [0, 468, 2004, 372, 1332, 1620, 372, 372, 1140, 0, 0, 0, 0, 0, 0],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 468],
            [0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 468],
            [0, 2004, 372, 372, 372, 372, 372, 372, 372, 372, 372, 1140],
        ],
        header: {
            276: { orientation: 8, main_index: 5, sub_index: 2, direction: 1, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            372: { orientation: 2, main_index: 5, sub_index: 0, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,] },
            468: { orientation: 1, main_index: 5, sub_index: 0, direction: 1, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            564: { orientation: 2, main_index: 5, sub_index: 0, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,] },
            660: { orientation: 2, main_index: 5, sub_index: 0, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,] },
            756: { orientation: 1, main_index: 5, sub_index: 0, direction: 1, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            852: { orientation: 1, main_index: 5, sub_index: 0, direction: 1, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            948: { orientation: 3, main_index: 5, sub_index: 0, direction: 3, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1,] },
            1044: { orientation: 4, main_index: 5, sub_index: 0, direction: 3, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1,] },
            1140: { orientation: 7, main_index: 5, sub_index: 0, direction: 4, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            1236: { orientation: 9, main_index: 5, sub_index: 0, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,] },
            1332: { orientation: 9, main_index: 5, sub_index: 1, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,] },
            1428: { orientation: 8, main_index: 5, sub_index: 0, direction: 1, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] },
            1524: { orientation: 8, main_index: 5, sub_index: 1, direction: 1, walk: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            1620: { orientation: 9, main_index: 5, sub_index: 0, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,] },
            1716: { orientation: 9, main_index: 5, sub_index: 1, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,] },
            1812: { orientation: 8, main_index: 5, sub_index: 1, direction: 1, walk: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            1908: { orientation: 8, main_index: 5, sub_index: 0, direction: 1, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] },
            2004: { orientation: 6, main_index: 5, sub_index: 0, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1,] },
            2100: { orientation: 5, main_index: 5, sub_index: 0, direction: 1, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            2196: { orientation: 6, main_index: 5, sub_index: 0, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1,] },
            2292: { orientation: 5, main_index: 5, sub_index: 0, direction: 1, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            2388: { orientation: 2, main_index: 5, sub_index: 0, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,] },
            2484: { orientation: 1, main_index: 5, sub_index: 0, direction: 1, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            2580: { orientation: 3, main_index: 5, sub_index: 0, direction: 3, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1,] },
            2676: { orientation: 4, main_index: 5, sub_index: 0, direction: 3, walk: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1,] },
            2772: { orientation: 12, main_index: 5, sub_index: 0, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
        }
    },
    object: {
        //object's mapping (table, chairs, etc..)
        prefix: "dttool/output/2/",
        map: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 5844, 0, 0, 3828, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 3732, 0, 0, 0],
            [0, 0, 0, 4404, 1524, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 4308, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 5652, 372, 276, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 5748, 0, 0, 0, 0],
            [0, 0, 0, 2676, 2580, 2484, 0, 0, 0, 0, 0],
            [0, 0, 2868, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 3444, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 468, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 468, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 468, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 468, 0, 0],

        ],
        header: {
            276: { orientation: 2, main_index: 9, sub_index: 12, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0,] },
            372: { orientation: 2, main_index: 9, sub_index: 11, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,] },
            468: { orientation: 12, main_index: 50, sub_index: 0, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,] },
            564: { orientation: 12, main_index: 9, sub_index: 33, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,] },
            660: { orientation: 1, main_index: 9, sub_index: 33, direction: 1, walk: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,] },
            756: { orientation: 7, main_index: 9, sub_index: 33, direction: 4, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0,] },
            852: { orientation: 12, main_index: 9, sub_index: 32, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            948: { orientation: 12, main_index: 9, sub_index: 31, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,] },
            1044: { orientation: 1, main_index: 9, sub_index: 10, direction: 1, walk: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            1140: { orientation: 1, main_index: 9, sub_index: 9, direction: 1, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            1236: { orientation: 1, main_index: 9, sub_index: 8, direction: 1, walk: [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            1332: { orientation: 12, main_index: 9, sub_index: 11, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            1428: { orientation: 12, main_index: 9, sub_index: 10, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            1524: { orientation: 12, main_index: 9, sub_index: 9, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] },
            1620: { orientation: 12, main_index: 9, sub_index: 8, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] },
            1716: { orientation: 12, main_index: 9, sub_index: 7, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,] },
            1812: { orientation: 12, main_index: 9, sub_index: 6, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,] },
            1908: { orientation: 12, main_index: 9, sub_index: 5, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,] },
            2004: { orientation: 12, main_index: 9, sub_index: 4, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,] },
            2100: { orientation: 12, main_index: 9, sub_index: 3, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,] },
            2196: { orientation: 12, main_index: 9, sub_index: 2, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,] },
            2292: { orientation: 12, main_index: 9, sub_index: 1, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,] },
            2388: { orientation: 12, main_index: 9, sub_index: 0, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,] },
            2484: { orientation: 2, main_index: 9, sub_index: 10, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] },
            2580: { orientation: 2, main_index: 9, sub_index: 9, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,] },
            2676: { orientation: 2, main_index: 9, sub_index: 8, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,] },
            2772: { orientation: 2, main_index: 9, sub_index: 7, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,] },
            2868: { orientation: 2, main_index: 9, sub_index: 6, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,] },
            2964: { orientation: 1, main_index: 9, sub_index: 7, direction: 1, walk: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            3060: { orientation: 1, main_index: 9, sub_index: 6, direction: 1, walk: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            3156: { orientation: 2, main_index: 9, sub_index: 5, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,] },
            3252: { orientation: 2, main_index: 9, sub_index: 4, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,] },
            3348: { orientation: 1, main_index: 9, sub_index: 5, direction: 1, walk: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            3444: { orientation: 1, main_index: 9, sub_index: 4, direction: 1, walk: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            3540: { orientation: 12, main_index: 9, sub_index: 30, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,] },
            3636: { orientation: 12, main_index: 9, sub_index: 29, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,] },
            3732: { orientation: 1, main_index: 9, sub_index: 3, direction: 1, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            3828: { orientation: 1, main_index: 9, sub_index: 2, direction: 1, walk: [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            3924: { orientation: 2, main_index: 9, sub_index: 3, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,] },
            4020: { orientation: 2, main_index: 9, sub_index: 2, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,] },
            4116: { orientation: 2, main_index: 9, sub_index: 1, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,] },
            4212: { orientation: 2, main_index: 9, sub_index: 0, direction: 2, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,] },
            4308: { orientation: 1, main_index: 9, sub_index: 1, direction: 1, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            4404: { orientation: 1, main_index: 9, sub_index: 0, direction: 1, walk: [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            4500: { orientation: 12, main_index: 9, sub_index: 28, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,] },
            4596: { orientation: 12, main_index: 9, sub_index: 27, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0,] },
            4692: { orientation: 12, main_index: 9, sub_index: 24, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] },
            4788: { orientation: 12, main_index: 9, sub_index: 23, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] },
            4884: { orientation: 12, main_index: 9, sub_index: 22, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,] },
            4980: { orientation: 12, main_index: 9, sub_index: 21, direction: 3, walk: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,] },
            5076: { orientation: 12, main_index: 9, sub_index: 20, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] },
            5172: { orientation: 12, main_index: 9, sub_index: 17, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            5268: { orientation: 12, main_index: 9, sub_index: 18, direction: 3, walk: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            5364: { orientation: 12, main_index: 9, sub_index: 19, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0,] },
            5460: { orientation: 12, main_index: 9, sub_index: 16, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,] },
            5556: { orientation: 12, main_index: 9, sub_index: 15, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,] },
            5652: { orientation: 12, main_index: 9, sub_index: 13, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0,] },
            5748: { orientation: 12, main_index: 9, sub_index: 12, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,] },
            5844: { orientation: 12, main_index: 9, sub_index: 14, direction: 3, walk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,] },
        }
    }
};

//link with index canvas
let floor = document.getElementById("floor").getContext("2d");
floor.w = floor.canvas.width;
floor.h = floor.canvas.height;

//isometric view variables
let tw = 160, th = tw / 2, s = 160 * 0.705, a = Math.PI / 4, visible = 7, asin = acos = Math.sin(a);

// monsters informations
// BA being the hero, this 'monsterMap' deals with importing the animation frames
let monsterMap = {
    SK: {
        A1: loadImage("monsters/SK/A1/map.png", 8, 16, true),
        NU: loadImage("monsters/SK/NU/map.png", 8, 8, true),
        WL: loadImage("monsters/SK/WL/map.png", 8, 8, true),
        DD: loadImage("monsters/SK/DD/map.png", 8, 1),
        attackOffset: 10,
    },
    FS: {
        A1: loadImage("monsters/FS/A1/map.png", 8, 17, true),
        NU: loadImage("monsters/FS/NU/map.png", 8, 12, true),
        WL: loadImage("monsters/FS/WL/map.png", 8, 14, true),
        DD: loadImage("monsters/FS/DD/map.png", 8, 1),
    },
    SI: {
        A1: loadImage("monsters/SI/A1/map.png", 8, 16, true),
        NU: loadImage("monsters/SI/NU/map.png", 8, 8, true),
        WL: loadImage("monsters/SI/WL/map.png", 8, 9, true),
        DD: loadImage("monsters/SI/DD/map.png", 8, 1),
    },
    BA: {
        A1: loadImage("monsters/BA/A1/map.png", 16, 9, true),
        NU: loadImage("monsters/BA/NU/map.png", 16, 8, true),
        WL: loadImage("monsters/BA/WL/map.png", 16, 8, true),
    }
};

// Variaveis que controlam os objetos da tela
let monsters = [], deathmobs = [], barrels = [], coins = [], potions = [], walls = [];
// Não testei ainda
let showMap = false;
// Carrega as imagens para o barril, moeda e poção
let barrelSprite = loadImage("sprite/barrel64.png");
let coinSprite = loadImage("sprite/coins10.png");
let potionSprite = loadImage("sprite/potions.png");
// nosso char
let hero;


// TODO
for (let l in level) {
    level[l].tiles = {};
    for (i in level[l].header) if (!level[l].tiles[i]) level[l].tiles[i] = loadImage(level[l].prefix + i + ".png");
}






//"Engine"
(function (undefined) {
    hero = new HeroBarbarian(s * 3, s * 3);


    setInterval(function () {
        hero.health = Math.min(hero.health + 10, hero.origin_health);
    }, 2000);


    for (let i = 0; i < 2; i++) monsters.push(new AgressiveMob(randomx(), randomy(), 'SK'));
    for (let i = 0; i < 2; i++) monsters.push(new AgressiveMob(randomx(), randomy(), 'FS'));
    for (let i = 0; i < 2; i++) monsters.push(new AgressiveMob(randomx(), randomy(), 'SI'));
    //for(let i=0;i<2;i++) barrels.push(new Barrel(randomx(),randomy()));
    for (let i = 0; i < 2; i++) potions.push(new PotionHealth(randomx(), randomy()));

    for (let y in level.wall.map) {
        for (let x in level.wall.map[y]) {
            let index = level.wall.map[y][x];
            if (index > 0) {
                walls.push(new Wall(index, x * s, y * s));
            }
        }
    }
    for (let y in level.object.map) {
        for (let x in level.object.map[y]) {
            let index = level.object.map[y][x];
            if (index > 0) {
                walls.push(new WallObject(index, x * s, y * s));
            }
        }
    }

    // passos para inimigos, ataque ao heroi
    setInterval(function () {
        if (monsters.length == 0) return;
        let m = monsters[Math.ceil(Math.random() * (monsters.length - 1))];
        if (typeof m.attacked != "object") {
            m.to_x = m.x + (Math.random() * s - s / 2);
            m.to_y = m.y + (Math.random() * s - s / 2);
        }
        for (let i in monsters) {
            let m = monsters[i], attackDist = 100;
            if (m.attack && m.isAboveHero()) {
                if (Math.abs(hero.x - m.x) < attackDist &&
                    Math.abs(hero.y - m.y) < attackDist) {
                    m.doAttack(hero);
                    m.to_x = m.x;
                    m.to_y = m.y;
                } else {
                    m.to_x = hero.x;
                    m.to_y = hero.y;
                }
            }
        }
    }, 200);

    floor.canvas.onclick = function (e) {
        let mx = (e.offsetX == undefined ? e.layerX : e.offsetX) - floor.w / 2;
        let my = (e.offsetY == undefined ? e.layerY : e.offsetY) - floor.h / 2;
        let isCanClick = Math.abs(mx) < 100 && Math.abs(my) < 100;
        my *= 2; //unscale
        floor.click_x = hero.x + mx * Math.cos(-a) - my * Math.sin(-a);
        floor.click_y = hero.y + mx * Math.sin(-a) + my * Math.cos(-a);
        if (isCanClick) if (processClick()) return;
        hero.to_x = floor.click_x;
        hero.to_y = floor.click_y;
    }

    window.onkeydown = function (e) {
        let beltKeys = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48];
        let beltIndex = beltKeys.indexOf(e.keyCode);
        if (beltIndex >= 0) {
            if (hero.belt.items[beltIndex] instanceof PotionHealth) {
                hero.belt.items[beltIndex].drink(hero);
                remove(hero.belt.items, hero.belt.items[beltIndex]);
            }
            return false;
        }
        if (e.keyCode == 9) {
            showMap = !showMap;
            return false;
        }
    }

    setInterval(function () {
        if (imageCount > 0) return;
        hero.nextStep();
        for (let i in monsters) monsters[i].nextStep();
        floor.fillStyle = "black"; floor.fillRect(0, 0, floor.w, floor.h);
        renderFloor();
        renderHeroHealth()
        renderHeroBelt();
        if (showMap) renderMap();
    }, 66);

})();