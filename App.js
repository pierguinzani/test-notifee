import React from 'react';
import { View, Button } from 'react-native';
import notifee, { AndroidImportance, AndroidVisibility, AndroidColor } from '@notifee/react-native';

export default function App() {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'teste',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
      visibility: AndroidVisibility.PUBLIC,
    });

    notifee.registerForegroundService((notification) => {
      return new Promise(() => {
        setTimeout(() => {
          console.log('Foreground service finished');
        }, 1000);
      });
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Ongoing notification',
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        visibility: AndroidVisibility.PUBLIC,
        ongoing: true,
        asForegroundService: true,
        color: AndroidColor.RED,
        colorized: true,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <View>
      <Button title="Display Notification" onPress={() => onDisplayNotification()} />
    </View>
  );
}

