# AI-Native SDLC Platform — Roadmap & Tài Liệu Tham Khảo

## 1. Giới Thiệu

Tài liệu này trình bày một lộ trình (roadmap) chi tiết và các dự án mã nguồn mở tham khảo cho việc xây dựng một nền tảng AI-Native SDLC (Software Development Lifecycle). Mục tiêu là cung cấp một hướng dẫn toàn diện, từ cấu trúc sản phẩm cốt lõi đến các tính năng cụ thể và các dự án mã nguồn mở có thể được sử dụng làm nền tảng hoặc nguồn cảm hứng, giúp bạn tự xây dựng hệ thống của mình một cách hiệu quả và chiến lược.

## 2. Mục Tiêu Sản Phẩm & Tầm Nhìn Hệ Thống

**Mục tiêu chính của nền tảng là:** Xây dựng một platform giúp developer tự động hóa quy trình phát triển phần mềm thông qua các AI agent, từ việc tạo task đến merge code.

**Quy trình dự kiến:**
1.  Developer tạo task.
2.  AI agent nhận việc.
3.  AI thực hiện viết code.
4.  AI thực hiện review/fix/test code.
5.  AI tạo Pull Request (PR) hoặc Merge Request (MR).
6.  Developer thực hiện review cuối cùng.
7.  Merge code.

**Hệ thống hướng tới các đặc điểm sau:**
*   **Self-host:** Khả năng triển khai và vận hành trên hạ tầng riêng.
*   **Enterprise-friendly:** Phù hợp với môi trường doanh nghiệp, có khả năng mở rộng và bảo mật.
*   **Multi-agent workflow:** Hỗ trợ các luồng làm việc phức tạp với sự phối hợp của nhiều AI agent.
*   **Autonomous SDLC:** Tự động hóa cao các giai đoạn trong vòng đời phát triển phần mềm.
*   **Dễ dùng cho team dev thực tế:** Giao diện và trải nghiệm người dùng thân thiện, dễ tích hợp vào quy trình làm việc hiện có của đội ngũ phát triển.

## 3. Cấu Trúc Sản Phẩm Cốt Lõi

Cấu trúc sản phẩm được tổ chức theo phân cấp, đảm bảo khả năng quản lý và mở rộng:

```
Organization
 └── Projects
      ├── Repositories
      ├── Tasks
      ├── Agents
      ├── Rules
      ├── Skills
      ├── Knowledge Base
      └── Environments
```

## 4. Lộ Trình Tính Năng (Phase 1 — Core MVP)

### 4.1. Tích Hợp Git

**Mục tiêu:** AI tự động tạo Pull Request (PR) từ các task.

**Tính năng:**
*   Kết nối GitHub.
*   Thêm GitHub token.
*   Xác thực quyền truy cập repository.
*   Liệt kê các repository.
*   Tạo branch.
*   Push commits.
*   Tạo PR.

**Mở rộng trong tương lai:**
*   Hỗ trợ GitLab.
*   Hỗ trợ Bitbucket.
*   Hỗ trợ Self-hosted Git (ví dụ: Gitea).

**Dự án tham khảo:**
| Dự án           | Lý do tham khảo                                |
| :-------------- | :--------------------------------------------- |
| GitHub App Docs | Các mẫu tích hợp Git                          |
| Gitea           | Kiến trúc Git self-hosted                     |
| GitLab CE       | Ý tưởng về CI + MR workflow                    |

### 4.2. Hệ Thống Dự Án (Project System)

**Khái niệm:** Một Project bao gồm nhiều repository, cấu hình workflow AI chung, và các quy tắc/kiến thức chia sẻ.

**Tính năng:**
*   **Tạo Project:** Tên dự án, mô tả, cấu hình môi trường, quy tắc chung, workflow chung.
*   **Thêm Repositories:** Kết nối repo, gắn thẻ repo, gán ngôn ngữ/loại.
*   **Kiến thức chia sẻ:** Tài liệu, quy ước, kiến trúc, RFCs.

**Dự án tham khảo:**
| Dự án       | Lý do tham khảo                                |
| :---------- | :--------------------------------------------- |
| Backstage   | Khái niệm cổng developer (developer portal)    |
| Plane       | Trải nghiệm người dùng (UX) quản lý dự án/task |
| OpenProject | Quản lý dự án cấp doanh nghiệp                 |

