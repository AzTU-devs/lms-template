# UniFlow LMS — Comprehensive Build Report

> **Scope note:** The starting project was a single 2 MB standalone HTML prototype (`UniFlow _standalone_.html`) — no framework, no backend. Per the user's choice, this delivery is a **static HTML/CSS/JS mockup suite** for all 12 modules, with every external integration stubbed. The schema, API contracts, and access matrix below describe what a production build *would* implement; the current files demonstrate the corresponding UI.

---

## 1. Executive Summary

- **Total files added:** 22 under `static-mockups/`, plus this report and `MODULES_REPORT.md` at project root.
- **Files modified:** none (the original `UniFlow _standalone_.html` is untouched).
- **Modules implemented (as UI):** 12/12.
- **Stack used:** Pure HTML + CSS + vanilla JS, Inter font (Google Fonts), Chart.js (CDN). No build step.
- **Integrations:** all stubbed behind clearly-labeled UI hooks — Anthropic Claude (modules 5, 11), Stripe (9), turnstile webhook (6), PWA manifest + service worker (10).
- **Time-cost honesty:** a real implementation of all 12 modules as a Next.js/Prisma application is roughly 3–6 weeks for one engineer. These mockups establish the visual language and component contracts so that scaffolding can begin without re-litigating UI decisions.

---

## 2. Architecture overview

```mermaid
graph TD
    subgraph Frontend [Static mockups - delivered]
        Shell[app.js renderShell + sidebar + topbar + role switch]
        CSS[styles.css design tokens]
        Mock[mock-data.js stubbed MOCK dataset]
        Landing[index.html]
        Shell --> Landing
        Shell --> M1[1. Finance]
        Shell --> M2[2. HR]
        Shell --> M3[3. Exams online+paper]
        Shell --> M4[4. Schedule]
        Shell --> M5[5. AI Grading]
        Shell --> M6[6. Attendance]
        Shell --> M7[7. Homework Hub]
        Shell --> M8[8. News & Events]
        Shell --> M9[9. Payments]
        Shell --> M10[10. PWA / Mobile]
        Shell --> M11[11. AI Tutor]
        Shell --> M12[12. Deadlines]
    end

    subgraph Stubbed [Stubbed - would be real backend]
        AnthropicAPI[Anthropic Claude API]
        Stripe[Stripe Payments + Webhook]
        Turnstile[Turnstile / RFID Webhook]
        DB[(Postgres via Prisma)]
        Auth[NextAuth role-based]
    end

    M5 -.-> AnthropicAPI
    M11 -.-> AnthropicAPI
    M9 -.-> Stripe
    M9 -.-> M1
    M6 -.-> Turnstile
    M6 -.-> M4
    M7 -.-> M12
    M12 -.-> M4
    M1 -.-> DB
    M2 -.-> DB
    M9 -.-> DB
```

Cross-module wiring shown:
- Payments (9) writes into Finance (1).
- Turnstile (6) matches scans against Schedule (4).
- Homework Hub (7) feeds Deadlines (12); deadlines surface on Schedule (4).
- AI Grading (5) and AI Tutor (11) share Anthropic infra.

---

## 3. Per-module breakdown

For every module: **files**, **routes**, **API endpoints (stubbed)**, **DB tables (proposed)**, **deps**, **env vars**, **how to test**. See `MODULES_REPORT.md` for the per-module testing checklist.

### M1 — Finance
- Files: `static-mockups/admin/finance.html`
- Route: `/static-mockups/admin/finance.html` (admin, finance)
- Endpoints (would-be): `GET /api/finance/kpis`, `GET /api/finance/transactions`, `POST /api/finance/invoices`, `GET /api/finance/export?fmt=csv|pdf`
- Tables: `transactions`, `invoices`, `departments`
- Deps (prod): Chart.js, jsPDF/Puppeteer for PDF
- Env: `DATABASE_URL`

### M2 — HR
- Files: `static-mockups/admin/hr.html`
- Route: `/static-mockups/admin/hr.html` (admin, hr)
- Endpoints: `GET/POST /api/hr/employees`, `GET /api/hr/payroll`, `POST /api/hr/leave-requests`, `GET /api/hr/pipeline`
- Tables: `employees`, `contracts`, `leave_requests`, `payroll_runs`, `candidates`, `employee_documents`
- Deps: file storage (S3) for documents
- Env: `S3_BUCKET`, `S3_REGION`

