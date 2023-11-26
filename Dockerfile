FROM openjdk:8
EXPOSE 8082
ADD target/ProjetStation-0.0.1-SNAPSHOT.jar ProjetStation-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","ProjetStation-0.0.1-SNAPSHOT.jar"]