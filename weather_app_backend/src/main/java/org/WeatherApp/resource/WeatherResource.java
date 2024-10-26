package org.WeatherApp.resource;

import com.google.gson.Gson;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.WeatherApp.Main;
import org.WeatherApp.pojo.Weather;

import javax.print.attribute.standard.Media;
import java.awt.*;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Properties;

@Path("/weather")
public class WeatherResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getWeather(@QueryParam("city") String city){
        if (city == null || city.isEmpty()){
            throw new IllegalArgumentException("City is either null or empty");
        }
        Weather weather = fetchWeatherData(city);
        Response build = Response.ok(weather).build();
        return Response.ok(weather).build();
    }


    public Weather fetchWeatherData(String city) {

        // Load the API key from config.properties
        Properties prop = new Properties();
        try (InputStream input = Main.class.getClassLoader().getResourceAsStream("config.properties")) {
            if (input == null) {
                throw new IllegalArgumentException("Sorry, unable to find config.properties");
            }

            // Load the properties file
            prop.load(input);
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        String apiKey = prop.getProperty("weather.api.key");
        String apiUrl = String.format("http://api.weatherapi.com/v1/current.json?key=%s&q=%s&aqi=no", apiKey, city);

        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(apiUrl)).build();


        try {
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String body = response.body();
            Gson gson = new Gson();

            return gson.fromJson(body, Weather.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
