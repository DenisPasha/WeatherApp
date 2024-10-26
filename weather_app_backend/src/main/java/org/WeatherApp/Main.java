package org.WeatherApp;



import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;

import java.io.IOException;
import java.net.URI;


public class Main {

    // Define the base URI for the server
    private static final String BASE_URI = "http://localhost:8080";


    public static void main(String[] args) {
        // Create a resource configuration
        final ResourceConfig rc = new ResourceConfig().packages("org.WeatherApp");

        // Start Grizzly server
        HttpServer server = GrizzlyHttpServerFactory.createHttpServer(URI.create(BASE_URI), rc);
        System.out.println(String.format("Weather app started at %s/weather", BASE_URI));

        // Keep the server running
        try {
            server.start();
            System.in.read(); // Keep the server running until a key is pressed
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            server.shutdownNow();
        }
    }
}