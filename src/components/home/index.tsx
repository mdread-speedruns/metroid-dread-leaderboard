import type { NextPage } from "next";
export const Home: NextPage = () => {
  return (
    <main
      css={{
        minHeight: "100vh",
        padding: "4rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h1
        css={{
          margin: "0",
          lineHeight: "1.15",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Welcome to Metroid Dread Leaderboard!
      </h1>

      <p
        css={{
          margin: "2rem 0",
          lineHeight: "1.5",
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        This is a simple leaderboard for Metroid Dread.
      </p>
    </main>
  );
};
