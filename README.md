# BUTIK DI MOSCA - Hotel Website

This project represents the official website for the "Butik di Mosca" hotel. It features a modern, responsive design with interactive functionality to provide users with a smooth and convenient experience for exploring the hotel’s amenities, booking rooms, and accessing important contact information.

## Features

### Navigation

- **Navbar:** Includes links to different sections of the site such as "NOMERA" (Rooms), "RESTAURANTS", "SPA & FITNESS", and "EVENTS."
- **Scrollable Notifications Bar:** A dynamic bar showcasing announcements and promotions like discounts, new rooms, and upcoming events.

### Interactive Booking System

- **Date Input Fields:** Users can select arrival and departure dates.
- **People Selector:** A dropdown to specify the number of guests (1-4 people).
- **Validation:** Ensures proper input of dates and provides error messages when inputs are invalid (e.g., arrival date is after departure date).

### Contact Information

- **Dropdown Menus:** Interactive dropdowns to view the hotel’s address, email, and phone number.
- **Quick Links:** Links to chat, profile settings, and account registration.

### Image Gallery

- **Featured Rooms and Packages:** Images of rooms and packages with prices, each linked to a dedicated page for further details.

### Footer

- Contact details, including address and phone number, are prominently displayed.
- Copyright information and a statement indicating it is the official website.

## Technologies Used

### Frontend

- **HTML5:** For structuring the website content.
- **CSS:** Styling using an external stylesheet (`front_.css`).
- **JavaScript:** Interactive features such as dropdown menus, date validation, and the scrollable notifications bar.
- **React:** Integrated using the React development UMD builds.

### Backend

- **Fetch API:** Example included for fetching booking data from a backend server (e.g., `http://localhost:8080/bookings`).

## Folder Structure

```
project-root/
|-- css/
|   |-- front_.css      # Stylesheet for the website
|-- img/
|   |-- chatlink.jpg    # Chat icon
|   |-- settingslink.jpg # Settings icon
|   |-- point.jpg       # Address icon
|   |-- mail.jpg        # Mail icon
|   |-- phone.jpg       # Phone icon
|   |-- account2.jpg    # Account icon
|   |-- first_photo.jpg # Featured room image 1
|   |-- second_photo.jpg # Featured room image 2
|   |-- third_photo.jpg # Featured room image 3
|   |-- fourth_photo.jpg # Featured room image 4
|-- log.js              # Additional JavaScript logic (if any)
|-- chat.html           # Chat page
|-- profile.html        # Profile settings page
|-- registration.html   # Registration page
|-- firstlink.html      # Details for the first room/package
|-- secondlink.html     # Details for the second room/package
|-- thirdlink.html      # Details for the third room/package
|-- fourth.html         # Details for the fourth room/package
```

## How to Run the Project

1. Clone this repository.
2. Ensure you have a working HTTP server (e.g., `http-server` or use your preferred development server).
3. Place the project files in the server’s root directory.
4. Open `index.html` in a browser to view the website.

## Notes

- The booking functionality is a placeholder and requires backend implementation to store and retrieve booking data.
- Ensure proper CORS settings on the backend server to allow communication with the frontend.

## Future Improvements

- Add backend integration for booking confirmation and user authentication.
- Optimize for faster loading by minifying CSS and JavaScript files.
- Implement multi-language support.
- Improve accessibility features (e.g., ARIA roles, keyboard navigation).

## Contact

For questions or feedback, please contact us at:

- Email: butik@mail.com
- Phone: +375 44 588 99 44
- Address: Nezavisimosti, 10, Minsk, Belarus

---

© 2023. Hotel Butik di Mosca. All rights reserved.
