package com.example.framework;

import io.micronaut.runtime.Micronaut;
import io.micronaut.runtime.annotation.MicronautApplication;

@MicronautApplication
public class Application {

  public static void main(String[] args) {
    Micronaut.run(Application.class, args);
  }
}
