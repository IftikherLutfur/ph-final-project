import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import AxiosSecure from '../../../Hooks/AxiosSecure'
import toast, { Toaster } from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING ;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    
    const { register, handleSubmit, reset} = useForm()
    const axiosPublic = UseAxiosPublic();
    const secureAxios = AxiosSecure()
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
                image: res.data.display_url
            }
            const menu = await secureAxios.post('/menu', menuItem)
             console.log(menu.data)
             if(menu.data.insertedId){
                 toast.success(`${data.name} is added`)
                reset();
             }
        }
    }
    return (
        <div className="my-5 bg-slate-100 mx-10 py-3">
        
            <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>

            <div className="mx-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full ">
                        <div className="div">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            {...register("name",  {required:true})}
                            type="text" placeholder="Recipe" className="input input-bordered w-full " />

                    </div>


                 <div className="grid grid-cols-2 items-center gap-5">
                 <div>
                    <label>Category*</label>
                  <select {...register('category', {required:true})}
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
                            type="text" placeholder="Price" className="input input-bordered w-full " />

                    </div>
                 </div>

                 {/* Item details */}
                <div>
                    <label>Recipe Details*</label>
                <textarea {...register('recipe',  {required:true})} className="textarea textarea-bordered w-full h-32" placeholder="Bio"></textarea>
                </div>
                <div className="my-3">
                <input {...register('image' , {required:true})} type="file" className="file-input bg-white file-input-bordered w-full max-w-xs" />
                </div>

                    <button className="btn bg-yellow-600">Add Item <FaUtensils/></button>
                    <Toaster/>
                </form>

            </div>
        </div>
    );
};

export default AddItems;