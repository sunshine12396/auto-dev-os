package handler

import (
	"net/http"
	"strconv"

	"github.com/auto-code-os/auto-code-os/server/internal/service"
)

// AnalyticsDashboardHandler handles the Phase 5 analytics dashboard endpoints.
type AnalyticsDashboardHandler struct {
	svc *service.AnalyticsDashboardService
}

func NewAnalyticsDashboardHandler(svc *service.AnalyticsDashboardService) *AnalyticsDashboardHandler {
	return &AnalyticsDashboardHandler{svc: svc}
}

// Overview returns high-level platform statistics.
// GET /api/v1/analytics/overview?org_id=...
func (h *AnalyticsDashboardHandler) Overview(w http.ResponseWriter, r *http.Request) {
	orgID := r.URL.Query().Get("org_id")
	stats, err := h.svc.Overview(r.Context(), orgID)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, stats)
}

// AgentPerformance returns per-agent performance metrics.
// GET /api/v1/analytics/agents?project_id=...
func (h *AnalyticsDashboardHandler) AgentPerformance(w http.ResponseWriter, r *http.Request) {
	projectID := r.URL.Query().Get("project_id")
	stats, err := h.svc.AgentPerformance(r.Context(), projectID)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, stats)
}

// TaskAnalytics returns task throughput over time and status distribution.
// GET /api/v1/analytics/tasks?project_id=...&days=30
func (h *AnalyticsDashboardHandler) TaskAnalytics(w http.ResponseWriter, r *http.Request) {
	projectID := r.URL.Query().Get("project_id")
	days := 30
	if daysRaw := r.URL.Query().Get("days"); daysRaw != "" {
		if d, err := strconv.Atoi(daysRaw); err == nil && d > 0 {
			days = d
		}
	}
	analytics, err := h.svc.TaskAnalytics(r.Context(), projectID, days)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, analytics)
}

// WorkflowAnalytics returns workflow completion rates and step durations.
// GET /api/v1/analytics/workflows?project_id=...
func (h *AnalyticsDashboardHandler) WorkflowAnalytics(w http.ResponseWriter, r *http.Request) {
	projectID := r.URL.Query().Get("project_id")
	analytics, err := h.svc.WorkflowAnalytics(r.Context(), projectID)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, analytics)
}
