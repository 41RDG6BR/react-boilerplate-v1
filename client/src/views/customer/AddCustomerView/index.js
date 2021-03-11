import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import CustomerProfile from './CustomerProfile';
import CustomerProfileDetails from './CustomerProfileDetails';
import axios from '../../../services/CustomerService';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Customer = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Customer"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <CustomerProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <CustomerProfileDetails axios={axios} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Customer;
