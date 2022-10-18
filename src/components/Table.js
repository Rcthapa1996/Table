import { DeleteModal } from "./DeleteModal";
export const columns = [
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
    width: 100
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    width: 150
  },
  {
    title: "Job Title",
    dataIndex: "JobTitle",
    key: "JobTitle",
    width: 150
  },
  {
    title: "Phone Number",
    dataIndex: "PhoneNumber",
    key: "PhoneNumber",
    render: (data) => (
      <>
        <DeleteModal data={data}/>
        {/* <span>{data}</span>
        <a href="#">Delete</a> */}
      </>
    )
  }
];

export const data = [
  {
    id: 1,
    Name: "Jillana Stovine",
    Email: "bstachini2z@nasa.gov",
    PhoneNumber: "(555) 343-8995"
  },
  {
    id: 2,
    Name: "Erinn Biggin",
    Email: "bhollyland3e@prnewswire.com",
    PhoneNumber: "(555) 258-1051"
  }
];
