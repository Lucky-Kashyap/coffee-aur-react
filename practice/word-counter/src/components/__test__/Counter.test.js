import {getByPlaceholderText, render} from '@testing-library/react';
import Counter from '../Counter';


describe('Counter Component Test',()=>{
    test('render the textarea',()=>{
        // const {getByTestId}   = render(<Counter/>)
        const {getByPlaceholderText}   = render(<Counter/>)
        // const textArea = getByTestId("textArea");
        const textArea = getByPlaceholderText('Type or paste your text');
    
        expect(textArea).toBeTruthy();
       
    });
    
    test('render the result',()=>{
        const {getByTestId } = render(<Counter/>);
    
        const charLength = getByTestId('charLength');
    
        // expect(charLength.innerHTML).toBeTruthy();
        expect(charLength.innerHTML).toBe("Character: 0");
    });
})
// test('render the textarea',()=>{
//     // const {getByTestId}   = render(<Counter/>)
//     const {getByPlaceholderText}   = render(<Counter/>)
//     // const textArea = getByTestId("textArea");
//     const textArea = getByPlaceholderText('Type or paste your text');

//     expect(textArea).toBeTruthy();
   
// });

// test('render the result',()=>{
//     const {getByTestId } = render(<Counter/>);

//     const charLength = getByTestId('charLength');

//     // expect(charLength.innerHTML).toBeTruthy();
//     expect(charLength.innerHTML).toBe("Character: 0");
// });