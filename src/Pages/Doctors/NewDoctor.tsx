import React from "react";
import TitilePage from "../../components/TitilePage";
import AddDoctor from "../../components/Doctors/AddDoctor";

function NewDoctor() {
  return (
    <>
      {/* Gloabal Container */}
      <section>
        {/* Title */}
        <TitilePage>Add New Doctor</TitilePage>

        <AddDoctor/>
      </section>
    </>
  );
}

export default NewDoctor;
