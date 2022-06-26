import Link from "next/link";
import React from "react";
import styles from "./sign-in.module.css";

export const SignIn: React.FC = () => {
  return (
    <>
      <div id={styles.container}>
        <div id={styles.title}>
          <p className="font-semibold text-5xl py-3">Sign In</p>
          <p className="pb-3">Sign in to continue with Smarter!</p>
        </div>
        <form id={styles.signInForm}>
          <input
            className={styles.textBox}
            type="email"
            placeholder="Your email"
          />
          <br />
          <input
            className={styles.textBox}
            type="password"
            placeholder="Your password"
          />
          <br />
          <input id={styles.btnSubmit} type="submit" />
        </form>
        <hr />
        <div id={styles.otherActions}>
          <p className="text-xl font-bold text-gray-400">
            <Link href="#">Forgot password?</Link>
          </p>
          <p className="text-xl">
            Do not have an account?{" "}
            <span className="text-blue font-bold">
              <Link href="#">Sign Up!</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
