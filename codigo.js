var luax;
var luay;
var mundox1;
var mundoy1;
var mundox2;
var mundoy2;
var esx1;
var esy1;
var esx2;
var esy2;
var esx3;
var esy3;
var esx4;
var esy4;
var esx5;
var esy5;
var esx6;
var esy6;
var nave;
var vida;
var svida;
var meteoro;
var x = 50;
var y = 10;
var g = 1350;
var h;
var e = 1350;
var f;
var c = 1350;
var d;
var a = 1350;
var b;
var cont = 0;
var estrela;
var mundo1;
var mundo2;
var lua;
var nivel = 0;
var score = 0;
var click = 1;

function preload() {
    nave = loadImage("nave.png");
    vida = loadImage("vida.png");
    svida = loadImage("life.png");
    meteoro = loadImage("meteoro.png");
    estrela = loadImage("estrela1.png");
    mundo1 = loadImage("mundo1.png");
    mundo2 = loadImage("mundo2.png");
    lua = loadImage("lua1.png");
}
function setup() {
    createCanvas(1350, 520);
    luax = random(1350);
    luay = random(420);
    mundox1 = random(1350);
    mundoy1 = random(420);
    mundox2 = random(1350);
    mundoy2 = random(420);
    esx1 = random(1350);
    esy1 = random(460);
    esx2 = random(1350);
    esy2 = random(460);
    esx3 = random(1350);
    esy3 = random(460);
    esx4 = random(1350);
    esy4 = random(460);
    esx5 = random(1350);
    esy5 = random(460);
    esx6 = random(1350);
    esy6 = random(460);
    b = random(430);
    d = random(430);
    h = random(430);
}
function draw() {
    background(0);

    if (keyIsDown(UP_ARROW))
        y -= 12;

    if (keyIsDown(DOWN_ARROW))
        y += 12;
    //lua 
    luax -= 1.75

    if (luax <= -300) {
        luax = 1350;
        luay = random(420);
    }
    //mundos
    mundox1 -= 1.5
    mundox2 -= 2

    if (mundox1 <= -400) {
        mundox1 = 1350;
        mundoy1 = random(420);
    }
    if (mundox2 <= -125) {
        mundox2 = 1350;
        mundoy2 = random(420);
    }


    // estrelas 
    esx1 -= 2.5
    esx2 -= 3
    esx3 -= 3
    esx4 -= 4
    esx5 -= 4
    esx6 -= 2.5

    if (esx1 <= 0) {
        esx1 = 1350;
        esy1 = random(430);
    }
    if (esx2 <= 0) {
        esx2 = 1350;
        esy2 = random(430);
    }
    if (esx3 <= 0) {
        esx3 = 1350;
        esy3 = random(430);
    }
    if (esx4 <= 0) {
        esx4 = 1350;
        esy4 = random(430);
    }
    if (esx5 <= 0) {
        esx5 = 1350;
        esy5 = random(430);
    }
    if (esx6 <= 0) {
        esx6 = 1350;
        esy6 = random(430);
    }
    //meteoro 1
    a -= 10
    //meteoro 2
    c -= 3
    //vida
    e -= 8
    //meteoro 3
    g -= 9

    //meteoro 1
    if (dist(x, y, a, b) < 55) {
        a = 1350;
        b = random(430);
        cont++;
    } else {
        if (a <= -100) {
            a = 1350;
            b = random(430);
            score++
        }
    }
    //meteoro 2
    if (dist(x, y, e, f) < 55) {
        e = 1350;
        f = random(430);
        cont++;
    } else {
        if (e <= -100) {
            e = 1350;
            f = random(430);
            score++
        }
    }
    //meteoro 3
    if (dist(x, y, g, h) < 55) {
        g = 1350;
        h = random(430);
        cont++;
    } else {
        if (g <= -100) {
            g = 1350;
            h = random(430);
            score++
        }
    }
    //vida
    if (dist(x, y, c, d) < 55) {
        c = 1350;
        d = random(430);
        cont--;
    } else {
        if (c <= 0) {
            c = 1350;
            d = random(430);
        }
    }
    //Níveis
    if (nivel == 0) {
        luax = random(1350);
        luay = random(420);
        mundox1 = random(1350);
        mundoy1 = random(420);
        mundox2 = random(1350);
        mundoy2 = random(420);
        esx1 = random(1350);
        esy1 = random(460);
        esx2 = random(1350);
        esy2 = random(460);
        esx3 = random(1350);
        esy3 = random(460);
        esx4 = random(1350);
        esy4 = random(460);
        esx5 = random(1350);
        esy5 = random(460);
        esx6 = random(1350);
        esy6 = random(460);
        a = 1350
        c = random(430);
        e = 1350
        f = random(430);
        g = 1350
        h = random(430);
        background(0);
        textSize(30);
        fill(255);
        text("RUNNING THROUGH THE STARS", 410, 210);
        textSize(16);
        text("Mouse click to start", 560, 260);
        if (mouseIsPressed) {
            nivel = 1;
        }


    }
    if (nivel == 1) {
        luax -= 1.75
        mundox1 -= 1.5
        mundox2 -= 2.0
        esx1 -= 2.5
        esx2 -= 3
        esx3 -= 3
        esx4 -= 4
        esx5 -= 4
        esx6 -= 2.5
        a -= 10
        c -= 3
        e -= 8
        g -= 9


    }
    if (score >= 50 && score < 100) {
        nivel = 2;
        luax -= 1.9
        mundox1 -= 1.7
        mundox2 -= 2.3
        esx1 -= 3.5
        esx2 -= 4
        esx3 -= 4
        esx4 -= 5
        esx5 -= 5
        esx6 -= 3.5
        a -= 12
        c -= 4
        e -= 10
        g -= 11
    }
    if (score >= 100 && score < 150) {
        nivel = 3;
        luax -= 2.1
        mundox1 -= 1.9
        mundox2 -= 2.5
        esx1 -= 4.5
        esx2 -= 5
        esx3 -= 5
        esx4 -= 6
        esx5 -= 6
        esx6 -= 4.5
        a -= 14
        c -= 5
        e -= 12
        g -= 13
    }
    if (score >= 150 && score < 200) {
        nivel = 4;
        luax -= 2.3
        mundox1 -= 2.1
        mundox2 -= 2.7
        esx1 -= 5.5
        esx2 -= 6
        esx3 -= 6
        esx4 -= 7
        esx5 -= 7
        esx6 -= 5.5
        a -= 16
        c -= 6
        e -= 14
        g -= 15
    }
    if (score >= 200 && score < 350) {
        nivel = 5;
        luax -= 2.5
        mundox1 -= 2.3
        mundox2 -= 2.9
        esx1 -= 6.5
        esx2 -= 7
        esx3 -= 7
        esx4 -= 8
        esx5 -= 8
        esx6 -= 6.5
        a -= 18
        c -= 7
        e -= 16
        g -= 17
    }
    if (score >= 350) {
        nivel = 6;
        luax -= 2.4
        mundox1 -= 2.7
        mundox2 -= 3.3
        esx1 -= 8.5
        esx2 -= 9
        esx3 -= 9
        esx4 -= 10
        esx5 -= 10
        esx6 -= 8.5
        a -= 22
        c -= 11
        e -= 20
        g -= 21
    }
    //imagens mundo
    image(mundo1, mundox1, mundoy1, 200, 200);
    image(lua, luax, luay, 150, 150);
    image(mundo2, mundox2, mundoy2, 120, 90);
    //imagens estrela
    image(estrela, esx1, esy1, 20, 20);
    image(estrela, esx2, esy2, 25, 25);
    image(estrela, esx3, esy3, 25, 25);
    image(estrela, esx4, esy4, 30, 30);
    image(estrela, esx5, esy5, 30, 30);
    image(estrela, esx6, esy6, 20, 20);
    //imagens vida  
    image(vida, 20, 480, 20, 20);
    image(vida, 50, 480, 20, 20);
    image(vida, 80, 480, 20, 20);
    image(vida, c, d, 20, 20);
    //contagem de vidas
    if (cont == 1) {
        fill(0);
        rect(80, 480, 20, 20);
    }
    if (cont == 2) {
        fill(0);
        rect(80, 480, 20, 20);
        fill(0);
        rect(50, 480, 20, 20);
    }
    if (cont == 0) {
        d = 1000;
    }
    //limite nave
    if (y > 430) {
        y = 430;
    }
    if (y < 15) {
        y = 15;
    }

    // imagens nave e meteoro 
    image(meteoro, g, h, 90, 40);
    image(meteoro, e, f, 90, 40);
    image(meteoro, a, b, 90, 40);
    image(nave, x, y, 50, 50);

    textSize(16);
    fill(255);
    text("Level: " + nivel + "  Score: " + score, 120, 500);
    if (cont >= 3) {
        background(0);
        textSize(30);
        fill(255);
        text("GAME OVER", 540, 210);
        textSize(20);
        text("SCORE: " + score, 590, 240);
        textSize(16);
        text("press " + "'f5'" + " to restart the game", 540, 270);
        luax += 100
        mundox1 += 100
        mundox2 += 100
        esx1 += 100
        esx2 += 100
        esx3 += 100
        esx4 += 100
        esx5 += 100
        esx6 += 100
        a += 100
        c += 100
        e += 100
        g += 100
        if (mouseIsPressed) {
            click = 0;
            nivel = 1;
        }
    }


}  