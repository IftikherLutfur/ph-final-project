
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center mx-[450px] space-y-3 my-10">
            <p className="text-orange-400">{subHeading}</p>
            <h1 className="text-3xl uppercase font-semibold border-y-4 py-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;