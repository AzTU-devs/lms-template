# UniFlow — MODULES_REPORT

**Build date:** 2026-05-19
**Build mode:** Static HTML/CSS/JS mockups (no backend, no framework, all data stubbed)
**Reason:** The pre-existing project was a single 2 MB standalone HTML prototype (`UniFlow _standalone_.html`) with no framework, routing, backend, DB, or auth. The user opted for design-fidelity static mockups rather than scaffolding a full Next.js/Prisma application. All external integrations (Anthropic, Stripe, RFID webhook, push) are stubbed behind clearly-labeled UI hooks.

---

## 1. What was built

| # | Module | Primary route |
|---|---|---|
| 1 | Finance — University Revenue Tracking | `/static-mockups/admin/finance.html` |
| 2 | HR System | `/static-mockups/admin/hr.html` |
| 3a | Exams — Computer-Based | `/static-mockups/exams/online.html` |
| 3b | Exams — Paper-Based + Hub | `/static-mockups/exams/paper.html`, `/static-mockups/exams/index.html` |
| 4 | Class Schedule Calendar | `/static-mockups/student/schedule.html` |
| 5 | AI-Powered Assignment Grading + Improvement Tracker | `/static-mockups/assignments/ai-review.html` |
| 6 | Turnstile Attendance (student + admin) | `/static-mockups/student/attendance.html`, `/static-mockups/admin/attendance.html` |
| 7 | Homework Hub | `/static-mockups/homework/index.html` |
| 8 | News & Events | `/static-mockups/news/index.html`, `/static-mockups/events/index.html` |
| 9 | Tuition Fee Payment | `/static-mockups/student/payments.html` |
| 10 | Mobile App (PWA) | `/static-mockups/mobile-app/index.html`, `/static-mockups/manifest.json`, `/static-mockups/service-worker.js` |
| 11 | AI Tutor Chatbot (page + global floating widget) | `/static-mockups/ai-tutor/index.html` + widget auto-mounted on student pages by `app.js` |
| 12 | Homework Deadlines Dashboard | `/static-mockups/student/homework.html` |

Landing page: `/static-mockups/index.html` (tile-grid quick access to all 12 modules + KPI dashboard).

---

## 2. Files created

Shared foundation:
- `static-mockups/assets/css/styles.css` — design tokens, components (cards, buttons, badges, table, tabs, calendar grid, kanban, chat widget, PWA banner)
- `static-mockups/assets/js/app.js` — `UniFlow.renderShell`, `UniFlow.setContent`, role switcher, floating chat widget, PWA install banner, format helpers
- `static-mockups/assets/js/mock-data.js` — stubbed dataset under `window.MOCK`
- `static-mockups/index.html` — landing dashboard
- `static-mockups/manifest.json` + `static-mockups/service-worker.js` — PWA shell

22 files total. Existing `UniFlow _standalone_.html` was left untouched.

---

## 3. Routes added (and their role gating, by convention)

| Route | Intended roles |
|---|---|
| `/static-mockups/index.html` | All authenticated |
| `/static-mockups/admin/finance.html` | Admin, Finance |
| `/static-mockups/admin/hr.html` | Admin, HR |
| `/static-mockups/admin/attendance.html` | Admin, Teacher |
| `/static-mockups/student/schedule.html` | Student, Teacher |
| `/static-mockups/student/homework.html` | Student |
| `/static-mockups/student/attendance.html` | Student |
| `/static-mockups/student/payments.html` | Student |
| `/static-mockups/exams/index.html` | All |
| `/static-mockups/exams/online.html` | Student |
| `/static-mockups/exams/paper.html` | Student, Teacher, Admin (teacher view toggle) |
| `/static-mockups/homework/index.html` | Student, Teacher |
| `/static-mockups/assignments/ai-review.html` | Student, Teacher (override panel) |
| `/static-mockups/news/index.html` | All (admin CMS panel inline) |
| `/static-mockups/events/index.html` | All (admin create panel inline) |
| `/static-mockups/ai-tutor/index.html` | Student |
| `/static-mockups/mobile-app/index.html` | All |

Role gating is **demoed**, not enforced — use the role switcher in the sidebar to swap personas. Each page reads `UniFlow.ROLE` and changes sub-UI accordingly (e.g. teacher override panel, admin CMS form). In production this is a server-side concern.

---

## 4. Stubbed API endpoints referenced in the UI

These appear as labels/URLs in the mockups; **none are implemented**.

| Endpoint | Used by | Notes |
|---|---|---|
| `POST /api/ai/grade` | AI Assignment Review (5) | Would call Anthropic Claude with rubric prompt |
| `POST /api/ai/tutor` | AI Tutor (11) | Streaming chat → Claude |
| `POST /api/turnstile/checkin` | Attendance (6) | Webhook for RFID/QR/turnstile scanners |
| `POST /api/payments/stripe/intent` | Payments (9) | Stripe PaymentIntent creation |
| `POST /api/payments/stripe/webhook` | Payments (9) | Stripe webhook handler |
| `GET /api/news/rss` | News (8) | RSS feed |
| `POST /api/news/subscribe` | News (8) | Email digest opt-in |

---

