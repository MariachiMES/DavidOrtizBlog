import React from "react";
import { Button, Alignment, Navbar } from "@blueprintjs/core";

export default function Navigation() {
  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>David Ortiz: Web Developer</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Résumé" />
        </Navbar.Group>
      </Navbar>
      <Button intent="success" text="button content" />
    </div>
  );
}
