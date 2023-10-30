import {render,screen} from '@testing-library/react';
import Header from "../Header";

describe('TEst HEader Component',()=>{
    test('render the heading text',()=>{
        render(<Header heading='Word Counter'/>)
        const heading = screen.getByTestId('heading');

        expect(heading.innerHTML).toBe("Word Counter");
    });

})