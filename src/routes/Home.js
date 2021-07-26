import React from 'react';
import fh4Cars from '../fh4Cars.json';
import {
  Typography,
  Container,
  Paper,
  Tabs,
  Tab,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
} from '@material-ui/core';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="right"
      style={{ marginTop: 10 }}
    >
      {'Copyright © '}
      <a color="inherit" href="http://rankin.co.kr/">
        Rankin
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const columns = [
  { id: 'class', label: '클래스', minWidth: 100 },
  { id: 'img', label: '이미지', minWidth: 160 },
  { id: 'name', label: '이름', minWidth: 170 },
  { id: 'year', label: '연식', minWidth: 80 },
  { id: 'price', label: 'CR', minWidth: 130 },
  { id: 'speed', label: '속도', minWidth: 100 },
  { id: 'handling', label: '핸들링', minWidth: 100 },
  { id: 'acceleration', label: '가속', minWidth: 100 },
  { id: 'launch', label: '출발가속', minWidth: 100 },
  { id: 'braking', label: '브레이크', minWidth: 100 },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class Home extends React.Component {
  state = {
    isLoading: true,
    value: 0,
    select: fh4Cars,
  };

  constructor(props) {
    super(props);
    this.tRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      select: fh4Cars.filter((car) => {
        return car.class === 'S2';
      }),
    });
    this.setState({ isLoading: false });
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
    console.log(newValue);
    if (newValue === 0) {
      this.setState({
        select: fh4Cars.filter((car) => {
          return car.class === 'S2';
        }),
      });
    } else if (newValue === 1) {
      this.setState({
        select: fh4Cars.filter((car) => {
          return car.class === 'S1';
        }),
      });
    } else if (newValue === 2) {
      this.setState({
        select: fh4Cars.filter((car) => {
          return car.class === 'A';
        }),
      });
    } else if (newValue === 3) {
      this.setState({
        select: fh4Cars.filter((car) => {
          return car.class === 'B';
        }),
      });
    } else if (newValue === 4) {
      this.setState({
        select: fh4Cars.filter((car) => {
          return car.class === 'C';
        }),
      });
    } else {
      this.setState({
        select: fh4Cars.filter((car) => {
          return car.class === 'D';
        }),
      });
    }
    this.tRef.current.scrollTop = 0;
  };

  render() {
    const { isLoading } = this.state;
    return (
      <Container>
        <Paper square>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="chose car class tab"
          >
            <Tab label="S2" />
            <Tab label="S1" />
            <Tab label="A" />
            <Tab label="B" />
            <Tab label="C" />
            <Tab label="D" />
          </Tabs>
        </Paper>

        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <Paper>
            <TableContainer style={{ maxHeight: 860 }} ref={this.tRef}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align="center"
                        style={{
                          minWidth: column.minWidth,
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody id="table__body">
                  {this.state.select.map((car) => {
                    return (
                      <StyledTableRow key={car.name + car.year}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          <span className={'pi ' + car.class}>
                            <i>{car.class}</i>
                            <b>{car.rating}</b>
                          </span>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <img
                            src={car.img}
                            alt={car.name}
                            title={car.name}
                            style={{ maxWidth: 180 }}
                          />
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {car.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {car.year}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {car.price}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {car.speed}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {car.hdl}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {car.acc}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {car.launch}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {car.breaking}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        )}
        <Copyright />
      </Container>
    );
  }
}

export default Home;
