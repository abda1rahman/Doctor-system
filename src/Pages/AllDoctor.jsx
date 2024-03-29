import TitilePage from "../components/TitilePage";

function AllDoctor() {
  return (
    <section>
      <TitilePage>Doctor List</TitilePage>

      {/* Container */}
      <div className='flex-grow grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
        <div className='flex w-full h-72 bg-green-50'>card</div>
        <div className='flex w-full h-72 bg-green-50'>card</div>
        <div className='flex w-full h-72 bg-green-50'>card</div>
        <div className='flex w-full h-72 bg-green-50'>card</div>
        <div className='flex w-full h-72 bg-green-50'>card</div>
        <div className='flex w-full h-72 bg-green-50'>card</div>
        <div className='flex w-full h-72 bg-green-50'>card</div>
        <div className='flex w-full h-72 bg-green-50'>card</div>
        <div className='flex w-full h-72 bg-green-50'>card</div>
      </div>
    </section>
  );
}

export default AllDoctor;
