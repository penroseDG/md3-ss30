
function laSoNguyenTo(so) {
    if (so <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) {
            return false;
        }
    }
    return true;
}
let mangSoNguyen = [2, 5, 7, 8, 11, 13, 17, 19, 23, 29];

console.log("Cac so nguyen to trong mang:");
for (let i = 0; i < mangSoNguyen.length; i++) {
    if (laSoNguyenTo(mangSoNguyen[i])) {
        console.log(mangSoNguyen[i]);
    }
}
