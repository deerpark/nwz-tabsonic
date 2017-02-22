function isIntersecting(r1, r2) {
    return !(r2.x > (r1.x + r1.width) ||
        (r2.x + r2.width) < r1.x ||
        r2.y > (r1.y + r1.height) ||
        (r2.y + r2.height) < r1.y);
}

function shuffleRandom(n) {
    var ar = new Array();
    var temp;
    var rnum;

    for (var i = 1; i <= n; i++) {
        ar.push(i);
    }

    for (var i = 0; i < ar.length; i++) {
        rnum = Math.floor(Math.random() * n);
        temp = ar[i];
        ar[i] = ar[rnum];
        ar[rnum] = temp;
    }

    return ar;
}