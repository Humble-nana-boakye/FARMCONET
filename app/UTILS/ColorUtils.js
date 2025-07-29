// utils/colorUtils.js

const UTILS = {
  getSeverityColor: (severity) => {
    switch (severity) {
      case 'High':
        return { color: '#dc2626', backgroundColor: '#fef2f2' }; // Red
      case 'Medium':
        return { color: '#d97706', backgroundColor: '#fefbeb' }; // Orange
      case 'Low':
        return { color: '#16a34a', backgroundColor: '#f0fdf4' }; // Green
      default:
        return { color: '#6b7280', backgroundColor: '#f9fafb' }; // Gray
    }
  },

  getStatusColor: (status) => {
    switch (status) {
      case 'Confirmed':
        return { color: '#16a34a', backgroundColor: '#f0fdf4' }; // Green
      case 'Pending':
        return { color: '#d97706', backgroundColor: '#fefbeb' }; // Orange
      case 'Cancelled':
        return { color: '#dc2626', backgroundColor: '#fef2f2' }; // Red
      default:
        return { color: '#6b7280', backgroundColor: '#f9fafb' }; // Gray
    }
  }
};

export default UTILS;
