function vietHoaCuoiTungTu(chuoi) {
    let mangTu = chuoi.split(" ");
    for (let i = 0; i < mangTu.length; i++) {
        let tu = mangTu[i];
        if (tu.length > 0) {
            mangTu[i] = tu.slice(0, -1) + tu.slice(-1).toUpperCase();
        }
    }

    return mangTu;
}
let chuoiNhap = prompt("Nhập vào một chuỗi bất kỳ: ");
let ketQua = vietHoaCuoiTungTu(chuoiNhap);

console.log("Mảng các từ sau khi viết hoa ký tự cuối cùng của mỗi từ:", ketQua);
