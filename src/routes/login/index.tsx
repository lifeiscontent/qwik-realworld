import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center">
              <Link href="/register">Need an account?</Link>
            </p>
            <form method="post">
              <ul class="error-messages" />
              <fieldset class="form-group">
                <label>Email</label>
                <input
                  name="input.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="john.doe@example.com"
                  autoComplete="email"
                />
              </fieldset>
              <fieldset class="form-group">
                <label>Password</label>
                <input
                  name="input.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="A strong password"
                  autoComplete="current-password"
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
