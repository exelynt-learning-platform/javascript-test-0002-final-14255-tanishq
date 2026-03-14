let n = 5;

for (let i = n - 1; i >= 0; i--) {

    let num = 1;
    let row = "";

    // spaces for center alignment
    for (let s = 0; s < n - i - 1; s++) {
        row += " ";
    }

    // print Pascal values
    for (let j = 0; j <= i; j++) {
        row += num + " ";
        num = num * (i - j) / (j + 1);
    }

    console.log(row.trim());
}
