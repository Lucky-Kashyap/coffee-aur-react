import {fireEvent, getByPlaceholderText, render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Counter from '../Counter';



describe('Counter Component Test',()=>{
    // it('render the textarea',()=>{
    //     // const {getByTestId}   = render(<Counter/>)
    //     const {getByPlaceholderText}   = render(<Counter/>)
    //     // const textArea = getByTestId("textArea");
    //     const textArea = getByPlaceholderText('Type or paste your text');
    
    //     expect(textArea).toBeTruthy();
       
    // });
    
    // it('render the result',()=>{
    //     const {getByTestId } = render(<Counter/>);
    
    //     const charLength = getByTestId('charLength');
    
    //     // expect(charLength.innerHTML).toBeTruthy();
    //     expect(charLength.innerHTML).toBe("Character: 0");
    // });

    // it("render the word result", () => {
    //     render(<Counter />);
    //     const wordLength = screen.getByText("Word: 0");
    //     expect(wordLength).toBeInTheDocument();
    // });


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

    test("render the word result", () => {
        render(<Counter />);
        const wordLength = screen.getByText("Word: 0");
        expect(wordLength).toBeInTheDocument();
    });

    test('change textarea and update result',()=>{
        render(<Counter/>);

        const textArea = screen.getByTestId('textArea');
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");


        userEvent.type(textArea,"Lucky");
        expect(charLength.innerHTML).toBe("Character: 5");
        expect(wordLength.innerHTML).toBe("Word: 1");
    });

    test("clear textarea and update result", () => {
        render(<Counter />);
        const textArea = screen.getByTestId("textArea");
        const clearBtn = screen.getAllByTestId("clearBtn");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");

        userEvent.type(textArea, "Lucky");
        expect(charLength.innerHTML).toBe("Character: 5");
        expect(wordLength.innerHTML).toBe("Word: 1");

        fireEvent.click(clearBtn[0]);

        expect(charLength.innerHTML).toBe("Character: 0");
        expect(wordLength.innerHTML).toBe("Word: 0");
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