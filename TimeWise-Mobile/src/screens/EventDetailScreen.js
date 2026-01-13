import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EventDetailScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meeting with Team</Text>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={24} color="#3B82F6" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={24} color="#EF4444" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Ionicons name="calendar-outline" size={24} color="#3B82F6" />
          <Text style={styles.detailText}>Monday, January 15, 2024</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="time-outline" size={24} color="#3B82F6" />
          <Text style={styles.detailText}>09:00 - 10:30</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="location-outline" size={24} color="#3B82F6" />
          <Text style={styles.detailText}>Conference Room A</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Weekly team sync meeting to discuss project progress and upcoming tasks.
          Please prepare your status updates and any blockers you're facing.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Collaborators</Text>
        <View style={styles.collaborators}>
          <View style={styles.collaborator}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <Text style={styles.collaboratorName}>John Doe</Text>
          </View>
          <View style={styles.collaborator}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JS</Text>
            </View>
            <Text style={styles.collaboratorName}>Jane Smith</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={20} color="#3B82F6" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Comments</Text>
        <View style={styles.comment}>
          <View style={styles.commentHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <Text style={styles.commentAuthor}>John Doe</Text>
            <Text style={styles.commentTime}>2 hours ago</Text>
          </View>
          <Text style={styles.commentText}>I'll prepare the agenda</Text>
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
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
  },
  details: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  collaborators: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  collaborator: {
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  collaboratorName: {
    fontSize: 12,
    color: '#6B7280',
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#3B82F6',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  comment: {
    marginTop: 12,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  commentAuthor: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  commentTime: {
    marginLeft: 8,
    fontSize: 12,
    color: '#9CA3AF',
  },
  commentText: {
    marginLeft: 60,
    fontSize: 14,
    color: '#6B7280',
  },
});

