export default {
  async up(queryInterface) {
    const questions = [];

    // Thiết Kế Web (30 câu hỏi, quiz_id: 1, 3–22)
    const webQuestions = [
      { id: 4, content: 'Thẻ HTML nào dùng để tạo liên kết?', major: 'Thiết Kế Web', explaination: 'Thẻ <a> tạo liên kết.', score: 5, quiz_id: 1 },
      { id: 5, content: 'CSS property nào thay đổi màu nền?', major: 'Thiết Kế Web', explaination: 'background-color thay đổi màu nền.', score: 5, quiz_id: 1 },
      { id: 6, content: 'Hàm nào trong JS lấy phần tử theo ID?', major: 'Thiết Kế Web', explaination: 'getElementById() lấy phần tử.', score: 10, quiz_id: 3 },
      { id: 7, content: 'Flexbox thuộc tính nào căn giữa?', major: 'Thiết Kế Web', explaination: 'justify-content: center căn giữa.', score: 10, quiz_id: 4 },
      { id: 8, content: 'ES6 khai báo biến dùng từ khóa nào?', major: 'Thiết Kế Web', explaination: 'let và const dùng trong ES6.', score: 10, quiz_id: 5 },
      { id: 9, content: 'Media query dùng để làm gì?', major: 'Thiết Kế Web', explaination: 'Thiết kế responsive.', score: 10, quiz_id: 6 },
      { id: 10, content: 'Bootstrap class nào tạo container?', major: 'Thiết Kế Web', explaination: 'class="container".', score: 5, quiz_id: 7 },
      { id: 11, content: 'CSS Grid thuộc tính nào chia cột?', major: 'Thiết Kế Web', explaination: 'grid-template-columns.', score: 15, quiz_id: 8 },
      { id: 12, content: 'React component là gì?', major: 'Thiết Kế Web', explaination: 'Khối giao diện tái sử dụng.', score: 15, quiz_id: 9 },
      { id: 13, content: 'ARIA dùng để làm gì?', major: 'Thiết Kế Web', explaination: 'Tăng khả năng truy cập.', score: 10, quiz_id: 10 },
      { id: 14, content: 'SASS hỗ trợ tính năng nào?', major: 'Thiết Kế Web', explaination: 'Nesting, variables.', score: 10, quiz_id: 11 },
      { id: 15, content: 'Vue directive nào binding dữ liệu?', major: 'Thiết Kế Web', explaination: 'v-bind.', score: 10, quiz_id: 12 },
      { id: 16, content: 'Làm sao tối ưu hình ảnh web?', major: 'Thiết Kế Web', explaination: 'Nén ảnh, dùng WebP.', score: 15, quiz_id: 13 },
      { id: 17, content: 'TypeScript khác JS ở điểm nào?', major: 'Thiết Kế Web', explaination: 'Hỗ trợ kiểu tĩnh.', score: 15, quiz_id: 14 },
      { id: 18, content: 'Next.js hỗ trợ render kiểu nào?', major: 'Thiết Kế Web', explaination: 'SSR, SSG.', score: 20, quiz_id: 15 },
      { id: 19, content: 'XSS là gì?', major: 'Thiết Kế Web', explaination: 'Tấn công chèn mã.', score: 15, quiz_id: 16 },
      { id: 20, content: 'GraphQL khác REST ra sao?', major: 'Thiết Kế Web', explaination: 'Lấy dữ liệu linh hoạt.', score: 20, quiz_id: 17 },
      { id: 21, content: 'React Hook nào quản lý state?', major: 'Thiết Kế Web', explaination: 'useState.', score: 20, quiz_id: 18 },
      { id: 22, content: 'WebAssembly dùng để làm gì?', major: 'Thiết Kế Web', explaination: 'Chạy mã hiệu suất cao.', score: 20, quiz_id: 19 },
      { id: 23, content: 'SEO tối ưu thẻ nào?', major: 'Thiết Kế Web', explaination: '<meta>, <title>.', score: 10, quiz_id: 20 },
      { id: 24, content: 'Angular directive nào lặp danh sách?', major: 'Thiết Kế Web', explaination: '*ngFor.', score: 15, quiz_id: 21 },
      { id: 25, content: 'PWA yêu cầu file nào?', major: 'Thiết Kế Web', explaination: 'manifest.json.', score: 15, quiz_id: 22 },
      { id: 26, content: 'CSS selector nào chọn phần tử con?', major: 'Thiết Kế Web', explaination: '> (child combinator).', score: 10, quiz_id: 3 },
      { id: 27, content: 'JS Promise xử lý bất đồng bộ ra sao?', major: 'Thiết Kế Web', explaination: 'Dùng then/catch.', score: 15, quiz_id: 5 },
      { id: 28, content: 'HTML semantic tag nào cho điều hướng?', major: 'Thiết Kế Web', explaination: '<nav>.', score: 5, quiz_id: 6 },
      { id: 29, content: 'CSS pseudo-class nào khi hover?', major: 'Thiết Kế Web', explaination: ':hover.', score: 5, quiz_id: 8 },
      { id: 30, content: 'React prop là gì?', major: 'Thiết Kế Web', explaination: 'Dữ liệu truyền vào component.', score: 10, quiz_id: 9 },
      { id: 31, content: 'CSS box-sizing có giá trị nào?', major: 'Thiết Kế Web', explaination: 'border-box, content-box.', score: 10, quiz_id: 10 },
      { id: 32, content: 'JS async/await dùng để làm gì?', major: 'Thiết Kế Web', explaination: 'Xử lý bất đồng bộ.', score: 15, quiz_id: 13 },
      { id: 33, content: 'HTML5 API nào lưu trữ cục bộ?', major: 'Thiết Kế Web', explaination: 'localStorage.', score: 10, quiz_id: 15 },
    ];
    questions.push(...webQuestions);

    // Mobile (30 câu hỏi, quiz_id: 2, 23–42)
    const mobileQuestions = [
      { id: 34, content: 'Android dùng ngôn ngữ nào chính?', major: 'Mobile', explaination: 'Java, Kotlin.', score: 5, quiz_id: 2 },
      { id: 35, content: 'iOS dùng ngôn ngữ lập trình nào?', major: 'Mobile', explaination: 'Swift.', score: 5, quiz_id: 23 },
      { id: 36, content: 'Flutter là framework của ai?', major: 'Mobile', explaination: 'Google.', score: 10, quiz_id: 25 },
      { id: 37, content: 'React Native khác Flutter ở điểm nào?', major: 'Mobile', explaination: 'React Native dùng JS, Flutter dùng Dart.', score: 10, quiz_id: 26 },
      { id: 38, content: 'Kotlin coroutines dùng để làm gì?', major: 'Mobile', explaination: 'Xử lý bất đồng bộ.', score: 15, quiz_id: 27 },
      { id: 39, content: 'Material Design là gì?', major: 'Mobile', explaination: 'Hệ thống thiết kế của Google.', score: 10, quiz_id: 28 },
      { id: 40, content: 'Firebase cung cấp dịch vụ nào?', major: 'Mobile', explaination: 'Database, Authentication.', score: 10, quiz_id: 29 },
      { id: 41, content: 'Unit test trong mobile dùng gì?', major: 'Mobile', explaination: 'JUnit, XCTest.', score: 10, quiz_id: 30 },
      { id: 42, content: 'Dart là ngôn ngữ của framework nào?', major: 'Mobile', explaination: 'Flutter.', score: 5, quiz_id: 31 },
      { id: 43, content: 'Ionic dùng công nghệ gì?', major: 'Mobile', explaination: 'HTML, CSS, JS.', score: 10, quiz_id: 32 },
      { id: 44, content: 'OWASP Mobile Top 10 là gì?', major: 'Mobile', explaination: 'Danh sách rủi ro bảo mật.', score: 15, quiz_id: 33 },
      { id: 45, content: 'Flutter widget nào là stateless?', major: 'Mobile', explaination: 'StatelessWidget.', score: 15, quiz_id: 34 },
      { id: 46, content: 'Room là gì trong Android?', major: 'Mobile', explaination: 'Thư viện ORM.', score: 15, quiz_id: 35 },
      { id: 47, content: 'ProGuard dùng để làm gì?', major: 'Mobile', explaination: 'Tối ưu và bảo vệ mã.', score: 10, quiz_id: 36 },
      { id: 48, content: 'SwiftUI khác UIKit ra sao?', major: 'Mobile', explaination: 'SwiftUI dùng declarative syntax.', score: 20, quiz_id: 37 },
      { id: 49, content: 'Xamarin là gì?', major: 'Mobile', explaination: 'Framework đa nền tảng.', score: 10, quiz_id: 38 },
      { id: 50, content: 'CI/CD trong mobile dùng công cụ nào?', major: 'Mobile', explaination: 'Jenkins, GitHub Actions.', score: 15, quiz_id: 39 },
      { id: 51, content: 'ARKit dùng để phát triển gì?', major: 'Mobile', explaination: 'Ứng dụng AR.', score: 20, quiz_id: 40 },
      { id: 52, content: 'Jetpack Compose là gì?', major: 'Mobile', explaination: 'UI toolkit hiện đại cho Android.', score: 20, quiz_id: 41 },
      { id: 53, content: 'Crashlytics thuộc nền tảng nào?', major: 'Mobile', explaination: 'Firebase.', score: 10, quiz_id: 42 },
      { id: 54, content: 'Android Activity là gì?', major: 'Mobile', explaination: 'Thành phần giao diện.', score: 5, quiz_id: 23 },
      { id: 55, content: 'iOS AppDelegate làm gì?', major: 'Mobile', explaination: 'Quản lý vòng đời ứng dụng.', score: 10, quiz_id: 24 },
      { id: 56, content: 'Flutter Provider dùng để gì?', major: 'Mobile', explaination: 'Quản lý trạng thái.', score: 15, quiz_id: 25 },
      { id: 57, content: 'React Native bridge là gì?', major: 'Mobile', explaination: 'Kết nối JS và native.', score: 15, quiz_id: 26 },
      { id: 58, content: 'Kotlin null safety hoạt động ra sao?', major: 'Mobile', explaination: 'Ngăn lỗi null pointer.', score: 10, quiz_id: 27 },
      { id: 59, content: 'Mobile UX principle nào quan trọng?', major: 'Mobile', explaination: 'Tính đơn giản, nhất quán.', score: 10, quiz_id: 28 },
      { id: 60, content: 'Firebase Realtime DB khác Firestore?', major: 'Mobile', explaination: 'Realtime DB đồng bộ, Firestore mở rộng.', score: 15, quiz_id: 29 },
      { id: 61, content: 'Espresso dùng để làm gì?', major: 'Mobile', explaination: 'Kiểm thử UI Android.', score: 10, quiz_id: 30 },
      { id: 62, content: 'Flutter hot reload là gì?', major: 'Mobile', explaination: 'Cập nhật UI tức thời.', score: 5, quiz_id: 34 },
      { id: 63, content: 'Android ViewModel là gì?', major: 'Mobile', explaination: 'Quản lý dữ liệu UI.', score: 10, quiz_id: 35 },
    ];
    questions.push(...mobileQuestions);

    // Mạng Máy Tính (30 câu hỏi, quiz_id: 43–62)
    const networkQuestions = [
      { id: 64, content: 'Giao thức nào dùng cho web?', major: 'Mạng Máy Tính', explaination: 'HTTP/HTTPS.', score: 5, quiz_id: 43 },
      { id: 65, content: 'TCP khác UDP ở điểm nào?', major: 'Mạng Máy Tính', explaination: 'TCP đáng tin, UDP nhanh.', score: 10, quiz_id: 44 },
      { id: 66, content: 'Subnet mask 255.255.255.0 là gì?', major: 'Mạng Máy Tính', explaination: '/24, 254 host.', score: 10, quiz_id: 45 },
      { id: 67, content: 'Router hoạt động ở tầng nào?', major: 'Mạng Máy Tính', explaination: 'Tầng 3 (Network).', score: 5, quiz_id: 46 },
      { id: 68, content: 'VLAN là gì?', major: 'Mạng Máy Tính', explaination: 'Mạng ảo trong switch.', score: 10, quiz_id: 47 },
      { id: 69, content: 'Firewall chặn dựa trên gì?', major: 'Mạng Máy Tính', explaination: 'Luật, port, IP.', score: 15, quiz_id: 48 },
      { id: 70, content: 'VPN dùng giao thức nào?', major: 'Mạng Máy Tính', explaination: 'OpenVPN, IPsec.', score: 15, quiz_id: 49 },
      { id: 71, content: 'Tầng nào trong OSI xử lý dữ liệu?', major: 'Mạng Máy Tính', explaination: 'Tầng 7 (Application).', score: 10, quiz_id: 50 },
      { id: 72, content: 'Wi-Fi chuẩn 802.11ac là gì?', major: 'Mạng Máy Tính', explaination: 'Wi-Fi 5, tốc độ cao.', score: 10, quiz_id: 51 },
      { id: 73, content: 'OSPF là giao thức gì?', major: 'Mạng Máy Tính', explaination: 'Định tuyến động.', score: 15, quiz_id: 52 },
      { id: 74, content: 'Ping dùng giao thức nào?', major: 'Mạng Máy Tính', explaination: 'ICMP.', score: 5, quiz_id: 53 },
      { id: 75, content: 'NAT là gì?', major: 'Mạng Máy Tính', explaination: 'Chuyển đổi địa chỉ mạng.', score: 10, quiz_id: 54 },
      { id: 76, content: 'VPC trong AWS là gì?', major: 'Mạng Máy Tính', explaination: 'Mạng riêng ảo.', score: 15, quiz_id: 55 },
      { id: 77, content: 'SDN tách biệt tầng nào?', major: 'Mạng Máy Tính', explaination: 'Control và Data.', score: 20, quiz_id: 56 },
      { id: 78, content: 'IPv6 có bao nhiêu bit?', major: 'Mạng Máy Tính', explaination: '128 bit.', score: 10, quiz_id: 57 },
      { id: 79, content: 'Ansible dùng để làm gì?', major: 'Mạng Máy Tính', explaination: 'Tự động hóa mạng.', score: 20, quiz_id: 58 },
      { id: 80, content: 'UTM firewall là gì?', major: 'Mạng Máy Tính', explaination: 'Tường lửa đa chức năng.', score: 15, quiz_id: 59 },
      { id: 81, content: 'MQTT dùng trong ứng dụng nào?', major: 'Mạng Máy Tính', explaination: 'IoT.', score: 20, quiz_id: 60 },
      { id: 82, content: 'CCNA kiểm tra nội dung gì?', major: 'Mạng Máy Tính', explaination: 'Kiến thức mạng cơ bản.', score: 10, quiz_id: 61 },
      { id: 83, content: 'Nagios dùng để làm gì?', major: 'Mạng Máy Tính', explaination: 'Giám sát mạng.', score: 15, quiz_id: 62 },
      { id: 84, content: 'DNS giải quyết tên miền ra sao?', major: 'Mạng Máy Tính', explaination: 'Chuyển tên thành IP.', score: 5, quiz_id: 43 },
      { id: 85, content: 'BGP là giao thức gì?', major: 'Mạng Máy Tính', explaination: 'Định tuyến Internet.', score: 15, quiz_id: 44 },
      { id: 86, content: 'ARP hoạt động ở tầng nào?', major: 'Mạng Máy Tính', explaination: 'Tầng 2 (Data Link).', score: 10, quiz_id: 45 },
      { id: 87, content: 'Switch khác hub ra sao?', major: 'Mạng Máy Tính', explaination: 'Switch chuyển gói thông minh.', score: 5, quiz_id: 46 },
      { id: 88, content: 'Port 443 dùng cho gì?', major: 'Mạng Máy Tính', explaination: 'HTTPS.', score: 5, quiz_id: 48 },
      { id: 89, content: 'IPsec bảo mật tầng nào?', major: 'Mạng Máy Tính', explaination: 'Tầng 3 (Network).', score: 15, quiz_id: 49 },
      { id: 90, content: 'Wireshark dùng để làm gì?', major: 'Mạng Máy Tính', explaination: 'Phân tích gói tin.', score: 10, quiz_id: 53 },
      { id: 91, content: 'DHCP cấp phát gì?', major: 'Mạng Máy Tính', explaination: 'Địa chỉ IP động.', score: 5, quiz_id: 54 },
      { id: 92, content: '802.1Q là gì?', major: 'Mạng Máy Tính', explaination: 'Giao thức VLAN tagging.', score: 10, quiz_id: 55 },
      { id: 93, content: 'SNMP dùng để làm gì?', major: 'Mạng Máy Tính', explaination: 'Quản lý thiết bị mạng.', score: 10, quiz_id: 62 },
    ];
    questions.push(...networkQuestions);

    await queryInterface.bulkInsert('questions', questions, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('questions', { id: [...Array(90).keys()].map(i => i + 4) }, {});
  },
};