import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"



describe("Contact page test suit", ()=>{

    it("Contact page loading ", ()=>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    })
    
    it("IS button there inside Contact page", ()=>{
    
        render(<Contact/>);
    

        const button = screen.getByText("submit");
        expect(button).toBeInTheDocument();
    
    })

    it("IS button there inside Placeholder ", ()=>{
    
        render(<Contact/>);
        const placeholder = screen.getByPlaceholderText("name");
        expect(placeholder).toBeInTheDocument();
    
    })

    it("Is two input boxes there", ()=>{
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox"); 
        // inputBoxes is basically virtual dom react element
        expect(inputBoxes.length).toBe(2);
    })

})
