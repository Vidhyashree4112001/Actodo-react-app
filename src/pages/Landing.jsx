import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";

function Landing() {
    const data = useLocation()
    console.log(data.state.user);

  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header username={data.state.user} />
        {/* Card */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"March 11"} subtitle={"21:51:06"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />


        </div>
        {/*TodoContainer*/}
        <TodoContainer />


      </div>
    </div>

    

  )
}

export default Landing;
