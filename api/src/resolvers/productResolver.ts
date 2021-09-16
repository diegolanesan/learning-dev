import { Resolver, Query, Mutation,Arg, Field, InputType, Int } from "type-graphql";
import { Product } from "../entity/product";


@InputType()
class ProductIntput {
    @Field()
    name!: string;

    @Field()
    quantity!: number;
}


@Resolver()
export class ProductResolver {

    // creacion de un producto
    @Mutation(()=> Product)
    async createProduct(
       @Arg("variables", ()=> ProductIntput) variables : ProductIntput
    ){
        const newProduct = Product.create(variables);
        return await  newProduct.save()
       
    }

    @Mutation(()=> Boolean)
    async deleteProduct(
        @Arg("id", ()=> Int) id: number
        ){
        await  Product.delete(id)
        return true;
    }

    @Mutation(()=> Boolean)
    async updateProduct(
        @Arg("id", ()=> Int) id: number,
        @Arg("fields", ()=> ProductIntput) fields: ProductIntput,
    ){
        await Product.update(id, fields)
        return true
    }

    @Query(()=>[Product])
    products(){
        return Product.find()
    }
}