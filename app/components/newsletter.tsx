import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { useEffect, useRef } from "react";
import type { ActionFunction } from "@remix-run/node";
import { Form, Link, useActionData, useTransition } from "@remix-run/react";
import styles from "~/styles/newsletter.css";

export function newsletterLinks() {
  return [{ rel: "stylesheet", href: styles }];
}

export const newsletterAction: ActionFunction = async ({ request }) => {
  dotenv.config();
  await new Promise((res) => setTimeout(res, 1000));
  const formData = await request.formData();
  const email = formData.get("email");

  const API_KEY = process.env.CONVERTKIT_API_KEY;
  const FORM_ID = "3848035";
  const API = "https://api.convertkit.com/v3";

  const res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: "post",
    body: JSON.stringify({ email, api_key: API_KEY }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  return res.json();
};

export function Newsletter() {
  const actionData = useActionData();
  const transition = useTransition();
  const state: "idle" | "success" | "error" | "submitting" =
    transition.submission
      ? "submitting"
      : actionData?.subscription
      ? "success"
      : actionData?.error
      ? "error"
      : "idle";

  const inputRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (state === "error") {
      inputRef.current?.focus();
    }

    if (state === "success") {
      successRef.current?.focus();
    }

    mounted.current = true;
  }, [state]);

  return (
    <>
      <Form replace method="post" aria-hidden={state === "success"}>
        <h2>Sign up to stay informed</h2>
        <p>Don't miss out once we get underway in early 2023!</p>
        <fieldset>
          <input
            aria-label="Email address"
            aria-describedby="error-message"
            ref={inputRef}
            type="email"
            name="email"
            placeholder="you@example.com"
          />
          <button type="submit">
            {state === "submitting" ? "Subscribing..." : "Subscribe"}
          </button>
        </fieldset>
        <p>
          <small>
            We will use the information you provide in this form to be in touch
            with you and provide updates about the community. We will send you
            occasional emails about new events, links to videos, and important
            updates to keep you in the loop. By clicking above to submit this
            form, you acknowledge that the information you provide wíll be
            processed in accordance with our{" "}
            <a
              href="https://www.iubenda.com/privacy-policy/84514908"
              className="iubenda-white iubenda-noiframe iubenda-embed iub-legal-only iubenda-noiframe "
              title="Privacy Policy "
            >
              Privacy Policy
            </a>
          </small>
        </p>

        <p id="error-message">
          {state === "error" ? actionData.message : <>&nbsp;</>}
        </p>
      </Form>

      <div hidden={state !== "success"}>
        <h2 ref={successRef} tabIndex={-1}>
          You're subscribed!
        </h2>
        <p>Please check your email to confirm your subscription.</p>
        <Link to=".">Start over</Link>
      </div>
    </>
  );
}
