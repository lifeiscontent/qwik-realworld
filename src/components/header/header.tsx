import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface HeaderProps {
  username?: string;
}

export default component$((props: HeaderProps) => {
  const store = useStore({ open: false });

  return (
    <nav class="navbar navbar-light">
      <div class="container">
        <Link class="navbar-brand" href="/">
          conduit
        </Link>
        {props.username ? (
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <a class="nav-link" href="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
              </a>
            </li>
            <li
              class={{
                "nav-item dropdown": true,
                open: store.open,
              }}
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick$={(event) => {
                  event.preventDefault();
                  store.open = !store.open;
                }}
              >
                {props.username}
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href={`/user/${props.username}`}>
                  Profile
                </a>
                <a class="dropdown-item" href="/settings">
                  Settings
                </a>
                <a class="dropdown-item" href="/logout">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        ) : (
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <Link class="nav-link" href="/login">
                Sign in
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/register">
                Sign up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
});
