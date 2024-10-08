import styled from "styled-components";
// import { useState } from "react";

import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deleteCabin } from "../../services/apiCabins";
// import toast from "react-hot-toast";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function CabinRow({ cabin }) {
  // const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  // const queryClient = useQueryClient();
  // const { isPending: isDeleting, mutate } = useMutation({
  //   // mutationFn: (id) => deleteCabin(id),
  //   mutationFn: deleteCabin,

  //   onSuccess: () => {
  //     toast.success("Cabin Successfully deleted");
  //     queryClient.invalidateQueries({
  //       queryKey: ["cabins"],
  //     });
  //   },
  //   onError: (err) => toast.error(err.message),
  // });

  // function handleShowForm() {
  //   setShowForm((show) => !show);
  // }
  console.log(isCreating);

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <Table.Row columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Img src={image} alt={`Image of ${name}`} />
      <Cabin>{name}</Cabin>
      <div>Fit up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={() => handleDuplicate()}
                disabled={isCreating}
              >
                Duplicate
              </Menus.Button>
              <Modal.Open opens="cabin-edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="cabin-delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="cabin-edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="cabin-delete">
              <ConfirmDelete
                onConfirm={() => deleteCabin(cabinId)}
                resourceName={name}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
    // {showForm && (
    //   <CreateCabinForm cabinToEdit={cabin} onShowForm={handleShowForm} />
    // )}
  );
}

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    maxCapacity: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    discount: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default CabinRow;
