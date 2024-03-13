import Header from "../Header";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";




describe("Header Component test suit", () => {

    it("Should load header component with a login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>);
        const login = screen.getByText("Login");
        expect(login).toBeInTheDocument();
    })

    it("Should cart items is zero", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>);
        const cartItems = screen.getByText("Cart 0 items");
        expect(cartItems).toBeInTheDocument();
    })


    it("Should click login", () => {
        render(
              <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>);
        const cartItems = screen.getByRole("button",);
        expect(cartItems).toBeInTheDocument();
    })
})