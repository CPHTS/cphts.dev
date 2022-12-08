import { Header, headerLinks } from "~/components/header";
import {
  Newsletter,
  newsletterAction,
  newsletterLinks,
} from "~/components/newsletter";
import global from "~/styles/global.css";

export function links() {
  return [
    { rel: "stylesheet", href: global },
    ...headerLinks(),
    ...newsletterLinks(),
  ];
}

export function meta() {
  return {
    "og:title": "Copenhagen TypeScript",
    "og:type": "website",
    "og:url": "https://cphts.dev",
    "og:image": "https://cphts.dev/images/cphts-withtext.png",
    "og:description":
      "A new Copenhagen-based TypeScript-focused discussion-loving group of nerds meeting up every second month to debate whether type or interface is the correct way to go.",
  };
}

export const action = newsletterAction;

export default function Index() {
  return (
    <main>
      <h2>Welcome to</h2>
      <Header />
      <p>
        A new Copenhagen-based TypeScript-focused discussion-loving group of
        nerds meeting up every second month to debate whether <code>type</code>{" "}
        or <code>interface</code> is the correct way to go.{" "}
        <sup>
          <small>†</small>
        </sup>
        <br />
        <br />
        <small>
          <small>
            <sup>†</sup> Other topics are allowed.
          </small>
        </small>
      </p>
      <hr />
      <Newsletter />
      <hr />
      <p>
        <strong>Meetups</strong> will start in January, and once we settle on a
        location and schedule more information will follow.
      </p>
      <p>
        <strong>Format</strong> will be short (~15 min) lightning talks and
        plenty of room for general discussion. Just show your code, website, or
        idea, no need for fancy presentations.
      </p>
      <p>
        <strong>Crowd</strong> will be kept (even forced) small, so probably no
        more than 25 participants per event.
      </p>
      <p>
        <strong>Organization</strong> will be on Meetup with the option of
        introducing a small participation fee if too many people are interested.
      </p>
      <p>
        <strong>Target</strong> audience is everyone and anyone with an interest
        in TypeScript, but we prefer active participants over people who just
        are bored on a Thursday evening, as seating will be very limited.
      </p>
      <p>
        <strong>Focus</strong> will be framework-independent talks (so not too
        React/Svelte/Vue/Angular nerdy) though framework-specific topics are of
        course allowed as well but should be generalized as well as possible.
      </p>
      <p>
        <strong>Refreshments</strong> will be available as per the whims of the
        host. This might include both alcoholic and non-alcoholic beverages,
        snacks, or even food.
      </p>
      <p>
        <strong>Streaming</strong> will be attempted on Twitch during the meetup
        and as a VOD on Youtube afterwards, so only show up if you don't mind
        being broadcast.
      </p>
      <p>
        <strong>Conduct</strong> will have to abide by our{" "}
        <em>yet-to-be-written</em> code, which will be available before the
        first meetup.
      </p>
    </main>
  );
}
