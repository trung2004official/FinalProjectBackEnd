export default {
  async up(queryInterface) {
    const questions = [];

    // Thiết Kế Web (30 câu hỏi 3–22)
    const webQuestions = [
      {
        id: 4, content: 'Thẻ HTML nào dùng để tạo liên kết?', major: 'Thiết Kế Web', explaination: 'Thẻ <a> tạo liên kết.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5, content: 'CSS property nào thay đổi màu nền?', major: 'Thiết Kế Web', explaination: 'background-color thay đổi màu nền.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6, content: 'Hàm nào trong JS lấy phần tử theo ID?', major: 'Thiết Kế Web', explaination: 'getElementById() lấy phần tử.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7, content: 'Flexbox thuộc tính nào căn giữa?', major: 'Thiết Kế Web', explaination: 'justify-content: center căn giữa.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8, content: 'ES6 khai báo biến dùng từ khóa nào?', major: 'Thiết Kế Web', explaination: 'let và const dùng trong ES6.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9, content: 'Media query dùng để làm gì?', major: 'Thiết Kế Web', explaination: 'Thiết kế responsive.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10, content: 'Bootstrap class nào tạo container?', major: 'Thiết Kế Web', explaination: 'class="container".', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11, content: 'CSS Grid thuộc tính nào chia cột?', major: 'Thiết Kế Web', explaination: 'grid-template-columns.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12, content: 'React component là gì?', major: 'Thiết Kế Web', explaination: 'Khối giao diện tái sử dụng.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13, content: 'ARIA dùng để làm gì?', major: 'Thiết Kế Web', explaination: 'Tăng khả năng truy cập.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14, content: 'SASS hỗ trợ tính năng nào?', major: 'Thiết Kế Web', explaination: 'Nesting, variables.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15, content: 'Vue directive nào binding dữ liệu?', major: 'Thiết Kế Web', explaination: 'v-bind.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16, content: 'Làm sao tối ưu hình ảnh web?', major: 'Thiết Kế Web', explaination: 'Nén ảnh, dùng WebP.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17, content: 'TypeScript khác JS ở điểm nào?', major: 'Thiết Kế Web', explaination: 'Hỗ trợ kiểu tĩnh.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18, content: 'Next.js hỗ trợ render kiểu nào?', major: 'Thiết Kế Web', explaination: 'SSR, SSG.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19, content: 'XSS là gì?', major: 'Thiết Kế Web', explaination: 'Tấn công chèn mã.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20, content: 'GraphQL khác REST ra sao?', major: 'Thiết Kế Web', explaination: 'Lấy dữ liệu linh hoạt.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 21, content: 'React Hook nào quản lý state?', major: 'Thiết Kế Web', explaination: 'useState.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 22, content: 'WebAssembly dùng để làm gì?', major: 'Thiết Kế Web', explaination: 'Chạy mã hiệu suất cao.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 23, content: 'SEO tối ưu thẻ nào?', major: 'Thiết Kế Web', explaination: '<meta>, <title>.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 24, content: 'Angular directive nào lặp danh sách?', major: 'Thiết Kế Web', explaination: '*ngFor.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 25, content: 'PWA yêu cầu file nào?', major: 'Thiết Kế Web', explaination: 'manifest.json.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 26, content: 'CSS selector nào chọn phần tử con?', major: 'Thiết Kế Web', explaination: '> (child combinator).', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 27, content: 'JS Promise xử lý bất đồng bộ ra sao?', major: 'Thiết Kế Web', explaination: 'Dùng then/catch.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 28, content: 'HTML semantic tag nào cho điều hướng?', major: 'Thiết Kế Web', explaination: '<nav>.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 29, content: 'CSS pseudo-class nào khi hover?', major: 'Thiết Kế Web', explaination: ':hover.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 30, content: 'React prop là gì?', major: 'Thiết Kế Web', explaination: 'Dữ liệu truyền vào component.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 31, content: 'CSS box-sizing có giá trị nào?', major: 'Thiết Kế Web', explaination: 'border-box, content-box.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 32, content: 'JS async/await dùng để làm gì?', major: 'Thiết Kế Web', explaination: 'Xử lý bất đồng bộ.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 33, content: 'HTML5 API nào lưu trữ cục bộ?', major: 'Thiết Kế Web', explaination: 'localStorage.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    questions.push(...webQuestions);

    // Mobile (30 câu hỏi 23–42)
    const mobileQuestions = [
      {
        id: 34, content: 'Android dùng ngôn ngữ nào chính?', major: 'Mobile', explaination: 'Java, Kotlin.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 35, content: 'iOS dùng ngôn ngữ lập trình nào?', major: 'Mobile', explaination: 'Swift.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 36, content: 'Flutter là framework của ai?', major: 'Mobile', explaination: 'Google.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 37, content: 'React Native khác Flutter ở điểm nào?', major: 'Mobile', explaination: 'React Native dùng JS, Flutter dùng Dart.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 38, content: 'Kotlin coroutines dùng để làm gì?', major: 'Mobile', explaination: 'Xử lý bất đồng bộ.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 39, content: 'Material Design là gì?', major: 'Mobile', explaination: 'Hệ thống thiết kế của Google.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 40, content: 'Firebase cung cấp dịch vụ nào?', major: 'Mobile', explaination: 'Database, Authentication.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 41, content: 'Unit test trong mobile dùng gì?', major: 'Mobile', explaination: 'JUnit, XCTest.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 42, content: 'Dart là ngôn ngữ của framework nào?', major: 'Mobile', explaination: 'Flutter.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 43, content: 'Ionic dùng công nghệ gì?', major: 'Mobile', explaination: 'HTML, CSS, JS.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 44, content: 'OWASP Mobile Top 10 là gì?', major: 'Mobile', explaination: 'Danh sách rủi ro bảo mật.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 45, content: 'Flutter widget nào là stateless?', major: 'Mobile', explaination: 'StatelessWidget.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 46, content: 'Room là gì trong Android?', major: 'Mobile', explaination: 'Thư viện ORM.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47, content: 'ProGuard dùng để làm gì?', major: 'Mobile', explaination: 'Tối ưu và bảo vệ mã.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 48, content: 'SwiftUI khác UIKit ra sao?', major: 'Mobile', explaination: 'SwiftUI dùng declarative syntax.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 49, content: 'Xamarin là gì?', major: 'Mobile', explaination: 'Framework đa nền tảng.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 50, content: 'CI/CD trong mobile dùng công cụ nào?', major: 'Mobile', explaination: 'Jenkins, GitHub Actions.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 51, content: 'ARKit dùng để phát triển gì?', major: 'Mobile', explaination: 'Ứng dụng AR.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 52, content: 'Jetpack Compose là gì?', major: 'Mobile', explaination: 'UI toolkit hiện đại cho Android.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 53, content: 'Crashlytics thuộc nền tảng nào?', major: 'Mobile', explaination: 'Firebase.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 54, content: 'Android Activity là gì?', major: 'Mobile', explaination: 'Thành phần giao diện.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 55, content: 'iOS AppDelegate làm gì?', major: 'Mobile', explaination: 'Quản lý vòng đời ứng dụng.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 56, content: 'Flutter Provider dùng để gì?', major: 'Mobile', explaination: 'Quản lý trạng thái.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 57, content: 'React Native bridge là gì?', major: 'Mobile', explaination: 'Kết nối JS và native.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 58, content: 'Kotlin null safety hoạt động ra sao?', major: 'Mobile', explaination: 'Ngăn lỗi null pointer.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 59, content: 'Mobile UX principle nào quan trọng?', major: 'Mobile', explaination: 'Tính đơn giản, nhất quán.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 60, content: 'Firebase Realtime DB khác Firestore?', major: 'Mobile', explaination: 'Realtime DB đồng bộ, Firestore mở rộng.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 61, content: 'Espresso dùng để làm gì?', major: 'Mobile', explaination: 'Kiểm thử UI Android.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 62, content: 'Flutter hot reload là gì?', major: 'Mobile', explaination: 'Cập nhật UI tức thời.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 63, content: 'Android ViewModel là gì?', major: 'Mobile', explaination: 'Quản lý dữ liệu UI.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    questions.push(...mobileQuestions);

    // Mạng Máy Tính (30 câu hỏi
    const networkQuestions = [
      {
        id: 64, content: 'Giao thức nào dùng cho web?', major: 'Mạng Máy Tính', explaination: 'HTTP/HTTPS.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 65, content: 'TCP khác UDP ở điểm nào?', major: 'Mạng Máy Tính', explaination: 'TCP đáng tin, UDP nhanh.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 66, content: 'Subnet mask 255.255.255.0 là gì?', major: 'Mạng Máy Tính', explaination: '/24, 254 host.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 67, content: 'Router hoạt động ở tầng nào?', major: 'Mạng Máy Tính', explaination: 'Tầng 3 (Network).', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 68, content: 'VLAN là gì?', major: 'Mạng Máy Tính', explaination: 'Mạng ảo trong switch.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 69, content: 'Firewall chặn dựa trên gì?', major: 'Mạng Máy Tính', explaination: 'Luật, port, IP.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 70, content: 'VPN dùng giao thức nào?', major: 'Mạng Máy Tính', explaination: 'OpenVPN, IPsec.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 71, content: 'Tầng nào trong OSI xử lý dữ liệu?', major: 'Mạng Máy Tính', explaination: 'Tầng 7 (Application).', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 72, content: 'Wi-Fi chuẩn 802.11ac là gì?', major: 'Mạng Máy Tính', explaination: 'Wi-Fi 5, tốc độ cao.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 73, content: 'OSPF là giao thức gì?', major: 'Mạng Máy Tính', explaination: 'Định tuyến động.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 74, content: 'Ping dùng giao thức nào?', major: 'Mạng Máy Tính', explaination: 'ICMP.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 75, content: 'NAT là gì?', major: 'Mạng Máy Tính', explaination: 'Chuyển đổi địa chỉ mạng.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 76, content: 'VPC trong AWS là gì?', major: 'Mạng Máy Tính', explaination: 'Mạng riêng ảo.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 77, content: 'SDN tách biệt tầng nào?', major: 'Mạng Máy Tính', explaination: 'Control và Data.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 78, content: 'IPv6 có bao nhiêu bit?', major: 'Mạng Máy Tính', explaination: '128 bit.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 79, content: 'Ansible dùng để làm gì?', major: 'Mạng Máy Tính', explaination: 'Tự động hóa mạng.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 80, content: 'UTM firewall là gì?', major: 'Mạng Máy Tính', explaination: 'Tường lửa đa chức năng.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 81, content: 'MQTT dùng trong ứng dụng nào?', major: 'Mạng Máy Tính', explaination: 'IoT.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 82, content: 'CCNA kiểm tra nội dung gì?', major: 'Mạng Máy Tính', explaination: 'Kiến thức mạng cơ bản.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 83, content: 'Nagios dùng để làm gì?', major: 'Mạng Máy Tính', explaination: 'Giám sát mạng.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 84, content: 'DNS giải quyết tên miền ra sao?', major: 'Mạng Máy Tính', explaination: 'Chuyển tên thành IP.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 85, content: 'BGP là giao thức gì?', major: 'Mạng Máy Tính', explaination: 'Định tuyến Internet.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 86, content: 'ARP hoạt động ở tầng nào?', major: 'Mạng Máy Tính', explaination: 'Tầng 2 (Data Link).', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 87, content: 'Switch khác hub ra sao?', major: 'Mạng Máy Tính', explaination: 'Switch chuyển gói thông minh.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 88, content: 'Port 443 dùng cho gì?', major: 'Mạng Máy Tính', explaination: 'HTTPS.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 89, content: 'IPsec bảo mật tầng nào?', major: 'Mạng Máy Tính', explaination: 'Tầng 3 (Network).', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 90, content: 'Wireshark dùng để làm gì?', major: 'Mạng Máy Tính', explaination: 'Phân tích gói tin.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 91, content: 'DHCP cấp phát gì?', major: 'Mạng Máy Tính', explaination: 'Địa chỉ IP động.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 92, content: '802.1Q là gì?', major: 'Mạng Máy Tính', explaination: 'Giao thức VLAN tagging.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 93, content: 'SNMP dùng để làm gì?', major: 'Mạng Máy Tính', explaination: 'Quản lý thiết bị mạng.', difficulty: 'Gà mờ', createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    questions.push(...networkQuestions);

    await queryInterface.bulkInsert('questions', questions, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('questions', { id: [...Array(90).keys()].map(i => i + 4) }, {});
  },
};