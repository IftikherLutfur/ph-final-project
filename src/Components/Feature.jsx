import SectionTitle from "./SectionTitle/SectionTitle";
import featured from '../home/featured.jpg'

const Feature = () => {
    return (
        <div className="mt-5">
<section className="py-5 bg-fixed"  style={
    {backgroundImage: 'url(/src/home/featured.jpg)'}}>
<SectionTitle
subHeading={"---Check it out---"}
heading={"FROM OUR MENU"}
/>

<div className="flex mx-60 gap-5 items-center my-5">
    <div>
        <img className="" src={featured} alt="" />
    </div>
    <div className="text-black ">
    <p className="text-xl">March 20, 2023</p>
    <h1 className="text-2xl">WHERE CAN I GET SOME?</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
    </div>
</div>

    </section>            
        </div>
    );
};

export default Feature;