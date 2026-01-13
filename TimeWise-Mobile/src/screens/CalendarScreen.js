import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CalendarScreen({ navigation }) {
  // Navigate to parent stack navigator for AddEvent
  const navigateToAddEvent = () => {
    navigation.getParent()?.navigate('AddEvent');
  };
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(year, currentDate.getMonth(), 1).getDay();

  const renderCalendarDays = () => {
    const days = [];
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<View key={`empty-${i}`} style={styles.calendarDay} />);
    }
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === 15 && currentDate.getMonth() === 0; // Demo: highlight day 15
      days.push(
        <TouchableOpacity
          key={day}
          style={[styles.calendarDay, isToday && styles.todayDay]}
          onPress={navigateToAddEvent}
        >
          <Text style={[styles.dayText, isToday && styles.todayText]}>{day}</Text>
          {day % 7 === 0 && <View style={styles.eventDot} />}
        </TouchableOpacity>
      );
    }
    return days;
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={prevMonth}>
          <Ionicons name="chevron-back" size={24} color="#3B82F6" />
        </TouchableOpacity>
        <Text style={styles.monthYear}>{month} {year}</Text>
        <TouchableOpacity onPress={nextMonth}>
          <Ionicons name="chevron-forward" size={24} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      <View style={styles.calendarContainer}>
        <View style={styles.weekHeader}>
          {daysOfWeek.map((day) => (
            <View key={day} style={styles.weekDay}>
              <Text style={styles.weekDayText}>{day}</Text>
            </View>
          ))}
        </View>
        <View style={styles.calendarGrid}>
          {renderCalendarDays()}
        </View>
      </View>

      <ScrollView style={styles.eventsList}>
        <Text style={styles.eventsTitle}>Today's Events</Text>
        <TouchableOpacity 
          style={styles.eventItem} 
          onPress={() => navigation.getParent()?.navigate('EventDetail')}
        >
          <View style={styles.eventTime}>
            <Text style={styles.eventTimeText}>09:00</Text>
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>Meeting with Team</Text>
            <Text style={styles.eventLocation}>Conference Room A</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={navigateToAddEvent}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  monthYear: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  weekHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  weekDayText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDay: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 2,
  },
  todayDay: {
    backgroundColor: '#3B82F6',
  },
  dayText: {
    fontSize: 14,
    color: '#1F2937',
  },
  todayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  eventDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#8B5CF6',
    marginTop: 2,
  },
  eventsList: {
    flex: 1,
    padding: 16,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTime: {
    width: 60,
    alignItems: 'center',
  },
  eventTimeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
  },
  eventDetails: {
    flex: 1,
    marginLeft: 16,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: '#6B7280',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

