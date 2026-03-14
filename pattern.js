let n = 5;

for (let i = n; i >= 1; i--) {

    let num = 1;
    let line = "";

    // leading spaces
    for (let s = 0; s < n - i; s++) {
        line += " ";
    }

    // Pascal numbers
    for (let j = 0; j < i; j++) {
        line += num + " ";
        num = num * (i - j - 1) / (j + 1);
    }

    console.log(line);
}
