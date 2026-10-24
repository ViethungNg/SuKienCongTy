// ==============================================================================
// ⏱️ CẤU HÌNH THỜI GIAN VÀ TỐC ĐỘ QUAY CHO TỪNG GIẢI THƯỞNG
// Đơn vị tính: mili-giây (1000ms = 1 giây)
// ==============================================================================

const CONFIG_TOC_DO_QUAY = {
  // --- GIẢI ĐẶC BIỆT (prizeId = 1) ---
  1: {
    baseSpinTime: 10000,  // Thời gian 3 ô cùng quay tít liên tục (10 giây)
    stopDelay: 1500,      // Độ trễ chờ giữa 2 ô số dừng kế tiếp (1.5 giây)
    slowDownTime: 8000    // Thời gian hãm phanh giảm tốc từng ô số (8 giây)
  },

  // --- GIẢI NHẤT (prizeId = 2) ---
  2: {
    baseSpinTime: 7000,  // Thời gian 3 ô cùng quay tít liên tục (7 giây)
    stopDelay: 1200,      // Độ trễ chờ giữa 2 ô số dừng kế tiếp (1.2 giây)
    slowDownTime: 7000    // Thời gian hãm phanh giảm tốc từng ô số (7 giây)
  },

  // --- GIẢI NHÌ (prizeId = 3) ---
  3: {
    baseSpinTime: 6000,   // Thời gian 3 ô cùng quay tít liên tục (6 giây)
    stopDelay: 1700,      // Độ trễ chờ giữa 2 ô số dừng kế tiếp (1.7 giây)
    slowDownTime: 6000    // Thời gian hãm phanh giảm tốc từng ô số (6 giây)
  },

  // --- GIẢI BA (prizeId = 4) ---
  4: {
    baseSpinTime: 5000,   // Thời gian 3 ô cùng quay tít liên tục (5 giây)
    stopDelay: 1500,      // Độ trễ chờ giữa 2 ô số dừng kế tiếp (1.5 giây)
    slowDownTime: 5000    // Thời gian hãm phanh giảm tốc từng ô số (5 giây)
  }
};

// Cấu hình dự phòng cho các giải khác (nếu có thêm giải mới)
const DEFAULT_SPIN_CONFIG = {
  baseSpinTime: 9000,
  stopDelay: 1200,
  slowDownTime: 5000
};

/**
 * Lấy cấu hình thời gian quay dựa theo mã giải thưởng (prizeId)
 * @param {number|string} prizeId 
 * @returns {{baseSpinTime: number, stopDelay: number, slowDownTime: number}}
 */
function getPrizeSpinConfig(prizeId) {
  if (typeof CONFIG_TOC_DO_QUAY !== "undefined" && CONFIG_TOC_DO_QUAY[prizeId]) {
    return CONFIG_TOC_DO_QUAY[prizeId];
  }
  return DEFAULT_SPIN_CONFIG;
}
