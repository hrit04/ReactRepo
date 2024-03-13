import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"



describe("Contact page test suit", ()=>{

    test("Contact page loading ", ()=>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    })
    
    test("IS button there inside Contact page", ()=>{
    
        render(<Contact/>);
    

        const button = screen.getByText("submit");
        expect(button).toBeInTheDocument();
    
    })

    test("IS button there inside Placeholder ", ()=>{
    
        render(<Contact/>);
        const placeholder = screen.getByPlaceholderText("name");
        expect(placeholder).toBeInTheDocument();
    
    })

    test("Is two input boxes there", ()=>{
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox"); 
        // inputBoxes is basically virtual dom react element
        expect(inputBoxes.length).toBe(2);
    })

})
