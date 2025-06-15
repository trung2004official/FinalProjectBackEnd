export default {
  async up(queryInterface) {
    const quizzes = [];

    // Thiết Kế Web (20 quiz)
    const webQuizzes = [
      { id: 3, title: 'HTML5 Advanced', description: 'Nâng cao về HTML5 và semantic tags', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 4, title: 'CSS Flexbox Mastery', description: 'Làm chủ Flexbox trong CSS', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 5, title: 'JavaScript ES6 Basics', description: 'Kiến thức cơ bản ES6', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 6, title: 'Responsive Web Design', description: 'Thiết kế web responsive', duration: 2400, difficulty: 'Gà mờ', status: 'private', image: null, question_count: 40 },
      { id: 7, title: 'Bootstrap Framework', description: 'Sử dụng Bootstrap hiệu quả', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 8, title: 'CSS Grid Layout', description: 'Học CSS Grid từ cơ bản đến nâng cao', duration: 2400, difficulty: 'Cứng tay', status: 'public', image: null, question_count: 40 },
      { id: 9, title: 'React JS Fundamentals', description: 'Cơ bản về React JS', duration: 2400, difficulty: 'Cứng tay', status: 'private', image: null, question_count: 40 },
      { id: 10, title: 'Web Accessibility', description: 'Tối ưu web cho người khuyết tật', duration: 2400, difficulty: 'Cứng tay', status: 'public', image: null, question_count: 40 },
      { id: 11, title: 'SASS Preprocessor', description: 'Sử dụng SASS để viết CSS', duration: 2400, difficulty: 'Cứng tay', status: 'private', image: null, question_count: 40 },
      { id: 12, title: 'Vue.js Introduction', description: 'Giới thiệu về Vue.js', duration: 2400, difficulty: 'Cứng tay', status: 'public', image: null, question_count: 40 },
      { id: 13, title: 'Web Performance Optimization', description: 'Tối ưu hiệu suất web', duration: 2400, difficulty: 'Đỉnh kout', status: 'public', image: null, question_count: 40 },
      { id: 14, title: 'TypeScript for Web', description: 'Ứng dụng TypeScript trong web', duration: 2400, difficulty: 'Đỉnh kout', status: 'private', image: null, question_count: 40 },
      { id: 15, title: 'Next.js Framework', description: 'Xây dựng web với Next.js', duration: 2400, difficulty: 'Đỉnh kout', status: 'public', image: null, question_count: 40 },
      { id: 16, title: 'Web Security Basics', description: 'Bảo mật web cơ bản', duration: 2400, difficulty: 'Đỉnh kout', status: 'private', image: null, question_count: 40 },
      { id: 17, title: 'GraphQL for Frontend', description: 'Sử dụng GraphQL trong web', duration: 2400, difficulty: 'Đỉnh kout', status: 'public', image: null, question_count: 40 },
      { id: 18, title: 'Advanced React Patterns', description: 'Mẫu thiết kế nâng cao trong React', duration: 2400, difficulty: 'Trùm cuối', status: 'public', image: null, question_count: 40 },
      { id: 19, title: 'WebAssembly Introduction', description: 'Giới thiệu về WebAssembly', duration: 2400, difficulty: 'Trùm cuối', status: 'private', image: null, question_count: 40 },
      { id: 20, title: 'SEO for Web Developers', description: 'Tối ưu SEO cho web', duration: 2400, difficulty: 'Trùm cuối', status: 'public', image: null, question_count: 40 },
      { id: 21, title: 'Angular Framework', description: 'Xây dựng ứng dụng với Angular', duration: 2400, difficulty: 'Trùm cuối', status: 'private', image: null, question_count: 40 },
      { id: 22, title: 'Progressive Web Apps', description: 'Phát triển PWA', duration: 2400, difficulty: 'Trùm cuối', status: 'public', image: null, question_count: 40 },
    ];
    quizzes.push(...webQuizzes.map(q => ({ ...q, major: 'Thiết Kế Web' })));

    // Mobile (20 quiz)
    const mobileQuizzes = [
      { id: 23, title: 'Android Development Basics', description: 'Cơ bản về lập trình Android', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 24, title: 'iOS Swift Introduction', description: 'Giới thiệu Swift cho iOS', duration: 2400, difficulty: 'Gà mờ', status: 'private', image: null, question_count: 40 },
      { id: 25, title: 'Flutter Basics', description: 'Kiến thức cơ bản về Flutter', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 26, title: 'React Native Fundamentals', description: 'Cơ bản về React Native', duration: 2400, difficulty: 'Gà mờ', status: 'private', image: null, question_count: 40 },
      { id: 27, title: 'Kotlin for Android', description: 'Lập trình Android với Kotlin', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 28, title: 'Mobile UI Design', description: 'Thiết kế giao diện mobile', duration: 2400, difficulty: 'Cứng tay', status: 'public', image: null, question_count: 40 },
      { id: 29, title: 'Firebase for Mobile', description: 'Sử dụng Firebase trong mobile', duration: 2400, difficulty: 'Cứng tay', status: 'private', image: null, question_count: 40 },
      { id: 30, title: 'Mobile Testing Basics', description: 'Kiểm thử ứng dụng mobile', duration: 2400, difficulty: 'Cứng tay', status: 'public', image: null, question_count: 40 },
      { id: 31, title: 'Dart for Flutter', description: 'Ngôn ngữ Dart cho Flutter', duration: 2400, difficulty: 'Cứng tay', status: 'private', image: null, question_count: 40 },
      { id: 32, title: 'Ionic Framework', description: 'Phát triển mobile với Ionic', duration: 2400, difficulty: 'Cứng tay', status: 'public', image: null, question_count: 40 },
      { id: 33, title: 'Mobile Security', description: 'Bảo mật ứng dụng mobile', duration: 2400, difficulty: 'Đỉnh kout', status: 'public', image: null, question_count: 40 },
      { id: 34, title: 'Advanced Flutter', description: 'Nâng cao về Flutter', duration: 2400, difficulty: 'Đỉnh kout', status: 'private', image: null, question_count: 40 },
      { id: 35, title: 'Room Database', description: 'Quản lý database với Room', duration: 2400, difficulty: 'Đỉnh kout', status: 'public', image: null, question_count: 40 },
      { id: 36, title: 'Mobile Performance', description: 'Tối ưu hiệu suất mobile', duration: 2400, difficulty: 'Đỉnh kout', status: 'private', image: null, question_count: 40 },
      { id: 37, title: 'SwiftUI Basics', description: 'Giới thiệu SwiftUI cho iOS', duration: 2400, difficulty: 'Đỉnh kout', status: 'public', image: null, question_count: 40 },
      { id: 38, title: 'Cross-Platform Development', description: 'Phát triển đa nền tảng', duration: 2400, difficulty: 'Trùm cuối', status: 'public', image: null, question_count: 40 },
      { id: 39, title: 'Mobile CI/CD', description: 'Tích hợp CI/CD cho mobile', duration: 2400, difficulty: 'Trùm cuối', status: 'private', image: null, question_count: 40 },
      { id: 40, title: 'AR/VR Mobile Apps', description: 'Phát triển ứng dụng AR/VR', duration: 2400, difficulty: 'Trùm cuối', status: 'public', image: null, question_count: 40 },
      { id: 41, title: 'Jetpack Compose', description: 'UI hiện đại với Jetpack Compose', duration: 2400, difficulty: 'Trùm cuối', status: 'private', image: null, question_count: 40 },
      { id: 42, title: 'Mobile Analytics', description: 'Phân tích dữ liệu mobile', duration: 2400, difficulty: 'Trùm cuối', status: 'public', image: null, question_count: 40 },
    ];
    quizzes.push(...mobileQuizzes.map(q => ({ ...q, major: 'Mobile' })));

    // Mạng Máy Tính (20 quiz)
    const networkQuizzes = [
      { id: 43, title: 'Networking Basics', description: 'Kiến thức cơ bản về mạng', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 44, title: 'TCP/IP Introduction', description: 'Giới thiệu giao thức TCP/IP', duration: 2400, difficulty: 'Gà mờ', status: 'private', image: null, question_count: 40 },
      { id: 45, title: 'Subnetting Basics', description: 'Cơ bản về chia subnet', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 46, title: 'Router Configuration', description: 'Cấu hình router cơ bản', duration: 2400, difficulty: 'Gà mờ', status: 'private', image: null, question_count: 40 },
      { id: 47, title: 'LAN Technologies', description: 'Công nghệ mạng LAN', duration: 2400, difficulty: 'Gà mờ', status: 'public', image: null, question_count: 40 },
      { id: 48, title: 'Network Security', description: 'Bảo mật mạng cơ bản', duration: 2400, difficulty: 'Cứng tay', status: 'public', image: null, question_count: 40 },
      { id: 49, title: 'Firewall Configuration', description: 'Cấu hình tường lửa', duration: 2400, difficulty: 'Cứng tay', status: 'private', image: null, question_count: 40 },
      { id: 50, title: 'VPN Fundamentals', description: 'Cơ bản về mạng riêng ảo', duration: 2400, difficulty: 'Cứng tay', status: 'public', image: null, question_count: 40 },
      { id: 51, title: 'OSI Model', description: 'Mô hình OSI và ứng dụng', duration: 2400, difficulty: 'Cứng tay', status: 'private', image: null, question_count: 40 },
      { id: 52, title: 'Wireless Networking', description: 'Mạng không dây cơ bản', duration: 2400, difficulty: 'Cứng tay', status: 'public', image: null, question_count: 40 },
      { id: 53, title: 'Advanced Routing', description: 'Định tuyến nâng cao', duration: 2400, difficulty: 'Đỉnh kout', status: 'public', image: null, question_count: 40 },
      { id: 54, title: 'Network Troubleshooting', description: 'Xử lý sự cố mạng', duration: 2400, difficulty: 'Đỉnh kout', status: 'private', image: null, question_count: 40 },
      { id: 55, title: 'Cloud Networking', description: 'Mạng trong môi trường cloud', duration: 2400, difficulty: 'Đỉnh kout', status: 'public', image: null, question_count: 40 },
      { id: 56, title: 'SDN Basics', description: 'Giới thiệu mạng điều khiển bằng phần mềm', duration: 2400, difficulty: 'Đỉnh kout', status: 'private', image: null, question_count: 40 },
      { id: 57, title: 'IPv6 Implementation', description: 'Triển khai IPv6', duration: 2400, difficulty: 'Đỉnh kout', status: 'public', image: null, question_count: 40 },
      { id: 58, title: 'Network Automation', description: 'Tự động hóa mạng với Python', duration: 2400, difficulty: 'Trùm cuối', status: 'public', image: null, question_count: 40 },
      { id: 59, title: 'Advanced Firewall', description: 'Tường lửa nâng cao', duration: 2400, difficulty: 'Trùm cuối', status: 'private', image: null, question_count: 40 },
      { id: 60, title: 'IoT Networking', description: 'Mạng cho thiết bị IoT', duration: 2400, difficulty: 'Trùm cuối', status: 'public', image: null, question_count: 40 },
      { id: 61, title: 'CCNA Prep', description: 'Chuẩn bị cho chứng chỉ CCNA', duration: 2400, difficulty: 'Trùm cuối', status: 'private', image: null, question_count: 40 },
      { id: 62, title: 'Network Monitoring', description: 'Giám sát mạng hiệu quả', duration: 2400, difficulty: 'Trùm cuối', status: 'public', image: null, question_count: 40 },
    ];
    quizzes.push(...networkQuizzes.map(q => ({ ...q, major: 'Mạng Máy Tính' })));

    await queryInterface.bulkInsert('quizzes', quizzes, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('quizzes', { id: [...Array(60).keys()].map(i => i + 3) }, {});
  },
};