## 5. Environment variables that would be required (production)

```env
ANTHROPIC_API_KEY=
ANTHROPIC_MODEL=claude-sonnet-4-5
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
PAYPAL_CLIENT_ID=
TURNSTILE_WEBHOOK_SECRET=
SMTP_HOST=
SMTP_USER=
SMTP_PASSWORD=
DATABASE_URL=
NEXTAUTH_SECRET=
APP_STORE_URL=
PLAY_STORE_URL=
```

None are read by the mockups; they're documented here so a backend can be wired in later without UI changes.

---

## 6. How to test each module

1. Serve the project root over a static server (any will do):
   ```
   cd /Users/firdovsirz/Desktop/lms-prototype
   python3 -m http.server 8080
   ```
2. Open `http://localhost:8080/static-mockups/index.html`.
3. Use the **Role switcher** in the bottom-left of the sidebar to change between Student / Teacher / Admin / Finance / HR — most pages adapt their UI.
4. Click any tile or sidebar link to enter a module.

Module-by-module smoke tests:

| Module | What to try |
|---|---|
| 1 Finance | Switch role to Finance/Admin → finance.html, change filters, click Export buttons (stub). |
| 2 HR | Tabs (Directory/Pipeline/Payroll/Leave). Approve/Reject in Leave tab flips the badge. |
| 3a Online exam | online.html — timer counts down, navigator dots, switch tab to trigger the warning badge, click Submit to see results card. |
| 3b Paper exams | paper.html — toggle Student/Teacher views; teacher CSV drop + manual entry appends a row. |
| 4 Schedule | schedule.html — Week/Month toggle, color-coded events; switch to Teacher role for "teaching schedule" view. |
| 5 AI grading | assignments/ai-review.html — submit form, see last grade panel + improvement chart. Switch to Teacher for override panel. |
| 6 Attendance | student/attendance.html (KPIs + per-subject bars + QR fallback). admin/attendance.html (live roster + bucketed bar chart + webhook URL). |
| 7 Homework | homework/index.html — tabs, expand a card to see submission/discussion. Switch to Teacher for "Create new" tab. |
| 8 News & Events | news/index.html — category pills filter live. events/index.html — RSVP toggles. Admin role reveals CMS panels. |
| 9 Payments | student/payments.html — pick a plan to see live per-installment amount, click Pay to prepend a row to history. |
| 10 PWA | mobile-app/index.html — Install button uses captured `beforeinstallprompt`; resize to mobile width and reload other pages to see the smart banner. |
| 11 AI tutor | ai-tutor/index.html — submit a message; ask "give me the answer to my homework" → guard redirects. Floating widget visible on any student page. |
| 12 Deadlines | student/homework.html — countdown timers tick every second, urgency-colored borders. |

---

## 7. Defaults and decisions made without asking

- **Currency:** ₼ (Azerbaijani manat) was assumed — easy to change in `UniFlow.fmt.money`.
- **Locale:** English UI, en-GB date format.
- **Charts:** Chart.js (CDN) — single lib for every page that needs charts.
- **PWA:** referenced manifest + service-worker.js are in place but the SW is NOT registered automatically (would need an explicit `navigator.serviceWorker.register` call from a real entry point — left as a one-line addition).
- **Icons:** PWA icons (icon-192.png, icon-512.png) are referenced in manifest.json but **not generated**. Drop your own PNGs at `static-mockups/assets/img/` to complete the manifest.
- **Anti-cheat (online exam):** uses real `document.visibilitychange` for tab-switch detection and the browser fullscreen API. Webcam proctoring is shown as a badge only.
- **Role state:** stored in `localStorage` under `uniflow.role` — not real auth.
- **Money/amounts in mock data:** small, believable values; not balanced to a real school's books.

---

## 8. Known limitations (this mockup vs. the spec)

- No real backend, no DB, no auth — role gating is demo-only.
- No real Stripe/PayPal — checkout panel is visual only.
- No real Anthropic calls — AI grade and tutor replies are local stubs.
- No real turnstile webhook — attendance feed is synthesized.
- No PDF generation — "Export PDF" / "Download receipt" buttons are stubs.
- No email/push delivery — reminder toggles only request browser notification permission.
- PWA service worker is provided but **not auto-registered** anywhere — easy to wire on.
- Accessibility: semantic HTML + labels are used throughout, but a full WCAG AA audit was not run.
- Tests: no automated tests (pure static demo).
- ERD / migrations: see `LMS_REPORT.md` for the proposed schema sketch — no actual migrations exist.

---

## 9. What would change to make this production

In rough order:

1. Scaffold a real framework (Next.js App Router + TS + Prisma/Postgres + NextAuth recommended).
2. Port each mockup page to a real route, reading from Prisma instead of `MOCK`.
3. Implement the stubbed `/api/*` endpoints, swap Chart.js stays as-is.
4. Wire Stripe Elements + webhook for module 9.
5. Wire Anthropic SDK for modules 5 + 11; add rate limiting + prompt-injection guards.
6. Wire turnstile webhook with signature verification.
7. Add server-side role-based access control to every route.
8. Add automated tests + CI.
9. Generate proper PWA icons; register the service worker; verify offline behavior.
