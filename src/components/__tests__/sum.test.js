
import { sum } from "../test"


describe('test', ()=> {

    test("sum of two arg",()=>{
        const res = sum(2,3);
        expect(res).toBe(5);
    })

    test("sum of two arg",()=>{
        const res = sum(5,4);
        expect(res).toBe(9);
    })

})

  


