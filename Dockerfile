FROM openjdk:8
EXPOSE 8080
ADD target/GestionBus-0.0.1-SNAPSHOT.jar  GestionBus.jar
ENTRYPOINT ["java", "-jar" , "GestionBus.jar"]