import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { addToCart } from "../../slices/add-Cart/addCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../slices/add-Cart/products/products";
import { ToastContainer, toast } from 'react-toastify';
// import top100Films from './top100Films';

const Products = () => {
  const [product, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  const navigate = useNavigate();

  const {isToast} = useSelector ((state) => state.products)

  const dispatch = useDispatch();


  useEffect(()=>{
    if(isToast){
      toast("Products already added")
    }
  }, [isToast])
  

  useEffect(() => {
    const fstchproducts = async () => {
      try {
        setIsLoading(true);
        const productData = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(productData?.data);
        if (productData.status === 200) {
          setIsLoading(false);
          setProducts(productData.data);
          setAllProducts(productData.data);

          const filterCategories = productData?.data.map((product) => {
            return {
              label: product?.category.toUpperCase(),
              value: product?.category,
            };
          });
          const unqueCategories = filterCategories.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.value === item.value)
          );

          setCategoryOptions(unqueCategories);
        } else {
          setIsLoading(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fstchproducts();
  }, []);

  useEffect(() => {
    let filteredProducts = allProducts.filter(
      (product) => product?.category === categoryFilter?.value
    );
    setProducts(filteredProducts);
    console.log(filteredProducts, "filteredProducts");
  }, [categoryFilter]);

  return (
    <>
     <ToastContainer />  
      <Container className="mb-5">
        <Box className="d-flex justify-content-end">
          <Autocomplete
            size="small"
            disablePortal
            sx={{ width: 300, marginTop: 5 }}
            onChange={(e, newValue) => {
              setCategoryFilter(newValue);
            }}
            options={categoryOptions}
            renderInput={(params) => (
              <TextField {...params} label="Categories" />
            )}
          />
        </Box>

        {isloading ? (
          <Box className="text-center mt-5">
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <Grid container>
            {product?.map((product, index) => {
              
              return (
                <Grid xs={12} md={3}>
                  <Card
                    key={index}
                    sx={{
                      padding: "10px",
                      cursor: "pointer",
                      width: "230px",
                      minHeight: "250px",
                      border: "1px solid red",
                      marginTop: "20px",
                    }}
                  >
                    <Box>
                      <Box sx={{ textAlign: "center" }}>
                        <img className="img-fluid"
                          style={{
                            maxHeight: "140px",
                            minHeight: "140px",
                            marginTop: "20px",
                          }}
                          src={product.image}
                          alt={product.name}
                        />
                      </Box>
                      <Tooltip title={product?.title} placement="top">
                        <Typography
                          className="mt-4"
                          sx={{ textAlign: "center" }}
                          variant="h6"
                        >
                          {product?.title?.length >= 21
                            ? product?.title.slice(0, 16)
                            : product?.title}
                        </Typography>
                      </Tooltip>
                      <Divider
                        sx={{ borderColor: "#333" }}
                        variant="fullwidth"
                        flexItem
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "10px",
                        }}
                      >
                        <Tooltip title="Products Details">
                          <VisibilityIcon
                            onClick={() => {
                              navigate(`/Products-Details/${product?.id}`);
                            }}
                          />
                        </Tooltip>
                        <FavoriteIcon />
                        <AddShoppingCartIcon
                          onClick={() => dispatch(addProducts( product ))}
                        />
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Products;
