import API_CONFIG from '../config/api';

const authService = {
  // Login function
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        // Store token and user data in sessionStorage (more secure)
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('user', JSON.stringify(data.user));
        return { success: true, data };
      } else {
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  // Logout function
  logout: () => {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('user');
  },

  // Check if user is logged in
  isAuthenticated: () => {
    return sessionStorage.getItem('access_token') !== null;
  },

  // Get current user
  getUser: () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Get token
  getToken: () => {
    return sessionStorage.getItem('access_token');
  }
};

export default authService;