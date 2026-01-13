import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddEventScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSave = () => {
    if (!title) {
      Alert.alert('Error', 'Please enter event title');
      return;
    }
    Alert.alert('Success', 'Event created!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Event Title *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter event title"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Add event description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Start Date</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateText}>Jan 15, 2024</Text>
              <Ionicons name="calendar-outline" size={20} color="#3B82F6" />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.label}>Start Time</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateText}>09:00</Text>
              <Ionicons name="time-outline" size={20} color="#3B82F6" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>End Date</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateText}>Jan 15, 2024</Text>
              <Ionicons name="calendar-outline" size={20} color="#3B82F6" />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.label}>End Time</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateText}>10:30</Text>
              <Ionicons name="time-outline" size={20} color="#3B82F6" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Reminder</Text>
          <TouchableOpacity style={styles.checkboxItem}>
            <Ionicons name="checkbox" size={24} color="#3B82F6" />
            <Text style={styles.checkboxText}>15 minutes before</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkboxItem}>
            <Ionicons name="square-outline" size={24} color="#9CA3AF" />
            <Text style={styles.checkboxText}>30 minutes before</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Repeat</Text>
          <TouchableOpacity style={styles.radioItem}>
            <Ionicons name="radio-button-on" size={24} color="#3B82F6" />
            <Text style={styles.radioText}>No repeat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioItem}>
            <Ionicons name="radio-button-off" size={24} color="#9CA3AF" />
            <Text style={styles.radioText}>Weekly</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Save Event</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1F2937',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
  },
  dateButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  dateText: {
    fontSize: 16,
    color: '#1F2937',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
  cancelButtonText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#3B82F6',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

