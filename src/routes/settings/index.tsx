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
        <div class="settings-page">
          <div class="container page">
            <div class="row">
              <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Your Settings</h1>
                <form method="post">
                  <ul class="error-messages" />
                  <fieldset>
                    <fieldset class="form-group">
                      <label>Email</label>
                      <input
                        name="input.email"
                        class="form-control form-control-lg"
                        type="email"
                        placeholder="john.doe@example.com"
                        autoComplete="email"
                        value={settings.email}
                      />
                    </fieldset>
                    <fieldset class="form-group">
                      <label>Password</label>
                      <input
                        name="input.password"
                        class="form-control form-control-lg"
                        type="password"
                        placeholder="A secure password"
                        autoComplete="new-password"
                        value=""
                      />
                    </fieldset>
                    <fieldset class="form-group">
                      <label>Username</label>
                      <input
                        name="input.username"
                        class="form-control form-control-lg"
                        type="text"
                        placeholder="john.doe"
                        autoComplete="username"
                        value={settings.username}
                      />
                    </fieldset>
                    <fieldset class="form-group">
                      <label>Bio</label>
                      <textarea
                        name="input.profile.bio"
                        class="form-control form-control-lg"
                        rows={8}
                        placeholder="John Doe is a Loan Officer at XYZ Bank, where John processes loan applications from start to finish, including mortgage refinancing and educating clients about their different financing options. John has worked with reputable real estate agencies, including ReMax, Century 21, and Coldwell Banker, among others. John helps homeowners and new buyers secure a loan that suits their budget and goals. You can expect 100% transparency, no horror stories, and nasty surprises when working with John. John is a cat-lover and CMAS diver from Michigan."
                        value={settings.profile.bio}
                      />
                    </fieldset>
                    <fieldset class="form-group">
                      <label>Image Url</label>
                      <input
                        name="input.profile.imageUrl"
                        class="form-control"
                        type="text"
                        placeholder="http://example.com/your-photo.jpg"
                        value={settings.profile.imageUrl}
                      />
                    </fieldset>
                    <button
                      class="btn btn-lg btn-primary pull-xs-right"
                      type="submit"
                    >
                      Update Settings
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
