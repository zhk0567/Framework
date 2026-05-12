package com.example.framework;

import io.vertx.core.Vertx;

public final class Main {

  public static void main(String[] args) {
    Vertx.vertx().deployVerticle(new MainVerticle());
  }

  private Main() {}
}
