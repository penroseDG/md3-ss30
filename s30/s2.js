let n = prompt(" Nhap vao 1 so nguyen duong n: ");
n = parseInt(n);
if ( n <= 0) {
    console.log(" nhap 1 so nguyen duong bat ki vao ");
} else {
    let soLe = [];
    for (let i = 1; i <= n; i += 2) {
        soLe.push(i);
    }
    console.log("Cac so nguyen duong tu 0 den n", n, "là:", soLe);
    let tong = soLe.reduce((tong, so) => tong + so, 0);
    if (tong % 2 === 1) {
        console.log(" tong cac so le la 1 so le la :", tong);
    } else {
        console.log(" tong cac cau so le khong phai la 1 so le :");
    }
}
