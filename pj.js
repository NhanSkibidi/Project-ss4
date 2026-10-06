let username = "";
let password = "";
let loginSuccess = false;
let loginCount = 0;
while (loginCount < 3) {
    username = prompt("Nhập tài khoản:");
    if (username === null) {
        alert("Đăng nhập bị hủy");
        break;
    }
    username = username.trim();
    password = prompt("Nhập mật khẩu:");
    if (password === null) {
        alert("Đăng nhập bị hủy");
        break;
    }
    password = password.trim();
    if (username !== "admin") {
        alert("Sai tài khoản");
        loginCount++;
    } else if (password !== "12345") {
        alert("Sai mật khẩu");
        loginCount++;
    } else {
        loginSuccess = true;
        alert("Đăng nhập thành công!");
        break;
    }
}
if (loginSuccess === false) {
    if (loginCount >= 3) {
        alert("Tài khoản đã bị khóa");
    }
} else {
    let choice = "";
    while (choice !== "5") {
        console.log("======================================");
        console.log("   HỆ THỐNG QUẢN TRỊ THƯ VIỆN");
        console.log("======================================");
        console.log("1. Phân loại mã số sách");
        console.log("2. Thiết kế bản đồ kho sách");
        console.log("3. Dự toán phí bảo trì sách");
        console.log("4. Tìm mã số sách may mắn");
        console.log("5. Thoát chương trình");
        console.log("======================================");
        let inputChoice = prompt("Nhập lựa chọn:");
        if (inputChoice === null) {
            console.log("Lựa chọn không hợp lệ");
            continue;
        }
        choice = inputChoice.trim();
        switch (choice) {
            case "1":
                {
                    let totalBooks = 0;
                    let scienceBooks = 0;
                    let artBooks = 0;
                    while (true) {
                        let input = prompt("Nhập mã số sách (nhập 0 để kết thúc):");
                        if (input === null) {
                            console.log("Đã hủy chức năng");
                            break;
                        }
                        input = input.trim();
                        if (input === "") {
                            console.log("Vui lòng nhập mã số sách");
                            continue;
                        }
                        let bookCode = Number(input);
                        if (Number.isNaN(bookCode) || !Number.isInteger(bookCode)) {
                            console.log("Mã sách phải là số nguyên");
                            continue;
                        }
                        if (bookCode === 0) {
                            break;
                        }
                        totalBooks++;
                        if (bookCode % 2 === 0) {
                            scienceBooks++;
                        } else {
                            artBooks++;
                        }
                    }
                    console.log("\n========== KẾT QUẢ ==========");
                    console.log("Tổng số mã sách:", totalBooks);
                    console.log("Sách khoa học:", scienceBooks);
                    console.log("Sách nghệ thuật:", artBooks);
                    console.log("==============================");
                    break;
                }
            case "2":
                {
                    let rows = Number(prompt("Nhập số lượng hàng:"));
                    let columns = Number(prompt("Nhập số lượng cột:"));
                    if (!Number.isInteger(rows) || rows <= 0 ||
                        !Number.isInteger(columns) || columns <= 0) {
                        console.log("Số hàng và số cột phải là số nguyên lớn hơn 0");
                        break;
                    }
                    console.log("========== BẢN ĐỒ KHO ==========");
                    for (let row = 1; row <= rows; row++) {
                        for (let column = 1; column <= columns; column++) {
                            if (row === column) {
                                console.log("[" + row + "-" + column + "] (Kệ ưu tiên)");
                            } else {
                                console.log("[" + row + "-" + column + "]");
                            }
                        }
                    }
                    console.log("=================================");
                    break;
                }
            case "3":
                {
                    let bookCount = Number(prompt("Nhập số lượng sách hiện tại:"));
                    let maintenanceFee = Number(prompt("Nhập phí bảo trì gốc cho 1 cuốn:"));
                    let years = Number(prompt("Nhập số năm dự toán:"));
                    if (!Number.isInteger(bookCount) || bookCount <= 0 ||
                        !Number.isInteger(maintenanceFee) || maintenanceFee <= 0 ||
                        !Number.isInteger(years) || years <= 0) {
                        console.log("Dữ liệu phải là số nguyên lớn hơn 0");
                        break;
                    }
                    let currentFee = maintenanceFee;
                    console.log("========== CHI PHÍ BẢO TRÌ ==========");
                    for (let year = 1; year <= years; year++) {
                        let totalCost = bookCount * currentFee;
                        console.log(
                            "Năm " + year +
                            " - Đơn giá: " + currentFee +
                            " VNĐ - Tổng phí: " + totalCost + " VNĐ"
                        );
                        currentFee = currentFee * 1.1;
                    }
                    console.log("======================================");
                    break;
                }
            case "4":
                {
                    let n = Number(prompt("Nhập giới hạn N:"));

                    if (!Number.isInteger(n) || n <= 0) {
                        console.log("N phải là số nguyên lớn hơn 0");
                        break;
                    }
                    let luckyCount = 0;
                    let luckyCodes = "";
                    for (let i = 1; i <= n; i++) {
                        if (i % 3 === 0 && i % 5 !== 0) {
                            luckyCodes += i + " ";
                            luckyCount++;
                        }
                    }
                    console.log("========== MÃ SÁCH MAY MẮN ==========");
                    if (luckyCount === 0) {
                        console.log("Không có mã sách may mắn");
                    } else {
                        console.log("Danh sách:", luckyCodes);
                        console.log("Tổng số mã may mắn:", luckyCount);
                    }
                    console.log("=====================================");
                    break;
                }
            case "5":
                console.log("Hệ thống đang đăng xuất...");
                break;

            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    }
}