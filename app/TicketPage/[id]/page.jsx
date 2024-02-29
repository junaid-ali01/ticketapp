import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get ticket");
  }
  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let UpdateTicketData = {};

  if (EDITMODE) {
    UpdateTicketData = await getTicketById(params.id);
    // console.log(UpdateTicketData);
    UpdateTicketData = UpdateTicketData.foundTicket;
  } else {
    UpdateTicketData = {
      _id: "new",
    };
  }
  return (
    <div>
      <TicketForm ticket={UpdateTicketData} />
    </div>
  );
};

export default TicketPage;
