import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

interface HomeData {
  canReadFeed: {
    value: boolean;
  };
}

export const onGet: RequestHandler<HomeData> = async ({
  request,
  response,
}) => {
  const query = `query HomeQuery {
  canReadFeed {
    value
  }
}`;
  const cookies = new Map(
    request.headers
      .get("cookie")
      ?.split(/;\s*/)
      .map((x) => x.split("=") as [string, string])
  );

  if (!cookies.has("token")) return;

  const res = await fetch(
    "https://realworld-api-production.herokuapp.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("token")}`,
      },
      body: JSON.stringify({
        query,
      }),
    }
  );

  const json = await res.json();

  console.log(json);

  if (!json.data?.canReadFeed?.value) {
    response.headers.set(
      "set-cookie",
      `token=; path=/; expires=${new Date(0).toUTCString()}`
    );
    throw response.redirect("/login");
  }

  return json.data;
};

export default component$(() => {
  const homeData = useEndpoint<HomeData>();

  return (
    <Resource
      value={homeData}
      onPending={() => (
        <div class="home-page">
          <div class="banner">
            <div class="container">
              <h1 class="logo-font">conduit</h1>
              <p>A place to share your knowledge.</p>
            </div>
          </div>
          <div class="container page">
            <div class="row">
              <div class="col-xs-12 col-md-9">
                <div class="feed-toggle">
                  <ul class="nav nav-pills outline-active">
                    <li class="nav-item">
                      <span class="nav-link disabled">Your Feed</span>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" href="/">
                        Global Feed
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/riot">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of riot"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/riot">
                        riot
                      </Link>
                      <time dateTime="2022-09-16T09:19:45Z" class="date">
                        September 16th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/quia-veritatis-duis-bcd15f5a-2da4-4b26-9478-4050e3a5bfc1"
                  >
                    <h1>Quia veritatis duis </h1>
                    <p>Culpa facilis velit</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/riot">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of riot"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/riot">
                        riot
                      </Link>
                      <time dateTime="2022-09-16T09:19:28Z" class="date">
                        September 16th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/quia-veritatis-duis"
                  >
                    <h1>Quia veritatis duis </h1>
                    <p>Culpa facilis velit</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/Asarteu">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of Asarteu"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/Asarteu">
                        Asarteu
                      </Link>
                      <time dateTime="2022-08-25T16:30:37Z" class="date">
                        August 25th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/dfgghjj">
                    <h1>dfgghjj</h1>
                    <p>fghhjkk</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/hh">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of hh"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/hh">
                        hh
                      </Link>
                      <time dateTime="2022-08-18T16:55:59Z" class="date">
                        August 18th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/vvvvvvvv">
                    <h1>vvvvvvvv</h1>
                    <p>gygygy</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/riot">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of riot"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/riot">
                        riot
                      </Link>
                      <time dateTime="2022-08-15T11:02:26Z" class="date">
                        August 15th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/great-article">
                    <h1>Great Article</h1>
                    <p>Informative description.</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/UserVika">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of UserVika"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/UserVika">
                        UserVika
                      </Link>
                      <time dateTime="2022-08-02T12:43:25Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/test-title">
                    <h1>Test title</h1>
                    <p>Test desc</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/kyrylchuk94">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of kyrylchuk94"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/kyrylchuk94">
                        kyrylchuk94
                      </Link>
                      <time dateTime="2022-08-02T12:12:47Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/testtitle">
                    <h1>testTitle</h1>
                    <p>testDescription</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/QWEQWE">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of QWEQWE"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/QWEQWE">
                        QWEQWE
                      </Link>
                      <time dateTime="2022-08-02T10:26:15Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/asd-b356dab8-bda0-4fe2-bb44-1e23b35e2a1c"
                  >
                    <h1>asd</h1>
                    <p>
                      adadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadad
                    </p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/QWEQWE">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of QWEQWE"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/QWEQWE">
                        QWEQWE
                      </Link>
                      <time dateTime="2022-08-02T10:25:38Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/adadvadadadadadadadvadadadadadadadvadaadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadad"
                  >
                    <h1>
                      adadvadadadadadadadvadadadadadadadvadaadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadad
                    </h1>
                    <p>asd</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/31">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of 31"
                            src="https://imgur.com/NuloKqU"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                          <noscript />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/31">
                        31
                      </Link>
                      <time dateTime="2022-08-02T07:55:17Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/wow-f3f8ac47-b922-4ba8-b9ff-fdd83cb5ef8f"
                  >
                    <h1>wow</h1>
                    <p>dw</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <nav>
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <Link class="page-link" href="/?before=MQ&last=10">
                        Previous
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="/?after=MTA&first=10">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="sidebar">
                  <p>Popular Tags</p>
                  <div class="tag-list">
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=javascript"
                    >
                      javascript
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=rails"
                    >
                      rails
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=mean"
                    >
                      mean
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=emberjs"
                    >
                      emberjs
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=node"
                    >
                      node
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=programming"
                    >
                      programming
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=angularjs"
                    >
                      angularjs
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=react"
                    >
                      react
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      onRejected={() => (
        <div class="home-page">
          <div class="banner">
            <div class="container">
              <h1 class="logo-font">conduit</h1>
              <p>A place to share your knowledge.</p>
            </div>
          </div>
          <div class="container page">
            <div class="row">
              <div class="col-xs-12 col-md-9">
                <div class="feed-toggle">
                  <ul class="nav nav-pills outline-active">
                    <li class="nav-item">
                      <span class="nav-link disabled">Your Feed</span>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" href="/">
                        Global Feed
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/riot">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of riot"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/riot">
                        riot
                      </Link>
                      <time dateTime="2022-09-16T09:19:45Z" class="date">
                        September 16th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/quia-veritatis-duis-bcd15f5a-2da4-4b26-9478-4050e3a5bfc1"
                  >
                    <h1>Quia veritatis duis </h1>
                    <p>Culpa facilis velit</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/riot">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of riot"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/riot">
                        riot
                      </Link>
                      <time dateTime="2022-09-16T09:19:28Z" class="date">
                        September 16th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/quia-veritatis-duis"
                  >
                    <h1>Quia veritatis duis </h1>
                    <p>Culpa facilis velit</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/Asarteu">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of Asarteu"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/Asarteu">
                        Asarteu
                      </Link>
                      <time dateTime="2022-08-25T16:30:37Z" class="date">
                        August 25th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/dfgghjj">
                    <h1>dfgghjj</h1>
                    <p>fghhjkk</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/hh">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of hh"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/hh">
                        hh
                      </Link>
                      <time dateTime="2022-08-18T16:55:59Z" class="date">
                        August 18th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/vvvvvvvv">
                    <h1>vvvvvvvv</h1>
                    <p>gygygy</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/riot">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of riot"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/riot">
                        riot
                      </Link>
                      <time dateTime="2022-08-15T11:02:26Z" class="date">
                        August 15th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/great-article">
                    <h1>Great Article</h1>
                    <p>Informative description.</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/UserVika">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of UserVika"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/UserVika">
                        UserVika
                      </Link>
                      <time dateTime="2022-08-02T12:43:25Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/test-title">
                    <h1>Test title</h1>
                    <p>Test desc</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/kyrylchuk94">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of kyrylchuk94"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/kyrylchuk94">
                        kyrylchuk94
                      </Link>
                      <time dateTime="2022-08-02T12:12:47Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/testtitle">
                    <h1>testTitle</h1>
                    <p>testDescription</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/QWEQWE">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of QWEQWE"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/QWEQWE">
                        QWEQWE
                      </Link>
                      <time dateTime="2022-08-02T10:26:15Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/asd-b356dab8-bda0-4fe2-bb44-1e23b35e2a1c"
                  >
                    <h1>asd</h1>
                    <p>
                      adadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadad
                    </p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/QWEQWE">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of QWEQWE"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/QWEQWE">
                        QWEQWE
                      </Link>
                      <time dateTime="2022-08-02T10:25:38Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/adadvadadadadadadadvadadadadadadadvadaadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadad"
                  >
                    <h1>
                      adadvadadadadadadadvadadadadadadadvadaadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadad
                    </h1>
                    <p>asd</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/31">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of 31"
                            src="https://imgur.com/NuloKqU"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                          <noscript />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/31">
                        31
                      </Link>
                      <time dateTime="2022-08-02T07:55:17Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/wow-f3f8ac47-b922-4ba8-b9ff-fdd83cb5ef8f"
                  >
                    <h1>wow</h1>
                    <p>dw</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <nav>
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <Link class="page-link" href="/?before=MQ&last=10">
                        Previous
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="/?after=MTA&first=10">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="sidebar">
                  <p>Popular Tags</p>
                  <div class="tag-list">
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=javascript"
                    >
                      javascript
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=rails"
                    >
                      rails
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=mean"
                    >
                      mean
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=emberjs"
                    >
                      emberjs
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=node"
                    >
                      node
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=programming"
                    >
                      programming
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=angularjs"
                    >
                      angularjs
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=react"
                    >
                      react
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      onResolved={(home) => (
        <div class="home-page">
          <div class="banner">
            <div class="container">
              <h1 class="logo-font">conduit</h1>
              <p>A place to share your knowledge.</p>
            </div>
          </div>
          <div class="container page">
            <div class="row">
              <div class="col-xs-12 col-md-9">
                <div class="feed-toggle">
                  <ul class="nav nav-pills outline-active">
                    <li class="nav-item">
                      {home?.canReadFeed?.value ? (
                        <Link class="nav-link" href="/feed">
                          Your Feed
                        </Link>
                      ) : (
                        <span class="nav-link disabled">Your Feed</span>
                      )}
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" href="/">
                        Global Feed
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/riot">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of riot"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/riot">
                        riot
                      </Link>
                      <time dateTime="2022-09-16T09:19:45Z" class="date">
                        September 16th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/quia-veritatis-duis-bcd15f5a-2da4-4b26-9478-4050e3a5bfc1"
                  >
                    <h1>Quia veritatis duis </h1>
                    <p>Culpa facilis velit</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/riot">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of riot"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/riot">
                        riot
                      </Link>
                      <time dateTime="2022-09-16T09:19:28Z" class="date">
                        September 16th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/quia-veritatis-duis"
                  >
                    <h1>Quia veritatis duis </h1>
                    <p>Culpa facilis velit</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/Asarteu">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of Asarteu"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/Asarteu">
                        Asarteu
                      </Link>
                      <time dateTime="2022-08-25T16:30:37Z" class="date">
                        August 25th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/dfgghjj">
                    <h1>dfgghjj</h1>
                    <p>fghhjkk</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/hh">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of hh"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/hh">
                        hh
                      </Link>
                      <time dateTime="2022-08-18T16:55:59Z" class="date">
                        August 18th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/vvvvvvvv">
                    <h1>vvvvvvvv</h1>
                    <p>gygygy</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/riot">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of riot"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/riot">
                        riot
                      </Link>
                      <time dateTime="2022-08-15T11:02:26Z" class="date">
                        August 15th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/great-article">
                    <h1>Great Article</h1>
                    <p>Informative description.</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/UserVika">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of UserVika"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/UserVika">
                        UserVika
                      </Link>
                      <time dateTime="2022-08-02T12:43:25Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/test-title">
                    <h1>Test title</h1>
                    <p>Test desc</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/kyrylchuk94">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of kyrylchuk94"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/kyrylchuk94">
                        kyrylchuk94
                      </Link>
                      <time dateTime="2022-08-02T12:12:47Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 1
                      </button>
                    </div>
                  </div>
                  <Link class="preview-link" href="/article/testtitle">
                    <h1>testTitle</h1>
                    <p>testDescription</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/QWEQWE">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of QWEQWE"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/QWEQWE">
                        QWEQWE
                      </Link>
                      <time dateTime="2022-08-02T10:26:15Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/asd-b356dab8-bda0-4fe2-bb44-1e23b35e2a1c"
                  >
                    <h1>asd</h1>
                    <p>
                      adadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadad
                    </p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/QWEQWE">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of QWEQWE"
                            srcSet="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fsmiley-cyrus.jpg&w=64&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/QWEQWE">
                        QWEQWE
                      </Link>
                      <time dateTime="2022-08-02T10:25:38Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/adadvadadadadadadadvadadadadadadadvadaadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadad"
                  >
                    <h1>
                      adadvadadadadadadadvadadadadadadadvadaadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadadadadadadvadadad
                    </h1>
                    <p>asd</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <Link href="/user/31">
                      <span
                        style={{
                          display: "inline-flex",
                          verticalAlign: "middle",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </span>
                          <img
                            alt="Image of 31"
                            src="https://imgur.com/NuloKqU"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                          <noscript />
                        </span>
                      </span>
                    </Link>
                    <div class="info">
                      <Link class="author" href="/user/31">
                        31
                      </Link>
                      <time dateTime="2022-08-02T07:55:17Z" class="date">
                        August 2nd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 2
                      </button>
                    </div>
                  </div>
                  <Link
                    class="preview-link"
                    href="/article/wow-f3f8ac47-b922-4ba8-b9ff-fdd83cb5ef8f"
                  >
                    <h1>wow</h1>
                    <p>dw</p>
                    <span>Read more...</span>
                  </Link>
                </div>
                <nav>
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <Link class="page-link" href="/?before=MQ&last=10">
                        Previous
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="/?after=MTA&first=10">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="sidebar">
                  <p>Popular Tags</p>
                  <div class="tag-list">
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=javascript"
                    >
                      javascript
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=rails"
                    >
                      rails
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=mean"
                    >
                      mean
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=emberjs"
                    >
                      emberjs
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=node"
                    >
                      node
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=programming"
                    >
                      programming
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=angularjs"
                    >
                      angularjs
                    </Link>
                    <Link
                      class="tag-pill tag-default tag-outline"
                      href="/?tagName=react"
                    >
                      react
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
