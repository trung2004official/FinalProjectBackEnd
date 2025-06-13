export default {
  async up(queryInterface) {
    const answers = [];

    // Thiết Kế Web (question_id: 4–33, 120 đáp án)
    const webAnswers = [
      // question_id: 4
      { id: 10, question_id: 4, content: '<a>', is_correct: true },
      { id: 11, question_id: 4, content: '<link>', is_correct: false },
      { id: 12, question_id: 4, content: '<href>', is_correct: false },
      { id: 13, question_id: 4, content: '<url>', is_correct: false },
      // question_id: 5
      { id: 14, question_id: 5, content: 'background-color', is_correct: true },
      { id: 15, question_id: 5, content: 'color', is_correct: false },
      { id: 16, question_id: 5, content: 'bg-color', is_correct: false },
      { id: 17, question_id: 5, content: 'background', is_correct: false },
      // question_id: 6
      { id: 18, question_id: 6, content: 'getElementById()', is_correct: true },
      { id: 19, question_id: 6, content: 'getElement()', is_correct: false },
      { id: 20, question_id: 6, content: 'querySelector()', is_correct: false },
      { id: 21, question_id: 6, content: 'getId()', is_correct: false },
      // question_id: 7
      { id: 22, question_id: 7, content: 'justify-content: center', is_correct: true },
      { id: 23, question_id: 7, content: 'align-items: center', is_correct: false },
      { id: 24, question_id: 7, content: 'center-content', is_correct: false },
      { id: 25, question_id: 7, content: 'flex-center', is_correct: false },
      // question_id: 8
      { id: 26, question_id: 8, content: 'let', is_correct: true },
      { id: 27, question_id: 8, content: 'var', is_correct: false },
      { id: 28, question_id: 8, content: 'int', is_correct: false },
      { id: 29, question_id: 8, content: 'define', is_correct: false },
      // question_id: 9
      { id: 30, question_id: 9, content: 'Responsive design', is_correct: true },
      { id: 31, question_id: 9, content: 'Static design', is_correct: false },
      { id: 32, question_id: 9, content: 'Fixed design', is_correct: false },
      { id: 33, question_id: 9, content: 'Dynamic design', is_correct: false },
      // question_id: 10
      { id: 34, question_id: 10, content: 'container', is_correct: true },
      { id: 35, question_id: 10, content: 'wrapper', is_correct: false },
      { id: 36, question_id: 10, content: 'box', is_correct: false },
      { id: 37, question_id: 10, content: 'content', is_correct: false },
      // question_id: 11
      { id: 38, question_id: 11, content: 'grid-template-columns', is_correct: true },
      { id: 39, question_id: 11, content: 'grid-columns', is_correct: false },
      { id: 40, question_id: 11, content: 'columns', is_correct: false },
      { id: 41, question_id: 11, content: 'grid-layout', is_correct: false },
      // question_id: 12
      { id: 42, question_id: 12, content: 'Reusable UI block', is_correct: true },
      { id: 43, question_id: 12, content: 'Database model', is_correct: false },
      { id: 44, question_id: 12, content: 'API endpoint', is_correct: false },
      { id: 45, question_id: 12, content: 'Server module', is_correct: false },
      // question_id: 13
      { id: 46, question_id: 13, content: 'Accessibility', is_correct: true },
      { id: 47, question_id: 13, content: 'Performance', is_correct: false },
      { id: 48, question_id: 13, content: 'Security', is_correct: false },
      { id: 49, question_id: 13, content: 'SEO', is_correct: false },
      // question_id: 14
      { id: 50, question_id: 14, content: 'Nesting', is_correct: true },
      { id: 51, question_id: 14, content: 'Looping', is_correct: false },
      { id: 52, question_id: 14, content: 'Branching', is_correct: false },
      { id: 53, question_id: 14, content: 'Casting', is_correct: false },
      // question_id: 15
      { id: 54, question_id: 15, content: 'v-bind', is_correct: true },
      { id: 55, question_id: 15, content: 'v-model', is_correct: false },
      { id: 56, question_id: 15, content: 'v-if', is_correct: false },
      { id: 57, question_id: 15, content: 'v-for', is_correct: false },
      // question_id: 16
      { id: 58, question_id: 16, content: 'Compress images', is_correct: true },
      { id: 59, question_id: 16, content: 'Increase resolution', is_correct: false },
      { id: 60, question_id: 16, content: 'Use PNG', is_correct: false },
      { id: 61, question_id: 16, content: 'Embed images', is_correct: false },
      // question_id: 17
      { id: 62, question_id: 17, content: 'Static typing', is_correct: true },
      { id: 63, question_id: 17, content: 'Dynamic typing', is_correct: false },
      { id: 64, question_id: 17, content: 'No typing', is_correct: false },
      { id: 65, question_id: 17, content: 'Weak typing', is_correct: false },
      // question_id: 18
      { id: 66, question_id: 18, content: 'SSR', is_correct: true },
      { id: 67, question_id: 18, content: 'CSR', is_correct: false },
      { id: 68, question_id: 18, content: 'ISR', is_correct: false },
      { id: 69, question_id: 18, content: 'DSR', is_correct: false },
      // question_id: 19
      { id: 70, question_id: 19, content: 'Cross-site scripting', is_correct: true },
      { id: 71, question_id: 19, content: 'SQL injection', is_correct: false },
      { id: 72, question_id: 19, content: 'CSRF', is_correct: false },
      { id: 73, question_id: 19, content: 'DDoS', is_correct: false },
      // question_id: 20
      { id: 74, question_id: 20, content: 'Flexible data fetching', is_correct: true },
      { id: 75, question_id: 20, content: 'Fixed endpoints', is_correct: false },
      { id: 76, question_id: 20, content: 'Static queries', is_correct: false },
      { id: 77, question_id: 20, content: 'Rigid schema', is_correct: false },
      // question_id: 21
      { id: 78, question_id: 21, content: 'useState', is_correct: true },
      { id: 79, question_id: 21, content: 'useEffect', is_correct: false },
      { id: 80, question_id: 21, content: 'useContext', is_correct: false },
      { id: 81, question_id: 21, content: 'useReducer', is_correct: false },
      // question_id: 22
      { id: 82, question_id: 22, content: 'High-performance code', is_correct: true },
      { id: 83, question_id: 22, content: 'Scripting language', is_correct: false },
      { id: 84, question_id: 22, content: 'Styling framework', is_correct: false },
      { id: 85, question_id: 22, content: 'Database engine', is_correct: false },
      // question_id: 23
      { id: 86, question_id: 23, content: '<meta>', is_correct: true },
      { id: 87, question_id: 23, content: '<style>', is_correct: false },
      { id: 88, question_id: 23, content: '<script>', is_correct: false },
      { id: 89, question_id: 23, content: '<body>', is_correct: false },
      // question_id: 24
      { id: 90, question_id: 24, content: '*ngFor', is_correct: true },
      { id: 91, question_id: 24, content: '*ngIf', is_correct: false },
      { id: 92, question_id: 24, content: '*ngSwitch', is_correct: false },
      { id: 93, question_id: 24, content: '*ngModel', is_correct: false },
      // question_id: 25
      { id: 94, question_id: 25, content: 'manifest.json', is_correct: true },
      { id: 95, question_id: 25, content: 'config.json', is_correct: false },
      { id: 96, question_id: 25, content: 'app.json', is_correct: false },
      { id: 97, question_id: 25, content: 'index.json', is_correct: false },
      // question_id: 26
      { id: 98, question_id: 26, content: '>', is_correct: true },
      { id: 99, question_id: 26, content: '.', is_correct: false },
      { id: 100, question_id: 26, content: '#', is_correct: false },
      { id: 101, question_id: 26, content: ':', is_correct: false },
      // question_id: 27
      { id: 102, question_id: 27, content: 'then/catch', is_correct: true },
      { id: 103, question_id: 27, content: 'try/catch', is_correct: false },
      { id: 104, question_id: 27, content: 'async/await', is_correct: false },
      { id: 105, question_id: 27, content: 'callback', is_correct: false },
      // question_id: 28
      { id: 106, question_id: 28, content: '<nav>', is_correct: true },
      { id: 107, question_id: 28, content: '<header>', is_correct: false },
      { id: 108, question_id: 28, content: '<menu>', is_correct: false },
      { id: 109, question_id: 28, content: '<section>', is_correct: false },
      // question_id: 29
      { id: 110, question_id: 29, content: ':hover', is_correct: true },
      { id: 111, question_id: 29, content: ':active', is_correct: false },
      { id: 112, question_id: 29, content: ':focus', is_correct: false },
      { id: 113, question_id: 29, content: ':visited', is_correct: false },
      // question_id: 30
      { id: 114, question_id: 30, content: 'Data passed to component', is_correct: true },
      { id: 115, question_id: 30, content: 'State variable', is_correct: false },
      { id: 116, question_id: 30, content: 'Event handler', is_correct: false },
      { id: 117, question_id: 30, content: 'Hook function', is_correct: false },
      // question_id: 31
      { id: 118, question_id: 31, content: 'border-box', is_correct: true },
      { id: 119, question_id: 31, content: 'content-box', is_correct: false },
      { id: 120, question_id: 31, content: 'padding-box', is_correct: false },
      { id: 121, question_id: 31, content: 'margin-box', is_correct: false },
      // question_id: 32
      { id: 122, question_id: 32, content: 'Asynchronous processing', is_correct: true },
      { id: 123, question_id: 32, content: 'Synchronous processing', is_correct: false },
      { id: 124, question_id: 32, content: 'Event handling', is_correct: false },
      { id: 125, question_id: 32, content: 'DOM manipulation', is_correct: false },
      // question_id: 33
      { id: 126, question_id: 33, content: 'localStorage', is_correct: true },
      { id: 127, question_id: 33, content: 'sessionStorage', is_correct: false },
      { id: 128, question_id: 33, content: 'cookieStorage', is_correct: false },
      { id: 129, question_id: 33, content: 'cacheStorage', is_correct: false },
    ];
    answers.push(...webAnswers);

    // Mobile (question_id: 34–63, 120 đáp án)
    const mobileAnswers = [
      // question_id: 34
      { id: 130, question_id: 34, content: 'Kotlin', is_correct: true },
      { id: 131, question_id: 34, content: 'Python', is_correct: false },
      { id: 132, question_id: 34, content: 'Ruby', is_correct: false },
      { id: 133, question_id: 34, content: 'PHP', is_correct: false },
      // question_id: 35
      { id: 134, question_id: 35, content: 'Swift', is_correct: true },
      { id: 135, question_id: 35, content: 'Objective-C', is_correct: false },
      { id: 136, question_id: 35, content: 'Java', is_correct: false },
      { id: 137, question_id: 35, content: 'C++', is_correct: false },
      // question_id: 36
      { id: 138, question_id: 36, content: 'Google', is_correct: true },
      { id: 139, question_id: 36, content: 'Apple', is_correct: false },
      { id: 140, question_id: 36, content: 'Microsoft', is_correct: false },
      { id: 141, question_id: 36, content: 'Facebook', is_correct: false },
      // question_id: 37
      { id: 142, question_id: 37, content: 'Uses JavaScript', is_correct: true },
      { id: 143, question_id: 37, content: 'Uses Swift', is_correct: false },
      { id: 144, question_id: 37, content: 'Uses Java', is_correct: false },
      { id: 145, question_id: 37, content: 'Uses Python', is_correct: false },
      // question_id: 38
      { id: 146, question_id: 38, content: 'Asynchronous tasks', is_correct: true },
      { id: 147, question_id: 38, content: 'Synchronous tasks', is_correct: false },
      { id: 148, question_id: 38, content: 'UI rendering', is_correct: false },
      { id: 149, question_id: 38, content: 'Database queries', is_correct: false },
      // question_id: 39
      { id: 150, question_id: 39, content: 'Google design system', is_correct: true },
      { id: 151, question_id: 39, content: 'Apple design system', is_correct: false },
      { id: 152, question_id: 39, content: 'Microsoft design', is_correct: false },
      { id: 153, question_id: 39, content: 'Adobe design', is_correct: false },
      // question_id: 40
      { id: 154, question_id: 40, content: 'Database', is_correct: true },
      { id: 155, question_id: 40, content: 'Frontend framework', is_correct: false },
      { id: 156, question_id: 40, content: 'Testing tool', is_correct: false },
      { id: 157, question_id: 40, content: 'CI/CD pipeline', is_correct: false },
      // question_id: 41
      { id: 158, question_id: 41, content: 'JUnit', is_correct: true },
      { id: 159, question_id: 41, content: 'Selenium', is_correct: false },
      { id: 160, question_id: 41, content: 'Cypress', is_correct: false },
      { id: 161, question_id: 41, content: 'Mocha', is_correct: false },
      // question_id: 42
      { id: 162, question_id: 42, content: 'Flutter', is_correct: true },
      { id: 163, question_id: 42, content: 'React Native', is_correct: false },
      { id: 164, question_id: 42, content: 'Ionic', is_correct: false },
      { id: 165, question_id: 42, content: 'Xamarin', is_correct: false },
      // question_id: 43
      { id: 166, question_id: 43, content: 'HTML', is_correct: true },
      { id: 167, question_id: 43, content: 'Java', is_correct: false },
      { id: 168, question_id: 43, content: 'Python', is_correct: false },
      { id: 169, question_id: 43, content: 'Swift', is_correct: false },
      // question_id: 44
      { id: 170, question_id: 44, content: 'Security risks', is_correct: true },
      { id: 171, question_id: 44, content: 'Performance issues', is_correct: false },
      { id: 172, question_id: 44, content: 'UI guidelines', is_correct: false },
      { id: 173, question_id: 44, content: 'API standards', is_correct: false },
      // question_id: 45
      { id: 174, question_id: 45, content: 'StatelessWidget', is_correct: true },
      { id: 175, question_id: 45, content: 'StatefulWidget', is_correct: false },
      { id: 176, question_id: 45, content: 'Widget', is_correct: false },
      { id: 177, question_id: 45, content: 'Component', is_correct: false },
      // question_id: 46
      { id: 178, question_id: 46, content: 'ORM library', is_correct: true },
      { id: 179, question_id: 46, content: 'UI framework', is_correct: false },
      { id: 180, question_id: 46, content: 'Testing tool', is_correct: false },
      { id: 181, question_id: 46, content: 'Build system', is_correct: false },
      // question_id: 47
      { id: 182, question_id: 47, content: 'Code obfuscation', is_correct: true },
      { id: 183, question_id: 47, content: 'Code formatting', is_correct: false },
      { id: 184, question_id: 47, content: 'Code compilation', is_correct: false },
      { id: 185, question_id: 47, content: 'Code debugging', is_correct: false },
      // question_id: 48
      { id: 186, question_id: 48, content: 'Declarative syntax', is_correct: true },
      { id: 187, question_id: 48, content: 'Imperative syntax', is_correct: false },
      { id: 188, question_id: 48, content: 'Functional syntax', is_correct: false },
      { id: 189, question_id: 48, content: 'Procedural syntax', is_correct: false },
      // question_id: 49
      { id: 190, question_id: 49, content: 'Cross-platform framework', is_correct: true },
      { id: 191, question_id: 49, content: 'Native framework', is_correct: false },
      { id: 192, question_id: 49, content: 'Web framework', is_correct: false },
      { id: 193, question_id: 49, content: 'Database framework', is_correct: false },
      // question_id: 50
      { id: 194, question_id: 50, content: 'Jenkins', is_correct: true },
      { id: 195, question_id: 50, content: 'Docker', is_correct: false },
      { id: 196, question_id: 50, content: 'Kubernetes', is_correct: false },
      { id: 197, question_id: 50, content: 'Nginx', is_correct: false },
      // question_id: 51
      { id: 198, question_id: 51, content: 'Augmented Reality', is_correct: true },
      { id: 199, question_id: 51, content: 'Virtual Reality', is_correct: false },
      { id: 200, question_id: 51, content: 'Machine Learning', is_correct: false },
      { id: 201, question_id: 51, content: 'Blockchain', is_correct: false },
      // question_id: 52
      { id: 202, question_id: 52, content: 'Modern UI toolkit', is_correct: true },
      { id: 203, question_id: 52, content: 'Legacy UI toolkit', is_correct: false },
      { id: 204, question_id: 52, content: 'Testing framework', is_correct: false },
      { id: 205, question_id: 52, content: 'Database library', is_correct: false },
      // question_id: 53
      { id: 206, question_id: 53, content: 'Firebase', is_correct: true },
      { id: 207, question_id: 53, content: 'AWS', is_correct: false },
      { id: 208, question_id: 53, content: 'Azure', is_correct: false },
      { id: 209, question_id: 53, content: 'Google Cloud', is_correct: false },
      // question_id: 54
      { id: 210, question_id: 54, content: 'User interface', is_correct: true },
      { id: 211, question_id: 54, content: 'Database model', is_correct: false },
      { id: 212, question_id: 54, content: 'Network service', is_correct: false },
      { id: 213, question_id: 54, content: 'Background task', is_correct: false },
      // question_id: 55
      { id: 214, question_id: 55, content: 'App lifecycle', is_correct: true },
      { id: 215, question_id: 55, content: 'UI rendering', is_correct: false },
      { id: 216, question_id: 55, content: 'Database access', is_correct: false },
      { id: 217, question_id: 55, content: 'Network calls', is_correct: false },
      // question_id: 56
      { id: 218, question_id: 56, content: 'State management', is_correct: true },
      { id: 219, question_id: 56, content: 'UI rendering', is_correct: false },
      { id: 220, question_id: 56, content: 'Data storage', is_correct: false },
      { id: 221, question_id: 56, content: 'Event handling', is_correct: false },
      // question_id: 57
      { id: 222, question_id: 57, content: 'JS-native bridge', is_correct: true },
      { id: 223, question_id: 57, content: 'UI framework', is_correct: false },
      { id: 224, question_id: 57, content: 'Database connector', is_correct: false },
      { id: 225, question_id: 57, content: 'Network layer', is_correct: false },
      // question_id: 58
      { id: 226, question_id: 58, content: 'Null safety', is_correct: true },
      { id: 227, question_id: 58, content: 'Type inference', is_correct: false },
      { id: 228, question_id: 58, content: 'Garbage collection', is_correct: false },
      { id: 229, question_id: 58, content: 'Memory management', is_correct: false },
      // question_id: 59
      { id: 230, question_id: 59, content: 'Simplicity', is_correct: true },
      { id: 231, question_id: 59, content: 'Complexity', is_correct: false },
      { id: 232, question_id: 59, content: 'Randomness', is_correct: false },
      { id: 233, question_id: 59, content: 'Abstraction', is_correct: false },
      // question_id: 60
      { id: 234, question_id: 60, content: 'Realtime syncing', is_correct: true },
      { id: 235, question_id: 60, content: 'Batch processing', is_correct: false },
      { id: 236, question_id: 60, content: 'Static storage', is_correct: false },
      { id: 237, question_id: 60, content: 'Offline caching', is_correct: false },
      // question_id: 61
      { id: 238, question_id: 61, content: 'UI testing', is_correct: true },
      { id: 239, question_id: 61, content: 'Unit testing', is_correct: false },
      { id: 240, question_id: 61, content: 'Integration testing', is_correct: false },
      { id: 241, question_id: 61, content: 'Performance testing', is_correct: false },
      // question_id: 62
      { id: 242, question_id: 62, content: 'Instant UI updates', is_correct: true },
      { id: 243, question_id: 62, content: 'Code compilation', is_correct: false },
      { id: 244, question_id: 62, content: 'App deployment', is_correct: false },
      { id: 245, question_id: 62, content: 'Database syncing', is_correct: false },
      // question_id: 63
      { id: 246, question_id: 63, content: 'UI data management', is_correct: true },
      { id: 247, question_id: 63, content: 'Network handling', is_correct: false },
      { id: 248, question_id: 63, content: 'File storage', is_correct: false },
      { id: 249, question_id: 63, content: 'Event processing', is_correct: false },
    ];
    answers.push(...mobileAnswers);

    // Mạng Máy Tính (question_id: 64–93, 120 đáp án)
    const networkAnswers = [
      // question_id: 64
      { id: 250, question_id: 64, content: 'HTTP', is_correct: true },
      { id: 251, question_id: 64, content: 'FTP', is_correct: false },
      { id: 252, question_id: 64, content: 'SMTP', is_correct: false },
      { id: 253, question_id: 64, content: 'POP3', is_correct: false },
      // question_id: 65
      { id: 254, question_id: 65, content: 'Reliable', is_correct: true },
      { id: 255, question_id: 65, content: 'Fast', is_correct: false },
      { id: 256, question_id: 65, content: 'Simple', is_correct: false },
      { id: 257, question_id: 65, content: 'Secure', is_correct: false },
      // question_id: 66
      { id: 258, question_id: 66, content: '/24', is_correct: true },
      { id: 259, question_id: 66, content: '/16', is_correct: false },
      { id: 260, question_id: 66, content: '/8', is_correct: false },
      { id: 261, question_id: 66, content: '/32', is_correct: false },
      // question_id: 67
      { id: 262, question_id: 67, content: 'Layer 3', is_correct: true },
      { id: 263, question_id: 67, content: 'Layer 2', is_correct: false },
      { id: 264, question_id: 67, content: 'Layer 4', is_correct: false },
      { id: 265, question_id: 67, content: 'Layer 7', is_correct: false },
      // question_id: 68
      { id: 266, question_id: 68, content: 'Virtual LAN', is_correct: true },
      { id: 267, question_id: 68, content: 'Physical LAN', is_correct: false },
      { id: 268, question_id: 68, content: 'Wide LAN', is_correct: false },
      { id: 269, question_id: 68, content: 'Global LAN', is_correct: false },
      // question_id: 69
      { id: 270, question_id: 69, content: 'Rules', is_correct: true },
      { id: 271, question_id: 69, content: 'Protocols', is_correct: false },
      { id: 272, question_id: 69, content: 'Devices', is_correct: false },
      { id: 273, question_id: 69, content: 'Users', is_correct: false },
      // question_id: 70
      { id: 274, question_id: 70, content: 'OpenVPN', is_correct: true },
      { id: 275, question_id: 70, content: 'HTTP', is_correct: false },
      { id: 276, question_id: 70, content: 'FTP', is_correct: false },
      { id: 277, question_id: 70, content: 'SMTP', is_correct: false },
      // question_id: 71
      { id: 278, question_id: 71, content: 'Application', is_correct: true },
      { id: 279, question_id: 71, content: 'Transport', is_correct: false },
      { id: 280, question_id: 71, content: 'Network', is_correct: false },
      { id: 281, question_id: 71, content: 'Data Link', is_correct: false },
      // question_id: 72
      { id: 282, question_id: 72, content: 'Wi-Fi 5', is_correct: true },
      { id: 283, question_id: 72, content: 'Wi-Fi 4', is_correct: false },
      { id: 284, question_id: 72, content: 'Wi-Fi 6', is_correct: false },
      { id: 285, question_id: 72, content: 'Wi-Fi 3', is_correct: false },
      // question_id: 73
      { id: 286, question_id: 73, content: 'Dynamic routing', is_correct: true },
      { id: 287, question_id: 73, content: 'Static routing', is_correct: false },
      { id: 288, question_id: 73, content: 'Default routing', is_correct: false },
      { id: 289, question_id: 73, content: 'Manual routing', is_correct: false },
      // question_id: 74
      { id: 290, question_id: 74, content: 'ICMP', is_correct: true },
      { id: 291, question_id: 74, content: 'TCP', is_correct: false },
      { id: 292, question_id: 74, content: 'UDP', is_correct: false },
      { id: 293, question_id: 74, content: 'HTTP', is_correct: false },
      // question_id: 75
      { id: 294, question_id: 75, content: 'Address translation', is_correct: true },
      { id: 295, question_id: 75, content: 'Packet routing', is_correct: false },
      { id: 296, question_id: 75, content: 'Data encryption', is_correct: false },
      { id: 297, question_id: 75, content: 'Protocol conversion', is_correct: false },
      // question_id: 76
      { id: 298, question_id: 76, content: 'Virtual Private Cloud', is_correct: true },
      { id: 299, question_id: 76, content: 'Virtual Public Cloud', is_correct: false },
      { id: 300, question_id: 76, content: 'Virtual Private Network', is_correct: false },
      { id: 301, question_id: 76, content: 'Virtual Public Network', is_correct: false },
      // question_id: 77
      { id: 302, question_id: 77, content: 'Control and Data', is_correct: true },
      { id: 303, question_id: 77, content: 'Application and Transport', is_correct: false },
      { id: 304, question_id: 77, content: 'Network and Data Link', is_correct: false },
      { id: 305, question_id: 77, content: 'Physical and Session', is_correct: false },
      // question_id: 78
      { id: 306, question_id: 78, content: '128 bits', is_correct: true },
      { id: 307, question_id: 78, content: '32 bits', is_correct: false },
      { id: 308, question_id: 78, content: '64 bits', is_correct: false },
      { id: 309, question_id: 78, content: '256 bits', is_correct: false },
      // question_id: 79
      { id: 310, question_id: 79, content: 'Network automation', is_correct: true },
      { id: 311, question_id: 79, content: 'Network monitoring', is_correct: false },
      { id: 312, question_id: 79, content: 'Network security', is_correct: false },
      { id: 313, question_id: 79, content: 'Network routing', is_correct: false },
      // question_id: 80
      { id: 314, question_id: 80, content: 'Unified Threat Management', is_correct: true },
      { id: 315, question_id: 80, content: 'Universal Traffic Management', is_correct: false },
      { id: 316, question_id: 80, content: 'Unified Transport Mechanism', is_correct: false },
      { id: 317, question_id: 80, content: 'Universal Threat Mitigation', is_correct: false },
      // question_id: 81
      { id: 318, question_id: 81, content: 'IoT', is_correct: true },
      { id: 319, question_id: 81, content: 'Web services', is_correct: false },
      { id: 320, question_id: 81, content: 'Database systems', is_correct: false },
      { id: 321, question_id: 81, content: 'Cloud computing', is_correct: false },
      // question_id: 82
      { id: 322, question_id: 82, content: 'Networking basics', is_correct: true },
      { id: 323, question_id: 82, content: 'Programming', is_correct: false },
      { id: 324, question_id: 82, content: 'Web development', is_correct: false },
      { id: 325, question_id: 82, content: 'Database management', is_correct: false },
      // question_id: 83
      { id: 326, question_id: 83, content: 'Network monitoring', is_correct: true },
      { id: 327, question_id: 83, content: 'Network automation', is_correct: false },
      { id: 328, question_id: 83, content: 'Network security', is_correct: false },
      { id: 329, question_id: 83, content: 'Network routing', is_correct: false },
      // question_id: 84
      { id: 330, question_id: 84, content: 'Resolves domain to IP', is_correct: true },
      { id: 331, question_id: 84, content: 'Encrypts data', is_correct: false },
      { id: 332, question_id: 84, content: 'Routes packets', is_correct: false },
      { id: 333, question_id: 84, content: 'Stores data', is_correct: false },
      // question_id: 85
      { id: 334, question_id: 85, content: 'Internet routing', is_correct: true },
      { id: 335, question_id: 85, content: 'Local routing', is_correct: false },
      { id: 336, question_id: 85, content: 'Static routing', is_correct: false },
      { id: 337, question_id: 85, content: 'Dynamic routing', is_correct: false },
      // question_id: 86
      { id: 338, question_id: 86, content: 'Layer 2', is_correct: true },
      { id: 339, question_id: 86, content: 'Layer 3', is_correct: false },
      { id: 340, question_id: 86, content: 'Layer 4', is_correct: false },
      { id: 341, question_id: 86, content: 'Layer 7', is_correct: false },
      // question_id: 87
      { id: 342, question_id: 87, content: 'Intelligent switching', is_correct: true },
      { id: 343, question_id: 87, content: 'Broadcast forwarding', is_correct: false },
      { id: 344, question_id: 87, content: 'Packet routing', is_correct: false },
      { id: 345, question_id: 87, content: 'Data encryption', is_correct: false },
      // question_id: 88
      { id: 346, question_id: 88, content: 'HTTPS', is_correct: true },
      { id: 347, question_id: 88, content: 'HTTP', is_correct: false },
      { id: 348, question_id: 88, content: 'FTP', is_correct: false },
      { id: 349, question_id: 88, content: 'SSH', is_correct: false },
      // question_id: 89
      { id: 350, question_id: 89, content: 'Layer 3', is_correct: true },
      { id: 351, question_id: 89, content: 'Layer 2', is_correct: false },
      { id: 352, question_id: 89, content: 'Layer 4', is_correct: false },
      { id: 353, question_id: 89, content: 'Layer 7', is_correct: false },
      // question_id: 90
      { id: 354, question_id: 90, content: 'Packet analysis', is_correct: true },
      { id: 355, question_id: 90, content: 'Packet routing', is_correct: false },
      { id: 356, question_id: 90, content: 'Packet encryption', is_correct: false },
      { id: 357, question_id: 90, content: 'Packet storage', is_correct: false },
      // question_id: 91
      { id: 358, question_id: 91, content: 'Dynamic IP', is_correct: true },
      { id: 359, question_id: 91, content: 'Static IP', is_correct: false },
      { id: 360, question_id: 91, content: 'Private IP', is_correct: false },
      { id: 361, question_id: 91, content: 'Public IP', is_correct: false },
      // question_id: 92
      { id: 362, question_id: 92, content: 'VLAN tagging', is_correct: true },
      { id: 363, question_id: 92, content: 'IP addressing', is_correct: false },
      { id: 364, question_id: 92, content: 'Port forwarding', is_correct: false },
      { id: 365, question_id: 92, content: 'Packet filtering', is_correct: false },
      // question_id: 93
      { id: 366, question_id: 93, content: 'Device management', is_correct: true },
      { id: 367, question_id: 93, content: 'Data encryption', is_correct: false },
      { id: 368, question_id: 93, content: 'Packet routing', is_correct: false },
      { id: 369, question_id: 93, content: 'User authentication', is_correct: false },
    ];
    answers.push(...networkAnswers);

    await queryInterface.bulkInsert('answers', answers, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('answers', { id: [...Array(360).keys()].map(i => i + 10) }, {});
  },
};