### 4.3. Hệ Thống Agent

**Mục tiêu:** Agent là các AI worker thực hiện công việc.

**Tính năng:**
*   **Tạo Agent:** Tên, vai trò, nhà cung cấp (provider), mô hình (model), cấp độ (level), quyền hạn (permissions).
*   **Cấp độ Agent:**
    *   **Easy:** lint/docs/small fixes
    *   **Medium:** CRUD/refactor
    *   **Hard:** architecture/security
*   **Vai trò Agent:**
    *   **Planner:** Phân tích task.
    *   **Backend:** Lập trình backend.
    *   **Frontend:** Phát triển UI.
    *   **Reviewer:** Review/fix code.
    *   **QA:** Kiểm thử.

**Dự án tham khảo:**
| Dự án     | Lý do tham khảo                                |
| :-------- | :--------------------------------------------- |
| Multica   | Ý tưởng điều phối (orchestration)              |
| OpenHands | Runtime mã hóa tự động                        |
| AutoGen   | Các mẫu multi-agent                            |
| CrewAI    | Agent dựa trên vai trò                         |

### 4.4. Hệ Thống Task

**Mục tiêu:** Developer tạo task → AI thực thi.

**Tính năng:**
*   **Tạo Task:** Tiêu đề, mô tả, độ khó, độ ưu tiên, các repository liên quan, nhãn (labels).
*   **Vòng đời Task:**
    *   TODO → ASSIGNED → PLANNING → CODING → REVIEWING → FIXING → TESTING → HUMAN_REVIEW → MERGED

**Tích hợp trong tương lai:**
*   Jira
*   Linear
*   GitHub Issues
*   Notion

**Dự án tham khảo:**
| Dự án       | Lý do tham khảo                                |
| :---------- | :--------------------------------------------- |\n| Plane       | Trình quản lý issue hiện đại                   |
| OpenProject | Workflow cấp doanh nghiệp                      |
| Linear      | Nguồn cảm hứng về UX                           |

### 4.5. Hệ Thống Quy Tắc & Kỹ Năng (Rule & Skill System)

**Mục tiêu:** Kiểm soát hành vi của AI.

**Quy tắc:**
*   **Quy tắc toàn cầu:** Không bao giờ tiết lộ bí mật, luôn thêm test.
*   **Quy tắc dự án:** Sử dụng kiến trúc hexagonal, không truy vấn SQL trực tiếp.

**Kỹ năng:** Các hành động có thể tái sử dụng.

**Ví dụ Kỹ năng:**
| Kỹ năng           | Mục đích                                       |
| :---------------- | :--------------------------------------------- |
| `run_tests`       | Thực thi các bài kiểm thử                      |
| `analyze_logs`    | Phân tích log CI                               |
| `generate_docs`   | Tạo tài liệu                                   |
| `create_migration`| Tạo migration cơ sở dữ liệu                   |

**Dự án tham khảo:**
| Dự án     | Lý do tham khảo                                |
| :-------- | :--------------------------------------------- |
| LangChain | Trừu tượng hóa công cụ/kỹ năng                 |
| OpenWebUI | UX cấu hình mô hình/công cụ                   |
| Flowise   | Nguồn cảm hứng workflow/kỹ năng               |

### 4.6. Engine Workflow

**Mục tiêu:** Tự động hóa workflow kỹ thuật.

**Luồng chính:**
1.  Developer tạo task.
2.  Planner agent phân tích.
3.  Gán agent phù hợp.
4.  Coding agent thực hiện.
5.  Reviewer agent review.
6.  Fix agent thử lại.
7.  Test agent xác thực.
8.  PR được tạo.
9.  Con người phê duyệt.

**Vòng lặp tự động sửa lỗi:**
*   CI fail → tự động tạo task sửa lỗi → gán bug-fix agent → chạy lại test.

**Dự án tham khảo:**
| Dự án     | Lý do tham khảo                                |
| :-------- | :--------------------------------------------- |
| Temporal  | Workflow bền vững (durable workflows)          |
| LangGraph | Điều phối agent dạng đồ thị                    |
| n8n       | Workflow tự động hóa                           |

### 4.7. PR & Human Review

