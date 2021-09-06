# M223: Punchclock
Dies ist eine Beispielapplikation für das Modul M223.
Mit Hilfe dieser Applikation können Entries erstellt werden, in denenen 
festgehalten wird, wann ein Mitarbeiter angefangen hat zu arbeiten und wass er mit der Arbeit fertig ist.
Jeder User ist einem Department angehängt und hat jeweils einen Task, welcher auch in der Entry festgehalten wird.
Damit der User einer Entry erstellen kann, muss er sich registrieren und mit den Anmeldedaten einloggen. 
Sobald er eingeloggt ist, kann er eine neue Entry erstellen, sie bearbeiten und löschen.

## Beispieldaten
In der Applikation gibt es eine import.sql-Datei. Mit dieser werden Testdaten beim starten der Appliaktion
in die Datenbank geladen. Es muss nichts weiteres gemacht werden, die Daten werden automatisch beim Start eingefügt.

## Loslegen
Folgende Schritte befolgen um loszulegen:
1. Sicherstellen, dass JDK 12 installiert und in der Umgebungsvariable `path` definiert ist.
1. Ins Verzeichnis der Applikation wechseln und über die Kommandozeile mit `./gradlew bootRun` oder `./gradlew.bat bootRun` starten
1. Unittest mit `./gradlew test` oder `./gradlew.bat test` ausführen.
1. Ein ausführbares JAR kann mit `./gradlew bootJar` oder `./gradlew.bat bootJar` erstellt werden.

Folgende Dienste stehen während der Ausführung im Profil `dev` zur Verfügung:
- REST-Schnittstelle der Applikation: http://localhost:8081
- Dashboard der H2 Datenbank: http://localhost:8081/h2-console