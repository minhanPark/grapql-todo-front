import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const isDarkModeVar = makeVar(!!localStorage.getItem("isDarkMode"));

const toggleDarkMode = () => {
  const isDarkMode = !!localStorage.getItem("isDarkMode");
  if (isDarkMode) {
    localStorage.removeItem("isDarkMode");
    isDarkModeVar(false);
  } else {
    localStorage.setItem("isDarkMode", "true");
    isDarkModeVar(true);
  }
};

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export { client, isDarkModeVar, toggleDarkMode };
