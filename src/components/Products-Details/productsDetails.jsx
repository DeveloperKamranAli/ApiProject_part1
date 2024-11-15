import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const [ProductsDetails, setProductsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const param = useParams();
  console.log(ProductsDetails, "ProductsDetails");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${param?.product_id}`
        );
        setIsLoading(false);
        setProductsDetails(response.data);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Box className="text-center mt-5">
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Grid container spacing={3} className="container mt-5">
          <Grid md={6} className="text-center">
            <img
              className="img-fluid"
              width={300}
              src={ProductsDetails.image}
              alt=""
            />
          </Grid>
          <Grid md={6} className="pt-4">
            <Typography variant="body1">{ProductsDetails.category}</Typography>
            <Typography variant="h5">{ProductsDetails.title}</Typography>
            <Typography variant="body1">
              {ProductsDetails.description}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProductsDetails;
