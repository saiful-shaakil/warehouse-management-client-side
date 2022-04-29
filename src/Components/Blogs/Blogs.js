import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div>
        <b>Question 1: Difference Between JavaScript and Node JS ?</b>
        <p>
          <b>Ans:</b> JavaScript is a simple programming language that runs in
          any browser JavaScript Engine. Whereas Node JS is an interpreter or
          running environment for a JavaScript programming language that holds
          many excesses, it requires libraries that can easily be accessed from
          JavaScript programming for better use.JavaScript running in any engine
          like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google
          Chrome). So JavaScript programming is very easy to write, and put any
          running environment means proper browser. Whereas Node JS only support
          the V8 engine, which googles chrome specific. But whether it supports
          the V8 engine, written JavaScript code can able to run in any
          environment. So there has no browser-specific constraint on it.
        </p>
      </div>
      <div className="mt-6">
        <b>
          Question 2: When should you use nodejs and when should you use mongodb
          ?
        </b>
        <p>
          <b>Ans:</b> I should you node js when I need to connect my website
          with backend server. Node js is easy to learn and use because anyone
          who knows JavaScript can you use nodejs easily. And I should use
          mongodb when I need to fetch my datan from a real backend site.
          Because that's the thing what makes a website dynamic.
        </p>
      </div>
      <div className="mt-6">
        <b>Question 3: Differences between sql and nosql databases ?</b>
        <p>
          <b>Ans:</b> SQL databases are relational, NoSQL databases are
          non-relational. SQL databases use structured query language and have a
          predefined schema. NoSQL databases have dynamic schemas for
          unstructured data. SQL databases are vertically scalable, while NoSQL
          databases are horizontally scalable. SQL databases are table-based,
          while NoSQL databases are document, key-value, graph, or wide-column
          stores. SQL databases are better for multi-row transactions, while
          NoSQL is better for unstructured data like documents or JSON.
        </p>
      </div>
      <div className="mt-6">
        <b>Question 4: What is the purpose of jwt and how does it work ?</b>
        <p>
          <b>Ans:</b> JWT, or JSON Web Token, is an open standard used to share
          security information between two parties — a client and a server. Each
          JWT contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.In short, JWTs are used as
          a secure way to authenticate users and share information. Typically, a
          private key, or secret, is used by the issuer to sign the JWT. The
          receiver of the JWT will verify the signature to ensure that the token
          hasn’t been altered after it was signed by the issuer. It is difficult
          for unauthenticated sources to guess the signing key and attempt to
          change the claims within the JWT.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
