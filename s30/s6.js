function demSoLuongTamGiac(arr) {
    let dem = 0;
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {
        let a = arr[i];
        let b = arr[i + 1];
        let c = arr[i + 2];

        if (a + b > c) {
            dem++;
        }
    }
    return dem;
}
let mangSoNguyen = [4, 6, 3, 7];
let ketQua = demSoLuongTamGiac(mangSoNguyen);
console.log("Số lượng tam giác có thể tạo ra từ mảng:", ketQua);