### M3 — Exams
- Files: `static-mockups/exams/{index,online,paper}.html`
- Routes: `/static-mockups/exams/index.html`, `/exams/online.html`, `/exams/paper.html`
- Endpoints: `POST /api/exams/start`, `POST /api/exams/answers`, `POST /api/exams/submit`, `POST /api/exams/results/upload` (CSV)
- Tables: `exams`, `exam_questions`, `exam_attempts`, `exam_answers`, `exam_results`
- Deps: Monaco editor (code questions), optional proctoring SDK
- Env: `PROCTORING_API_KEY`

### M4 — Schedule
- Files: `static-mockups/student/schedule.html`
- Route: `/static-mockups/student/schedule.html` (student, teacher)
- Endpoints: `GET /api/schedule?role=&id=`, `GET /api/schedule/ical`
- Tables: `courses`, `lessons` (with recurring rule), `rooms`, `enrollments`, `teaching_assignments`
- Deps: FullCalendar (production); calendar grid is hand-rolled in this mockup
- Env: none

### M5 — AI Assignment Grading
- Files: `static-mockups/assignments/ai-review.html`
- Route: `/static-mockups/assignments/ai-review.html`
- Endpoints: `POST /api/ai/grade` (rubric prompt → Claude), `GET /api/ai/grade/history?subject=`, `POST /api/ai/grade/override`
- Tables: `assignment_submissions`, `ai_grades`, `teacher_overrides`
- Deps: `@anthropic-ai/sdk`, rate limiter (e.g. `@upstash/ratelimit`)
- Env: `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`
- Guards: prompt-injection filter on user text; per-user-per-day quota.

### M6 — Turnstile Attendance
- Files: `static-mockups/student/attendance.html`, `static-mockups/admin/attendance.html`
- Routes: same
- Endpoints: `POST /api/turnstile/checkin` (HMAC-signed), `GET /api/attendance?student=`, `GET /api/attendance/lesson?lessonId=`
- Tables: `attendance_events`, `attendance_summary`, `gates`
- Deps: HMAC verification middleware
- Env: `TURNSTILE_WEBHOOK_SECRET`

### M7 — Homework Hub
- Files: `static-mockups/homework/index.html`
- Routes: `/static-mockups/homework/index.html`
- Endpoints: `GET/POST /api/homework`, `POST /api/homework/:id/submit`, `POST /api/homework/:id/comments`
- Tables: `homework`, `homework_submissions`, `homework_comments`, `homework_attachments`
- Deps: S3 for attachments, optional Turnitin-style API
- Env: `S3_BUCKET`

### M8 — News & Events
- Files: `static-mockups/news/index.html`, `static-mockups/events/index.html`
- Endpoints: `GET/POST /api/news`, `GET /api/news/rss`, `POST /api/news/subscribe`, `GET/POST /api/events`, `POST /api/events/:id/rsvp`
- Tables: `news_posts`, `news_subscriptions`, `events`, `event_rsvps`
- Deps: TipTap rich-text editor, RSS generator, mail provider
- Env: `SMTP_*`, `RSS_BASE_URL`

### M9 — Tuition Payments
- Files: `static-mockups/student/payments.html`
- Endpoints: `POST /api/payments/intent` (Stripe PaymentIntent), `POST /api/payments/stripe/webhook`, `GET /api/payments/history`, `GET /api/payments/receipt/:id.pdf`
- Tables: shares `transactions` + `invoices` with Finance (M1); new: `payment_plans`, `installments`
- Deps: `stripe` SDK, jsPDF
- Env: `STRIPE_PUBLIC_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`

### M10 — Mobile App (PWA)
- Files: `static-mockups/mobile-app/index.html`, `static-mockups/manifest.json`, `static-mockups/service-worker.js`
- Endpoints: none
- Deps: workbox optional
- Env: `APP_STORE_URL`, `PLAY_STORE_URL`
- Notes: SW is **not auto-registered** by the mockups — wire in production entry point.

### M11 — AI Tutor
- Files: `static-mockups/ai-tutor/index.html` + floating widget in `app.js`
- Endpoints: `POST /api/ai/tutor` (streaming SSE), `GET /api/ai/tutor/history`
- Tables: `tutor_conversations`, `tutor_messages`
- Deps: `@anthropic-ai/sdk`, SSE
- Env: `ANTHROPIC_API_KEY`, `TUTOR_DAILY_LIMIT`

