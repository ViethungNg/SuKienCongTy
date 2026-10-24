// --- 1. CẤU HÌNH SỐ LƯỢNG GIẢI ---
// Định dạng: Giải: Số lượng

const CONFIG_GIAI_THUONG = {
    1: { name: "GIẢI ĐẶC BIỆT", detail: "Máy lọc nước Toshiba H2396", count: 1, img: "img/giaidacbiet.png" },
    2: { name: "GIẢI NHẤT", detail: "Máy hàn nhiệt", count: 2, img: "img/giai1.png" },
    3: { name: "GIẢI NHÌ", detail: "Nồi chiên không dầu Kungfu", count: 3, img: "img/giai2.png" },
    4: { name: "GIẢI BA", detail: "Lẩu nướng đa năng 2in1 - 7826", count: 6, img: "img/giai3.png" }
    // ... các giải khác
};
const KICH_BAN_QUAY = [
    // --- GIẢI BA (5 giải trong 1 lần bấm quay) ---
    { prizeId: 4, count: 6, label: "GIẢI BA", presenter: "Mr Long & Mr Kế" },

    // --- GIẢI NHÌ (2 giải trong 1 lần bấm quay) ---
    { prizeId: 3, count: 3, label: "GIẢI NHÌ", presenter: "Mr Thành Nam" },

    // --- GIẢI NHẤT (1 giải trong 1 lần bấm quay) ---
    { prizeId: 2, count: 2, label: "GIẢI NHẤT", presenter: "Mr Trường" },
    // --- GIẢI ĐẶC BIỆT (1 giải trong 1 lần bấm quay) ---
    { prizeId: 1, count: 1, label: "GIẢI ĐẶC BIỆT", presenter: "Mr Trường" }
];


// --- 2. DANH SÁCH KHÁCH MỜI / ĐẠI LÝ ---
// Dữ liệu sẽ được tải trực tiếp từ Supabase (bảng 'khach_moi')
const DANH_SACH_NHAN_VIEN = [];