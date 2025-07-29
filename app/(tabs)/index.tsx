import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Alert,
  StyleSheet,
} from 'react-native';

import { Header , BottomNavigation } from '../../components/ui/NavigationLayout';

import Dashboard from '../HomeScreen';
import DiseaseDetection from '../Disease-detection';
import NGOConnection from '../NgoConnection';
import StorageManagement from '../StorageManagement';
import UserProfile from '../profile';

import NGOContactModal from '../../components/modals/NGOContactModal';
import BookingModal from '../../components/modals/BookingModal';

import MOCK_DATA from '../Data/mockData';

const FarmConnectApp = () => {
  // Global State
  const [activeTab, setActiveTab] = useState('home');
  const [user] = useState(MOCK_DATA.user);

  // Disease Detection State
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // NGO Connection State
  const [selectedNGO, setSelectedNGO] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Storage Booking State
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Handlers
  const handleNavigation = (tab) => setActiveTab(tab);

  const handleImageAnalysis = () => {
    setIsAnalyzing(true);
    setDiseaseResult(null);

    setTimeout(() => {
      const randomDisease =
        MOCK_DATA.diseases[Math.floor(Math.random() * MOCK_DATA.diseases.length)];
      setDiseaseResult(randomDisease);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleConsultNGO = () => setActiveTab('ngos');
  const handleSelectNGO = (ngo) => setSelectedNGO(ngo);
  const handleCloseNGOModal = () => setSelectedNGO(null);

  const handleBookStorage = () => setShowBookingForm(true);

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
    setSelectedNGO(null);
  };

  const handleSubmitBooking = () => {
    setShowBookingForm(false);
    setSelectedNGO(null);
    Alert.alert('Success', 'Storage booking submitted successfully!');
  };

  const handleFindStorage = () => setActiveTab('ngos');

  // Dynamic Tab Content
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard user={user} onNavigate={handleNavigation} />;
      case 'disease':
        return (
          <DiseaseDetection
            diseaseResult={diseaseResult}
            isAnalyzing={isAnalyzing}
            onAnalyze={handleImageAnalysis}
            onConsultNGO={handleConsultNGO}
          />
        );
      case 'ngos':
        return (
          <NGOConnection
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSelectNGO={handleSelectNGO}
          />
        );
      case 'storage':
        return <StorageManagement onFindStorage={handleFindStorage} />;
      case 'profile':
        return <UserProfile user={user} />;
      default:
        return <Dashboard user={user} onNavigate={handleNavigation} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#16a34a" />

      {/* Header */}
      <Header user={user} />

      {/* Main Screen Content */}
      <View style={styles.content}>{renderContent()}</View>

      {/* Bottom Tab Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Modals */}
      <NGOContactModal
        ngo={selectedNGO}
        onClose={handleCloseNGOModal}
        onBookStorage={handleBookStorage}
      />
      <BookingModal
        isOpen={showBookingForm}
        onClose={handleCloseBookingForm}
        onSubmit={handleSubmitBooking}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});

export default FarmConnectApp;
