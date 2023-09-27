const officeHours = () => {
  const hours = () => {
    const h3 = () => ({
      tagName: "h3",
      options: { innerHTML: "Hours" },
    });

    const h = [
      "Monday: 9am - 6pm",
      "Tuesday: 9am - 6pm",
      "Wednesday: 9am - 6pm",
      "Thursday: 9am - 6pm",
      "Friday: 9am - 6pm",
      "Saturday: 10am - 4pm",
      "Sunday: 10am - 1pm",

      "ONLINE DELIVERY AVAILABLE"
    ];

    const li = h.map((item) => ({
      tagName: "li",
      options: { 
        innerHTML: item,
        style: {
          marginBottom: "10px"
        }
      },
    }));

    const ul = () => ({
      tagName: "ul",
      children: li,
      options: {
        style: {
          listStyle: "none",
          margin: 0,
          padding: 0
        }
      }
    });

    return {
      tagName: "div",
      children: [h3(), ul()],
    };
  };

  const location = () => ({
    tagName: "div",
    options: {
      innerHTML: `
        <h3>Location</h3>
        <div>186 Old Town, Junction Road, Kakinada</div>
        `,
    },
  });

  return {
    tagName: "div",
    options: {
      classList: ["office-hours-section"],
      style: {
        backgroundColor: "#1f2937",
        color: "#e5e7eb",
        padding: "20px 150px",
        display: "flex",
        justifyContent: "space-between"
      }
    },
    children: [hours(), location()],
  };
};

export default officeHours;
