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

  return {
    departments, subjects, students, employees, transactions, schedule, homework, exams,
    onlineExamQuestions, news, events, aiSubmissions, attendance, attendanceLog,
    hiringPipeline, monthlyRevenue, revenueByDept, tuitionBreakdown,
  };
})();
