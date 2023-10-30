import {getByPlaceholderText, render} from '@testing-library/react';
import Counter from '../Counter';

test('render the textarea',()=>{
    // const {getByTestId}   = render(<Counter/>)
    const {getByPlaceholderText}   = render(<Counter/>)
    // const textArea = getByTestId("textArea");
    const textArea = getByPlaceholderText('Type or paste your text');

    expect(textArea).toBeTruthy();
   
})