### M12 — Homework Deadlines
- Files: `static-mockups/student/homework.html`
- Endpoints: shares M7; plus `POST /api/reminders/preferences`
- Tables: reuses `homework` + `reminder_prefs`
- Notes: Browser notification uses native `Notification` API; email reminders need a scheduled job (e.g. cron + worker).

---

## 4. Proposed Database Schema (ERD)

```mermaid
erDiagram
    USER ||--o{ ENROLLMENT : has
    USER ||--o{ HOMEWORK_SUBMISSION : submits
    USER ||--o{ EXAM_ATTEMPT : takes
    USER ||--o{ ATTENDANCE_EVENT : triggers
    USER ||--o{ INVOICE : owes
    USER ||--o{ PAYMENT : makes
    USER ||--o{ TUTOR_CONVERSATION : owns
    USER ||--o{ AI_GRADE : receives
    USER ||--o{ EVENT_RSVP : rsvps

    DEPARTMENT ||--o{ COURSE : offers
    COURSE ||--o{ LESSON : contains
    COURSE ||--o{ ENROLLMENT : has
    COURSE ||--o{ HOMEWORK : has
    COURSE ||--o{ EXAM : has

    LESSON ||--o{ ATTENDANCE_EVENT : recordedAt
    HOMEWORK ||--o{ HOMEWORK_SUBMISSION : receives
    HOMEWORK_SUBMISSION ||--o{ AI_GRADE : graded
    HOMEWORK_SUBMISSION ||--o{ HOMEWORK_COMMENT : has

    EXAM ||--o{ EXAM_QUESTION : has
    EXAM ||--o{ EXAM_ATTEMPT : has
    EXAM_ATTEMPT ||--o{ EXAM_ANSWER : contains

    INVOICE ||--o{ PAYMENT : settled_by
    INVOICE ||--o{ INSTALLMENT : split_into

    EMPLOYEE ||--o{ LEAVE_REQUEST : files
    EMPLOYEE ||--o{ PAYROLL_RUN : paid_in
    EMPLOYEE ||--o{ EMPLOYEE_DOCUMENT : owns
    CANDIDATE ||--|| HIRING_STAGE : at

    NEWS_POST }o--|| ADMIN_USER : authored_by
    EVENT ||--o{ EVENT_RSVP : has

    TUTOR_CONVERSATION ||--o{ TUTOR_MESSAGE : contains

    USER {
        uuid id
        string email
        string role  "Student|Teacher|Admin|Finance|HR"
        string name
    }
    DEPARTMENT { uuid id  string name }
    COURSE { uuid id  string title  uuid dept_id }
    LESSON { uuid id  uuid course_id  datetime start  datetime end  string room  string recur_rule }
    ENROLLMENT { uuid id  uuid user_id  uuid course_id }
    HOMEWORK { uuid id  uuid course_id  string title  text desc  datetime due  uuid created_by }
    HOMEWORK_SUBMISSION { uuid id  uuid homework_id  uuid user_id  string status  datetime submitted_at  text body  string file_url }
    HOMEWORK_COMMENT { uuid id  uuid submission_id  uuid user_id  text body }
    EXAM { uuid id  uuid course_id  string type  int duration_min }
    EXAM_QUESTION { uuid id  uuid exam_id  string type  text body  jsonb meta }
    EXAM_ATTEMPT { uuid id  uuid exam_id  uuid user_id  datetime started_at  datetime submitted_at  int score }
    EXAM_ANSWER { uuid id  uuid attempt_id  uuid question_id  jsonb response  int score }
    ATTENDANCE_EVENT { uuid id  uuid user_id  uuid lesson_id  uuid gate_id  datetime ts  string status }
    INVOICE { uuid id  uuid user_id  decimal amount  string status  date due  uuid course_id }
    INSTALLMENT { uuid id  uuid invoice_id  decimal amount  date due }
    PAYMENT { uuid id  uuid invoice_id  decimal amount  string provider  string provider_ref  string status  datetime created_at }
    AI_GRADE { uuid id  uuid submission_id  int score  jsonb criteria  text feedback  int teacher_override  text override_reason }
    TUTOR_CONVERSATION { uuid id  uuid user_id  string title  string subject_context }
    TUTOR_MESSAGE { uuid id  uuid conversation_id  string role  text body  datetime ts }
    EMPLOYEE { uuid id  string name  string role  uuid dept_id  string salary_band  string status }
    LEAVE_REQUEST { uuid id  uuid employee_id  date start  date end  string type  string status }
    PAYROLL_RUN { uuid id  uuid employee_id  date period  decimal gross  decimal net }
    EMPLOYEE_DOCUMENT { uuid id  uuid employee_id  string kind  string file_url }
    CANDIDATE { uuid id  string name  string role }
    HIRING_STAGE { uuid id  uuid candidate_id  string stage }
    NEWS_POST { uuid id  string category  string title  text body  datetime published_at  boolean featured }
    EVENT { uuid id  string title  datetime starts_at  string location  int capacity }
    EVENT_RSVP { uuid id  uuid event_id  uuid user_id  string status }
    GATE { uuid id  string code  string location }
    ADMIN_USER { uuid id  string name }
```

