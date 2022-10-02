import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-xs-12 col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="/feed">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/UserVika">
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
                </a>
                <div className="info">
                  <a className="author" href="/user/UserVika">
                    UserVika
                  </a>
                  <time dateTime="2022-08-02T12:43:25Z" className="date">
                    August 2nd
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> 2
                  </button>
                </div>
              </div>
              <a className="preview-link" href="/article/test-title">
                <h1>Test title</h1>
                <p>Test desc</p>
                <span>Read more...</span>
              </a>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/chrystal">
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
                        alt="Image of chrystal"
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
                </a>
                <div className="info">
                  <a className="author" href="/user/chrystal">
                    chrystal
                  </a>
                  <time dateTime="2020-03-16T02:51:58Z" className="date">
                    March 15th
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-primary">
                    <i className="ion-heart" /> 6
                  </button>
                </div>
              </div>
              <a
                className="preview-link"
                href="/article/dolorem-assumenda-aspernatur-dolor"
              >
                <h1>Dolorem assumenda aspernatur dolor.</h1>
                <p>Sunt vel quam et.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-pill tag-default">mean</li>
                </ul>
              </a>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/chrystal">
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
                        alt="Image of chrystal"
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
                </a>
                <div className="info">
                  <a className="author" href="/user/chrystal">
                    chrystal
                  </a>
                  <time dateTime="2020-03-16T02:51:58Z" className="date">
                    March 15th
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> 14
                  </button>
                </div>
              </div>
              <a
                className="preview-link"
                href="/article/ipsa-laudantium-consequuntur-eum"
              >
                <h1>Ipsa laudantium consequuntur eum.</h1>
                <p>Nostrum velit ratione ut.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-pill tag-default">javascript</li>
                </ul>
              </a>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/chrystal">
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
                        alt="Image of chrystal"
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
                </a>
                <div className="info">
                  <a className="author" href="/user/chrystal">
                    chrystal
                  </a>
                  <time dateTime="2020-03-16T02:51:58Z" className="date">
                    March 15th
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> 6
                  </button>
                </div>
              </div>
              <a
                className="preview-link"
                href="/article/iste-in-suscipit-dicta"
              >
                <h1>Iste in suscipit dicta.</h1>
                <p>Sequi sed harum cupiditate.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-pill tag-default">emberjs</li>
                </ul>
              </a>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/chrystal">
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
                        alt="Image of chrystal"
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
                </a>
                <div className="info">
                  <a className="author" href="/user/chrystal">
                    chrystal
                  </a>
                  <time dateTime="2020-03-16T02:51:58Z" className="date">
                    March 15th
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> 8
                  </button>
                </div>
              </div>
              <a
                className="preview-link"
                href="/article/laudantium-voluptatem-quas-molestiae"
              >
                <h1>Laudantium voluptatem quas molestiae.</h1>
                <p>Aut quia a quia.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-pill tag-default">javascript</li>
                </ul>
              </a>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/chrystal">
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
                        alt="Image of chrystal"
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
                </a>
                <div className="info">
                  <a className="author" href="/user/chrystal">
                    chrystal
                  </a>
                  <time dateTime="2020-03-16T02:51:58Z" className="date">
                    March 15th
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> 6
                  </button>
                </div>
              </div>
              <a
                className="preview-link"
                href="/article/voluptas-et-quisquam-quidem"
              >
                <h1>Voluptas et quisquam quidem.</h1>
                <p>Dignissimos consectetur dolores placeat.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-pill tag-default">emberjs</li>
                </ul>
              </a>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/chrystal">
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
                        alt="Image of chrystal"
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
                </a>
                <div className="info">
                  <a className="author" href="/user/chrystal">
                    chrystal
                  </a>
                  <time dateTime="2020-03-16T02:51:58Z" className="date">
                    March 15th
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> 7
                  </button>
                </div>
              </div>
              <a
                className="preview-link"
                href="/article/dignissimos-officiis-et-magnam"
              >
                <h1>Dignissimos officiis et magnam.</h1>
                <p>Quis laboriosam magnam reiciendis.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-pill tag-default">rails</li>
                </ul>
              </a>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/chrystal">
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
                        alt="Image of chrystal"
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
                </a>
                <div className="info">
                  <a className="author" href="/user/chrystal">
                    chrystal
                  </a>
                  <time dateTime="2020-03-16T02:51:58Z" className="date">
                    March 15th
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> 8
                  </button>
                </div>
              </div>
              <a
                className="preview-link"
                href="/article/aut-voluptatum-recusandae-quis"
              >
                <h1>Aut voluptatum recusandae quis.</h1>
                <p>Temporibus similique facere aperiam.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-pill tag-default">javascript</li>
                </ul>
              </a>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/chrystal">
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
                        alt="Image of chrystal"
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
                </a>
                <div className="info">
                  <a className="author" href="/user/chrystal">
                    chrystal
                  </a>
                  <time dateTime="2020-03-16T02:51:58Z" className="date">
                    March 15th
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> 1
                  </button>
                </div>
              </div>
              <a
                className="preview-link"
                href="/article/et-voluptatibus-dolores-commodi"
              >
                <h1>Et voluptatibus dolores commodi.</h1>
                <p>Eum debitis quod unde.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-pill tag-default">rails</li>
                </ul>
              </a>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="/user/chrystal">
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
                        alt="Image of chrystal"
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
                </a>
                <div className="info">
                  <a className="author" href="/user/chrystal">
                    chrystal
                  </a>
                  <time dateTime="2020-03-16T02:51:57Z" className="date">
                    March 15th
                  </time>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> 4
                  </button>
                </div>
              </div>
              <a
                className="preview-link"
                href="/article/repellendus-magni-minima-id"
              >
                <h1>Repellendus magni minima id.</h1>
                <p>Velit sit voluptates deleniti.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-pill tag-default">javascript</li>
                </ul>
              </a>
            </div>
            <nav>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="/feed?before=MQ&last=10">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/feed?after=MTA&first=10">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                <a
                  className="tag-pill tag-default tag-outline"
                  href="/feed?tagName=javascript"
                >
                  javascript
                </a>
                <a
                  className="tag-pill tag-default tag-outline"
                  href="/feed?tagName=rails"
                >
                  rails
                </a>
                <a
                  className="tag-pill tag-default tag-outline"
                  href="/feed?tagName=mean"
                >
                  mean
                </a>
                <a
                  className="tag-pill tag-default tag-outline"
                  href="/feed?tagName=emberjs"
                >
                  emberjs
                </a>
                <a
                  className="tag-pill tag-default tag-outline"
                  href="/feed?tagName=node"
                >
                  node
                </a>
                <a
                  className="tag-pill tag-default tag-outline"
                  href="/feed?tagName=programming"
                >
                  programming
                </a>
                <a
                  className="tag-pill tag-default tag-outline"
                  href="/feed?tagName=angularjs"
                >
                  angularjs
                </a>
                <a
                  className="tag-pill tag-default tag-outline"
                  href="/feed?tagName=react"
                >
                  react
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
