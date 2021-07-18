import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form001, { Form001_Url } from "../forms/Form001";
import Form002, { Form002_Url } from "../forms/Form002";
import Form003, { Form003_Url } from "../forms/Form003";
import Form004, { Form004_Url } from "../forms/Form004";
import Form005, { Form005_Url } from "../forms/Form005";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={['/',  Form001_Url]} component={Form001} />
        <Route exact={true} path={Form002_Url} component={Form002} />

        <Route exact={true} path={Form003_Url} component={Form003} />
        <Route exact={true} path={Form004_Url} component={Form004} />
        <Route  path={['*',  Form005_Url]}   component={Form005} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rutas;