**Tính năng:**
*   **Auto PR:** Tiêu đề, tóm tắt, các file thay đổi, mức độ rủi ro.
*   **AI PR Assistant:** Reviewer có thể hỏi "Tại sao lại thay đổi logic này?" → AI giải thích ngữ cảnh PR.
*   **Chính sách Merge:** Phải vượt qua test, phải vượt qua review, phải có sự chấp thuận của con người.

**Dự án tham khảo:**
| Dự án     | Lý do tham khảo                                |
| :-------- | :--------------------------------------------- |
| Graphite  | Nguồn cảm hứng workflow PR                     |
| Reviewpad | Ý tưởng review tự động                         |
| Danger JS | Tự động hóa review CI                          |

### 4.8. Dashboard & Analytics

**Tính năng:**
*   **Project Dashboard:** Các task đang hoạt động, PR đang mở, các lần chạy thất bại, trạng thái agent.
*   **Agent Metrics:** Tỷ lệ thành công, số lần thử lại, mức sử dụng token, thời gian hoàn thành.

**Dự án tham khảo:**
| Dự án         | Lý do tham khảo                                |
| :------------ | :--------------------------------------------- |
| Langfuse      | Khả năng quan sát AI (AI observability)        |
| Helicone      | Phân tích LLM                                  |
| OpenObserve   | Ý tưởng logging/dashboard                      |

### 4.9. Lớp Gateway AI

**Mục tiêu:** Định tuyến LLM tập trung.

**Tính năng:**
*   Định tuyến nhà cung cấp (provider routing).
*   Mô hình dự phòng (fallback models).
*   Kiểm soát hạn ngạch (quota control).
*   Cách ly API (API isolation).
*   Theo dõi token (token tracking).

**Dự án tham khảo:**
| Dự án      | Lý do tham khảo                                |
| :--------- | :--------------------------------------------- |
| 9Router    | Router cục bộ nhẹ                              |
| LiteLLM    | Gateway cấp doanh nghiệp                       |
| OpenRouter | Ý tưởng định tuyến đa nhà cung cấp             |

## 5. Các Tính Năng Tương Lai (V2/V3)

*   **Hợp tác đa Agent:** Agent Frontend, Agent Backend, Agent QA.
*   **Thông minh Repository (Repo Intelligence):** Tìm kiếm ngữ nghĩa, biểu đồ phụ thuộc, bộ nhớ lỗi lịch sử.
*   **Bộ nhớ Lịch sử:** AI ghi nhớ các PR trước đó, các quyết định kiến trúc, các lỗi lặp lại.
*   **Bảo mật & Quản trị:** RBAC (Role-Based Access Control), audit logs, policy engine, sandbox isolation.

## 6. Chiến Lược Tốt Nhất Để Xây Dựng

**KHÔNG** nên xây dựng mọi thứ từ đầu. Cách tiếp cận được khuyến nghị là tái sử dụng các dự án mã nguồn mở làm tham chiếu và khối xây dựng.

**Lớp & Nền tảng đề xuất:**
| Lớp                  | Nền tảng đề xuất             |
| :------------------- | :--------------------------- |
| Agent runtime        | OpenHands                    |
| Điều phối (Orchestration) | Multica                      |
| Workflow             | Temporal/LangGraph           |
| Gateway AI           | LiteLLM/9Router              |
| Task UX              | Plane                        |
| Khả năng quan sát AI | Langfuse                     |

**Tập trung phát triển tùy chỉnh vào:**
1.  **Workflow UX:** Trải nghiệm developer độc đáo của bạn.
2.  **Phối hợp Agent:** Vòng lặp Task → review → fix → test.
3.  **Hệ thống quy tắc/kỹ năng:** Kiến thức tổ chức + hành vi AI.
4.  **Thông minh Repository:** Bộ nhớ mã hóa nhận biết ngữ cảnh.

## 7. Kết Luận

Việc xây dựng một nền tảng AI-Native SDLC mạnh mẽ đòi hỏi sự kết hợp giữa tầm nhìn chiến lược và khả năng tận dụng các công nghệ hiện có. Bằng cách tham khảo và tích hợp các dự án mã nguồn mở hàng đầu, bạn có thể đẩy nhanh quá trình phát triển, tập trung vào việc tạo ra giá trị độc đáo cho đội ngũ của mình. Lộ trình và các tài liệu tham khảo trong báo cáo này sẽ là kim chỉ nam vững chắc cho hành trình xây dựng nền tảng AI-Native SDLC của bạn.