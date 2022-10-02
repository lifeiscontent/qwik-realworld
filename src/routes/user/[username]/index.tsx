import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";

interface Resource {
  username: string;
  email: string;
  profile: {
    bio: string;
    imageUrl: string;
  };
}

export const onGet: RequestHandler<Resource> = async ({
  request,
  response,
}) => {
  const query = `query SettingsQuery {
  viewer {
    username
    email
    profile {
        bio
        imageUrl
    }
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

  if (!json.data?.viewer?.username) {
    response.headers.set(
      "set-cookie",
      `token=; path=/; expires=${new Date(0).toUTCString()}`
    );
    throw response.redirect("/login");
  }

  return json.data;
};

export default component$(() => {
  const resource = useEndpoint<Resource>();

  return (
    <Resource
      value={resource}
      onResolved={(value) => (
        <div class="profile-page">
          <div class="user-info">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-md-10 offset-md-1">
                  <span
                    style={{ display: "inline-flex", verticalAlign: "middle" }}
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
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%27128%27/%3e"
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
                        alt="Image of lifeiscontent"
                        src="https://secure.gravatar.com/userimage/12563284/3333d6846c598f13ff991e35ae8182bc?size=200"
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
                  <h4>lifeiscontent</h4>
                  <p />
                  <div class="btn-toolbar">
                    <button
                      class="btn btn-sm action-btn btn-outline-secondary"
                      disabled
                    >
                      <i class="ion-plus-round" /> Follow lifeiscontent (7)
                    </button>
                    <a
                      class="btn btn-sm btn-outline-secondary action-btn"
                      href="/settings"
                    >
                      <i class="ion-gear-a" /> Edit Profile Settings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-10 offset-md-1">
                <div class="articles-toggle">
                  <ul class="nav nav-pills outline-active">
                    <li class="nav-item">
                      <a class="nav-link active" href="/user/lifeiscontent">
                        My Articles
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/user/lifeiscontent/favorites">
                        Favorited Articles
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <a href="/user/lifeiscontent">
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
                            alt="Image of lifeiscontent"
                            src="https://secure.gravatar.com/userimage/12563284/3333d6846c598f13ff991e35ae8182bc?size=200"
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
                    </a>
                    <div class="info">
                      <a class="author" href="/user/lifeiscontent">
                        lifeiscontent
                      </a>
                      <time dateTime="2020-09-04T03:26:49Z" class="date">
                        September 3rd
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 17
                      </button>
                    </div>
                  </div>
                  <a class="preview-link" href="/article/foo-bar-baz-qux">
                    <h1>Foo bar baz qux</h1>
                    <p>something good</p>
                    <span>Read more...</span>
                  </a>
                </div>
                <div class="article-preview">
                  <div class="article-meta">
                    <a href="/user/lifeiscontent">
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
                            alt="Image of lifeiscontent"
                            src="https://secure.gravatar.com/userimage/12563284/3333d6846c598f13ff991e35ae8182bc?size=200"
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
                    </a>
                    <div class="info">
                      <a class="author" href="/user/lifeiscontent">
                        lifeiscontent
                      </a>
                      <time dateTime="2020-03-16T06:40:52Z" class="date">
                        March 15th
                      </time>
                    </div>
                    <div class="pull-xs-right">
                      <button disabled class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart" /> 15
                      </button>
                    </div>
                  </div>
                  <a
                    class="preview-link"
                    href="/article/how-to-build-webapps-that-scale"
                  >
                    <h1>How to build webapps that scale</h1>
                    <p>
                      Web development technologies have evolved at an incredible
                      clip over the past few years.
                    </p>
                    <span>Read more...</span>
                    <ul class="tag-list">
                      <li class="tag-pill tag-default">react</li>
                      <li class="tag-pill tag-default">rails</li>
                    </ul>
                  </a>
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

export const onPost: RequestHandler = async ({ request, response }) => {
  const query = `mutation SignInMutation($input: SignInInput!) {
  signIn(input: $input) {
    token
  }
}`;
  const formData = await request.formData();

  const input = {
    email: formData.get("input.email"),
    password: formData.get("input.password"),
  };

  const res = await fetch(
    "https://realworld-api-production.herokuapp.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          input,
        },
      }),
    }
  );

  const payload = await res.json();

  if (payload.data?.signIn?.token) {
    response.headers.set(
      "Set-Cookie",
      `token=${payload.data.signIn.token}; Secure; HttpOnly; SameSite=Strict; Path=/`
    );
    throw response.redirect("/");
  }

  return null;
};
