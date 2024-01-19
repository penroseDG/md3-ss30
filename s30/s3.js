function sapXepChuoi(chuoi) {
    let kyTuChu = [];
    let kyTuSo = [];
    let kyTuDacBiet = [];
    for (let i = 0; i < chuoi.length; i++) {
        let kyTu = chuoi.charAt(i);
        if (/[a-zA-Z]/.test(kyTu)) {
            kyTuChu.push(kyTu);
        } else if (/[0-9]/.test(kyTu)) {
            kyTuSo.push(kyTu);
        } else {
            kyTuDacBiet.push(kyTu);
        }
    }
    let ketQua = kyTuChu.concat(kyTuSo, kyTuDacBiet);
    return ketQua;
}
let chuoiNhap = prompt(" nhap vao 1 chuoi bat ky : ");
let ketQuaSapXep = sapXepChuoi(chuoiNhap);

console.log("chuoi sau khi duoc sap xep nek :", ketQuaSapXep);
