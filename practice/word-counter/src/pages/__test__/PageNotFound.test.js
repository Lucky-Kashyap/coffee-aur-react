import { render,screen } from "@testing-library/react"
import PageNotFound from "../PageNotFound"

describe('Test PageNotFound Component',()=>{
    test('render text & Image',()=>{
        render(<PageNotFound/>);
        const page = screen.getByTestId('pnfText');

        expect(page.innerHTML).toBe('Oops - Page Not Found!');
    })
})