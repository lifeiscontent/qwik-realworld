import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ response }) => {
  response.headers.set(
    "set-cookie",
    `token=; path=/; expires=${new Date(0).toUTCString()}`
  );
  throw response.redirect("/login");
};
