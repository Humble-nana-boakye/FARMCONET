import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // ========== Global ==========
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollContainer: {
    flex: 1,
  },

  // ========== Header ==========
  appHeader: {
    backgroundColor: '#16a34a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerAvatarText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // ========== Section Headers ==========
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: 8,
  },

  // ========== Cards ==========
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },

  // ========== Buttons ==========
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: { backgroundColor: '#3b82f6' },
  successButton: { backgroundColor: '#16a34a' },
  purpleButton: { backgroundColor: '#7c3aed' },
  grayButton: { backgroundColor: '#d1d5db' },
  disabledButton: { backgroundColor: '#93c5fd' },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 16,
  },

  // ========== Analysis Section ==========
  analysisProgress: {
    backgroundColor: '#fefbeb',
    borderColor: '#f59e0b',
    borderWidth: 1,
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  analysisText: {
    marginLeft: 12,
    flex: 1,
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#92400e',
  },
  analysisSubtitle: {
    fontSize: 14,
    color: '#d97706',
  },

  // ========== Results Section ==========
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  resultContent: {
    gap: 12,
  },
  resultItem: {
    marginBottom: 12,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 16,
    color: '#6b7280',
  },
  diseaseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  confidence: {
    fontSize: 14,
    color: '#6b7280',
  },
  symptom: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 8,
    marginTop: 2,
  },

  // ========== Treatments ==========
  treatmentSection: {
    backgroundColor: '#f0fdf4',
    borderColor: '#bbf7d0',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  treatmentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#15803d',
    marginBottom: 4,
  },
  treatmentText: {
    fontSize: 14,
    color: '#16a34a',
  },

  // ========== Badge ==========
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },

  // ========== History ==========
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    marginBottom: 8,
  },
  historyTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  historySubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },

  // ========== Modal ==========
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },

  // ========== Profile ==========
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#16a34a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },

  // ========== Bottom Navigation ==========
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingVertical: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default styles;
