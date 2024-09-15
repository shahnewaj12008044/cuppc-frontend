import FormfacadeEmbed from "@formfacade/embed-react";

const JoinClub = () => {
  return (
    <div className="my-container h-full">
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/103709156760937366400/form/1FAIpQLSdLVskPbPyLOnIu5sQXNUKLQucvkgAwDBwzG_hfMARjll9Ojg/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default JoinClub;
