# Kd's Tools

## Chạy ứng dụng và signaling server

```bash
npm install
npm start
```

Mở `http://localhost:3000`. Trên production, đặt Node service sau reverse proxy cung cấp HTTPS; trang dùng WSS ở cùng origin. `GET /health` dùng cho health check. Server chỉ phục vụ các tệp giao diện cho phép, `/signal` cho signaling WebSocket và `/ice-servers` cho cấu hình ICE.

Signaling server chỉ chuyển offer/answer/ICE giữa hai peer, giới hạn phòng hai thiết bị và tự hết hạn phòng chờ sau 10 phút. Nội dung file được gửi trực tiếp qua WebRTC DataChannel (DTLS), không đi qua Node server. Mã phòng ngẫu nhiên đóng vai trò secret của lời mời; chỉ chia sẻ link/QR với thiết bị nhận dự định.

### Cấu hình TURN (tùy chọn)

STUN được bật mặc định. Một số NAT/firewall không cho phép kết nối P2P trực tiếp; khi đó cần TURN tương thích TURN REST API (ví dụ coturn với shared secret). Đặt biến môi trường:

```text
TURN_URLS=turns:turn.example.com:5349,turn:turn.example.com:3478
TURN_SHARED_SECRET=<shared-secret-it-nên-dài-ngẫu-nhiên>
```

Server tạo username/password TURN có thời hạn một giờ bằng HMAC-SHA1, không gửi shared secret tới trình duyệt. TURN có thể relay lưu lượng khi direct P2P thất bại; cấu hình giới hạn/quota dịch vụ TURN riêng để tránh lạm dụng. Có thể đặt `STUN_URLS` thành danh sách URL phân cách bằng dấu phẩy để thay STUN mặc định.

Nếu website giao diện được đặt ở origin khác, cấu hình `ALLOWED_ORIGINS` thành danh sách origin phân cách bằng dấu phẩy, ví dụ `https://tools.example.com`. Mặc định WebSocket chỉ chấp nhận Origin cùng host.

## Kiểm thử

```bash
npm test
```
