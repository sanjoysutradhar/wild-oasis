// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
// import Button from "../ui/Button";
// import { useState } from "react";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";
function Cabins() {
  // useEffect(() => {
  //   getCabins().then((data) => console.log(data));
  // }, []);
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* <p>Filter/Sort</p> */}
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
        {/* <Button onClick={() => setShowForm((show) => !show)}>
          Add new Cabin
        </Button>
        {showForm && <CreateCabinForm />} */}
      </Row>
    </>
  );
}

export default Cabins;
