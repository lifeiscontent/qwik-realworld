import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";

interface SettingsData {
  username: string;
  email: string;
  profile: {
    bio: string;
    imageUrl: string;
  };
}

export const onGet: RequestHandler<SettingsData> = async ({
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

  return json.data.viewer;
};

export default component$(() => {
  const settingsData = useEndpoint<SettingsData>();

  console.log(settingsData);

  return (
    <Resource
      value={settingsData}
      onResolved={(settings) => (
        <div class="editor-page">
          <div class="container page">
            <div class="row">
              <div class="col-md-10 offset-md-1 col-xs-12">
                <form action="#" id="article-form">
                  <ul class="error-messages" />
                  <fieldset>
                    <fieldset class="form-group">
                      <label htmlFor="article-form-title-input">Title</label>
                      <input
                        name="input.title"
                        type="text"
                        id="article-form-title-input"
                        class="form-control form-control-lg"
                        placeholder="How to build webapps that scale"
                        defaultValue=""
                      />
                    </fieldset>
                    <fieldset class="form-group">
                      <label htmlFor="article-form-description-input">
                        Description
                      </label>
                      <input
                        name="input.description"
                        type="text"
                        id="article-form-description-input"
                        class="form-control"
                        placeholder="Web development technologies have evolved at an incredible clip over the past few years."
                        defaultValue=""
                      />
                    </fieldset>
                    <fieldset class="form-group">
                      <label htmlFor="article-form-body-textarea">Body</label>
                      <textarea
                        name="input.body"
                        class="form-control"
                        id="article-form-body-textarea"
                        rows={8}
                        placeholder="# Introducing RealWorld.

It's a great solution for learning how other frameworks work."
                        defaultValue={""}
                      />
                    </fieldset>
                    <fieldset class="form-group">
                      <label htmlFor="article-form-tags-ids-input">Tags</label>
                      <p>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Press enter to add tag to list"
                          list="tags"
                          id="article-form-tags-ids-input"
                          name="input.tagIds"
                          defaultValue=""
                        />
                        <datalist id="tags">
                          <option value="angularjs" />
                          <option value="rails" />
                          <option value="javascript" />
                          <option value="emberjs" />
                          <option value="react" />
                          <option value="mean" />
                          <option value="programming" />
                          <option value="node" />
                        </datalist>
                      </p>
                      <div class="tag-list" />
                    </fieldset>
                    <button
                      class="btn btn-lg pull-xs-right btn-primary"
                      type="submit"
                    >
                      Publish Article
                    </button>
                  </fieldset>
                </form>
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
