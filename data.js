// --- 1. CẤU HÌNH SỐ LƯỢNG GIẢI ---
// Định dạng: Giải: Số lượng

const CONFIG_GIAI_THUONG = {
    2: { name: "GIẢI NHẤT", detail: "Điều hòa Casper 9000 BTU", count: 1, img: "img/giai2.png" },
    3: { name: "GIẢI NHÌ", detail: "Xe Đạp thể thao", count: 2, img: "img/giai3.png" },
    4: { name: "GIẢI BA", detail: "Máy hàn Ống nhiệt 800W", count: 5, img: "img/giai4.png" }
    // ... các giải khác
};
const KICH_BAN_QUAY = [
    // --- GIẢI BA (5 giải trong 1 lần bấm quay) ---
    { prizeId: 4, count: 5, label: "GIẢI BA", presenter: "Mr Long & Mr Kế" },

    // --- GIẢI NHÌ (2 giải trong 1 lần bấm quay) ---
    { prizeId: 3, count: 2, label: "GIẢI NHÌ", presenter: "Mr Thành Nam" },

    // --- GIẢI NHẤT (1 giải trong 1 lần bấm quay) ---
    { prizeId: 2, count: 1, label: "GIẢI NHẤT", presenter: "Mr Trường" }
];


// --- 2. DANH SÁCH KHÁCH MỜI / ĐẠI LÝ ---
// Dữ liệu sẽ được tải trực tiếp từ Supabase (bảng 'khach_moi')
const DANH_SACH_NHAN_VIEN = [];