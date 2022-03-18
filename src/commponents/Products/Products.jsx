import React from "react";
import { Grid } from "@material-ui/core";

import Product from './Product/Product';
import useStyles from '../Products/styles';

// const products=[
//     {id : 1, name : 'Shoes', description : 'Running shoes.', price : '$5',image : 'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg' },
//     {id : 2, name : 'Macbook', description : 'Apple macbook.',price : '$10',image : 'https://cdn.vox-cdn.com/thumbor/vGTTyiMMUHIHLs0FjoF0z99m6_E=/0x0:2040x1360/1200x800/filters:focal(895x304:1221x630)/cdn.vox-cdn.com/uploads/chorus_image/image/68592461/vpavic_4291_20201113_0366.0.0.jpg' },
// ];

const Products =({ products , onAddToCart})=> {
    const classes=useStyles();
    return(
       
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))

            }

        </Grid>
    </main>
    )
   


}
export default Products;