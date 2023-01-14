import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Country } from "../../types";
import { v4 as uuidv4 } from "uuid";
import "../../styles/countrycard.css";

interface CountryCardProps extends Partial<Country> {
  onClick: Function;
  disabled: boolean;
}
const CountryCard = ({
  flags,
  name,
  nativeName,
  population,
  onClick,
  region,
  languages,
  disabled,
}: CountryCardProps) => {
  return (
    <TableRow key={uuidv4()}>
      <TableCell align="center" className="listImg">
        <Link to={`/${name}`}>
          <img src={flags?.png} alt={name} />
        </Link>
      </TableCell>
      <TableCell align="center" key={name + uuidv4()}>
        <Link to={`/${name}`}>{name}</Link>
      </TableCell>
      <TableCell align="center" key={population + uuidv4()}>
        <p>{population?.toLocaleString("en")}</p>
      </TableCell>
      <TableCell align="center" key={region + uuidv4()}>
        {region}
      </TableCell>
      <TableCell
        align="center"
        key={languages ? languages[0].name + uuidv4() : uuidv4()}
      >
        {languages?.map((lang) => (
          <p key={lang?.name + uuidv4()}>{lang?.name}</p>
        ))}
      </TableCell>
      <TableCell align="center">
        <Button
          disabled={disabled}
          className="btn btn__primary"
          onClick={() => onClick()}
        >
          Add to favorite
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CountryCard;
