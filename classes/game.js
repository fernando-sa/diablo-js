// Por falta de um nome melhor, esse arquivo e movi para cá todas as funções que executam 
// ações para definir o que renderiza e funcionalidades do jogo
// Talvez seja melhor quebrar em mais arquivos, mas terá que sera analizado
// Outro talvez é a opção de criar classes e adpatar as funções

// TODO
function isWayWall(x, y) {
    let block_x = Math.floor(x / s),
        block_y = Math.floor(y / s),
        ix = Math.floor((x % s) / (s / 5)),
        iy = 4 - Math.floor((y % s) / (s / 5)),
        w_inx = iy * 5 + ix, h, idx;
    for (let l in level) {
        if (level[l].map[block_y] && (idx = level[l].map[block_y][block_x]) && (h = level[l].header[idx])) {
            if (h.walk[w_inx] == 1) return false;
            else if (h.orientation == 3) {
                for (let idx in level.wall.header) {
                    let tb = level.wall.header[idx];
                    if (tb.main_index == h.main_index && tb.sub_index == h.sub_index && tb.orientation == 4 && h.walk[w_inx] == 1) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

// If it is in map, render it;
function getFloorTile(x, y) {
    if (!level.floor.map[y]) return null;
    if (!level.floor.map[y][x]) return null;
    // Get what tile it is by level floor map in diablo.js
    let f = level.floor.map[y][x];
    return level.floor.tiles[f];
}

// TODO
function renderHeroHealth() {
    let radius = 80, padding = 20;
    floor.save();
    floor.globalAlpha = 0.4;
    // draw health colb
    floor.fillStyle = "black";
    floor.beginPath();
    floor.arc(radius + padding, floor.height - radius - padding, radius + 4, 0, Math.PI * 2);
    floor.closePath();
    floor.fill();
    // draw health
    floor.fillStyle = "red";
    let percent = hero.health / hero.origin_health;
    let angleFrom = Math.PI * (0.5 - percent);
    let angleTo = Math.PI * (0.5 + percent);
    floor.beginPath();
    floor.arc(radius + padding, floor.height - radius - padding, radius, angleFrom, angleTo);
    floor.closePath();
    floor.fill();
    floor.restore();
}

// TODO
function renderHeroBelt() {
    floor.save();
    let tile = potionSprite;
    let tw = tile.width / tile.steps;
    let th = tile.height / tile.angles;
    for (let i = 0; i < hero.belt.size; i++) {
        floor.drawImage(tile,
            tw * 2, th * 3, tw, th,
            200 + tw * i, 600, tw, th);
        let p = hero.belt.items[i];
        if (p) {
            floor.drawImage(tile,
                tw * p.step, th * p.angle, tw, th,
                200 + tw * i, 600, tw, th);
        }
    }
    floor.restore();
}

function loadZb(order, click) {
    let tmp_zb = [], zb = [];
    let all = [monsters, potions, barrels, click ? [] : [hero], click ? [] : walls];
    for (let t in all)
        for (let m in all[t])
            if (all[t][m].isAboveHero())
                tmp_zb.push(all[t][m]);
    // asc sort
    tmp_zb.sort(function (a, b) { let c = (b.x + b.offset_x) + (b.y + b.offset_y) - (a.x + a.offset_x) - (a.y + a.offset_y); return order ? c : 0 - c });
    all = [coins, deathmobs, tmp_zb];
    for (let i in all) for (let j in all[i]) zb.push(all[i][j]);
    return zb;
}

function processClick() {
    let zb = loadZb(true, true);
    let cx = (floor.click_x - floor.click_y) * acos,
        cy = (floor.click_x + floor.click_y) / 2 * asin;
    for (let i in zb) {
        let m = zb[i];
        let spr = m.sprite;
        let sx = (m.x - m.y) * acos + m.offset_x,
            sy = (m.x + m.y) / 2 * asin + m.offset_y;

        let spr_w = spr.angles ? spr.width / spr.angles : spr.width;
        let spr_h = spr.steps ? spr.height / spr.steps : spr.height;
        // Check if click was to attack?
        if (cx >= sx - spr_w / 2 && cx <= sx + spr_w / 2 && cy >= sy - spr_h && cy <= sy) {
            // Attack
            m.use(hero)
            return true;
        }
    }
    return false;
}

function renderObjects() {
    let zb = loadZb(false);
    for (z in zb) {
        let monster = zb[z];
        floor.save()
        let sx = (monster.x - monster.y) * acos + monster.offset_x,
            sy = (monster.x + monster.y) / 2 * asin + monster.offset_y;
        let tile = monster.sprite;
        // render sprite
        let tw = tile.width;
        let th = tile.height
        if (tile.steps && tile.angles) {
            tw /= tile.steps;
            th /= tile.angles;
            floor.drawImage(tile,
                tw * monster.step, th * monster.angle, tw, th,
                Math.round(sx - tw / 2 - tile.offsetX), Math.round(sy - th), tw, th);
        } else {
            floor.drawImage(tile, Math.round(sx - tile.width / 2) + 1, Math.round(sy - tile.height) + 1);
        }
        floor.restore()
        // health line
        if (monster.health && monster.origin_health && monster != hero) {
            floor.save()
            floor.globalAlpha = 0.7
            sy -= 90;
            let lm = Math.floor(monster.origin_health / 20),
                lr = Math.floor(monster.health / 20)
            floor.fillStyle = "black"
            floor.fillRect(sx - lm / 2 - 1, sy, lm + 2, 6);
            floor.fillStyle = "red"
            floor.fillRect(sx - lm / 2, sy + 1, lr, 4);
            floor.restore()
        }
    }
}

// TODO
function renderFloor() {
    floor.save();
    floor.translate(floor.width / 2 - th, floor.height / 2);// translate to center
    let fdx = Math.floor(hero.x / s), // hero tile
        fdy = Math.floor(hero.y / s),
        miny = Math.max(0, fdy - visible), // calculate camera visible tiles
        maxy = Math.min(level.floor.map.length - 1, fdy + visible),
        minx = Math.max(0, fdx - visible),
        maxx = Math.min(level.floor.map[0].length - 1, fdx + visible);
    // translate to hero
    let mrx = hero.x * acos - hero.y * asin,
        mry = hero.x * asin + hero.y * acos;
    mry = mry / 2;
    floor.translate(-mrx, -mry);
    // render
    for (let y = miny; y <= maxy; y++) {
        for (let x = minx; x <= maxx; x++) {
            let tile = getFloorTile(x, y);
            if (tile) {
                let tx = (x - y) * th;
                let ty = (x + y) * th / 2;
                floor.drawImage(tile, tx, ty, tile.width + 0.707, tile.height + 0.707);
            }
        }
    }
    floor.translate(th, 0); // retranslate for diamond textures
    renderObjects();
    floor.restore();
}

function renderMap() {
    floor.save();
    floor.translate(floor.width / 2, floor.height / 2);
    let sc = 0.5;
    floor.scale(1 * sc, 0.5 * sc);
    floor.rotate(Math.PI * 0.25);
    floor.translate(-hero.x, -hero.y);
    floor.fillStyle = "rgba(0,0,0,0.5)";
    let wallOffset = [];
    for (let y = 4; y >= 0; y--) for (let x = 0; x <= 4; x++) wallOffset.push({ x: x * s / 5, y: y * s / 5 });
    for (let i in walls) {
        let v = walls[i], walk = v.header.walk;
        if (v.header.orientation == 4) continue;
        for (let j = 0; j < 25; j++) if (walk[j] == 1) floor.fillRect(v.x + wallOffset[j].x, v.y + wallOffset[j].y, s / 5, s / 5);
    }
    floor.fillRect(hero.x, hero.y, s / 5, s / 5);
    floor.restore();
}


// TODO
function remove(ar, v) { let i = ar.indexOf(v); if (i >= 0) ar.splice(i, 1); }
function randomx() { return Math.floor(Math.random() * (level.floor.map[0].length) * s); }
function randomy() { return Math.floor(Math.random() * (level.floor.map.length) * s); }