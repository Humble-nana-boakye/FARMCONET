import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import Icon from '../components/Icon'; // adjust if you're using lucide-react-native or another lib
import styles from '../components/AppStyles'; // adjust the style file path
import MOCK_DATA from './Data/mockData';
import  UTILS from './UTILS/ColorUtils'; // import your status color helper
import { Header, BottomNavigation } from  '../components/ui/NavigationLayout';
// === Reusable Components ===

const StorageManagement = ({ onFindStorage }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Icon name="warehouse" size={28} color="#16a34a" />
      <Text style={styles.headerTitle}>Storage Management</Text>
    </View>

    <CurrentBookings />
    <StorageQuickActions onFindStorage={onFindStorage} />
    <StorageTips />
  </ScrollView>
);

const CurrentBookings = () => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Current Bookings</Text>
    {MOCK_DATA.bookings.map((booking) => (
      <BookingCard key={booking.id} booking={booking} />
    ))}
  </View>
);

const BookingCard = ({ booking }) => (
  <View style={styles.bookingCard}>
    <View style={styles.bookingHeader}>
      <View>
        <Text style={styles.bookingNGO}>{booking.ngo}</Text>
        <Text style={styles.bookingDetails}>{booking.crop} • {booking.quantity}</Text>
      </View>
      <View style={[styles.badge, UTILS.getStatusColor(booking.status)]}>
        <Text style={[styles.badgeText, { color: UTILS.getStatusColor(booking.status).color }]}>
          {booking.status}
        </Text>
      </View>
    </View>
    <View style={styles.bookingFooter}>
      <Text style={styles.bookingDates}>{booking.startDate} to {booking.endDate}</Text>
      <Text style={styles.bookingCost}>{booking.cost}</Text>
    </View>
  </View>
);

const StorageQuickActions = ({ onFindStorage }) => (
  <View style={styles.quickActions}>
    <TouchableOpacity style={[styles.quickAction, styles.blueAction]} onPress={onFindStorage}>
      <Icon name="warehouse" size={24} color="#fff" />
      <Text style={styles.quickActionText}>Find Storage</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.quickAction, styles.greenAction]}>
      <Icon name="calendar" size={24} color="#fff" />
      <Text style={styles.quickActionText}>Schedule Pickup</Text>
    </TouchableOpacity>
  </View>
);

const StorageTips = () => (
  <View style={styles.tipsContainer}>
    <Text style={styles.tipsTitle}>Storage Tips</Text>
    {[
      'Ensure crops are properly dried before storage',
      'Check storage conditions regularly',
      'Book early during peak harvest season',
      'Consider temperature-controlled options for sensitive crops'
    ].map((tip, index) => (
      <Text key={index} style={styles.tipText}>• {tip}</Text>
    ))}
  </View>
);

const BookingModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <Modal visible={isOpen} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Book Storage</Text>
          <View style={styles.formContainer}>
            <TextInput style={styles.formInput} placeholder="Crop type" />
            <TextInput style={styles.formInput} placeholder="Quantity (tons)" />
            <TextInput style={styles.formInput} placeholder="Start Date" />
            <TextInput style={styles.formInput} placeholder="End Date" />
          </View>
          <View style={styles.modalButtons}>
            <TouchableOpacity 
              style={[styles.button, styles.successButton, { flex: 1, marginRight: 8 }]}
              onPress={onSubmit}
            >
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.grayButton, { flex: 1, marginLeft: 8 }]}
              onPress={onClose}
            >
              <Text style={[styles.buttonText, { color: '#374151' }]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// === Final Exported Screen ===

export default function StorageManagementScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <StorageManagement onFindStorage={() => setIsModalOpen(true)} />
      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => {
          setIsModalOpen(false);
          alert('Storage booked!');
        }}
      />
    </>
  );
}
