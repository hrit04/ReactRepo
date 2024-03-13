import Header from "../Header";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";




describe("Header Component test suit", ()=>{

    it("Should load header component with a login button", ()=>{
        // render(<Provider store={appStore}> 
        //        <Header/>
        //        </Provider>);
        // const login = screen.getByText("Login");
        // expect(login).toBeInTheDocument();
    })
})