---

## 5. API Documentation (proposed)

All routes return JSON. Auth via session cookie (NextAuth) unless noted.

### Finance
```
GET /api/finance/transactions?from=&to=&dept=&status=
→ { items: [{id,date,studentId,desc,dept,amount,type,status}], total }

POST /api/finance/invoices
body: { studentId, items: [{label,amount}] }
→ { id, url }
```

### Payments
```
POST /api/payments/intent
body: { invoiceId, plan: 'full'|'installments_3' }
→ { clientSecret, paymentIntentId, amount }

POST /api/payments/stripe/webhook  (Stripe signature required)
body: <Stripe event>
→ { received: true }
```

### AI grading
```
POST /api/ai/grade
body: { submissionId, text, fileUrl?, rubric? }
→ { score, criteria: {correctness,clarity,depth,references}, feedback, suggestions: [] }
```

### AI tutor (SSE)
```
POST /api/ai/tutor
body: { conversationId?, message, subjectContext? }
→ event-stream of token chunks; final event { conversationId, messageId }
```

### Turnstile
```
POST /api/turnstile/checkin  (X-Signature: hmac-sha256)
body: { studentId, gateId, ts }
→ { matchedLessonId?, status: 'on_time'|'late'|'unmatched' }
```

### Homework
```
GET /api/homework?role=student
POST /api/homework  (teacher)
POST /api/homework/:id/submit  body: { text?, fileUrl?, url? }
POST /api/homework/:id/comments  body: { body }
```

### Exams
```
POST /api/exams/start  body: { examId }    → { attemptId, questions }
POST /api/exams/answers  body: { attemptId, questionId, response }
POST /api/exams/submit  body: { attemptId } → { score, breakdown }
POST /api/exams/results/upload  (csv)  → { inserted }
```

### News / Events
```
GET  /api/news?cat=
POST /api/news  (admin)
GET  /api/news/rss  → application/rss+xml
POST /api/news/subscribe  body: { email }
GET  /api/events
POST /api/events  (admin)
POST /api/events/:id/rsvp
```

---

## 6. Role-Based Access Matrix

| Route | Student | Teacher | Admin | Finance | HR |
|---|:-:|:-:|:-:|:-:|:-:|
| `/` (landing) | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/admin/finance.html` | ❌ | ❌ | ✅ | ✅ | ❌ |
| `/admin/hr.html` | ❌ | ❌ | ✅ | ❌ | ✅ |
| `/admin/attendance.html` | ❌ | ✅ (their classes) | ✅ | ❌ | ❌ |
| `/student/schedule.html` | ✅ | ✅ (teaching view) | ✅ | ❌ | ❌ |
| `/student/homework.html` | ✅ | ❌ | ❌ | ❌ | ❌ |
| `/student/attendance.html` | ✅ | ❌ | ❌ | ❌ | ❌ |
| `/student/payments.html` | ✅ | ❌ | ❌ | view-only | ❌ |
| `/exams/index.html` | ✅ | ✅ | ✅ | ❌ | ❌ |
| `/exams/online.html` | ✅ | preview | ✅ | ❌ | ❌ |
| `/exams/paper.html` | ✅ | ✅ (upload) | ✅ | ❌ | ❌ |
| `/homework/index.html` | ✅ | ✅ (create) | ✅ | ❌ | ❌ |
| `/assignments/ai-review.html` | ✅ | ✅ (override) | ✅ | ❌ | ❌ |
| `/news/index.html` | ✅ | ✅ | ✅ (CMS) | ✅ | ✅ |
| `/events/index.html` | ✅ | ✅ | ✅ (create) | ✅ | ✅ |
| `/ai-tutor/index.html` | ✅ | ❌ | ❌ | ❌ | ❌ |
| `/mobile-app/index.html` | ✅ | ✅ | ✅ | ✅ | ✅ |

> Enforcement in this delivery is UI-only via the demo role switcher. A production build must enforce on the server.

---

## 7. Setup & Deployment

### Run the mockups locally
```bash
cd /Users/firdovsirz/Desktop/lms-prototype
python3 -m http.server 8080
open http://localhost:8080/static-mockups/index.html
```
No build step required.

### `.env.example` (for a future real backend)
```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/uniflow

