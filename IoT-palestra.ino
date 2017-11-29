#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#define FIREBASE_HOST "iot-ionic-3724a.firebaseapp.com"
#define FIREBASE_AUTH "AAAAk4ukqHc:APA91bHQYEbmcbm61odLDr6l39zW4Cz.....OivbFp6HK3ed3"
#define WIFI_SSID "VIVO-2F28"
#define WIFI_PASSWORD "C662922F28"
const int lampadaPin = 13;

void setup() {
  Serial.begin(9600);
  pinMode(lampadaPin, OUTPUT);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("conectando");

  while (WiFi.status() != WL_CONNECTED) { Serial.print(".");  delay(500); }
 
  Serial.println();
  Serial.print("conectado: ");
  Serial.println(WiFi.localIP());
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.setInt("ambients/-Kz-mZOpXyW2qRL8zbtv/active", 0);
}

void loop() {
  digitalWrite(lampadaPin, !Firebase.getInt("ambients/-Kz-mZOpXyW2qRL8zbtv/active"));
  delay(100);
}
