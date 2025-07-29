import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const BookingModal = ({ isOpen, onClose, onSubmit }) => {
  const [crop, setCrop] = useState('');
  const [quantity, setQuantity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFormSubmit = () => {
    if (!crop || !quantity || !startDate || !endDate) {
      alert('Please fill in all fields.');
      return;
    }

    onSubmit({
      crop,
      quantity,
      startDate,
      endDate,
    });

    // Reset form
    setCrop('');
    setQuantity('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <Modal visible={isOpen} transparent animationType="slide">
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Book Storage</Text>

          <TextInput
            placeholder="Crop"
            style={styles.input}
            value={crop}
            onChangeText={setCrop}
          />
          <TextInput
            placeholder="Quantity (e.g., 2 tons)"
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
          />
          <TextInput
            placeholder="Start Date (YYYY-MM-DD)"
            style={styles.input}
            value={startDate}
            onChangeText={setStartDate}
          />
          <TextInput
            placeholder="End Date (YYYY-MM-DD)"
            style={styles.input}
            value={endDate}
            onChangeText={setEndDate}
          />

          <TouchableOpacity style={styles.submitBtn} onPress={handleFormSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default BookingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 20,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  submitBtn: {
    backgroundColor: '#16a34a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelText: {
    marginTop: 16,
    textAlign: 'center',
    color: 'red',
  },
});
