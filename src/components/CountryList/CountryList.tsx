import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import TableSortLabel from "@mui/material/TableSortLabel";

import _ from "lodash";
import { fetchAllCountries, addCountryToCart } from "../../redux/actions";
import { AppState } from "../../types";
import CountryCard from "../CountryCard/CountryCard";

// Country list with pagination and sorting
const CountryList = () => {
  //get all countries from redux state
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  );
  const isLoading = useSelector(
    (state: AppState) => state.countryReducer.isLoading
  );
  //cart state
  const cart = useSelector((state: AppState) => state.cartReducer.cart);

  // for filtered countries
  const [filteredCountries, setFilteredCountries] = React.useState(countries);

  // for sorted countries
  const [sortedCountries, setSortedCountries] = React.useState(countries);

  React.useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  //filter country by keyword
  const searchKeyword = useSelector(
    (state: AppState) => state.uiReducer.searchKeyWord
  );
  React.useEffect(() => {
    if (countries.length) {
      const _tempCountries = countries.filter((country) =>
        country.name
          .toString()
          .toLowerCase()
          .includes(searchKeyword?.toString().toLowerCase())
      ) as [];
      setFilteredCountries(_tempCountries);
    }
    // eslint-disable-next-line
  }, [searchKeyword, countries]);

  //Sorting related
  type Order = "asc" | "desc";
  const [sortBy, setSortBy] = React.useState("name");
  const [order, setOrder] = React.useState<Order>("asc");

  React.useEffect(() => {
    const tempSorted = _.orderBy(filteredCountries, [sortBy], [order]) as [];
    setSortedCountries(tempSorted);
    // eslint-disable-next-line
  }, [order, filteredCountries]);

  //handle sort
  const handleSort = (coll: string) => {
    coll === "languages" ? setSortBy("languages[0].name") : setSortBy(coll);
    const isAsc = order === "asc";
    setOrder(isAsc ? "desc" : "asc");
  };

  //initialize dispatch
  const dispatch = useDispatch();

  //dispatch fetchAllCountries when page loads
  React.useEffect(() => {
    dispatch(fetchAllCountries() as any);
  }, [dispatch]);

  //pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);

    setPage(0);
  };

  return (
    <div className="country-list">
      {/* country lists */}
      {isLoading && <h2>Loading...</h2>}
      <div className="country-list__cards">
        <Paper style={{ background: "transparent", borderRadius: "15px" }}>
          <TableContainer style={{ background: "transparent" }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{
                background: "rgba(255, 255, 255, 0.3)",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              <TableHead
                style={{
                  background: "transparent",
                  borderRadius: "15px",
                }}
              >
                <TableRow
                  style={{
                    background: "transparent",
                    borderRadius: "15px",
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{ width: "20%" }}
                    style={{
                      background: "rgba(255, 255, 255, 0.3)",
                      borderTopLeftRadius: "15px",
                    }}
                  >
                    Flag
                  </TableCell>
                  <TableCell
                    style={{ background: "rgba(255, 255, 255, 0.3)" }}
                    key="name"
                    align="center"
                    padding="none"
                    sortDirection={sortBy === "name" ? order : false}
                    sx={{ width: "20%" }}
                  >
                    <TableSortLabel
                      active={sortBy === "name"}
                      direction={sortBy === "name" ? order : "asc"}
                      onClick={() => handleSort("name")}
                    >
                      Name
                      {sortBy === "name" ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    style={{ background: "rgba(255, 255, 255, 0.3)" }}
                    key="population"
                    align="center"
                    padding="none"
                    sortDirection={sortBy === "population" ? order : false}
                    sx={{ width: "20%" }}
                  >
                    <TableSortLabel
                      active={sortBy === "population"}
                      direction={sortBy === "population" ? order : "asc"}
                      onClick={() => handleSort("population")}
                    >
                      Population
                      {sortBy === "population" ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    style={{ background: "rgba(255, 255, 255, 0.3)" }}
                    key="region"
                    align="center"
                    padding="none"
                    sortDirection={sortBy === "region" ? order : false}
                    sx={{ width: "10%" }}
                  >
                    <TableSortLabel
                      active={sortBy === "region"}
                      direction={sortBy === "region" ? order : "asc"}
                      onClick={() => handleSort("region")}
                    >
                      Region
                      {sortBy === "region" ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    style={{ background: "rgba(255, 255, 255, 0.3)" }}
                    key="languages"
                    align="center"
                    padding="none"
                    sortDirection={sortBy === "languages" ? order : false}
                    sx={{ width: "20%" }}
                  >
                    <TableSortLabel
                      active={sortBy === "languages"}
                      direction={sortBy === "languages" ? order : "asc"}
                      onClick={() => handleSort("languages")}
                    >
                      Language(s)
                      {sortBy === "languages" ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ width: "10%" }}
                    style={{
                      background: "rgba(255, 255, 255, 0.3)",
                      borderTopRightRadius: "15px",
                    }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!isLoading &&
                  sortedCountries
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((country) => (
                      <CountryCard
                        key={country.name + new Date()}
                        {...country}
                        onClick={() => dispatch(addCountryToCart(country))}
                        disabled={cart.includes(country)}
                      />
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={sortedCountries.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default CountryList;
