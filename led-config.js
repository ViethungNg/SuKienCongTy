/**
 * ====================================================================
 * 📺 CẤU HÌNH KÍCH THƯỚC HỆ THỐNG MÀN HÌNH LED SÂN KHẤU
 * ====================================================================
 * 
 * BẠN CÓ THỂ CHỈNH SỬA KÍCH THƯỚC THỰC TẾ (ĐƠN VỊ: MÉT) DƯỚI ĐÂY:
 * - Hệ thống sẽ TỰ ĐỘNG tính toán tỉ lệ % chia 3 cột (Trái - Giữa - Phải).
 * - Tự động đồng bộ vị trí hiệu ứng pháo hoa, hạt bay và modal popup vào đúng màn LED chính.
 * 
 * THÔNG SỐ HIỆN TẠI:
 * - Màn LED chính giữa: 6.720m x 3.456m
 * - Màn LED phụ trái:   2.000m x 3.456m
 * - Màn LED phụ phải:   2.000m x 3.456m
 * - Chiều cao chung:    3.456m
 * ====================================================================
 */

const LED_CONFIG = {
  // 1. Màn LED chính (ở giữa) - Kích thước thực tế (Mét)
  MAIN_WIDTH: 6.720,   // Chiều rộng màn chính (6.720m)
  MAIN_HEIGHT: 3.456,  // Chiều cao màn chính (3.456m)

  // 2. Màn LED phụ bên trái - Kích thước thực tế (Mét)
  LEFT_WIDTH: 2.000,   // Chiều rộng màn phụ trái (2.000m)
  LEFT_HEIGHT: 3.456,  // Chiều cao màn phụ trái (3.456m)

  // 3. Màn LED phụ bên phải - Kích thước thực tế (Mét)
  RIGHT_WIDTH: 2.000,  // Chiều rộng màn phụ phải (2.000m)
  RIGHT_HEIGHT: 3.456, // Chiều cao màn phụ phải (3.456m)

  // 4. Chiều cao bảng Danh Sách Trúng Giải trên màn LED chính (Mặc định: '55vh' ~ 1/2 đến gần 2/3 màn hình)
  // Bạn có thể tùy chỉnh: '50vh' (đúng 1 nửa màn), '55vh' (chuẩn đẹp nhất), '66vh' (2/3 màn)
  SUMMARY_TABLE_MAX_HEIGHT: '58vh',
};

/**
 * Tự động tính toán tỉ lệ và áp dụng giao diện CSS
 */
(function applyLedConfiguration() {
  const leftW = Number(LED_CONFIG.LEFT_WIDTH) || 2.0;
  const mainW = Number(LED_CONFIG.MAIN_WIDTH) || 6.72;
  const rightW = Number(LED_CONFIG.RIGHT_WIDTH) || 2.0;
  const totalW = leftW + mainW + rightW;

  const leftPercent = (leftW / totalW) * 100;
  const mainPercent = (mainW / totalW) * 100;
  const rightPercent = (rightW / totalW) * 100;

  // Cập nhật hoặc tạo thẻ style động ghi đè layout
  let styleEl = document.getElementById('led-dynamic-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'led-dynamic-styles';
    document.head.appendChild(styleEl);
  }

  styleEl.textContent = `
    :root {
      --led-left-percent: ${leftPercent.toFixed(4)}%;
      --led-main-percent: ${mainPercent.toFixed(4)}%;
      --led-right-percent: ${rightPercent.toFixed(4)}%;
      --led-summary-height: ${LED_CONFIG.SUMMARY_TABLE_MAX_HEIGHT || '55vh'};
    }
    .container {
      grid-template-columns: ${leftW}fr ${mainW}fr ${rightW}fr !important;
    }
    #fireworks,
    #tsparticles,
    .modal-overlay {
      left: ${leftPercent.toFixed(4)}% !important;
      width: ${mainPercent.toFixed(4)}% !important;
    }
    .final-table-container.three-column-layout {
      max-height: ${LED_CONFIG.SUMMARY_TABLE_MAX_HEIGHT || '55vh'} !important;
    }
  `;

  console.log(`[LED Config] Đã cấu hình hệ thống màn hình LED:`, {
    'Màn trái': `${leftW}m (${leftPercent.toFixed(2)}%)`,
    'Màn chính': `${mainW}m (${mainPercent.toFixed(2)}%)`,
    'Màn phải': `${rightW}m (${rightPercent.toFixed(2)}%)`,
    'Tổng chiều rộng': `${totalW.toFixed(3)}m`
  });
})();
