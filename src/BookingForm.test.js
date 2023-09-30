import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { BrowserRouter } from "react-router-dom";


test('Renders the BookingForm heading', () => {
    //I render the BookingForm inside a BrowserRouter component otherwise the useNavigate hook causes an error
    render(<BrowserRouter>
    <BookingForm />
    </BrowserRouter>);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})