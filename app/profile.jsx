import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from '../components/Icon'; // update path to your Icon component
import { StyleSheet } from 'react-native'; // or import your external stylesheet

const UserProfile = ({ user }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Icon name="user" size={28} color="#6b7280" />
      <Text style={styles.headerTitle}>Profile</Text>
    </View>
    <ProfileInfo user={user} />
    <ProfileStats />
    <ProfileSettings />
  </ScrollView>
);

const ProfileInfo = ({ user }) => (
  <View style={styles.card}>
    <View style={styles.profileHeader}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileLocation}>{user.location}</Text>
      </View>
    </View>
    
    <View style={styles.profileInfo}>
      <View style={styles.profileInfoItem}>
        <Text style={styles.profileInfoLabel}>Farm Size: </Text>
        <Text style={styles.profileInfoValue}>{user.farmSize}</Text>
      </View>
      <View style={styles.profileInfoItem}>
        <Text style={styles.profileInfoLabel}>Crops: </Text>
        <Text style={styles.profileInfoValue}>{user.crops.join(', ')}</Text>
      </View>
    </View>
  </View>
);

const ProfileStats = () => (
  <View style={styles.statsGrid}>
    {[
      { value: '12', label: 'Disease Checks', color: '#16a34a' },
      { value: '5', label: 'NGO Connections', color: '#7c3aed' },
      { value: '8', label: 'Storage Bookings', color: '#3b82f6' },
      { value: '₵2,450', label: 'Total Saved', color: '#f59e0b' }
    ].map((stat, index) => (
      <View key={index} style={styles.statCard}>
        <Text style={[styles.statValue, { color: stat.color }]}>{stat.value}</Text>
        <Text style={styles.statLabel}>{stat.label}</Text>
      </View>
    ))}
  </View>
);

const ProfileSettings = () => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Settings</Text>
    <View style={styles.settingsList}>
      {['Edit Profile', 'Notification Preferences', 'Language Settings', 'Help & Support'].map((setting) => (
        <TouchableOpacity key={setting} style={styles.settingItem}>
          <Text style={styles.settingText}>{setting}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.settingText, { color: '#dc2626' }]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function ProfileScreen() {
  const user = {
    name: 'Farmer Joe',
    location: 'Kumasi',
    farmSize: '5 acres',
    crops: ['Tomato', 'Cassava', 'Maize']
  };

  return <UserProfile user={user} />;
}

const styles = StyleSheet.create({
  // Add your style definitions here or import from an external file
});
