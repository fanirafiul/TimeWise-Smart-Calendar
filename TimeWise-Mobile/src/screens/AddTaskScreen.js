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

export default function AddTaskScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSave = () => {
    if (!title) {
      Alert.alert('Error', 'Please enter task title');
      return;
    }
    Alert.alert('Success', 'Task created!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Task Title *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Add task description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Due Date</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateText}>Jan 15, 2024</Text>
              <Ionicons name="calendar-outline" size={20} color="#3B82F6" />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.label}>Due Time</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateText}>14:00</Text>
              <Ionicons name="time-outline" size={20} color="#3B82F6" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Priority</Text>
          <View style={styles.priorityButtons}>
            <TouchableOpacity
              style={[styles.priorityButton, priority === 'Low' && styles.priorityButtonActive]}
              onPress={() => setPriority('Low')}
            >
              <Text style={[styles.priorityText, priority === 'Low' && styles.priorityTextActive]}>
                Low
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.priorityButton, priority === 'Medium' && styles.priorityButtonActive]}
              onPress={() => setPriority('Medium')}
            >
              <Text style={[styles.priorityText, priority === 'Medium' && styles.priorityTextActive]}>
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.priorityButton, priority === 'High' && styles.priorityButtonActive]}
              onPress={() => setPriority('High')}
            >
              <Text style={[styles.priorityText, priority === 'High' && styles.priorityTextActive]}>
                High
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Status</Text>
          <TouchableOpacity style={styles.radioItem}>
            <Ionicons name="radio-button-on" size={24} color="#3B82F6" />
            <Text style={styles.radioText}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioItem}>
            <Ionicons name="radio-button-off" size={24} color="#9CA3AF" />
            <Text style={styles.radioText}>In Progress</Text>
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
            <Text style={styles.saveButtonText}>Save Task</Text>
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
  priorityButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  priorityButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  priorityButtonActive: {
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },
  priorityText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  priorityTextActive: {
    color: '#3B82F6',
    fontWeight: 'bold',
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
    backgroundColor: '#10B981',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

