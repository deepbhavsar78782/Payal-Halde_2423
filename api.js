const API_BASE = '/api';

export const api = {
  // Public media
  async getMedia(params = {}) {
    const query = new URLSearchParams();
    if (params.type) query.append('type', params.type);
    if (params.category && params.category !== 'All') query.append('category', params.category);
    if (params.search) query.append('search', params.search);
    if (params.featured) query.append('featured', '1');

    const res = await fetch(`${API_BASE}/media?${query.toString()}`);
    return res.json();
  },

  async getMediaById(id) {
    const res = await fetch(`${API_BASE}/media/${id}`);
    return res.json();
  },

  // Auth
  async login(username, password) {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    return res.json();
  },

  async verifyToken(token) {
    const res = await fetch(`${API_BASE}/auth/verify`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  async changePassword(currentPassword, newPassword, token) {
    const res = await fetch(`${API_BASE}/auth/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ currentPassword, newPassword })
    });
    return res.json();
  },

  // Protected Media Operations
  async uploadMedia(formData, token) {
    const res = await fetch(`${API_BASE}/media/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    });
    return res.json();
  },

  async updateMedia(id, data, token) {
    const res = await fetch(`${API_BASE}/media/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async deleteMedia(id, token) {
    const res = await fetch(`${API_BASE}/media/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  async toggleFeatured(id, token) {
    const res = await fetch(`${API_BASE}/media/${id}/featured`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  async getStats(token) {
    const res = await fetch(`${API_BASE}/media/stats/summary`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  // Contact Inquiries
  async sendContactMessage(data) {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async getContactMessages(token) {
    const res = await fetch(`${API_BASE}/contact`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  async markMessageRead(id, token) {
    const res = await fetch(`${API_BASE}/contact/${id}/read`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  async deleteMessage(id, token) {
    const res = await fetch(`${API_BASE}/contact/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  // Profile Information
  async getProfile() {
    const res = await fetch(`${API_BASE}/profile`);
    return res.json();
  },

  async updateProfile(data, token) {
    const res = await fetch(`${API_BASE}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return res.json();
  }
};
