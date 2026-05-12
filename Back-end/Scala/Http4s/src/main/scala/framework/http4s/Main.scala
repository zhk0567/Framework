package framework.http4s

import cats.effect.{ExitCode, IO, IOApp}
import cats.syntax.all.*
import com.comcast.ip4s.host
import org.http4s.{Header, HttpApp, HttpRoutes}
import org.http4s.dsl.io.*
import org.http4s.ember.server.EmberServerBuilder
import org.http4s.implicits.*
import org.typelevel.ci.ciStringSyntax

import scala.io.Source

object Main extends IOApp {

  private def loadIndex: String = {
    val is = getClass.getResourceAsStream("/index.html")
    if (is == null) "<html><body>missing index.html</body></html>"
    else {
      val s = Source.fromInputStream(is, "UTF-8")
      try s.mkString
      finally s.close()
    }
  }

  private val indexHtml: String = loadIndex

  private val jsonUtf8 = Header.Raw(ci"Content-Type", "application/json; charset=utf-8")
  private val htmlUtf8 = Header.Raw(ci"Content-Type", "text/html; charset=utf-8")

  private val routes: HttpRoutes[IO] = HttpRoutes.of[IO] {
    case GET -> Root / "api" / "health" =>
      Ok(
        """{"ok":true,"service":"framework-back-end-http4s-guide","note":"http4s；Finch 对照见 HTTP4S-Scala.md"}"""
      ).map(_.putHeaders(jsonUtf8))

    case GET -> Root / "api" / "info" =>
      Ok(
        """{"message":"http4s：类型函数式 HTTP 栈（Cats Effect + Ember）","doc":"https://http4s.org/","highlights":[{"title":"Finch","detail":"另一 Finch 为 Twitter 的函数式路由库；与本 http4s 生态不同，面试名常并列提及。"}]}"""
      ).map(_.putHeaders(jsonUtf8))

    case GET -> Root =>
      Ok(indexHtml).map(_.putHeaders(htmlUtf8))
  }

  private val httpApp: HttpApp[IO] = routes.orNotFound

  override def run(args: List[String]): IO[ExitCode] = {
    val p = Option(System.getenv("PORT")).flatMap(_.toIntOption).getOrElse(3103)
    val bindPort = com.comcast.ip4s.Port.fromInt(p).get

    EmberServerBuilder
      .default[IO]
      .withHost(host"127.0.0.1")
      .withPort(bindPort)
      .withHttpApp(httpApp)
      .build
      .use { server =>
        IO.println(s"http4s Ember http://127.0.0.1:${server.address.getPort}/") *>
          IO.never
      }
      .as(ExitCode.Success)
  }
}
