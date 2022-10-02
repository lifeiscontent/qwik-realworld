import { component$, Resource, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";

interface LayoutData {
  username: string;
}

export const onGet: RequestHandler<LayoutData> = async ({
  request,
  response,
}) => {
  const query = `query LayoutQuery {
  viewer {
    username
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
  const layoutData = useEndpoint<LayoutData>();

  return (
    <Resource
      value={layoutData}
      onPending={() => (
        <>
          <Header />
          <Slot />
          <Footer />
        </>
      )}
      onRejected={() => (
        <>
          <Header />
          <Slot />
          <Footer />
        </>
      )}
      onResolved={(layout) => {
        console.log({ layout });

        return (
          <>
            <Header username={layout?.username} />
            <Slot />
            <Footer />
          </>
        );
      }}
    />
  );
});
