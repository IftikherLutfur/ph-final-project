import chef from '../home/chef-service.jpg'
const ChefServe = () => {
    return (
        <div className='my-10'>
            <img src={chef} alt="" />
          <div className='text-center bg-slate-100 py-20 px-52 -mt-96 absolute border-2 mx-20'>
          <h1 className='text-5xl'><em className='uppercase'>Bistro Boss</em></h1>
          <p className='opacity-90 text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
    );
};

export default ChefServe;