# Auth
NEXTAUTH_SECRET=replace_me
NEXTAUTH_URL=http://localhost:3000

# Anthropic (AI grading + tutor)
ANTHROPIC_API_KEY=
ANTHROPIC_MODEL=claude-sonnet-4-5
TUTOR_DAILY_LIMIT=30

# Stripe (payments)
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Turnstile webhook
TURNSTILE_WEBHOOK_SECRET=

# Mail (digests + reminders)
SMTP_HOST=
SMTP_USER=
SMTP_PASSWORD=

# Storage (homework + employee docs)
S3_BUCKET=
S3_REGION=

# Mobile app stores
APP_STORE_URL=https://apps.apple.com/app/uniflow/id000000000
PLAY_STORE_URL=https://play.google.com/store/apps/details?id=edu.uniflow
```

### Future scaffolding (when ready to make it real)
```bash
npx create-next-app@latest uniflow --typescript --app --tailwind
cd uniflow
npm i prisma @prisma/client next-auth @anthropic-ai/sdk stripe @upstash/ratelimit
npx prisma init
# port schema from section 4
npx prisma migrate dev --name init
# port pages from static-mockups/ as App Router routes
```

---

## 8. Security checklist

| Concern | Status in mockup | What production needs |
|---|---|---|
| Role-based access | ❌ demo-only (localStorage) | Server-enforced middleware per route |
| CSRF | n/a (no forms hit server) | Next.js + NextAuth handles |
| Webhook signature verification (Stripe, turnstile) | ❌ stubbed URLs | HMAC verification middleware |
| Prompt injection on AI endpoints | ❌ stubbed | Input sanitization + system-prompt separation + Claude's built-in safety |
| AI rate limiting | ❌ stubbed (UI counter only) | Per-user-per-day quota in Redis / Upstash |
| File upload validation | ❌ no real uploads | Mime/size checks + AV scan before S3 |
| PII in logs | n/a | Scrub student ids, never log raw answers |
| Payment data | ❌ no real data | Never store full card; use Stripe Elements (PCI SAQ-A) |
| Secrets in repo | ✅ no real keys committed | Keep `.env` out of git; use a secret manager |
| HTTPS | n/a (local) | Required for PWA + payments |
| XSS | low risk (we control all interpolated strings) | Audit any user-provided HTML; sanitize rich-text |

---

## 9. Known limitations & next steps

**Limitations**
- Static mockups only — no persistence, no auth, no real integrations.
- PWA service worker is provided but not auto-registered.
- No automated tests.
- Accessibility is "best-effort semantic HTML"; no audit run.
- Charts use Chart.js; not yet themed for dark mode.
- PWA icons are referenced but not generated.

**Recommended next steps (in order)**
1. Pick a framework (Next.js recommended), scaffold, lift the design tokens from `static-mockups/assets/css/styles.css`.
2. Port the database schema from section 4 to Prisma + run migrations.
3. Set up NextAuth with roles; enforce per-route access from the matrix in section 6.
4. Migrate page-by-page: each `static-mockups/**/*.html` → an App Router route reading from Prisma.
5. Wire Stripe Elements + webhook (start with test mode).
6. Wire Anthropic SDK for modules 5 and 11; implement rate limits + prompt-injection guards.
7. Wire turnstile webhook signature verification.
8. Add Playwright smoke tests for the role matrix.
9. Generate PWA icons; register the service worker; verify offline schedule + homework views.
10. Run a WCAG AA audit and address findings before launch.
