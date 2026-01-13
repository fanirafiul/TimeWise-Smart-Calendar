import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }) {
  const [pushNotif, setPushNotif] = React.useState(true);
  const [emailReminder, setEmailReminder] = React.useState(true);
  const [soundAlert, setSoundAlert] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Profile Information</Text>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Email Notifications</Text>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Change Password</Text>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Calendar Integrations</Text>
        <View style={styles.integrationItem}>
          <View style={styles.integrationInfo}>
            <Ionicons name="logo-google" size={24} color="#EF4444" />
            <View style={styles.integrationText}>
              <Text style={styles.integrationName}>Google Calendar</Text>
              <Text style={styles.integrationStatus}>Last synced: 5 minutes ago</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.disconnectButton}>
            <Text style={styles.disconnectText}>Disconnect</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.integrationItem}>
          <View style={styles.integrationInfo}>
            <Ionicons name="logo-microsoft" size={24} color="#3B82F6" />
            <View style={styles.integrationText}>
              <Text style={styles.integrationName}>Microsoft Calendar</Text>
              <Text style={styles.integrationStatus}>Not connected</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.connectButton}>
            <Text style={styles.connectText}>Connect</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Theme</Text>
          <Text style={styles.settingValue}>Light</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Default View</Text>
          <Text style={styles.settingValue}>Month</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Push Notifications</Text>
          <Switch
            value={pushNotif}
            onValueChange={setPushNotif}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Email Reminders</Text>
          <Switch
            value={emailReminder}
            onValueChange={setEmailReminder}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Sound Alerts</Text>
          <Switch
            value={soundAlert}
            onValueChange={setSoundAlert}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data & Privacy</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Export Data</Text>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingText, { color: '#EF4444' }]}>Delete Account</Text>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 8,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    padding: 20,
    paddingBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingText: {
    fontSize: 16,
    color: '#1F2937',
  },
  settingValue: {
    fontSize: 16,
    color: '#6B7280',
  },
  integrationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  integrationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  integrationText: {
    marginLeft: 12,
  },
  integrationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  integrationStatus: {
    fontSize: 14,
    color: '#6B7280',
  },
  connectButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
  },
  connectText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  disconnectButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
  },
  disconnectText: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '500',
  },
  logoutButton: {
    margin: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EF4444',
    alignItems: 'center',
  },
  logoutText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

