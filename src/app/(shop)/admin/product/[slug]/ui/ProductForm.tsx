"use client";

import {useForm} from "react-hook-form";
import clsx from "clsx";
import {useRouter} from "next/navigation";
import {ICategory, ICategoryWithId, IProduct, IProductImage} from "@/interfaces";
import {createUpdateProduct, deleteProductImage} from "@/actions";
import {ProductImage} from "@/components";

interface Props {
  product: Partial<IProduct> & { ProductImage?: IProductImage[] };
  categories: ICategoryWithId[];
}

interface IFormInputs {
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  sizes: string[];
  tags: string;
  gender: ICategory;
  categoryId: string;
  images?: FileList;
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const ProductForm = ({product, categories}: Props) => {
  const router = useRouter();
  const {handleSubmit, register, formState: {isValid}, getValues, setValue, watch} = useForm<IFormInputs>(
    {
      defaultValues: {
        ...product,
        tags: product.tags?.join(", "),
        sizes: product.sizes ?? [],
        images: undefined
      }
    }
  );
  watch("sizes");

  const onSizeChanged = (size: string) => {
    const sizes = new Set(getValues("sizes"));
    sizes.has(size) ? sizes.delete(size) : sizes.add(size);
    setValue("sizes", Array.from(sizes));
  }

  const onSubmit = async (data: IFormInputs) => {
    const formData = new FormData();
    const {images, ...productToSave} = data;
    if (product.id) formData.append("id", product.id);
    formData.append("title", productToSave.title);
    formData.append("slug", productToSave.slug);
    formData.append("description", productToSave.description);
    formData.append("price", productToSave.price.toString());
    formData.append("inStock", productToSave.inStock.toString());
    formData.append("sizes", productToSave.sizes.toString());
    formData.append("tags", productToSave.tags);
    formData.append("categoryId", productToSave.categoryId);
    formData.append("gender", productToSave.gender);
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }

    const {ok, product: updatedProduct} = await createUpdateProduct(formData);
    console.log(ok, updatedProduct);
    if (!ok || !updatedProduct) return;
    router.replace(`/product/${updatedProduct.slug}`);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3">
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Title</span>
          <input type="text"
                 className="p-2 border rounded-md bg-gray-200 text-black" {...register("title", {required: true})}/>
        </div>

        <div className="flex flex-col mb-2">
          <span>Slug</span>
          <input type="text"
                 className="p-2 border rounded-md bg-gray-200 text-black" {...register("slug", {required: true})}/>
        </div>

        <div className="flex flex-col mb-2">
          <span>Description</span>
          <textarea
            rows={5}
            className="p-2 border rounded-md bg-gray-200 text-black"
            {...register("description", {required: true})}
          ></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>Price</span>
          <input type="number" className="p-2 border rounded-md bg-gray-200 text-black" {...register("price", {
            required: true,
            min: 0
          })}/>
        </div>

        <div className="flex flex-col mb-2">
          <span>Tags</span>
          <input type="text"
                 className="p-2 border rounded-md bg-gray-200 text-black" {...register("tags", {required: true})}/>
        </div>

        <div className="flex flex-col mb-2">
          <span>Gender</span>
          <select className="p-2 border rounded-md bg-gray-200 text-black"  {...register("gender", {required: true})}>
            <option value="">[Select]</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Category</span>
          <select
            className="p-2 border rounded-md bg-gray-200 text-black"  {...register("categoryId", {required: true})}>
            <option value="">[Select]</option>
            {
              categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))
            }
          </select>
        </div>

        <button type={"submit"} className="btn-primary w-full">
          Save
        </button>
      </div>

      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Inventory</span>
          <input type="number" className="p-2 border rounded-md bg-gray-200 text-black" {...register("inStock", {
            required: true,
            min: 0
          })}/>
        </div>
        <div className="flex flex-col">

          <span>Sizes</span>
          <div className="flex flex-wrap">
            {
              sizes.map(size => (
                <div key={size}
                     onClick={() => onSizeChanged(size)}
                     className={
                       clsx("p-2 border rounded-md mr-2 mb-2 cursor-pointer w-14 transition-all text-center", {
                         "bg-blue-500 text-white": getValues("sizes").includes(size)
                       })
                     }>
                  <span>{size}</span>
                </div>
              ))
            }
          </div>

          <div className="flex flex-col mb-2">
            <span>Pictures</span>
            <input
              type="file"
              {...register("images")}
              multiple
              className="p-2 border rounded-md bg-gray-200 text-black"
              accept="image/png, image/jpeg, image/avif"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {
              product.ProductImage?.map((image => (
                <div key={image.id}>
                  <ProductImage src={image.url} width={300} height={300} alt={product.title ?? ""}
                                className={"rounded-t shadow-md"}/>
                  <button type={"button"} onClick={() => deleteProductImage(image.id, image.url)}
                          className={"btn-danger rounded-b-xl"}>Delete
                  </button>
                </div>
              )))
            }
          </div>

        </div>
      </div>
    </form>
  );
};