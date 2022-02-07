import React from "react";
import { AppRouter } from "./router/app.router";
import { hot } from 'react-hot-loader/root';
import CssBaseline from '@mui/material/CssBaseline';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppRouter />
    </>
  );
};

export default hot(App);
