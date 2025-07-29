import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NGOContactModal = ({ ngo, onClose, onBookStorage }) => {
  if (!ngo) return null;

  return (
    <Modal visible={true} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{ngo.name}</Text>
          <Text>{ngo.description}</Text>
          <Text>Location: {ngo.location}</Text>
          <Text>Contact: {ngo.contact}</Text>
          <Text>Email: {ngo.email}</Text>
          <TouchableOpacity style={styles.button} onPress={onBookStorage}>
            <Text style={styles.buttonText}>Book Storage</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default NGOContactModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#16a34a',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeText: {
    marginTop: 16,
    color: 'red',
  },
});
