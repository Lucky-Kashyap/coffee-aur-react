import { render} from "@testing-library/react"
import PageNotFound from "../PageNotFound"
import { BrowserRouter } from "react-router-dom";

describe('Test PageNotFound Component',()=>{
    test('render text & Image',()=>{

        const { getByTestId, getByAltText } = render(<PageNotFound />, { wrapper: BrowserRouter });
        const pnfText = getByTestId("pnfText");
        const pnfImage = getByAltText("Page Not Found");
        
        expect(pnfText.innerHTML).toBe("Oops - Page Not Found!");
        expect(pnfImage).toBeTruthy();
    // });
        // render(<PageNotFound/>);
        // const page = screen.getByTestId('pnfText');

        // expect(page.innerHTML).toBe('Oops - Page Not Found!');
    });
})