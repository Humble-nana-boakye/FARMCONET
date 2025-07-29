import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  Alert,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import Icon from '../components/Icon'; // Update path as needed

const { width, height } = Dimensions.get('window');

const Dashboard = ({ user, onNavigate }) => (
  <ScrollView style={styles.container}>
    <WelcomeSection user={user} />
    <QuickActions onNavigate={onNavigate} />
    <RecentActivity />
    <WeatherWidget />
  </ScrollView>
);

// === COMPONENTS INSIDE DASHBOARD ===

const WelcomeSection = ({ user }) => (
  <View style={styles.welcomeSection}>
    <Text style={styles.welcomeTitle}>Welcome back, {user.name}!</Text>
    <Text style={styles.welcomeSubtitle}>
      Farm: {user.location} • {user.farmSize}
    </Text>
  </View>
);

const QuickActions = ({ onNavigate }) => (
  <View style={styles.quickActions}>
    <TouchableOpacity
      style={[styles.quickAction, styles.blueAction]}
      onPress={() => onNavigate('disease')}
    >
      <Icon name="camera" size={32} color="#fff" />
      <Text style={styles.quickActionText}>Detect Disease</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.quickAction, styles.purpleAction]}
      onPress={() => onNavigate('ngos')}
    >
      <Icon name="users" size={32} color="#fff" />
      <Text style={styles.quickActionText}>Find NGOs</Text>
    </TouchableOpacity>
  </View>
);

const RecentActivity = () => (
  <View style={styles.card}>
    <View style={styles.activityHeader}>
      <Icon name="clock" size={20} color="#000" />
      <Text style={styles.cardTitle}>Recent Activity</Text>
    </View>
    <View style={styles.activityList}>
      <View style={styles.activityItem}>
        <Text style={styles.activityText}>Disease check - Tomato crop</Text>
        <Text style={styles.activityTime}>2 hours ago</Text>
      </View>
      <View style={styles.activityItem}>
        <Text style={styles.activityText}>Storage booked with AgriSupport</Text>
        <Text style={styles.activityTime}>1 day ago</Text>
      </View>
    </View>
  </View>
);

const WeatherWidget = () => (
  <View style={styles.weatherWidget}>
    <Text style={styles.weatherTitle}>{"Today's Weather"}</Text>
    <View style={styles.weatherContent}>
      <View>
        <Text style={styles.weatherTemp}>28°C</Text>
        <Text style={styles.weatherCondition}>Partly Cloudy</Text>
      </View>
      <View style={styles.weatherDetails}>
        <Text style={styles.weatherDetail}>Humidity: 65%</Text>
        <Text style={styles.weatherDetail}>Wind: 12 km/h</Text>
      </View>
    </View>
  </View>
);

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  welcomeSection: {
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickAction: {
    flex: 1,
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  blueAction: {
    backgroundColor: '#3b82f6',
  },
  purpleAction: {
    backgroundColor: '#8b5cf6',
  },
  quickActionText: {
    color: '#fff',
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 6,
  },
  activityList: {
    gap: 10,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityText: {
    fontSize: 14,
    color: '#374151',
  },
  activityTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  weatherWidget: {
    backgroundColor: '#e0f2fe',
    borderRadius: 12,
    padding: 16,
  },
  weatherTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  weatherContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherTemp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0284c7',
  },
  weatherCondition: {
    fontSize: 14,
    color: '#0284c7',
  },
  weatherDetails: {
    justifyContent: 'center',
  },
  weatherDetail: {
    fontSize: 12,
    color: '#0369a1',
  },
});