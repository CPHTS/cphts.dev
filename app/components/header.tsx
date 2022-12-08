import { useEffect, useState } from "react";
import styles from "~/styles/header.css";

export function headerLinks() {
  return [{ rel: "stylesheet", href: styles }];
}

const messages = [
  { ype: "ype", cript: "cript" },
  { ype: "hunder", cript: "torms" },
  { ype: "-", cript: "hirts" },
  { ype: "hermo", cript: "ocks" },
  { ype: "ennis", cript: "hoes" },
  { ype: "rack", cript: "uits" },
  { ype: "ime", cript: "eries" },
  { ype: "ext", cript: "izes" },
  { ype: "heme", cript: "ongs" },
  { ype: "ea", cript: "hops" },
  { ype: "arget", cript: "egments" },
  { ype: "icket", cript: "tubs" },
  { ype: "ax", cript: "helters" },
  { ype: "rade", cript: "ecrets" },
];

export function Header() {
  const [index, setIndex] = useState(0);
  const randomizeMessage = () =>
    setIndex((i) => {
      const next = Math.floor(Math.random() * (messages.length - 1));
      return next >= i ? next + 1 : next;
    });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const showAll = () => {
      document.documentElement.style.setProperty(
        "--highlight",
        "var(--highlight-color)"
      );
      clearTimeout(timeout);
      timeout = setTimeout(hideAll, 300);
    };
    const hideAll = () => {
      clearTimeout(timeout);
      document.documentElement.style.setProperty("--highlight", "transparent");
    };
    document.documentElement.addEventListener("touchstart", showAll);
    document.documentElement.addEventListener("mousemove", showAll);
    document.documentElement.addEventListener("scroll", showAll);
    return () => {
      document.documentElement.removeEventListener("touchstart", showAll);
      document.documentElement.removeEventListener("mousemove", showAll);
      document.documentElement.removeEventListener("scroll", showAll);
    };
  }, []);
  return (
    <h1 onClick={randomizeMessage}>
      C<em>o</em>P<em>en</em>H<em>agen</em>
      <br />T<em>{messages[index].ype}</em>S<em>{messages[index].cript}</em>
    </h1>
  );
}
