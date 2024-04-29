import { render, screen } from "@testing-library/react";
import Booking from './components/Booking'
// import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<Booking availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]} />);
    const headingElement = screen.getByText("Table Booking");
    expect(headingElement).toBeInTheDocument();
})