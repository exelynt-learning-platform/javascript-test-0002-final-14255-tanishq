let n = 5;

function combination(n, r) {
    let res = 1;

    for (let i = 0; i < r; i++) {
        res = res * (n - i) / (i + 1);
    }

    return res;
}

for (let i = n - 1; i >= 0; i--) {

    let line = "";

    // spaces for alignment
    for (let s = 0; s < (n - 1 - i); s++) {
        line += " ";
    }

    // Pascal values
    for (let j = 0; j <= i; j++) {
        line += combination(i, j) + " ";
    }

    console.log(line);
}
