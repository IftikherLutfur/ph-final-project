import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import AxiosSecure from "../../../Hooks/AxiosSecure";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING ;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItems = () => {
 
    const data = useLoaderData();
    const {_id} = data;

    const axiosPublic = UseAxiosPublic();
    const secureAxios = AxiosSecure();

    const { register, handleSubmit,reset} = useForm();
    const onSubmit = async (data) => {
        console.log(data);
    
        const imageFile = {image: data.image [0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile , {
            headers: {
                "content-type" : "multipart/form-data"
            }
        });
        console.log(res.data);
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menu = await secureAxios.patch(`/menu/${_id}`, menuItem)
             console.log(menu.data)
             if(menu.data.matchedCount){
                 toast.success(`${data.name} is updated to the menu`)
                reset();
             }
        }
    
    }


    return (
        <div>
       <SectionTitle heading={'update an item'} subHeading={'---Refresh Item---'}/>

       <div className="mx-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full ">
                        <div className="div">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            {...register("name",  {required:true})}
                            type="text" placeholder="Recipe" defaultValue={data.name} className="input input-bordered w-full " />

                    </div>


                 <div className="grid grid-cols-2 items-center gap-5">
                 <div>
                    <label>Category*</label>
                  <select defaultValue={data.category} {...register('category', {required:true})}
                        className="select select-warning w-full ">
                        <option disabled selected>Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="desert">Desert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                  </div>

                   <div className="form-control w-full my-5 ">
                        <div className="div">
                            <span className="label-text">Price*</span>
                        </div>
                        <input
                            {...register("price" , {required:true})}
                            type="text" placeholder="Price" defaultValue={data.price} className="input input-bordered w-full " />

                    </div>
                 </div>

                 {/* Item details */}
                <div>
                    <label>Recipe Details*</label>
                <textarea defaultValue={data.recipe} {...register('recipe',  {required:true})} className="textarea textarea-bordered w-full h-32"  placeholder="Bio"></textarea>
                </div>

                <div className="my-3">
                <input {...register('image' , {required:true})} type="file" className="file-input bg-white file-input-bordered w-full max-w-xs" />
                </div>
                    <button className="btn w-full bg-orange-400 text-white">Update</button>
                    <Toaster/>
                </form>

            </div>            
        </div>
    );
};

export default UpdateItems;