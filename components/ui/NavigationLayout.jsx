import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Home, Camera, Users, Warehouse, User } from 'lucide-react-native'; // or 'lucide-react' if web
// Replace this with your icon setup if different

// SHARED COMPONENTS - Navigation & Layout
// ==========================================

export const Header = ({ user }) => (
  <View style={styles.appHeader}>
    <Text style={styles.appTitle}>FarmConnect</Text>
    <View style={styles.headerUser}>
      <View style={styles.headerAvatar}>
        <Text style={styles.headerAvatarText}>{user?.name?.charAt(0) ?? 'U'}</Text>
      </View>
    </View>
  </View>
);

export const BottomNavigation = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'disease', icon: Camera, label: 'Detect' },
    { id: 'ngos', icon: Users, label: 'NGOs' },
    { id: 'storage', icon: Warehouse, label: 'Storage' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <View style={styles.bottomNav}>
      {navItems.map(({ id, icon: Icon, label }) => (
        <TouchableOpacity
          key={id}
          style={[styles.navItem, activeTab === id && styles.activeNavItem]}
          onPress={() => onTabChange(id)}
        >
          <Icon size={20} color={activeTab === id ? '#16a34a' : '#6b7280'} />
          <Text
            style={[
              styles.navLabel,
              { color: activeTab === id ? '#16a34a' : '#6b7280' },
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  appHeader: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#f9fafb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#d1fae5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerAvatarText: {
    fontSize: 16,
    color: '#065f46',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  activeNavItem: {
    borderTopWidth: 2,
    borderTopColor: '#16a34a',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 2,
  },
});
