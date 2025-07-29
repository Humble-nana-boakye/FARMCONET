import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native';
import MOCK_DATA from './Data/mockData';
import styles from '../components/AppStyles'; // make sure you have this or adjust the path
import Icon from '../components/Icon'; // replace with your icon lib or custom Icon

const NGOConnection = ({ searchQuery, onSearchChange, onSelectNGO }) => {
  const filteredNGOs = MOCK_DATA.ngos.filter(ngo =>
    ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ngo.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="users" size={28} color="#7c3aed" />
        <Text style={styles.headerTitle}>Find NGO Partners</Text>
      </View>

      <NGOSearch searchQuery={searchQuery} onSearchChange={onSearchChange} />

      <ScrollView style={styles.scrollContainer}>
        <NGOList ngos={filteredNGOs} onSelectNGO={onSelectNGO} />
      </ScrollView>
    </View>
  );
};

const NGOSearch = ({ searchQuery, onSearchChange }) => (
  <View style={styles.searchContainer}>
    <Icon name="search" size={20} color="#9ca3af" />
    <TextInput
      style={styles.searchInput}
      placeholder="Search NGOs or services..."
      value={searchQuery}
      onChangeText={onSearchChange}
    />
  </View>
);

const NGOList = ({ ngos, onSelectNGO }) => (
  <View style={styles.listContainer}>
    {ngos.map((ngo) => (
      <NGOCard key={ngo.id} ngo={ngo} onSelect={() => onSelectNGO(ngo)} />
    ))}
  </View>
);

const NGOCard = ({ ngo, onSelect }) => (
  <View style={styles.ngoCard}>
    <View style={styles.ngoHeader}>
      <Text style={styles.ngoTitle}>{ngo.name}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={16} color="#fbbf24" />
        <Text style={styles.rating}>{ngo.rating}</Text>
      </View>
    </View>

    <Text style={styles.ngoDescription}>{ngo.description}</Text>

    <View style={styles.locationContainer}>
      <Icon name="mapPin" size={16} color="#6b7280" />
      <Text style={styles.locationText}>{ngo.location} • {ngo.distance}</Text>
    </View>

    <View style={styles.servicesContainer}>
      {ngo.services.map((service, index) => (
        <View key={index} style={styles.serviceTag}>
          <Text style={styles.serviceText}>{service}</Text>
        </View>
      ))}
    </View>

    <View style={styles.ngoFooter}>
      <View style={styles.capacityContainer}>
        <Text style={styles.capacityLabel}>Capacity: </Text>
        <Text style={styles.capacityValue}>{ngo.capacity}</Text>
        <View style={[styles.availabilityBadge, ngo.available ? styles.available : styles.unavailable]}>
          <Text style={[styles.availabilityText, { color: ngo.available ? '#16a34a' : '#dc2626' }]}>
            {ngo.available ? 'Available' : 'Full'}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.button, styles.purpleButton]} onPress={onSelect}>
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const NGOContactModal = ({ ngo, onClose, onBookStorage }) => {
  if (!ngo) return null;

  return (
    <Modal visible={!!ngo} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{ngo.name}</Text>
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={18} color="#6b7280" />
              <Text style={styles.contactText}>{ngo.contact}</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon name="mail" size={18} color="#6b7280" />
              <Text style={styles.contactText}>{ngo.email}</Text>
            </View>
          </View>
          <View style={styles.modalButtons}>
            <TouchableOpacity 
              style={[styles.button, styles.successButton, { flex: 1, marginRight: 8 }]}
              onPress={onBookStorage}
            >
              <Text style={styles.buttonText}>Book Storage</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.grayButton, { flex: 1, marginLeft: 8 }]}
              onPress={onClose}
            >
              <Text style={[styles.buttonText, { color: '#374151' }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default function NGOConnectionScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNGO, setSelectedNGO] = useState(null);

  return (
    <>
      <NGOConnection 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectNGO={setSelectedNGO}
      />
      <NGOContactModal
        ngo={selectedNGO}
        onClose={() => setSelectedNGO(null)}
        onBookStorage={() => alert('Storage booked!')}
      />
    </>
  );
}
