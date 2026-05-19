/* Stubbed dataset for all UniFlow modules. */
window.MOCK = (function () {
  const today = new Date();
  const day = (offset) => { const d = new Date(today); d.setDate(d.getDate() + offset); return d.toISOString(); };

  const departments = ['Computer Science','Mathematics','Mechanical Eng.','Economics','Architecture','Languages'];

  const students = [
    { id: 'S-1001', name: 'Aysel Quliyeva', dept: 'Computer Science', year: 2, gpa: 3.62, balance: 1800 },
    { id: 'S-1002', name: 'Rashad Aliyev', dept: 'Mathematics', year: 3, gpa: 3.41, balance: 0 },
    { id: 'S-1003', name: 'Lale Mammadova', dept: 'Architecture', year: 1, gpa: 3.85, balance: 950 },
    { id: 'S-1004', name: 'Emil Hasanov', dept: 'Economics', year: 4, gpa: 3.10, balance: 2400 },
    { id: 'S-1005', name: 'Nigar Suleymanli', dept: 'Computer Science', year: 2, gpa: 3.74, balance: 0 },
    { id: 'S-1006', name: 'Tural Ismayilov', dept: 'Mechanical Eng.', year: 3, gpa: 2.92, balance: 3100 },
  ];

  const employees = [
    { id: 'E-001', name: 'Dr. Samir Bayramov', role: 'Professor', dept: 'Computer Science', email: 'samir.b@uniflow.edu', salaryBand: 'P3', leaveBalance: 14, status: 'Active' },
    { id: 'E-002', name: 'Aysu Mehdiyeva', role: 'Lecturer', dept: 'Mathematics', email: 'aysu.m@uniflow.edu', salaryBand: 'L2', leaveBalance: 9, status: 'Active' },
    { id: 'E-003', name: 'Vugar Rahimov', role: 'Lab Assistant', dept: 'Mechanical Eng.', email: 'vugar.r@uniflow.edu', salaryBand: 'A1', leaveBalance: 18, status: 'Active' },
    { id: 'E-004', name: 'Sevinj Karimova', role: 'Admin Coordinator', dept: 'Registrar', email: 'sevinj.k@uniflow.edu', salaryBand: 'A2', leaveBalance: 12, status: 'On leave' },
    { id: 'E-005', name: 'Dr. Farid Aghayev', role: 'Associate Prof.', dept: 'Economics', email: 'farid.a@uniflow.edu', salaryBand: 'P2', leaveBalance: 16, status: 'Active' },
  ];

  const transactions = [
    { id: 'T-9001', date: day(-1), student: 'S-1001', desc: 'Tuition installment', dept: 'CS', amount: 1200, type: 'tuition', status: 'Paid' },
    { id: 'T-9002', date: day(-2), student: 'S-1003', desc: 'Library fine', dept: 'Architecture', amount: 25, type: 'fee', status: 'Paid' },
    { id: 'T-9003', date: day(-2), student: 'S-1004', desc: 'Dorm rent', dept: 'Economics', amount: 380, type: 'dorm', status: 'Pending' },
    { id: 'T-9004', date: day(-3), student: 'S-1002', desc: 'Tuition full', dept: 'Math', amount: 2400, type: 'tuition', status: 'Paid' },
    { id: 'T-9005', date: day(-4), student: 'S-1006', desc: 'Tuition installment', dept: 'ME', amount: 1200, type: 'tuition', status: 'Failed' },
    { id: 'T-9006', date: day(-5), student: 'S-1005', desc: 'Lab fee', dept: 'CS', amount: 90, type: 'fee', status: 'Paid' },
    { id: 'T-9007', date: day(-7), student: 'S-1001', desc: 'Refund - dropped course', dept: 'CS', amount: -350, type: 'refund', status: 'Refunded' },
  ];

  const subjects = ['Algorithms','Linear Algebra','Operating Systems','Microeconomics','Statics','Academic English'];

  const schedule = [
    { day: 'Mon', start: '09:00', end: '10:30', subject: 'Algorithms', teacher: 'Dr. Bayramov', room: 'A-204', building: 'Main', color: 1 },
    { day: 'Mon', start: '11:00', end: '12:30', subject: 'Linear Algebra', teacher: 'A. Mehdiyeva', room: 'B-110', building: 'Sciences', color: 2 },
    { day: 'Tue', start: '10:00', end: '11:30', subject: 'Operating Systems', teacher: 'Dr. Bayramov', room: 'A-301', building: 'Main', color: 3 },
    { day: 'Wed', start: '09:00', end: '10:30', subject: 'Microeconomics', teacher: 'Dr. Aghayev', room: 'C-12', building: 'Econ', color: 4 },
    { day: 'Wed', start: '13:00', end: '14:30', subject: 'Algorithms', teacher: 'Dr. Bayramov', room: 'A-204', building: 'Main', color: 1 },
    { day: 'Thu', start: '11:00', end: '12:30', subject: 'Statics', teacher: 'V. Rahimov', room: 'M-7', building: 'Mech', color: 2 },
    { day: 'Fri', start: '09:00', end: '10:30', subject: 'Academic English', teacher: 'S. Karimova', room: 'L-3', building: 'Languages', color: 3 },
    { day: 'Fri', start: '14:00', end: '15:30', subject: 'Operating Systems', teacher: 'Dr. Bayramov', room: 'A-301', building: 'Main', color: 3 },
  ];

  const homework = [
    { id: 'H-401', title: 'Graph traversal exercises', subject: 'Algorithms', due: day(2), status: 'Not started', desc: 'BFS/DFS on the provided datasets. Submit Python notebook.' },
    { id: 'H-402', title: 'Matrix decomposition set', subject: 'Linear Algebra', due: day(5), status: 'Draft' },
    { id: 'H-403', title: 'Scheduling algorithms essay', subject: 'Operating Systems', due: day(9), status: 'Not started' },
    { id: 'H-404', title: 'Elasticity problem set', subject: 'Microeconomics', due: day(-1), status: 'Submitted', score: 88 },
    { id: 'H-405', title: 'Beam loading report', subject: 'Statics', due: day(12), status: 'Not started' },
    { id: 'H-406', title: 'Essay: Climate policy', subject: 'Academic English', due: day(1), status: 'Draft' },
  ];

  const exams = [
    { id: 'X-501', subject: 'Algorithms', date: day(-30), type: 'paper', max: 100, score: 84, grade: 'B+' },
    { id: 'X-502', subject: 'Linear Algebra', date: day(-60), type: 'paper', max: 100, score: 91, grade: 'A' },
    { id: 'X-503', subject: 'Microeconomics', date: day(-90), type: 'online', max: 100, score: 76, grade: 'B' },
    { id: 'X-504', subject: 'Operating Systems', date: day(-120), type: 'paper', max: 100, score: 88, grade: 'A-' },
    { id: 'X-505', subject: 'Statics', date: day(-150), type: 'online', max: 100, score: 70, grade: 'B-' },
  ];

  const onlineExamQuestions = [
    { id: 'q1', type: 'mcq', text: 'Time complexity of binary search on a sorted array of n elements?', options: ['O(1)','O(log n)','O(n)','O(n log n)'], correct: 1 },
    { id: 'q2', type: 'tf', text: 'Quicksort has guaranteed O(n log n) worst-case time complexity.', correct: false },
    { id: 'q3', type: 'short', text: 'Briefly describe the difference between BFS and DFS.', },
    { id: 'q4', type: 'code', text: 'Write a function that returns the nth Fibonacci number (any language).', },
  ];

  const news = [
    { id: 'N-1', cat: 'Academic', title: 'Spring enrollment opens 1 June', date: day(-1), excerpt: 'Course selection for the spring term begins next week. Advisors are available throughout May.', featured: true },
    { id: 'N-2', cat: 'Research', title: 'Robotics lab wins regional prize', date: day(-3), excerpt: 'The autonomous navigation team secured first place at the inter-university competition.', featured: true },
    { id: 'N-3', cat: 'Campus Life', title: 'New canteen menu launches', date: day(-5), excerpt: 'Healthier seasonal options now available in all three canteens.' },
    { id: 'N-4', cat: 'Sports', title: 'Basketball tryouts this Friday', date: day(-6), excerpt: 'Open to all years. Sign up at the gym reception.' },
  ];

  const events = [
    { id: 'EV-1', title: 'Career Fair 2026', date: day(7), location: 'Main Hall', capacity: 500, rsvp: 312 },
    { id: 'EV-2', title: 'AI in Education panel', date: day(14), location: 'Auditorium B', capacity: 200, rsvp: 188 },
    { id: 'EV-3', title: 'Spring Concert', date: day(21), location: 'Open Air Stage', capacity: 1200, rsvp: 740 },
  ];

  const aiSubmissions = [
    { id: 'A-1', subject: 'Algorithms', when: day(-30), aiScore: 78, teacherScore: 80 },
    { id: 'A-2', subject: 'Algorithms', when: day(-22), aiScore: 82, teacherScore: 82 },
    { id: 'A-3', subject: 'Algorithms', when: day(-14), aiScore: 85, teacherScore: 88 },
    { id: 'A-4', subject: 'Algorithms', when: day(-5), aiScore: 89, teacherScore: 90 },
    { id: 'A-5', subject: 'Microeconomics', when: day(-26), aiScore: 70, teacherScore: 72 },
    { id: 'A-6', subject: 'Microeconomics', when: day(-12), aiScore: 76, teacherScore: 78 },
  ];

  const attendance = [
    { subject: 'Algorithms', total: 24, attended: 22 },
    { subject: 'Linear Algebra', total: 20, attended: 17 },
    { subject: 'Operating Systems', total: 22, attended: 21 },
    { subject: 'Microeconomics', total: 18, attended: 14 },
    { subject: 'Statics', total: 16, attended: 15 },
    { subject: 'Academic English', total: 20, attended: 19 },
  ];

  const attendanceLog = [
    { time: day(0), gate: 'Gate A', lesson: 'Algorithms (A-204)', status: 'On time' },
    { time: day(-1), gate: 'Gate B', lesson: 'Operating Systems', status: 'On time' },
    { time: day(-2), gate: 'Gate A', lesson: 'Linear Algebra', status: 'Late' },
    { time: day(-3), gate: 'Gate C', lesson: 'Microeconomics', status: 'Absent' },
  ];

  const hiringPipeline = {
    Applied: [{ id: 'C-1', name: 'Kamala Aliyeva', role: 'Lecturer (CS)' }, { id: 'C-2', name: 'Murad Hajiyev', role: 'Lab Tech' }],
    Screening: [{ id: 'C-3', name: 'Leyla Nasibova', role: 'Senior Lecturer' }],
    Interview: [{ id: 'C-4', name: 'Anar Mammadli', role: 'Adjunct Prof.' }],
    Offer: [{ id: 'C-5', name: 'Gunay Babayeva', role: 'Coordinator' }],
    Hired: [{ id: 'C-6', name: 'Orkhan Veliyev', role: 'Assistant Prof.' }],
  };

  const monthlyRevenue = [
    { m: 'Jan', v: 420000 }, { m: 'Feb', v: 510000 }, { m: 'Mar', v: 480000 },
    { m: 'Apr', v: 615000 }, { m: 'May', v: 720000 }, { m: 'Jun', v: 540000 },
    { m: 'Jul', v: 310000 }, { m: 'Aug', v: 295000 }, { m: 'Sep', v: 820000 },
    { m: 'Oct', v: 760000 }, { m: 'Nov', v: 690000 }, { m: 'Dec', v: 500000 },
  ];

  const revenueByDept = departments.map((d, i) => ({ d, v: [820, 410, 510, 690, 580, 320][i] * 1000 }));

  const tuitionBreakdown = [
    { label: 'Tuition (Fall 2025)', amount: 2400 },
    { label: 'Library fee', amount: 60 },
    { label: 'Lab fee', amount: 120 },
    { label: 'Dorm (Q2)', amount: 380 },
    { label: '— Scholarship credit', amount: -1160 },
  ];

  const cafeteriaMenu = [
    { id: 'M-1',  cat: 'Hot meals', name: 'Plov with lamb',          price: 5.80, kcal: 720, emoji: '🍛', tag: 'Chef pick' },
    { id: 'M-2',  cat: 'Hot meals', name: 'Chicken kebab + rice',    price: 6.20, kcal: 680, emoji: '🍗' },
    { id: 'M-3',  cat: 'Hot meals', name: 'Dolma (vegetarian)',      price: 4.50, kcal: 410, emoji: '🥬', tag: 'Veg' },
    { id: 'M-4',  cat: 'Hot meals', name: 'Beef goulash + bread',    price: 5.40, kcal: 590, emoji: '🥘' },
    { id: 'M-5',  cat: 'Hot meals', name: 'Pasta carbonara',         price: 4.80, kcal: 640, emoji: '🍝' },
    { id: 'M-6',  cat: 'Salads',    name: 'Caesar salad',            price: 3.90, kcal: 320, emoji: '🥗' },
    { id: 'M-7',  cat: 'Salads',    name: 'Greek salad',             price: 3.50, kcal: 280, emoji: '🥙', tag: 'Veg' },
    { id: 'M-8',  cat: 'Snacks',    name: 'Cheese sandwich',         price: 2.40, kcal: 360, emoji: '🥪' },
    { id: 'M-9',  cat: 'Snacks',    name: 'Chicken wrap',            price: 3.60, kcal: 440, emoji: '🌯' },
    { id: 'M-10', cat: 'Bakery',    name: 'Cheese pirojki',          price: 1.20, kcal: 210, emoji: '🥟' },
    { id: 'M-11', cat: 'Bakery',    name: 'Chocolate croissant',     price: 1.80, kcal: 320, emoji: '🥐' },
    { id: 'M-12', cat: 'Bakery',    name: 'Apple pie slice',         price: 1.60, kcal: 290, emoji: '🥧' },
    { id: 'M-13', cat: 'Drinks',    name: 'Black tea',               price: 0.60, kcal:  10, emoji: '🍵' },
    { id: 'M-14', cat: 'Drinks',    name: 'Cappuccino',              price: 1.80, kcal:  90, emoji: '☕' },
    { id: 'M-15', cat: 'Drinks',    name: 'Fresh orange juice',      price: 2.20, kcal: 140, emoji: '🧃' },
    { id: 'M-16', cat: 'Drinks',    name: 'Sparkling water 0.5L',    price: 0.90, kcal:   0, emoji: '💧' },
    { id: 'M-17', cat: 'Drinks',    name: 'Ayran 0.3L',              price: 0.80, kcal:  60, emoji: '🥛' },
  ];

  const cafeteriaOrders = [
    { id: 'CO-2041', when: day(0),  items: [{ id:'M-14', q:1 },{ id:'M-11', q:1 }], total: 3.60, method: 'Balance' },
    { id: 'CO-2034', when: day(-1), items: [{ id:'M-2',  q:1 },{ id:'M-13', q:1 }], total: 6.80, method: 'QR · scanned at Gate 2 cashier' },
    { id: 'CO-2017', when: day(-2), items: [{ id:'M-6',  q:1 },{ id:'M-15', q:1 }], total: 6.10, method: 'Balance' },
    { id: 'CO-1996', when: day(-4), items: [{ id:'M-1',  q:1 },{ id:'M-17', q:1 }], total: 6.60, method: 'Balance' },
    { id: 'CO-1972', when: day(-7), items: [{ id:'M-5',  q:1 }],                    total: 4.80, method: 'QR · scanned at Main canteen' },
  ];

  // Extra per-product metadata (cost, stock, supplier link, allergens, photo)
  const cafeteriaProductMeta = {
    'M-1':  { cost: 2.40, stock: 28, prepMin: 8, allergens: ['gluten'], active: true,  supplier: 'SUP-1' },
    'M-2':  { cost: 2.90, stock: 18, prepMin: 12, allergens: [], active: true,         supplier: 'SUP-2' },
    'M-3':  { cost: 1.80, stock: 12, prepMin: 6, allergens: [], active: true,          supplier: 'SUP-3' },
    'M-4':  { cost: 2.60, stock: 0,  prepMin: 14, allergens: ['gluten'], active: false, supplier: 'SUP-2' },
    'M-5':  { cost: 1.90, stock: 22, prepMin: 7, allergens: ['gluten','egg','dairy'], active: true, supplier: 'SUP-4' },
    'M-6':  { cost: 1.40, stock: 30, prepMin: 4, allergens: ['egg','dairy'], active: true, supplier: 'SUP-3' },
    'M-7':  { cost: 1.20, stock: 24, prepMin: 4, allergens: ['dairy'], active: true,    supplier: 'SUP-3' },
    'M-8':  { cost: 0.80, stock: 40, prepMin: 2, allergens: ['gluten','dairy'], active: true, supplier: 'SUP-4' },
    'M-9':  { cost: 1.30, stock: 19, prepMin: 3, allergens: ['gluten'], active: true,   supplier: 'SUP-4' },
    'M-10': { cost: 0.45, stock: 60, prepMin: 2, allergens: ['gluten','dairy'], active: true, supplier: 'SUP-5' },
    'M-11': { cost: 0.70, stock: 36, prepMin: 1, allergens: ['gluten','dairy'], active: true, supplier: 'SUP-5' },
    'M-12': { cost: 0.55, stock: 14, prepMin: 1, allergens: ['gluten','dairy','egg'], active: true, supplier: 'SUP-5' },
    'M-13': { cost: 0.10, stock: 200, prepMin: 1, allergens: [], active: true,          supplier: 'SUP-6' },
    'M-14': { cost: 0.55, stock: 150, prepMin: 2, allergens: ['dairy'], active: true,   supplier: 'SUP-6' },
    'M-15': { cost: 0.90, stock: 22, prepMin: 1, allergens: [], active: true,           supplier: 'SUP-7' },
    'M-16': { cost: 0.35, stock: 90, prepMin: 0, allergens: [], active: true,           supplier: 'SUP-7' },
    'M-17': { cost: 0.30, stock: 0,  prepMin: 0, allergens: ['dairy'], active: false,   supplier: 'SUP-7' },
  };

  const cafeteriaSuppliers = [
    { id: 'SUP-1', name: 'Baku Halal Meats',     contact: 'Elnur Aliyev', phone: '+994 50 211 38 92', email: 'orders@bakuhalal.az',   leadDays: 1 },
    { id: 'SUP-2', name: 'Caspian Poultry Co.',  contact: 'Aysel Mehdiyeva', phone: '+994 51 444 12 03', email: 'sales@caspianpoultry.az', leadDays: 1 },
    { id: 'SUP-3', name: 'Green Valley Produce', contact: 'Tural Rzayev', phone: '+994 55 712 81 14',  email: 'tural@greenvalley.az', leadDays: 1 },
    { id: 'SUP-4', name: 'Anatolia Bakery',      contact: 'Murad Hasanov',phone: '+994 50 990 41 27',  email: 'orders@anatolia.az',   leadDays: 2 },
    { id: 'SUP-5', name: 'Sweet Crumb Patisserie', contact: 'Lale Karimli', phone: '+994 55 332 60 18',  email: 'lale@sweetcrumb.az',   leadDays: 2 },
    { id: 'SUP-6', name: 'Caucasus Coffee Roasters', contact: 'Farid Aghayev', phone: '+994 50 800 19 04', email: 'b2b@caucasuscoffee.az', leadDays: 3 },
    { id: 'SUP-7', name: 'Khazar Bottlers',      contact: 'Nigar Rahimli',phone: '+994 51 240 70 81',  email: 'orders@khazarbottlers.az', leadDays: 1 },
    { id: 'SUP-8', name: 'Universal Packaging',  contact: 'Anar Quliyev', phone: '+994 50 117 49 32',  email: 'sales@unipack.az',     leadDays: 4 },
  ];

  // Raw ingredients / consumables tracked for procurement (separate from sellable products)
  const cafeteriaSupplies = [
    { id: 'I-01', name: 'Basmati rice',        unit: 'kg',  onHand: 14, reorder: 25, parLevel: 60,  costPerUnit: 2.10, supplier: 'SUP-3', usePerDay: 6 },
    { id: 'I-02', name: 'Lamb (shoulder)',     unit: 'kg',  onHand: 4,  reorder: 8,  parLevel: 20,  costPerUnit: 14.80, supplier: 'SUP-1', usePerDay: 3.5 },
    { id: 'I-03', name: 'Chicken breast',      unit: 'kg',  onHand: 22, reorder: 12, parLevel: 30,  costPerUnit: 8.40,  supplier: 'SUP-2', usePerDay: 5 },
    { id: 'I-04', name: 'Beef (stewing)',      unit: 'kg',  onHand: 0,  reorder: 6,  parLevel: 18,  costPerUnit: 12.20, supplier: 'SUP-1', usePerDay: 2.5 },
    { id: 'I-05', name: 'Tomatoes',            unit: 'kg',  onHand: 9,  reorder: 12, parLevel: 30,  costPerUnit: 1.40,  supplier: 'SUP-3', usePerDay: 5 },
    { id: 'I-06', name: 'Cucumbers',           unit: 'kg',  onHand: 11, reorder: 8,  parLevel: 20,  costPerUnit: 1.20,  supplier: 'SUP-3', usePerDay: 3 },
    { id: 'I-07', name: 'Lettuce',             unit: 'head',onHand: 6,  reorder: 14, parLevel: 30,  costPerUnit: 0.80,  supplier: 'SUP-3', usePerDay: 4 },
    { id: 'I-08', name: 'Feta cheese',         unit: 'kg',  onHand: 1.4,reorder: 3,  parLevel: 8,   costPerUnit: 7.60,  supplier: 'SUP-3', usePerDay: 0.9 },
    { id: 'I-09', name: 'Whole milk',          unit: 'L',   onHand: 28, reorder: 20, parLevel: 60,  costPerUnit: 1.10,  supplier: 'SUP-6', usePerDay: 9 },
    { id: 'I-10', name: 'Coffee beans (espresso blend)', unit: 'kg', onHand: 2.1, reorder: 4, parLevel: 12, costPerUnit: 18.40, supplier: 'SUP-6', usePerDay: 0.8 },
    { id: 'I-11', name: 'Tea (loose-leaf black)', unit: 'kg', onHand: 0.6, reorder: 1, parLevel: 3,  costPerUnit: 22.00, supplier: 'SUP-6', usePerDay: 0.15 },
    { id: 'I-12', name: 'Sugar',               unit: 'kg',  onHand: 12, reorder: 8,  parLevel: 25,  costPerUnit: 1.30,  supplier: 'SUP-3', usePerDay: 1.4 },
    { id: 'I-13', name: 'Wheat flour (00)',    unit: 'kg',  onHand: 18, reorder: 20, parLevel: 50,  costPerUnit: 0.95,  supplier: 'SUP-4', usePerDay: 4 },
    { id: 'I-14', name: 'Eggs',                unit: 'dz',  onHand: 14, reorder: 10, parLevel: 30,  costPerUnit: 2.40,  supplier: 'SUP-3', usePerDay: 3 },
    { id: 'I-15', name: 'Sunflower oil',       unit: 'L',   onHand: 8,  reorder: 6,  parLevel: 20,  costPerUnit: 2.80,  supplier: 'SUP-3', usePerDay: 1.2 },
    { id: 'I-16', name: 'Butter',              unit: 'kg',  onHand: 3,  reorder: 4,  parLevel: 10,  costPerUnit: 8.20,  supplier: 'SUP-6', usePerDay: 0.7 },
    { id: 'I-17', name: 'Croissant dough (frozen)', unit: 'kg', onHand: 5, reorder: 6, parLevel: 15, costPerUnit: 6.40, supplier: 'SUP-5', usePerDay: 2 },
    { id: 'I-18', name: 'Pasta (penne)',       unit: 'kg',  onHand: 13, reorder: 10, parLevel: 25,  costPerUnit: 1.60,  supplier: 'SUP-4', usePerDay: 2 },
    { id: 'I-19', name: 'Take-away boxes (M)', unit: 'pcs', onHand: 320, reorder: 400, parLevel: 1200, costPerUnit: 0.18, supplier: 'SUP-8', usePerDay: 180 },
    { id: 'I-20', name: 'Paper cups 250ml',    unit: 'pcs', onHand: 540, reorder: 500, parLevel: 1500, costPerUnit: 0.09, supplier: 'SUP-8', usePerDay: 220 },
    { id: 'I-21', name: 'Napkins (pack of 100)', unit: 'pack', onHand: 6, reorder: 10, parLevel: 30, costPerUnit: 1.40, supplier: 'SUP-8', usePerDay: 3 },
    { id: 'I-22', name: 'Cleaning detergent',  unit: 'L',   onHand: 4,  reorder: 4,  parLevel: 12,  costPerUnit: 5.60,  supplier: 'SUP-8', usePerDay: 0.6 },
  ];

  const cafeteriaPurchaseOrders = [
    { id: 'PO-2041', placed: day(-1), supplier: 'SUP-2', items: [{ id: 'I-03', q: 25 }],                       total: 25 * 8.40,  status: 'In transit', eta: day(0) },
    { id: 'PO-2040', placed: day(-2), supplier: 'SUP-3', items: [{ id: 'I-05', q: 30 }, { id: 'I-07', q: 24 }], total: 30*1.40 + 24*0.80, status: 'Delivered', eta: day(-1) },
    { id: 'PO-2039', placed: day(-3), supplier: 'SUP-6', items: [{ id: 'I-09', q: 60 }, { id: 'I-10', q: 4 }],  total: 60*1.10 + 4*18.40, status: 'Delivered', eta: day(-2) },
    { id: 'PO-2038', placed: day(-4), supplier: 'SUP-5', items: [{ id: 'I-17', q: 10 }],                       total: 10 * 6.40,  status: 'Delivered', eta: day(-3) },
  ];

  // ---- LIBRARY ----
  const librarySubjects = ['Computer Science','Mathematics','Engineering','Economics','Architecture','Literature','Languages','Physics','History','Philosophy'];
  const libraryBooks = [
    { id: 'B-001', title: 'Introduction to Algorithms',          authors: 'T. Cormen, C. Leiserson, R. Rivest, C. Stein', isbn: '978-0-262-03384-8', subject: 'Computer Science', publisher: 'MIT Press', year: 2009, pages: 1312, lang: 'EN', shelf: 'CS-110', cover: '📘', copies: 4, available: 1, eBook: true,  rating: 4.8, summary: 'Comprehensive textbook on algorithms, covering a broad range of topics from sorting and searching to graph algorithms and NP-completeness.' },
    { id: 'B-002', title: 'Clean Code',                          authors: 'Robert C. Martin',           isbn: '978-0-13-235088-4', subject: 'Computer Science', publisher: 'Prentice Hall',  year: 2008, pages: 464,  lang: 'EN', shelf: 'CS-204', cover: '📗', copies: 3, available: 0, eBook: true,  rating: 4.6, summary: 'A handbook of agile software craftsmanship — practices, principles, and patterns for writing readable, maintainable code.' },
    { id: 'B-003', title: 'Linear Algebra Done Right',           authors: 'Sheldon Axler',              isbn: '978-3-319-11079-0', subject: 'Mathematics',      publisher: 'Springer',       year: 2015, pages: 340,  lang: 'EN', shelf: 'MT-031', cover: '📕', copies: 5, available: 3, eBook: true,  rating: 4.7, summary: 'Reorients the standard linear algebra curriculum around the central notion of vector spaces and linear maps.' },
    { id: 'B-004', title: 'The Pragmatic Programmer',            authors: 'D. Thomas, A. Hunt',         isbn: '978-0-13-595705-9', subject: 'Computer Science', publisher: 'Addison-Wesley', year: 2019, pages: 352,  lang: 'EN', shelf: 'CS-205', cover: '📙', copies: 2, available: 2, eBook: false, rating: 4.7, summary: 'Cuts through the increasing specialisation and technicalities of modern software development to a deep understanding of the process.' },
    { id: 'B-005', title: 'Operating System Concepts',           authors: 'Silberschatz, Galvin, Gagne',isbn: '978-1-118-06333-0', subject: 'Computer Science', publisher: 'Wiley',          year: 2018, pages: 976,  lang: 'EN', shelf: 'CS-310', cover: '📘', copies: 3, available: 1, eBook: true,  rating: 4.3, summary: 'The dinosaur book. Classic introductory text on operating systems.' },
    { id: 'B-006', title: 'Microeconomic Theory',                authors: 'Mas-Colell, Whinston, Green',isbn: '978-0-19-507340-9', subject: 'Economics',        publisher: 'Oxford',         year: 1995, pages: 1008, lang: 'EN', shelf: 'EC-101', cover: '📚', copies: 2, available: 2, eBook: false, rating: 4.2, summary: 'Standard graduate reference for microeconomics.' },
    { id: 'B-007', title: 'The Architecture of the City',        authors: 'Aldo Rossi',                 isbn: '978-0-262-68043-8', subject: 'Architecture',     publisher: 'MIT Press',      year: 1984, pages: 201,  lang: 'EN', shelf: 'AR-014', cover: '📕', copies: 1, available: 1, eBook: false, rating: 4.4, summary: 'Foundational text on urbanism and architectural theory.' },
    { id: 'B-008', title: 'War and Peace',                       authors: 'Leo Tolstoy',                isbn: '978-0-14-044793-4', subject: 'Literature',       publisher: 'Penguin',        year: 2005, pages: 1392, lang: 'EN', shelf: 'LT-099', cover: '📗', copies: 3, available: 1, eBook: true,  rating: 4.5, summary: 'Tolstoy\'s sweeping epic following five families during Napoleonic-era Russia.' },
    { id: 'B-009', title: 'Engineering Mechanics: Statics',      authors: 'R. C. Hibbeler',             isbn: '978-0-13-291540-8', subject: 'Engineering',      publisher: 'Pearson',        year: 2016, pages: 736,  lang: 'EN', shelf: 'EG-201', cover: '📙', copies: 4, available: 2, eBook: true,  rating: 4.3, summary: 'Standard undergraduate text on engineering statics.' },
    { id: 'B-010', title: 'A Brief History of Time',             authors: 'Stephen Hawking',            isbn: '978-0-553-38016-3', subject: 'Physics',          publisher: 'Bantam',         year: 1998, pages: 256,  lang: 'EN', shelf: 'PH-040', cover: '📘', copies: 5, available: 4, eBook: true,  rating: 4.7, summary: 'Popular cosmology — from the Big Bang to black holes — for general readers.' },
    { id: 'B-011', title: 'Sapiens: A Brief History of Humankind', authors: 'Yuval Noah Harari',        isbn: '978-0-06-231609-7', subject: 'History',          publisher: 'Harper',         year: 2015, pages: 464,  lang: 'EN', shelf: 'HI-101', cover: '📕', copies: 4, available: 0, eBook: true,  rating: 4.6, summary: 'A sweeping narrative of the history of our species, from cognitive revolution to today.' },
    { id: 'B-012', title: 'Meditations',                          authors: 'Marcus Aurelius',           isbn: '978-0-14-044933-4', subject: 'Philosophy',       publisher: 'Penguin',        year: 2006, pages: 304,  lang: 'EN', shelf: 'PL-010', cover: '📗', copies: 3, available: 2, eBook: true,  rating: 4.8, summary: 'Personal writings of the Roman emperor on Stoic philosophy.' },
    { id: 'B-013', title: 'Azərbaycan ədəbiyyatı tarixi',         authors: 'Mirzə Fətəli Axundov (red.)',isbn: '978-9952-37-009-7', subject: 'Literature',       publisher: 'Bakı Universiteti',year: 2014, pages: 612,  lang: 'AZ', shelf: 'LT-AZ-04', cover: '📚', copies: 2, available: 2, eBook: false, rating: 4.4, summary: 'Azərbaycan ədəbiyyatının tarixinə dair akademik töhfə.' },
    { id: 'B-014', title: 'Deep Learning',                        authors: 'I. Goodfellow, Y. Bengio, A. Courville', isbn: '978-0-262-03561-3', subject: 'Computer Science', publisher: 'MIT Press', year: 2016, pages: 800, lang: 'EN', shelf: 'CS-420', cover: '📘', copies: 3, available: 1, eBook: true, rating: 4.5, summary: 'The classic graduate-level textbook on deep learning.' },
    { id: 'B-015', title: 'Statics and Dynamics in Architecture', authors: 'Mario Salvadori',           isbn: '978-0-393-02078-2', subject: 'Architecture',     publisher: 'W. W. Norton',   year: 1990, pages: 320,  lang: 'EN', shelf: 'AR-052', cover: '📙', copies: 2, available: 1, eBook: false, rating: 4.2, summary: 'Engineering principles behind architectural design, explained accessibly.' },
    { id: 'B-016', title: 'Calculus, Vol. 1',                     authors: 'Tom M. Apostol',            isbn: '978-0-471-00005-1', subject: 'Mathematics',      publisher: 'Wiley',          year: 1967, pages: 666,  lang: 'EN', shelf: 'MT-008', cover: '📕', copies: 3, available: 2, eBook: true,  rating: 4.6, summary: 'Classic two-volume rigorous treatment of single- and multi-variable calculus.' },
    { id: 'B-017', title: 'The Lean Startup',                     authors: 'Eric Ries',                 isbn: '978-0-307-88789-4', subject: 'Economics',        publisher: 'Crown Business', year: 2011, pages: 336,  lang: 'EN', shelf: 'EC-205', cover: '📗', copies: 4, available: 4, eBook: true,  rating: 4.2, summary: 'Build-measure-learn approach to building startups under uncertainty.' },
    { id: 'B-018', title: 'Don Quixote',                          authors: 'Miguel de Cervantes',       isbn: '978-0-06-093434-7', subject: 'Literature',       publisher: 'Harper',         year: 2003, pages: 992,  lang: 'EN', shelf: 'LT-022', cover: '📚', copies: 2, available: 1, eBook: true,  rating: 4.3, summary: 'The seminal Spanish novel, in modern English translation.' },
    { id: 'B-019', title: 'Computer Networking: A Top-Down Approach', authors: 'Kurose, Ross',          isbn: '978-0-13-359414-0', subject: 'Computer Science', publisher: 'Pearson',        year: 2017, pages: 864,  lang: 'EN', shelf: 'CS-340', cover: '📘', copies: 3, available: 0, eBook: true,  rating: 4.4, summary: 'Approachable networking textbook starting from application layer down.' },
    { id: 'B-020', title: 'The Elements of Statistical Learning', authors: 'Hastie, Tibshirani, Friedman', isbn: '978-0-387-84857-0', subject: 'Mathematics',  publisher: 'Springer',       year: 2009, pages: 745,  lang: 'EN', shelf: 'MT-301', cover: '📕', copies: 2, available: 1, eBook: true,  rating: 4.7, summary: 'Reference text on statistical learning theory, with applications.' },
  ];

  // Sample chapter content for the online reader (used by reader.html)
  const libraryBookContent = {
    'B-001': [
      { title: 'Chapter 1 — The Role of Algorithms in Computing', body: 'An algorithm is any well-defined computational procedure that takes some value, or set of values, as input and produces some value, or set of values, as output. An algorithm is thus a sequence of computational steps that transform the input into the output.\n\nWe can also view an algorithm as a tool for solving a well-specified computational problem. The statement of the problem specifies in general terms the desired input/output relationship. The algorithm describes a specific computational procedure for achieving that input/output relationship.\n\nFor example, one might need to sort a sequence of numbers into nondecreasing order. This problem arises frequently in practice and provides fertile ground for introducing many standard design techniques and analysis tools.' },
      { title: 'Chapter 2 — Getting Started', body: 'In this chapter we examine the insertion sort algorithm to solve the sorting problem and analyze its running time.\n\nInsertion sort works the way many people sort a hand of playing cards. We start with an empty left hand and the cards face down on the table. We then remove one card at a time from the table and insert it into the correct position in the left hand. To find the correct position for a card, we compare it with each of the cards already in the hand, from right to left.' },
      { title: 'Chapter 3 — Growth of Functions', body: 'The order of growth of the running time of an algorithm gives a simple characterization of the algorithm\'s efficiency and also allows us to compare the relative performance of alternative algorithms.\n\nWhen we look at input sizes large enough to make only the order of growth of the running time relevant, we are studying the asymptotic efficiency of algorithms.' },
    ],
    'B-002': [
      { title: 'Chapter 1 — Clean Code', body: 'There will be code. We may think that we are well on the way toward modeling languages — eventually our specifications will be so precise that they will be executable — but until that day arrives, there will always be code.\n\nMaking code clean is not an option; it is a professional obligation. The cost of bad code rises exponentially over time.' },
      { title: 'Chapter 2 — Meaningful Names', body: 'Names are everywhere in software. We name our variables, our functions, our arguments, classes, and packages. We name our source files and the directories that contain them. Because we do so much of it, we\'d better do it well.\n\nThe name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used.' },
    ],
    'B-010': [
      { title: 'Chapter 1 — Our Picture of the Universe', body: 'A well-known scientist (some say it was Bertrand Russell) once gave a public lecture on astronomy. He described how the earth orbits around the sun and how the sun, in turn, orbits around the center of a vast collection of stars called our galaxy.\n\nAt the end of the lecture, a little old lady at the back of the room got up and said: "What you have told us is rubbish. The world is really a flat plate supported on the back of a giant tortoise." The scientist gave a superior smile before replying, "What is the tortoise standing on?" "You\'re very clever, young man, very clever," said the old lady. "But it\'s turtles all the way down!"' },
    ],
    'B-012': [
      { title: 'Book II — Begin the morning by saying to thyself', body: 'I shall meet today inquisitive, ungrateful, violent, treacherous, envious, uncharitable men. All of these things have come upon them through ignorance of real good and ill.\n\nBut I, because I have seen that the nature of good is the right, and of ill the wrong, and that the nature of the man himself who does wrong is akin to my own — not of the same blood and seed, but participating with me in mind, that is in a portion of divinity — I can neither be harmed by any of them, for no one can fix on me what is wrong, nor can I be angry with my kinsman, or hate him.' },
      { title: 'Book IV — Constantly regard the universe as one living being', body: 'Constantly regard the universe as one living being, having one substance and one soul; and observe how all things have reference to one perception, the perception of this one living being; and how all things act with one movement; and how all things are the cooperating causes of all things that exist; observe too the continuous spinning of the thread and the contexture of the web.' },
    ],
  };

  const libraryLoans = [
    { id: 'L-1041', book: 'B-002', userId: 'S-1001', userName: 'Aysel Quliyeva', userKind: 'Student', issued: day(-8),  due: day(6),  returned: null,        renewals: 0, status: 'Active' },
    { id: 'L-1037', book: 'B-005', userId: 'S-1001', userName: 'Aysel Quliyeva', userKind: 'Student', issued: day(-14), due: day(-3), returned: null,        renewals: 1, status: 'Overdue' },
    { id: 'L-1033', book: 'B-011', userId: 'S-1002', userName: 'Rashad Aliyev',  userKind: 'Student', issued: day(-12), due: day(2),  returned: null,        renewals: 0, status: 'Active' },
    { id: 'L-1031', book: 'B-019', userId: 'S-1005', userName: 'Nigar Suleymanli', userKind: 'Student', issued: day(-18), due: day(-7), returned: null,      renewals: 0, status: 'Overdue' },
    { id: 'L-1029', book: 'B-014', userId: 'E-001', userName: 'Dr. Samir Bayramov', userKind: 'Teacher', issued: day(-20), due: day(10), returned: null,     renewals: 0, status: 'Active' },
    { id: 'L-1024', book: 'B-001', userId: 'S-1003', userName: 'Lale Mammadova', userKind: 'Student', issued: day(-26), due: day(-12), returned: null,       renewals: 0, status: 'Overdue' },
    { id: 'L-1020', book: 'B-003', userId: 'S-1006', userName: 'Tural Ismayilov', userKind: 'Student', issued: day(-30), due: day(-16), returned: day(-15),  renewals: 0, status: 'Returned' },
    { id: 'L-1016', book: 'B-008', userId: 'S-1001', userName: 'Aysel Quliyeva', userKind: 'Student', issued: day(-40), due: day(-26), returned: day(-25),   renewals: 1, status: 'Returned' },
    { id: 'L-1012', book: 'B-012', userId: 'S-1004', userName: 'Emil Hasanov',   userKind: 'Student', issued: day(-45), due: day(-31), returned: day(-30),   renewals: 0, status: 'Returned' },
  ];

  const libraryHolds = [
    { id: 'H-201', book: 'B-002', userId: 'S-1002', userName: 'Rashad Aliyev', placed: day(-2), position: 1, status: 'Waiting' },
    { id: 'H-198', book: 'B-002', userId: 'S-1001', userName: 'Aysel Quliyeva', placed: day(-1), position: 2, status: 'Waiting' },
    { id: 'H-194', book: 'B-011', userId: 'S-1001', userName: 'Aysel Quliyeva', placed: day(-4), position: 1, status: 'Waiting' },
    { id: 'H-188', book: 'B-019', userId: 'S-1003', userName: 'Lale Mammadova', placed: day(-3), position: 1, status: 'Ready for pickup' },
  ];

  const libraryFines = [
    { id: 'F-44', userId: 'S-1001', loan: 'L-1037', amount: 1.65, reason: 'Overdue · 3 days', paid: false, when: day(-3) },
    { id: 'F-39', userId: 'S-1005', loan: 'L-1031', amount: 3.85, reason: 'Overdue · 7 days', paid: false, when: day(-7) },
    { id: 'F-32', userId: 'S-1003', loan: 'L-1024', amount: 6.60, reason: 'Overdue · 12 days', paid: false, when: day(-12) },
    { id: 'F-25', userId: 'S-1001', loan: 'L-1016', amount: 0.55, reason: 'Overdue · 1 day',  paid: true,  when: day(-25) },
  ];

  return {
    departments, subjects, students, employees, transactions, schedule, homework, exams,
    onlineExamQuestions, news, events, aiSubmissions, attendance, attendanceLog,
    hiringPipeline, monthlyRevenue, revenueByDept, tuitionBreakdown,
    cafeteriaMenu, cafeteriaOrders, cafeteriaProductMeta,
    cafeteriaSuppliers, cafeteriaSupplies, cafeteriaPurchaseOrders,
    librarySubjects, libraryBooks, libraryBookContent, libraryLoans, libraryHolds, libraryFines,
  };
})();
